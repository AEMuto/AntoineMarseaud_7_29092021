import { removeDuplicate, sort } from '../utils/helpers.js';
import { fastQuicksort } from '../utils/sorting.js';
import removeDiacritics from '../utils/diacritics.js';

function constructData(recipes, comparator = {ingredientsTags:[], ustensilsTags:[], appliancesTags:[]}) {
  return recipes.reduce((acc, { id, ingredients, appliance, ustensils}) => {
    ingredients.forEach(({ ingredient }) => {
      if (comparator.ingredientsTags.indexOf(ingredient.toLowerCase()) < 0) {
        !acc.ingredients[ingredient.toLowerCase()]
          ? acc.ingredients[ingredient.toLowerCase()] = [id]
          : acc.ingredients[ingredient.toLowerCase()].push(id);
      }
    });
    ustensils.forEach(ustensil  => {
      if (comparator.ustensilsTags.indexOf(ustensil) < 0) {
        !acc.ustensils[ustensil]
          ? acc.ustensils[ustensil] = [id]
          : acc.ustensils[ustensil].push(id);
      }
    });
    if (comparator.appliancesTags.indexOf(appliance) < 0) {
      !acc.appliances[appliance]
        ? acc.appliances[appliance] = [id]
        : acc.appliances[appliance].push(id);
    }
    return acc;
  }, { ingredients: {}, ustensils: {}, appliances: {} });
}

export function Data(recipes, comparator) {
  const result = constructData(recipes, comparator);
  this.ingredients = Object.entries(result.ingredients);
  this.appliances = Object.entries(result.appliances);
  this.ustensils = Object.entries(result.ustensils);
}

export function Glossary(recipes) {
  const results = recipes.reduce((acc, { id, name, ingredients, description }) => {
    const template = `${name} ${ingredients.map(item => item.ingredient).join(' ')} ${description}`;
    const string = removeDiacritics(template).toLowerCase();
    const terms = removeDuplicate(string.match(/[\p{L}]{3,}/ug));
    // console.log(`Pour la recette #${id}, j'ai : ${terms}`);
    //if (terms.includes('citron')) { console.log(`La recette #${id} contient du citron`) }
    terms.forEach(term => {
      !acc[term] ? acc[term] = [id] : acc[term].push(id);
    });
    return acc;
  }, {});
  this.entries = Object.entries(results).sort();
}