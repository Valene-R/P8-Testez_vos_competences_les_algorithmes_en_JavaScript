let displayValue = '';  // Stocke la chaîne de caractères représentant l'affichage

/**
 * Ajoute des chiffres et des opérateurs à l'affichage
 * @param {string} value Le chiffre ou l'opérateur à ajouter à l'affichage
 */
function appendToDisplay(value) {
  const display = document.getElementById('display');
  displayValue += value; // Concatène la valeur cliquée (chiffre ou opérateur) à la chaîne d'affichage
  display.value = displayValue; // Met à jour l'affichage avec la nouvelle valeur
}

/**
 * Calcule le résultat de l'opération affichée lorsque l'utilisateur clique sur '='
 */
function calculateResult() {
  try {
    const result = calculateExpression(displayValue); // Calcule le résultat à partir de l'expression actuellement affichée
    updateDisplay(result); // Met à jour l'affichage avec le résultat
    displayValue = result.toString(); // Convertit le résultat en chaîne pour de futurs calculs
  } catch (error) {
    updateDisplay('Erreur'); // En cas d'erreur, affiche 'Erreur' à l'utilisateur
  }
}

/**
 * Calcule une expression sous la forme d'une chaîne de caractères
 * @param {string} expression L'expression mathématique à calculer (ex: '5+3')
 * @returns {number|string} Le résultat du calcul ou une erreur
 */
function calculateExpression(expression) {
  const operator = expression.match(/[+\-*/]/)?.[0];  // Trouve et accède directement au premier opérateur
  if (!operator) return 'Erreur';  // Retourne une erreur si aucun opérateur n'est trouvé

  const [num1, num2] = expression.split(operator);  // Sépare l'expression en deux nombres
  const parsedNum1 = parseInt(num1); // Convertit la première partie en entier
  const parsedNum2 = parseInt(num2); // Convertit la seconde partie en entier

  // Effectue le calcul en fonction de l'opérateur trouvé
  switch (operator) {
    case '+': 
      return parsedNum1 + parsedNum2;
    case '-': 
      return parsedNum1 - parsedNum2;
    case '*': 
      return parsedNum1 * parsedNum2;
    case '/': 
      return parsedNum2 === 0 ? 'Division by zero is not allowed' : parsedNum1 / parsedNum2; // Gére la division par zéro
    default: 
      return 'Erreur'; // Si l'opérateur n'est pas reconnu, retourne une erreur
  }
}

/**
 * Met à jour l'affichage de la calculatrice avec une nouvelle valeur
 * @param {string} value La valeur à afficher
 */
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.value = value; // Met à jour l'affichage avec la valeur
}

/**
 * Efface l'affichage de la calculatrice
 */
function clearDisplay() {
  displayValue = '';  // Réinitialise la chaîne d'affichage
  updateDisplay(''); // Réinitialise l'affichage à vide
}


