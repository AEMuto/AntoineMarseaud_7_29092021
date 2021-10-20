export default function binarySearch(data, query, low = 0, high = data.length - 1) {
  const result = [];
  const queryLength = query.length;
  while (high >= low) {
    // Définir le milieu de notre tableau trié
    const mid = Math.floor(low + (high - low) / 2);
    console.log(data[mid])
    // Si la chaîne de caractère à l'index du milieu commence par
    // les mêmes caractères que notre chaîne de caractère recherchée
    // insérer dans le tableau 'result' les ids des recettes correspondantes.
    if (data[mid][0].startsWith(query)) { result.push(data[mid][1]) }

    if (query < data[mid][0].substring(0, queryLength)) {
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
  // Notre boucle est terminée, on renvoi les ids des recettes
  return result;
}