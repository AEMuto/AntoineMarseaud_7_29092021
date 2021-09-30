import { recipes } from '../public/data/recipes.js';
import Recipe from './components/Recipe.js';

// Instancier les Recettes ************************************************************************

const gallery = document.querySelector('.gallery');

const recipesState = [];

recipes.forEach(recipe => recipesState.push(new Recipe(recipe)));

recipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));

// Mise à jour de l'état **************************************************************************

let tempRecipesState = recipesState;
let ingredients = makeArrayFromKeyInRecipes('ingredients');
// console.table(ingredients);
let appliances = makeArrayFromKeyInRecipes('appliances');
console.log(appliances);
let ustensils = makeArrayFromKeyInRecipes('ustensils');
//console.log(ustensils);

function makeArrayFromKeyInRecipes(key) {
  switch (key) {
    case 'ingredients':
      return tempRecipesState
        .map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient))
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

function updateRecipesState() {
  gallery.innerHTML = '';
  tempRecipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));
}

document.addEventListener('stateChanged', updateRecipesState);

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
