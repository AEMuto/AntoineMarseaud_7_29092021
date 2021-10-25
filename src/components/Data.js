import { removeDuplicate } from '../utils/helpers.js';
import removeDiacritics from '../utils/diacritics.js';
import { fastQuicksort } from '../utils/sorting.js';
import Recipe from './Recipe.js';

export default function Data(recipes, gallery = false, currentTags) {
  const result = { state : [], tags: { ingredients: {}, ustensils: {}, appliances: {} }, dictionnary: {}};
  !currentTags ? currentTags = { ingredientsTags: [], ustensilsTags: [], appliancesTags: [] } : '';
  const { ingredientsTags, ustensilsTags, appliancesTags } = currentTags;

  recipes.forEach(recipe => {

    // Destructure recipe
    const { id, name, ingredients, appliance, ustensils, description } = recipe;

    // Initialize State & Dictionnary
    if (gallery) {

      // State & Dom recipe template cards insertion
      const instance = new Recipe(recipe);
      result.state.push(instance);
      gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate());

      // Add entries to dictionnary
      const ingredientsArray = ingredients.map(item => removeDiacritics(item.ingredient.toLowerCase()));
      const normalizedName = removeDiacritics(name.toLowerCase());
      const template = `${name} ${ingredientsArray.join(' ')} ${description}`;
      const string = removeDiacritics(template).toLowerCase();
      let terms = string.match(/[\p{L}]{3,}/ug);
      terms.push(ingredientsArray, normalizedName);
      terms = removeDuplicate(terms.flat());
      terms.forEach(term => {
        !result.dictionnary[term] ? result.dictionnary[term] = [id] : result.dictionnary[term].push(id);
      });
    }

    // Create Tags Data
    ingredients.forEach(({ ingredient }) => {
      if (ingredientsTags.indexOf(ingredient.toLowerCase()) < 0 || !ingredientsTags.length) {
        !result.tags.ingredients[ingredient.toLowerCase()]
          ? result.tags.ingredients[ingredient.toLowerCase()] = [id]
          : result.tags.ingredients[ingredient.toLowerCase()].push(id);
      }
    });

    ustensils.forEach(ustensil  => {
      if (ustensilsTags.indexOf(ustensil) < 0 || !ustensilsTags.length) {
        !result.tags.ustensils[ustensil]
          ? result.tags.ustensils[ustensil] = [id]
          : result.tags.ustensils[ustensil].push(id);
      }
    });

    if (appliancesTags.indexOf(appliance) < 0 || !appliancesTags.length) {
      !result.tags.appliances[appliance]
        ? result.tags.appliances[appliance] = [id]
        : result.tags.appliances[appliance].push(id);
    }

  });

  if (gallery) {
    this.state = result.state;
    this.dictionnary = fastQuicksort(Object.entries(result.dictionnary));
  }

  this.ingredients = Object.entries(result.tags.ingredients);
  this.appliances = Object.entries(result.tags.appliances);
  this.ustensils = Object.entries(result.tags.ustensils);
}