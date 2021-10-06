function Tag(value, category, recipesIds) {
  this.value = value;
  this.category = category;
  this.recipesIds = recipesIds;
}

Tag.prototype.getTagTemplate = function () {
  return `
  <span class="tag tag--${this.category}">
    <span class="tag__text">${this.value}</span>
    <img class="tag__icon" src="public/icons/delete-white.svg" alt="">
  </span>`
}

export default Tag;