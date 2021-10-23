import { compare, removeDuplicate } from '../utils/helpers.js';
import removeDiacritics from '../utils/diacritics.js';
import { fastQuicksort } from '../utils/sorting.js';

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
    const ingredientsArray = ingredients.map(item => removeDiacritics(item.ingredient.toLowerCase()));
    const normalizedName = removeDiacritics(name.toLowerCase());
    const template = `${name} ${ingredientsArray.join(' ')} ${description}`;
    const string = removeDiacritics(template).toLowerCase();
    let terms = string.match(/[\p{L}]{3,}/ug);
    terms.push(ingredientsArray, normalizedName);
    terms = removeDuplicate(terms.flat());
    terms.forEach(term => {
      !acc[term] ? acc[term] = [id] : acc[term].push(id);
    });
    return acc;
  }, {});
  this.entries = Object.entries(results).slice(0).sort((a, b) => compare(a[0], b[0]));
  //console.log(this.entries);
  const test = fastQuicksort(Object.entries(results).slice(0));
  //console.log(test);
}