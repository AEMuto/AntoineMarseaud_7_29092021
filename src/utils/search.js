export default function binarySearch(data, query, low = 0, high = data.length - 1) {
  const result = [];
  const queryLength = query.length;
  while (high >= low) {
    // Définir le milieu de notre tableau trié
    const mid = Math.floor(low + (high - low) / 2);

    // Si la chaîne de caractère à l'index du milieu commence par
    // les mêmes caractères que notre chaîne de caractère recherchée
    // insérer dans le tableau 'result' les ids des recettes correspondantes.
    if (data[mid][0].includes(query)) {
      /* TODO: Changer le comportement lors d'un match
      *        Prendre un range data.slice(mid -10, mid +10) start = mid - 10 < 0 ? 0 : mid - 10, end mid + 10 > data.length - 1 ? data.length - 1 : mid + 10;
      *        Puis boucler à l'intérieur et vérifier avec
      *        un include, et à chaque match pusher vers results
      *        puis !return! */
      result.push(data[mid][1]);
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
  // Notre boucle est terminée, on renvoi les ids des recettes
  return result.flat();
}