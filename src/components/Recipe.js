function Recipe({ id, name, servings, ingredients, time, description, appliance, ustensils }) {
  this.id = id;
  this.name = name;
  this.servings = servings;
  this.ingredients = ingredients;
  this.time = time;
  this.description = description;
  this.appliance = appliance;
  this.ustensils = ustensils;
}

Recipe.prototype.getRecipeCardTemplate = function () {
  return `
  <div class="card card--recipe">
    <div class="card__img"></div>
    <div class="card__infos">
      <div class="card__infos__header">
        <h2 class="card__infos__title">${this.name}</h2>
        <p class="card__infos__time">
          <img src="public/icons/clock-black.svg" alt="">
          ${this.time}mn
        </p>
      </div>
      <div class="card__infos__text">
        <ul class="card__infos__ingredients">
          ${this.ingredients.map(ingredient => `
          <li>
            <strong>${ingredient.ingredient}</strong> ${ingredient.quantity ? ': ' + ingredient.quantity : ''}${
    ingredient?.unit?.length ? (ingredient?.unit?.length > 2 ? ' ' + ingredient.unit : ingredient.unit) : ''}
          </li>`).join('')}
        </ul>
        <p class="card__infos__instructions">
          ${this.description}
        </p>
      </div>
    </div>
  </div>`
}

export default Recipe;