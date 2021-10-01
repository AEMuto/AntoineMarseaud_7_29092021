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

function filterRecipesData(term) {
  const result = recipesData.filter(recipe => recipe.text.includes(term));
  const ids = result.map(recipe => recipe.id);
  tempRecipesState = recipesState.filter(recipeInstance => {
    return ids.includes(recipeInstance.id);
  });
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function handleRecipeSearch(e) {
  if (e.target.value.length >= 3) {
    filterRecipesData(e.target.value.toLowerCase());
  }
  if (e.key === 'Backspace' && e.target.value.length >= 3) {
    resetState();
    filterRecipesData(e.target.value.toLowerCase());
  }
  if (e.key === 'Backspace' && (!e.target.value.length || e.target.value.length < 3)) {
    resetState();
  }
}

recipeSearchbar.addEventListener('keyup', handleRecipeSearch);

// Ouverture-Fermeture des dropdowns **************************************************************

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
  if (currentDropdown) {
    currentDropdown.classList.remove('open');
    currentDropdown = e.currentTarget;
    currentDropdown.classList.add('open');
    currentDropdown.querySelector('input').focus();
    setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
  }
  currentDropdown = e.currentTarget;
  currentDropdown.classList.add('open');
  currentDropdown.querySelector('input').focus();
  setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
}

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', handleDropdownClick)
})
