import { setupCursorTrail, setupVisitorCounter } from './animations.js';
import { setupGames } from './games.js';
import { setupForms } from './forms.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
  setupCursorTrail();
  setupVisitorCounter();
  setupGames();
  setupForms();
});