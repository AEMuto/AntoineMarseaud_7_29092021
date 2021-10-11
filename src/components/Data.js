function makeDataRecipes(target) {
  return target.map(recipe => {
    let result = {}
    let ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    result.id = recipe.id;
    result.text = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()].join(' ');
    return result;
  })
}

function makeDataIngredients(target) {
  const ingredientsResult = target
    .reduce((acc, { ingredients, id }) => {
      ingredients.forEach(ingredient => {
        let key = ingredient.ingredient.toLowerCase();
        !acc[key] ? acc[key] = [id] : acc[key].push(id);
      })
      return acc;
    }, {});
  return Object.entries(ingredientsResult);
}

function makeDataAppliances(target) {
  const appliancesResult = target
    .reduce((acc, { appliance, id }) => {
      !acc[appliance] ? acc[appliance] = [id] : acc[appliance].push(id);
      return acc;
    }, {});
  return Object.entries(appliancesResult);
}

function makeDataUstensils(target) {
  const ustensilsResult = target
    .reduce((acc, { ustensils, id }) => {
      ustensils.forEach(ustensil => {
        !acc[ustensil] ? acc[ustensil] = [id] : acc[ustensil].push(id);
      })
      return acc;
    }, {});
  return Object.entries(ustensilsResult);
}

export default function Data(target) {
  this.recipes = makeDataRecipes(target);
  this.ingredients = makeDataIngredients(target);
  this.appliances = makeDataAppliances(target);
  this.ustensils = makeDataUstensils(target);
}