import { recipes } from '../public/data/recipes.js';
import Recipe from './components/Recipe.js';
import Tag from './components/Tag.js';
import Data from './components/Data.js';
import { debounce, keepDuplicate } from './utils/helpers.js';

// Instancier les Recettes et les insérer dans le DOM *********************************************

const gallery = document.querySelector('.gallery');
const noResults = gallery.querySelector('.gallery__empty'); // Texte à montrer si aucun résultats

const recipesState = [];
let tagsState = [];

recipes.forEach(recipe => recipesState.push(new Recipe(recipe)));
recipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));

// Variable post-insertion
const currentRecipes = Array.from(gallery.querySelectorAll('.card.card--recipe'));

// Création des "glossaires" **********************************************************************

let tempRecipesState = recipesState;
let data = new Data(tempRecipesState);
const tagsData = data.makeTagsData();

//console.log(data.recipes);
//console.log(data.ingredients);
//console.log(data.appliances);
//console.log(data.ustensils);

// Mise à jour de l'état **************************************************************************

function resetState() {
  if (tempRecipesState.length === recipesState.length) { return }
  tempRecipesState = recipesState;
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

//TODO: corriger cas de figure où recherche effectué puis tag, puis !tag, besoin de retourner état initial de la recherche
function updateRecipesState() {
  tempResultItems = ''; // On reset les résultats de recherche du dropdown
  // Update de l'état uniquement si des instances existent dans notre état
  if(!tempRecipesState.length) {
    // La recherche n'a retourné aucun résultat
    currentRecipes.forEach(recipe => recipe.classList.add('hidden'));
    noResults.classList.add('reveal');
    // Assigner à data une nouvelle valeur (vide, mais permet d'éviter les erreurs)
    data = new Data(tempRecipesState);
    return;
  }
  noResults.classList.contains('reveal') ? noResults.classList.remove('reveal') : '';
  // Vérifier tagState, si length !== 0 alors mettre à jour tempRecipeState
  if (tagsState.length) {
    console.table(tagsState);
    // Récupération des ids qui vont nous permettre de filtrer les recettes depuis tagState
    const ids = keepDuplicate(tagsState);
    recipeSearchbar.value
      ? tempRecipesState = tempRecipesState.filter(recipeInstance => ids.indexOf(recipeInstance.id) > -1)
      : tempRecipesState = recipesState.filter(recipeInstance => ids.indexOf(recipeInstance.id) > -1);
  }
  if (!tagsState.length && !recipeSearchbar.value) { //TODO: Enlever ce duplicata de reset state, trouver une solution plus élégante
    tempRecipesState = recipesState;
  }
  // Cacher les recipes du dom en fonction de celles existante dans notre état
  const currentIds = tempRecipesState.reduce((acc, { id }) => {
    acc.indexOf(id) < 0 ? acc.push(id) : '';
    return acc;
  }, []);
  currentRecipes.forEach(recipe => {
    if (currentIds.indexOf(parseInt(recipe.dataset.id, 10)) < 0) {
      recipe.classList.add('hidden');
    } else {
      recipe.classList.contains('hidden') ? recipe.classList.remove('hidden') : '';
    }
  });
  // Recalculer nos données à partir des recettes restantes
  // On passe tagState en argument pour enlever les résultats correspondant à un tag
  // exemple: lait de coco existe en tag, le supprimer du data
  const comparator = tagsState.reduce((acc, {value, category}) => {
    !acc[category] ? acc[category] = [value] : acc[category].push(value);
    return acc;
  }, {})
  data = new Data(tempRecipesState, comparator);
}

document.addEventListener('stateChanged', updateRecipesState);

// Gestion Barre de recherche principale **********************************************************
const recipeSearchbar = document.querySelector('#recipes');

function showGalleryResults(query) {
  const result = data.recipes.filter(recipe => recipe.text.includes(query));
  const ids = result.map(recipe => recipe.id);
  tempRecipesState = recipesState.filter(recipeInstance => {
    return ids.includes(recipeInstance.id);
  });
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

const handleSearchbarQuery = debounce(function(e) {
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    showGalleryResults(query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    resetState();
    showGalleryResults(query);
  }
  if (!query.length || query.length < 3) {
    resetState();
  }
});

recipeSearchbar.addEventListener('keyup', handleSearchbarQuery);

// Gestion des tags *******************************************************************************
const tagsContainer = document.querySelector('.search__selected-tags');

function removeTag(value, domTag) {
  tagsState = tagsState.filter(tag => tag.value !== value); // Le supprimer de tagstate
  domTag.parentElement.removeChild(domTag); // Le supprimer du Dom
  document.dispatchEvent(new CustomEvent('stateChanged')); // custom event pour màj l'état
}

function insertTag(value, category, recipesIds) {
  tagsState.push(new Tag(value, category, recipesIds));
  tagsContainer.insertAdjacentHTML('beforeend', tagsState[tagsState.length - 1].getTagTemplate());
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function handleTagClick(e) {
  if (e.target.dataset.behaviour === 'removeTag') {
    const value = e.target.dataset.value;
    const domTag = e.target.closest('.tag');
    removeTag(value, domTag);
  }
}

tagsContainer.addEventListener('click', handleTagClick);

// Gestion des dropdowns **************************************************************************
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
let currentDropdown;

function outsideClick(e) {
  const selector = currentDropdown.classList[1]; // Sélectionne la catégorie du dropdown
  const isOutside = !e.target.closest(`.${selector}`);
  if (isOutside) {
    currentDropdown.classList.remove('open');
    document.removeEventListener('click', outsideClick);
  }
  document.removeEventListener('click', outsideClick);
}

function handleDropdownClick(e) {
  const resultsContainer = e.currentTarget.querySelector('ul');
  const dataTarget = resultsContainer.dataset.for;
  // Si aucune valeur dans l'input appel de la fonction permettant d'afficher les tags dispo, sinon ne rien faire
  !e.currentTarget.querySelector('input').value ? showDropdownsResults(dataTarget, resultsContainer) : '';
  // Si click sur un des résultat (futur tag, juste des <li> dans notre resultsContainer pour l'instant)
  if (e.target.dataset.category) { // Instanciation d'un nouveau tag et MàJ de l'état
    const category = e.target.dataset.category;
    const value = e.target.innerText;
    const recipesIds = tagsData.get(value); // Récupérer les ids depuis la map de tags
    e.target.style.display = 'none';
    insertTag(value, category, recipesIds);
    currentDropdown.querySelector('input').value = '';
    currentDropdown.classList.remove('open');
    return;
  }
  // Si un menu déroulant a déjà été sélectionné
  if (currentDropdown) {
    currentDropdown.classList.remove('open');
    currentDropdown = e.currentTarget;
    currentDropdown.classList.add('open');
    currentDropdown.querySelector('input').focus();
    setTimeout(() => { document.addEventListener('click', outsideClick); }, 10);
    return;
  }
  // Pas de menu déroulant sélectionné auparavant
  currentDropdown = e.currentTarget;
  currentDropdown.classList.add('open');
  currentDropdown.querySelector('input').focus();
  setTimeout(() => { document.addEventListener('click', outsideClick); }, 10);
}

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', handleDropdownClick)
})

// Recherche Dropdowns **************************************************************************
const dropdownsContainer = document.querySelector('.search__dropdowns');
const dropdownsSearchbar = document.querySelectorAll('.dropdown__searchbar input');
let tempResultItems;

function showDropdownsResults(category, resultsContainer, query) {
  // Champs de recherche du dropdown vide
  if (!query && (recipeSearchbar.value || tempRecipesState.length !== recipesState.length)) {
    const items = data[category].map(entry => `<li data-category="${category}">${entry[0]}</li>`).join('');
    tempResultItems = items;
    resultsContainer.innerHTML = items;
  } else { // Une valeur a été rentré dans la barre de recherche du dropdown
    resultsContainer.innerHTML = data[category]
      .filter(item => item[0].includes(query))
      .map(entry => `<li data-category="${category}">${entry[0]}</li>`)
      .join('');
  }
}

const handleDropdownQuery = debounce(function(e) {
  const category = e.target.id;
  const resultsContainer = dropdownsContainer.querySelector(`[data-for="${category}"]`)
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    showDropdownsResults(category, resultsContainer, query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    showDropdownsResults(category, resultsContainer, query);
  }
  if (!query.length || query.length < 3) {
    tempResultItems ? resultsContainer.innerHTML = tempResultItems : resultsContainer.innerHTML = '';
  }
});

dropdownsSearchbar.forEach(dropdownInput => {
  dropdownInput.addEventListener('keyup', handleDropdownQuery);
});
