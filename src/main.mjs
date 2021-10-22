import { response } from '../public/data/recipes.js';
import Tag from './components/Tag.js';
import Data from './components/Data.js';
import { debounce, keepDuplicate } from './utils/helpers.js';
import removeDiacritics from './utils/diacritics.js';
import linearSearch from './utils/search.js';

// Importer les données
const recipes = JSON.parse(response);

// Instancier les Recettes et les insérer dans le DOM *********************************************
const gallery = document.querySelector('.gallery');
const noResults = gallery.querySelector('.gallery__empty'); // Texte à montrer si aucun résultats

let data = new Data(recipes, gallery);

const originalData = data;
const recipesState = data.state;
let searchState = recipesState;
let tagsState = [];

const galleryCards = Array.from(gallery.querySelectorAll('.card.card--recipe'));

// Mise à jour de l'état **************************************************************************
function intersectStates(recipesState, searchState, tagsState) {
  if (!searchState.length && !tagsState.length) {
    return []; }
  if (recipesState.length === searchState.length && !tagsState.length) {
    return recipesState; }
  if (recipesState.length === searchState.length && tagsState.length) {
    const ids = keepDuplicate(tagsState);
    return recipesState.filter(recipeInstance => ids.indexOf(recipeInstance.id) > -1);
  }
  if (recipesState.length !== searchState.length && !tagsState.length) {
    return searchState;
  }
  if (recipesState.length !== searchState.length && tagsState.length) {
    const ids = keepDuplicate(tagsState);
    return searchState.filter(recipeInstance => ids.indexOf(recipeInstance.id) > -1);
  }
}

function updateGallery() {
  tempResultItems = ''; // On reset les résultats de recherche du dropdown
  const results = intersectStates(recipesState, searchState, tagsState);
  // Update de l'état uniquement si il y a un résultat
  if(!results.length) {
    // La recherche n'a retourné aucun résultat
    galleryCards.forEach(card => card.classList.add('hidden'));
    noResults.classList.add('reveal');
    return;
  }
  noResults.classList.contains('reveal') ? noResults.classList.remove('reveal') : '';
  // Cacher les recipes du dom en fonction de celles existante dans notre résultat
  const currentIds = results.map(({ id }) => id);
  galleryCards.forEach(card => {
    if (currentIds.indexOf(+card.dataset.id) < 0) {
      card.classList.add('hidden');
    } else {
      card.classList.contains('hidden') ? card.classList.remove('hidden') : '';
    }
  });

  // Recalculer nos données à partir des recettes restantes
  // On passe tagState en argument pour enlever les résultats correspondant à un tag
  // exemple: lait de coco existe en tag, le supprimer du data
  const currentTags = tagsState.reduce((acc, {value, category}) => {
    acc[`${category}Tags`].push(value);
    return acc;
  }, { ingredientsTags: [], ustensilsTags: [], appliancesTags: [] });
  data = new Data(results, false, currentTags);
}

document.addEventListener('stateChanged', updateGallery);

// Gestion Barre de recherche principale **********************************************************
const recipeSearchbar = document.querySelector('#recipes');

function recipesSearch(query, data) {
  const results = linearSearch(query, data);
  searchState = recipesState.filter(recipeInstance => results.includes(recipeInstance.id));
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

const handleSearchbarQuery = debounce(function(e) {
  const query = removeDiacritics(e.target.value.toLowerCase());
  if (query.length >= 3) {
    recipesSearch(query, originalData.glossaries);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    searchState = recipesState; // Reset de searchState
    recipesSearch(query, originalData.glossaries);
  }
  if (!query.length || query.length < 3) {
    searchState = recipesState;
    document.dispatchEvent(new CustomEvent('stateChanged')); // Bypass showGalleryResults
  }
});

recipeSearchbar.addEventListener('keyup', handleSearchbarQuery);

// Gestion des tags *******************************************************************************
const tagsContainer = document.querySelector('.search__selected-tags');

function removeTag(value, domTag) {
  tagsState = tagsState.filter(tag => tag.value !== value);
  domTag.parentElement.removeChild(domTag);
  document.dispatchEvent(new CustomEvent('stateChanged'));
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
  if (e.target.dataset.category) {
    const category = e.target.dataset.category;
    const value = e.target.innerText;
    const recipesIds = originalData[category].find(item => item[0] === value)[1];
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

// Recherche Dropdowns ****************************************************************************
const dropdownsContainer = document.querySelector('.search__dropdowns');
const dropdownsSearchbar = document.querySelectorAll('.dropdown__searchbar input');
let tempResultItems;

function showDropdownsResults(category, resultsContainer, query) {
  // Champs de recherche du dropdown vide
  if (!query && (recipeSearchbar.value || tagsState.length)) {
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
