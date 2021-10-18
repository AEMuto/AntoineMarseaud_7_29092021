import { removeDuplicate, sort } from '../utils/helpers.js';

function constructData(recipes, comparator = {ingredientsTags:[], ustensilsTags:[], appliancesTags:[]}) {
  return recipes.reduce((acc, { id, name, ingredients, appliance, ustensils, description }) => {
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
    const string = `${name} ${ingredients.map(item => item.ingredient).join(' ')} ${description}`
    const terms = removeDuplicate(string.toLowerCase().match(/[\p{L}]{3,}/ug));
    terms.forEach(term => {
      !acc.glossary[term] ? acc.glossary[term] = [id] : acc.glossary[term].push(id);
    });
    return acc;
  }, { ingredients: {}, ustensils: {}, appliances: {}, glossary: {} });
}

export default function Data(recipes, comparator) {
  const result = constructData(recipes, comparator);
  this.glossary = sort(Object.entries(result.glossary));
  this.ingredients = Object.entries(result.ingredients);
  this.appliances = Object.entries(result.appliances);
  this.ustensils = Object.entries(result.ustensils);
}