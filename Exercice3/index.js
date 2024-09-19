/**
 * Calcule la moyenne des nombres dans un tableau
 * @param {number[]} numbers Un tableau de nombres
 * @returns {number|string} La moyenne des nombres ou un message d'erreur si le tableau est vide
 */
function calculateAverage(numbers = []) {
  // Vérifie si le tableau est vide 
  if (numbers.length === 0) {
    return 'No numbers to calculate average';
  }

  // Calcule la somme de tous les éléments du tableau
  const sum = numbers.reduce((accumulatorSum, currentValue) => accumulatorSum + currentValue, 0);

  // Retourne la moyenne en divisant la somme par la longueur du tableau
  return sum / numbers.length;
}


// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
