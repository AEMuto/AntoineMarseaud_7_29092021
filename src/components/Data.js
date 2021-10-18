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
    const recipeText = [name.toLowerCase(), ...ingredients.map(item => item.ingredient.toLowerCase()), description.toLowerCase()].join(' ');
    acc.recipes.push({id: id, text: recipeText});
    return acc;
  }, { ingredients: {}, ustensils: {}, appliances: {}, recipes: [] });
}

export default function Data(recipes, comparator) {
  const result = constructData(recipes, comparator);
  this.recipes = result.recipes;
  this.ingredients = Object.entries(result.ingredients);
  this.appliances = Object.entries(result.appliances);
  this.ustensils = Object.entries(result.ustensils);
}