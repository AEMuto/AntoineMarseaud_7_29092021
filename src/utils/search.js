/**
 * Recherche dichotomique qui à la première occurrence
 * va prendre son index et faire une recherche linéaire
 * sur une portée de indexOccurrence - RANGE à indexOccurrence + RANGE
 * @param data
 * @param query
 * @param low
 * @param high
 * @param RANGE
 * @returns {*[]|FlatArray<*[], 1>[]}
 */
export default function rangedBinarySearch(data, query, low = 0, high = data.length - 1, RANGE = 5) {
  const results = [];
  while (high >= low) {
    // Définir le milieu de notre tableau trié
    const mid = Math.floor(low + (high - low) / 2);

    // Si la chaîne de caractère à l'index du milieu des caractères de notre chaîne de caractère recherchée
    // créer un range +10 -10, effectuer une recherche linéaire sur le range et
    // insérer dans le tableau 'result' les ids des recettes correspondantes, et le retourner
    if (data[mid][0].includes(query)) {
      const start = mid - RANGE < 0 ? 0 : mid - RANGE;
      const end = mid + RANGE > data.length - 1 ? data.length - 1 : mid + RANGE;
      for (let i = start; i <= end; i++) {
        data[i][0].includes(query) ? results.push(data[i][1]) : '';
      }
      return results.flat();
    }

    if (query < data[mid][0]) {
      // Notre chaîne de caractère recherchée est inférieur, c'est à dire
      // qu'elle se trouve alphabétiquement plus haut dans le dictionnaire (à gauche
      // si on se le représente comme un livre). Donc la nouvelle limite supérieure
      // est l'index du milieu -1 (on se débarrasse de la partie droite).
      high = mid - 1;
    } else {
      // Même logique, mais la chaîne de caractère recherchée est inférieur
      // On se débarrasse de la partie gauche du dictionnaire
      low = mid + 1;
    }
  }
  // Aucun résultats, on retourne result (array vide)
  return results;
}