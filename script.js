// script.js
// JavaScript code for the game logic
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for the game objects
  document.getElementById('balloon1').addEventListener('click', checkForGift);
  document.getElementById('balloon2').addEventListener('click', checkForGift);
  document.getElementById('cake').addEventListener('click', checkForGift);
  // Add more event listeners for other objects as needed
});

function checkForGift(event) {
  if (event.target.id === 'giftBox') {
    // Display congratulatory message with birthday wishes
    // Add your personalized birthday message here
    alert('Happy Birthday! You found the gift box! Wishing you a day filled with joy and love!');
    // Add code for next level or play again option as needed
  }
}
