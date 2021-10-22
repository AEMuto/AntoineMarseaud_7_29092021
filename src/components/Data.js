import removeDiacritics from '../utils/diacritics.js';
import Recipe from './Recipe.js';

export default function Data(recipes, gallery = false, currentTags) {
  const result = { state : [], tags: { ingredients: {}, ustensils: {}, appliances: {} }, glossaries: []};
  !currentTags ? currentTags = { ingredientsTags: [], ustensilsTags: [], appliancesTags: [] } : '';
  const { ingredientsTags, ustensilsTags, appliancesTags } = currentTags;

  recipes.forEach(recipe => {

    // Destructure recipe
    const { id, name, ingredients, appliance, ustensils, description } = recipe;

    // Initialize State
    if (gallery) {
      const instance = new Recipe(recipe);
      result.state.push(instance);
      gallery.insertAdjacentHTML('beforeend', instance.getRecipeCardTemplate());
    }

    // Create Tags Data
    ingredients.forEach(({ ingredient }) => {
      if (ingredientsTags.indexOf(ingredient.toLowerCase()) < 0 || !ingredientsTags) {
        !result.tags.ingredients[ingredient.toLowerCase()]
          ? result.tags.ingredients[ingredient.toLowerCase()] = [id]
          : result.tags.ingredients[ingredient.toLowerCase()].push(id);
      }
    });

    ustensils.forEach(ustensil  => {
      if (ustensilsTags.indexOf(ustensil) < 0 || !ustensilsTags) {
        !result.tags.ustensils[ustensil]
          ? result.tags.ustensils[ustensil] = [id]
          : result.tags.ustensils[ustensil].push(id);
      }
    });

    if (appliancesTags.indexOf(appliance) < 0 || !appliancesTags) {
      !result.tags.appliances[appliance]
        ? result.tags.appliances[appliance] = [id]
        : result.tags.appliances[appliance].push(id);
    }

    // Create Glossary for each recipes
    const template = `${name} ${ingredients.map(item => item.ingredient).join(' ')} ${description}`;
    const terms = removeDiacritics(template.toLowerCase());
    result.glossaries.push({id: id, terms: terms});

  });

  this.state = result.state;
  this.glossaries = result.glossaries;
  this.ingredients = Object.entries(result.tags.ingredients);
  this.appliances = Object.entries(result.tags.appliances);
  this.ustensils = Object.entries(result.tags.ustensils);
}