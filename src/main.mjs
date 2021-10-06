import { recipes } from '../public/data/recipes.js';
import Recipe from './components/Recipe.js';

// Instancier les Recettes ************************************************************************

const gallery = document.querySelector('.gallery');

const recipesState = [];

recipes.forEach(recipe => recipesState.push(new Recipe(recipe)));

recipesState.forEach(instance => gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate()));

// Création des "glossaires" **********************************************************************

let tempRecipesState = recipesState;
let data = {
  recipes: makeArrayFromKeyInRecipes('recipes'),
  ingredients: makeArrayFromKeyInRecipes('ingredients'),
  appliances: makeArrayFromKeyInRecipes('appliances'),
  ustensils: makeArrayFromKeyInRecipes('ustensils'),
}

//console.log(data.recipes);
//console.log(data.ingredients);
//console.log(data.appliances;
//console.log(data.ustensils);

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
      const ingredientsResult = tempRecipesState
        .map(recipe => recipe.ingredients.map(ingredient => {
          return { name: ingredient.ingredient.toLowerCase(), id: recipe.id};
        }))
        .flat()
        .reduce((acc, ingredient) => {
          const existingIngredient = acc[ingredient.name];
          if (existingIngredient) {
            existingIngredient.push(ingredient.id);
          } else {
            acc[ingredient.name] = [ingredient.id];
          }
          return acc;
        }, {});
      return Object.entries(ingredientsResult);
    case 'appliances':
      const appliancesResult = tempRecipesState
        .map(recipe => {
          return { name: recipe.appliance, id: recipe.id }
        })
        .flat()
        .reduce((acc, appliance) => {
          const existingAppliance = acc[appliance.name];
          if (existingAppliance) {
            existingAppliance.push(appliance.id);
          } else {
            acc[appliance.name] = [appliance.id];
          }
          return acc;
        }, {});
      return Object.entries(appliancesResult);
    case 'ustensils':
      const ustensilsResult = tempRecipesState
        .map(recipe => recipe.ustensils.map(ustensil => {
          return { name: ustensil, id: recipe.id }
        }))
        .flat()
        .reduce((acc, ustensil) => {
          const existingUstensil = acc[ustensil.name];
          if (existingUstensil) {
            existingUstensil.push(ustensil.id);
          } else {
            acc[ustensil.name] = [ustensil.id];
          }
          return acc;
        }, {});
      return Object.entries(ustensilsResult);
    default:
      throw new Error('Cannot retrieve data from recipe, bad key');
  }
}

// Mise à jour de l'état **************************************************************************

function resetState() {
  console.log('Reset State')
  if (tempRecipesState.length === recipesState.length) { return }
  tempRecipesState = recipesState;
  document.dispatchEvent(new CustomEvent('stateChanged'));
}

function updateRecipesState() {
  console.log('Update State')
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
  data.recipes = makeArrayFromKeyInRecipes('recipes');
  data.ingredients = makeArrayFromKeyInRecipes('ingredients');
  data.appliances = makeArrayFromKeyInRecipes('appliances');
  data.ustensils = makeArrayFromKeyInRecipes('ustensils');
  console.log(data.recipes);
}

document.addEventListener('stateChanged', updateRecipesState);

// Barre de recherche *****************************************************************************
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

function insertTag(value, classType, recipesIds) {
  const template = `
  <span class="tag ${classType}" data-recipesids="${recipesIds}">
    <span class="tag__text">${value}</span>
    <img class="tag__icon" src="public/icons/delete-white.svg" alt="">
  </span>`;
  //Insertion du tag dans le container
  tagsContainer.insertAdjacentHTML('beforeend', template);

  //TODO: Filtrer les résultats après insertion d'un tag
}

function handleDropdownClick(e) {
  const resultsContainer = e.currentTarget.querySelector('ul');
  const dataTarget = resultsContainer.dataset.for;
  // Si aucune valeur dans l'input appel de la fonction permettant d'afficher les tags dispo, sinon ne rien faire
  !e.currentTarget.querySelector('input').value ? showDropdownsData(dataTarget, resultsContainer) : '';
  // Un menu déroulant a déjà été sélectionné
  if (currentDropdown) {
    currentDropdown.classList.remove('open');
    currentDropdown = e.currentTarget;
    currentDropdown.classList.add('open');
    currentDropdown.querySelector('input').focus();
    setTimeout(() => { document.addEventListener('click', outsideClick); }, 10)
  }
  // Click sur un des résultat
  if (e.target.dataset.tagclass) {
    const classType = e.target.dataset.tagclass;
    const recipesIds = e.target.dataset.recipesids;
    const value = e.target.innerText;
    insertTag(value, classType, recipesIds);
    e.target.style.display = 'none';
    console.log(e.target.parentElement.querySelectorAll('li'))
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

function showDropdownsData(dataTarget, resultsContainer, query) {
  // Une recherche a déjà été effectué dans la barre de recherche principale
  if (!query && tempRecipesState.length !== recipesState.length) {
    const items = data[dataTarget].map(entry => {
      return `
        <li data-tagclass="tag--${dataTarget}"
            data-recipesids="${entry[1].join(' ')}">${entry[0]}</li>`
    });
    // items.forEach(item => resultsContainer.insertAdjacentHTML('beforeend', item));
    resultsContainer.innerHTML = items.join('\r\n');
    tempResultItems = items.join('\r\n');
  } else { // Aucune recherche dans la barre principale
    //console.log(dataTarget, resultsContainer, query);
    const results = data[dataTarget]
      .filter(item => item[0].includes(query))
      .map(entry => {
        return `
          <li data-tagclass="tag--${dataTarget}"
              data-recipesids="${entry[1].join(' ')}">${entry[0]}</li>`
      }).join('\r\n');
    //console.log('Result is ', results);
    resultsContainer.innerHTML = results;
  }
}

function handleDropdownQuery(e) {
  const dataTarget = e.target.id;
  const resultsContainer = dropdownsContainer.querySelector(`[data-for="${dataTarget}"]`)
  const query = e.target.value.toLowerCase();
  if (query.length >= 3) {
    showDropdownsData(dataTarget, resultsContainer, query);
  }
  if (e.key === 'Backspace' && query.length >= 3) {
    showDropdownsData(dataTarget, resultsContainer, query);
  }
  if (!query.length || query.length < 3) {
    //onsole.log('Query < 3 ou undefined')
    tempResultItems ? resultsContainer.innerHTML = tempResultItems : resultsContainer.innerHTML = '';
  }
}

dropdownsSearchbar.forEach(dropdownInput => {
  dropdownInput.addEventListener('keyup', handleDropdownQuery);
});
