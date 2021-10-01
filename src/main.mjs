import { recipes } from '../public/data/recipes.js';
import Recipe from './components/Recipe.js';

// Instancier les Recettes ************************************************************************

const gallery = document.querySelector('.gallery');

const recipesState = [];

recipes.forEach(recipe => recipesState.push(new Recipe(recipe)));

recipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));

// Mise à jour de l'état **************************************************************************

let tempRecipesState = recipesState;
let recipesData = makeArrayFromKeyInRecipes('recipes');
// console.log(recipesData);
let ingredientsData = makeArrayFromKeyInRecipes('ingredients');
// console.table(ingredients);
let appliancesData = makeArrayFromKeyInRecipes('appliances');
// console.log(appliances);
let ustensilsData = makeArrayFromKeyInRecipes('ustensils');
//console.log(ustensils);

function makeArrayFromKeyInRecipes(key) {
  switch (key) {
    case 'recipes':
      return tempRecipesState
        .map(recipe => {
          let result = {}
          let ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
          result.id = recipe.id;
          result.text = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()].join(' ');
          return result;
        })
    case 'ingredients':
      return tempRecipesState
        .map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase()))
        .flat()
        .filter((elem, pos, array) => {
          return array.indexOf(elem) === pos;
        })
        .sort();
    case 'appliances':
      return tempRecipesState
        .map(recipe => recipe.appliance)
        .flat()
        .filter((elem, pos, array) => {
          return array.indexOf(elem) === pos;
        })
        .sort();
    case 'ustensils':
      return tempRecipesState
        .map(recipe => recipe.ustensils.map(ustensil => ustensil))
        .flat()
        .filter((elem, pos, array) => {
          return array.indexOf(elem) === pos;
        })
        .sort();
    default:
      throw new Error('Cannot retrieve data from recipe, bad key');
  }
}

function resetState() {
  if (tempRecipesState.length === recipesState.length) { return }
  tempRecipesState = recipesState;
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function updateRecipesState() {
  if(!tempRecipesState.length) {
    gallery.innerHTML = `
    <div class="gallery__empty">
      <p>Aucune recette ne correspond à votre critère… <br>
      Vous pouvez chercher « tarte aux pommes », « poisson », etc...</p>
    </div>`;
    return;
  }
  gallery.innerHTML = '';
  tempRecipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));
  recipesData = makeArrayFromKeyInRecipes('recipes');
  ingredientsData = makeArrayFromKeyInRecipes('ingredients');
  appliancesData = makeArrayFromKeyInRecipes('appliances');
  ustensilsData = makeArrayFromKeyInRecipes('ustensils');
}

document.addEventListener('stateChanged', updateRecipesState);

// Barre de recherche *****************************************************************************
const recipeSearchbar = document.querySelector('#recipes');

function filterRecipesData(query) {
  const result = recipesData.filter(recipe => recipe.text.includes(query));
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
  if (e.key === 'Backspace' && (!query.length || query.length < 3)) {
    resetState();
  }
}

recipeSearchbar.addEventListener('keyup', handleRecipeSearch);

// Ouverture-Fermeture des dropdowns **************************************************************
const tagsContainer = document.querySelector('.search__selected-tags');
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

function insertTag(value, classType) {
  const template = `
  <span class="tag ${classType}">
    <span class="tag__text">${value}</span>
    <img class="tag__icon" src="public/icons/delete-white.svg" alt="">
  </span>`;
  tagsContainer.insertAdjacentHTML('beforeend', template);
}

function handleDropdownClick(e) {
  if (currentDropdown) {
    currentDropdown.classList.remove('open');
    currentDropdown = e.currentTarget;
    currentDropdown.classList.add('open');
    currentDropdown.querySelector('input').focus();
    setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
  }
  if (e.target.dataset.tagclass) {
    const classType = e.target.dataset.tagclass;
    const value = e.target.innerText;
    insertTag(value, classType);
  }
  currentDropdown = e.currentTarget;
  currentDropdown.classList.add('open');
  currentDropdown.querySelector('input').focus();
  setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
}

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', handleDropdownClick)
})

// Recherche Ingrédients **************************************************************************
const ingredientsSearchbar = document.querySelector('#ingredients');
const ingredientsSearchbarItems = document.querySelector('.dropdown--ingredients .dropdown__items');

function filterIngredientsData(query) {
  ingredientsSearchbarItems.innerHTML = '';
  const result = ingredientsData.filter(ingredient => ingredient.includes(query));
  console.log(result)
  const items = result.map(entry => `<li data-tagclass="tag--ingredient">${entry}</li>`);
  items.forEach(item => ingredientsSearchbarItems.insertAdjacentHTML('beforeend', item));
}

function handleIngredientSearch(e) {
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    filterIngredientsData(query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    //ingredientsData = makeArrayFromKeyInRecipes('ingredients');
    filterIngredientsData(query);
  }
  if (e.key === 'Backspace' && (!query.length || query.length < 3)) {
    ingredientsSearchbarItems.innerHTML = '';
    //ingredientsData = makeArrayFromKeyInRecipes('ingredients');
  }
}

ingredientsSearchbar.addEventListener('keyup', handleIngredientSearch);

// Recherche Appareil *****************************************************************************
const applianceSearchbar = document.querySelector('#appliance');


// Recherche Ustensils ****************************************************************************
const ustensilsSearchbar = document.querySelector('#ustensils');

