function makeDataRecipes(target) {
  return target.map(recipe => {
    let result = {}
    let ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    result.id = recipe.id;
    result.text = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()].join(' ');
    return result;
  })
}

function makeDataIngredients(target, comparator = []) {
  const ingredientsResult = target
    .reduce((acc, { ingredients, id }) => {
      ingredients.forEach(ingredient => {
        let key = ingredient.ingredient.toLowerCase();
        if (comparator.indexOf(key) < 0)
          !acc[key] ? acc[key] = [id] : acc[key].push(id);
      })
      return acc;
    }, {});
  return Object.entries(ingredientsResult);
}

function makeDataAppliances(target, comparator = []) {
  const appliancesResult = target
    .reduce((acc, { appliance, id }) => {
      if (comparator.indexOf(appliance) < 0)
        !acc[appliance] ? acc[appliance] = [id] : acc[appliance].push(id);
      return acc;
    }, {});
  return Object.entries(appliancesResult);
}

function makeDataUstensils(target, comparator = []) {
  const ustensilsResult = target
    .reduce((acc, { ustensils, id }) => {
      ustensils.forEach(ustensil => {
        if (comparator.indexOf(ustensil) < 0)
          !acc[ustensil] ? acc[ustensil] = [id] : acc[ustensil].push(id);
      })
      return acc;
    }, {});
  return Object.entries(ustensilsResult);
}

export default function Data(target, comparator) {
  this.recipes = makeDataRecipes(target);
  this.ingredients = makeDataIngredients(target, comparator?.ingredients);
  this.appliances = makeDataAppliances(target, comparator?.appliances);
  this.ustensils = makeDataUstensils(target, comparator?.ustensils);
}

Data.prototype.makeTagsData = function() {
  const tagsData = new Map();
  const tempArray = [...this.ingredients, ...this.appliances, ...this.ustensils];
  tempArray.forEach(entries => tagsData.set(entries[0], entries[1]));
  return tagsData;
}