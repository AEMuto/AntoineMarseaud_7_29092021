function makeDataRecipes(target) {
  //console.time('Make recipesText Data');
  const result = target.map(recipe => {
    const result = {}
    const ingredients = recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
    result.id = recipe.id;
    result.text = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()].join(' ');
    return result;
  });
  //console.timeEnd('Make recipesText Data');
  return result;
}

function makeDataIngredients(target, comparator = []) {
  console.time('Make ingredients Data');
  const ingredientsResult = target
    .reduce((acc, { ingredients, id }) => {
      ingredients.forEach(ingredient => {
        const key = ingredient.ingredient.toLowerCase();
        if (comparator.indexOf(key) < 0)
          !acc[key] ? acc[key] = [id] : acc[key].push(id);
      })
      return acc;
    }, {});
  const result = Object.entries(ingredientsResult);
  console.timeEnd('Make ingredients Data');
  return result;
}

function makeDataAppliances(target, comparator = []) {
  //console.time('Make appliances Data');
  const appliancesResult = target
    .reduce((acc, { appliance, id }) => {
      if (comparator.indexOf(appliance) < 0)
        !acc[appliance] ? acc[appliance] = [id] : acc[appliance].push(id);
      return acc;
    }, {});
  const result = Object.entries(appliancesResult);
  //console.timeEnd('Make appliances Data');
  return result;
}

function makeDataUstensils(target, comparator = []) {
  console.time('Make ustensils Data');
  const ustensilsResult = target
    .reduce((acc, { ustensils, id }) => {
      ustensils.forEach(ustensil => {
        if (comparator.indexOf(ustensil) < 0)
          !acc[ustensil] ? acc[ustensil] = [id] : acc[ustensil].push(id);
      })
      return acc;
    }, {});
  const result = Object.entries(ustensilsResult);
  console.timeEnd('Make ustensils Data');
  return result;
}

export default function Data(target, comparator) {
  //console.time('Making data');
  this.recipes = makeDataRecipes(target);
  this.ingredients = makeDataIngredients(target, comparator?.ingredients);
  this.appliances = makeDataAppliances(target, comparator?.appliances);
  this.ustensils = makeDataUstensils(target, comparator?.ustensils);
  //console.timeEnd('Making data');
}

Data.prototype.makeTagsData = function() {
  //console.time('Making tags data');
  const tagsData = new Map();
  const tempArray = [...this.ingredients, ...this.appliances, ...this.ustensils];
  tempArray.forEach(entries => tagsData.set(entries[0], entries[1]));
  //console.timeEnd('Making tags data');
  return tagsData;
}