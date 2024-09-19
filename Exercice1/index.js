/**
 * Retourne une chaîne de caractères contenant tous les nombres pairs 
 * entre un minimum et un maximum, séparés par une virgule (sans espace)
 * @param {number} min Le nombre minimum
 * @param {number} max Le nombre maximum
 * @returns {string} Une chaîne de caractères avec les nombres pairs
 */
function pairNumbers(min, max) {
  let result = [];

  // Parcourt tous les nombres de min à max
  for (let i = min; i <= max ; i++) {
    // Vérifie si le nombre est pair
    if (i % 2 === 0) {
      result.push(i);
  }
}
return result.join(',');
}

export default pairNumbers
