// Version simplifiée en utilisant la méthode toString(2)
// /**
//  * Convertit un nombre décimal en binaire et affiche le résultat
//  * @returns {void} Ne retourne rien, affiche le résultat dans le DOM
//  */
// function convertToBinary() {
//   // Récupère la valeur entrée par l'utilisateur
//   const decimalInput = document.getElementById('decimalInput').value;
  
//   // Vérifie si la valeur entrée est un nombre valide
//   if (isNaN(decimalInput) || decimalInput.trim() === '') {
//       document.getElementById('binaryResult').textContent = '';  // Vide le résultat en cas d'entrée non valide
//       return;
//   }

//   // Convertit le nombre décimal (base 10) en entier et ensuite en binaire
//   const decimalNumber = parseInt(decimalInput, 10);
//   const binaryResult = decimalNumber.toString(2);  // Convertit en binaire (base 2) : la méthode toString(2) gére automatiquement la conversion

//   // Affiche le résultat de la conversion
//   document.getElementById('binaryResult').textContent = binaryResult;
// }



// Version en respectant les instructions
/**
 * Convertit un nombre décimal en binaire de manière manuelle (sans utiliser toString(2))
 * @param {number} decimalNumber Le nombre décimal à convertir
 * @returns {string} La représentation binaire du nombre
 */
function convertDecimalToBinary(decimalNumber) {
  let binaryResult = '';  // Chaîne qui va stocker les restes (le résultat binaire)
  let quotient = decimalNumber;  // Initialise le quotient avec le nombre décimal

  // Boucle jusqu'à ce que le quotient soit 0
  while (quotient > 0) {
      const remainder = quotient % 2;  // Récupère le reste de la division par 2 (0 ou 1)
      binaryResult = remainder + binaryResult;  // Ajoute le reste au début du résultat
      quotient = Math.floor(quotient / 2);  // Divise le quotient par 2 et ignore la partie décimale
  }

  // Si le nombre décimal est 0, retourne '0'
  return binaryResult === '' ? '0' : binaryResult;
}

/**
 * Récupère un nombre décimal saisi par l'utilisateur, le convertit en binaire et affiche le résultat
 * @returns {void} Ne retourne rien, le résultat est affiché dans le DOM
 */
function convertToBinary() {
  // Récupère la valeur entrée par l'utilisateur
  const decimalInput = document.getElementById('decimalInput').value;
  
  // Vérifie si la valeur entrée est un nombre valide
  if (isNaN(decimalInput) || decimalInput.trim() === '') {
      document.getElementById('binaryResult').textContent = '';  // Vide le résultat en cas d'entrée non valide
      return;
  }

  // Convertit le nombre décimal en entier
  const decimalNumber = parseInt(decimalInput, 10);
  
  // Appelle la fonction de conversion 
  const binaryResult = convertDecimalToBinary(decimalNumber);

  // Affiche le résultat de la conversion
  document.getElementById('binaryResult').textContent = binaryResult;
}