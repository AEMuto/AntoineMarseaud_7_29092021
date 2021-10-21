/**
 * Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * `wait` milliseconds.
 * @param func
 * @param wait
 * @returns {(function(...[*]): void)|*}
 */
export function debounce(func, wait = 400) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Permet de garder uniquement les duplicatas présent
 * dans TOUS les sub-array.
 * Adapté pour fonctionner sur l'array tagState.
 * @param array
 * @returns {*[]}
 */
export function keepDuplicate(array) {
  const results = [];
  const minCount = array.length;
  const counts = array.reduce((acc, {recipesIds}) => {
    recipesIds.forEach(id => {
      !acc[id] ? acc[id] = 1 : acc[id]++;
    })
    return acc;
  }, {});
  for (let key in counts) {
    if (counts[key] === minCount) {
      results.push(+key);
    }
  }
  return results;
}

export function removeDuplicate(arr) {
  return [...new Set(arr)];
}

export const compare = (a, b) => a > b ? 1 : a < b ? -1 : 0;