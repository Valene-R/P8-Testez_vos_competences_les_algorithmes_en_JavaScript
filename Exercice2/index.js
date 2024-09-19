/**
 * Calcule le résultat de l'opération entre deux nombres en fonction de l'opérateur donné
 * @param {number|string} num1 Le premier nombre (ou une chaîne de caractères représentant un nombre)
 * @param {number|string} num2 Le deuxième nombre (ou une chaîne de caractères représentant un nombre)
 * @param {string} operator '+', '-', '*', '/'
 * @returns {number|string} Le résultat de l'opération ou un message d'erreur en cas de division par zéro ou d'opérateur invalide
 */
function calculate(num1, num2, operator) {
  // Convertit en nombre si c'est une chaîne de caractères
  num1 = Number(num1);
  num2 = Number(num2);

  let result;

  // Utilise switch pour vérifier quel opérateur est passé en paramètre
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      // Si l'opérateur est /, vérifie que num2 n'est pas égal à 0 (pour éviter la division par zéro)
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        // Si num2 est 0, retourne un message d'erreur pour indiquer que la division par zéro n'est pas autorisée
        return 'Division by zero is not allowed';
      }
      break;
    default:
      // Si l'opérateur n'est pas reconnu (autre que +, -, *, /), retourne un message d'erreur
      return 'Invalid operator';
  }

  return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
