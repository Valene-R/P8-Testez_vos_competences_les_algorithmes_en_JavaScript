// Sélectionne le bouton et le paragraphe
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Ajoute un écouteur d'événements au bouton
button.addEventListener('click', () => {
  // Affiche le message dans le paragraphe lorsque l'utilisateur clique sur le bouton
  messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});