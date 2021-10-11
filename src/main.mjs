import { recipes } from '../public/data/recipes.js';
import Recipe from './components/Recipe.js';
import Tag from './components/Tag.js';
import Data from './components/Data.js';

// Instancier les Recettes ************************************************************************

const gallery = document.querySelector('.gallery');

const recipesState = [];
let tagsState = [];

recipes.forEach(recipe => recipesState.push(new Recipe(recipe)));

recipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));

// Création des "glossaires" **********************************************************************

let tempRecipesState = recipesState;
let data = new Data(tempRecipesState);
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

function updateRecipesState() {

  // Update de l'état uniquement si des instances existent dans notre état
  if(!tempRecipesState.length) {
    // La recherche n'a retourné aucun résultat
    gallery.innerHTML = `
    <div class="gallery__empty">
      <p>Aucune recette ne correspond à votre critère… <br>
      Vous pouvez chercher « tarte aux pommes », « poisson », etc...</p>
    </div>`;
    // Assigner à data une nouvelle valeur (vide, mais permet d'éviter les erreurs)
    data = new Data(tempRecipesState);
    return;
  }
  // TODO: Vérifier tagState, si length !== 0 alors mettre à jour tempRecipeState
  if (tagsState.length) {
    // Inspecter uniquement les ids du dernier tag inséré
    const ids = tagsState[tagsState.length - 1].recipesIds;
    tempRecipesState = tempRecipesState.filter(recipeInstance => {
      return ids.indexOf(recipeInstance.id) > -1;
    });
  }
  if (!tagsState.length && !recipeSearchbar.value) { //TODO: Enlever ce duplicata de reset state, trouver une solution plus élégante
    tempRecipesState = recipesState;
  }
  // Suppression de l'HTML dans la gallerie
  gallery.innerHTML = '';
  // Insertion des recettes restantes dans la gallerie
  tempRecipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));
  // Recalculer nos données à partir des recettes restantes
  /* TODO: Passer tagState en argument pour enlever les résultats correspondant à un tag
  *   exemple: lait de coco existe en tag, le supprimer du data ?*/
  data = new Data(tempRecipesState);
}

document.addEventListener('stateChanged', updateRecipesState);

// Gestion Barre de recherche principale **********************************************************
const recipeSearchbar = document.querySelector('#recipes');

function filterRecipesData(query) {
  const result = data.recipes.filter(recipe => recipe.text.includes(query));
  const ids = result.map(recipe => recipe.id);
  tempRecipesState = recipesState.filter(recipeInstance => {
    return ids.includes(recipeInstance.id);
  });
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function handleRecipeSearch(e) {
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    filterRecipesData(query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    resetState();
    filterRecipesData(query);
  }
  if (!query.length || query.length < 3) {
    resetState();
  }
}

recipeSearchbar.addEventListener('keyup', handleRecipeSearch);

// Gestion des tags *******************************************************************************
const tagsContainer = document.querySelector('.search__selected-tags');

function removeTag(value, domTag) {
  // Lorsque je click sur le tag
  // restaurer l'état qu'il contient
  const currentTag = tagsState.filter(tag => {
    return tag.value === value;
  })[0];
  tempRecipesState = currentTag.previousState;
  // Le supprimer de tagstate
  tagsState = tagsState.filter(tag => {
    return tag.value !== value;
  });
  // Le supprimer du Dom
  domTag.parentElement.removeChild(domTag);
  // custom event pour màj l'état
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function insertTag(value, category, recipesIds) {
  tagsState.push(new Tag(value, category, recipesIds));
  tagsContainer.insertAdjacentHTML('beforeend', tagsState[tagsState.length - 1].getTagTemplate());
  tagsState[tagsState.length - 1].previousState = tempRecipesState;
  console.log(tagsState);
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function handleTagClick(e) {
  if (e.target.dataset.behaviour === 'removeTag') {
    console.log('removing Tag')
    const value = e.target.dataset.value;
    const domTag = e.target.parentElement;
    removeTag(value, domTag);
  }
}

tagsContainer.addEventListener('click', handleTagClick);

// Gestion des dropdowns **************************************************************************
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));
let currentDropdown;

function outsideClick(e) {
  const selector = currentDropdown.classList[1];
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
  !e.currentTarget.querySelector('input').value ? showDropdownsData(dataTarget, resultsContainer) : '';
  // Si un menu déroulant a déjà été sélectionné
  if (currentDropdown) {
    currentDropdown.classList.remove('open');
    currentDropdown = e.currentTarget;
    currentDropdown.classList.add('open');
    currentDropdown.querySelector('input').focus();
    setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
  }
  // Si click sur un des résultat (futur tag, juste des <li> dans notre resultsContainer pour l'instant)
  if (e.target.dataset.category) { // Instanciation d'un nouveau tag et MàJ de l'état
    const category = e.target.dataset.category;
    const recipesIds = e.target.dataset.recipesids
      .split(' ')
      .map(id => parseInt(id, 10));
    const value = e.target.innerText;
    e.target.style.display = 'none';
    insertTag(value, category, recipesIds);
    currentDropdown.querySelector('input').value = '';
    currentDropdown.classList.remove('open');
    return;
  }
  // Pas de menu déroulant sélectionné auparavant
  currentDropdown = e.currentTarget;
  currentDropdown.classList.add('open');
  currentDropdown.querySelector('input').focus();
  setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
}

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', handleDropdownClick)
})

// Recherche Dropdowns **************************************************************************
const dropdownsContainer = document.querySelector('.search__dropdowns');
const dropdownsSearchbar = document.querySelectorAll('.dropdown__searchbar input');
let tempResultItems;

function showDropdownsData(category, resultsContainer, query) {
  // Une recherche a déjà été effectué dans la barre de recherche principale
  if (!query && tempRecipesState.length !== recipesState.length && tempRecipesState.length) {
    const items = data[category].map(entry => {
      return `
        <li data-category="${category}"
            data-recipesids="${entry[1].join(' ')}">${entry[0]}</li>`
    });
    // items.forEach(item => resultsContainer.insertAdjacentHTML('beforeend', item));
    resultsContainer.innerHTML = items.join('\r\n');
    tempResultItems = items.join('\r\n');
  } else { // Aucune recherche dans la barre principale
    const results = data[category]
      .filter(item => item[0].includes(query))
      .map(entry => {
        return `
          <li data-category="${category}"
              data-recipesids="${entry[1].join(' ')}">${entry[0]}</li>`
      }).join('\r\n');
    //console.log('Result is ', results);
    resultsContainer.innerHTML = results;
  }
}

function handleDropdownQuery(e) {
  const category = e.target.id;
  const resultsContainer = dropdownsContainer.querySelector(`[data-for="${category}"]`)
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    showDropdownsData(category, resultsContainer, query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    showDropdownsData(category, resultsContainer, query);
  }
  if (!query.length || query.length < 3) {
    tempResultItems ? resultsContainer.innerHTML = tempResultItems : resultsContainer.innerHTML = '';
  }
}

dropdownsSearchbar.forEach(dropdownInput => {
  dropdownInput.addEventListener('keyup', handleDropdownQuery);
});
