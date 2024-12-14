// Game data and functionality
export const games = [
  {
    title: "Cyber Ninja X",
    image:
      "https://i.ytimg.com/vi/ZM9DpruhfFE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD54Qj9INpoCxaiXD2F614k6M9SbQs",
    description: "RADICAL CYBER ACTION!",
    price: "$59.99",
    features: ["WALL JUMPING", "CYBER POWERS", "BOSS BATTLES"],
  },
  {
    title: "Super Turbo Racing",
    image:
      "https://www.thedrive.com/wp-content/uploads/2024/04/24/2874990_20240423104929_1-copy.jpg?quality=85",
    description: "EXTREME SPEED!",
    price: "$49.99",
    features: ["16 TRACKS", "8 RACERS", "TURBO BOOST"],
  },
  {
    title: "Mega Battle Arena",
    image:
      "https://retrogamerjunction.weebly.com/uploads/8/0/7/6/80765120/published/retro-arena-new-2.png?1646550994",
    description: "ULTIMATE COMBAT!",
    price: "$54.99",
    features: ["2 PLAYER MODE", "12 FIGHTERS", "SPECIAL MOVES"],
  },
  {
    title: "Pixel Quest IV",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGH12cWXytZI-1Asmh3UMJ9EQFdeu-bb3jg&s",
    description: "EPIC ADVENTURE!",
    price: "$59.99",
    features: ["HUGE WORLD", "EPIC STORY", "MAGIC SPELLS"],
  },
];

export function setupGames() {
  const gameList = document.getElementById("gameList");
  if (!gameList) return;

  games.forEach((game) => {
    const gameCard = createGameCard(game);
    gameList.appendChild(gameCard);
  });
}

// Populate games with interactive features
function populateGames() {
  const gameList = document.getElementById("gameList");
  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.title}" class="game-image" />
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <p class="price blink">${game.price}</p>
      <button class="button-3d game-info-btn">MORE INFO!</button>
    `;
    gameList.appendChild(gameCard);

    // Add click event for game cards
    const gameImage = gameCard.querySelector(".game-image");
    gameImage.addEventListener("mouseover", () => {
      gameImage.style.transform = "scale(1.1)";
    });
    gameImage.addEventListener("mouseout", () => {
      gameImage.style.transform = "scale(1)";
    });

    // Add click event for info buttons
    const infoBtn = gameCard.querySelector(".game-info-btn");
    infoBtn.addEventListener("click", () => {
      showGameInfo(game);
    });
  });
}

function setupGameCardEvents(gameCard, game) {
  const gameImage = gameCard.querySelector(".game-image");
  gameImage.addEventListener("mouseover", () => {
    gameImage.style.transform = "scale(1.1)";
  });
  gameImage.addEventListener("mouseout", () => {
    gameImage.style.transform = "scale(1)";
  });

  const infoBtn = gameCard.querySelector(".game-info-btn");
  infoBtn.addEventListener("click", () => {
    showGameInfo(game);
  });
}

// Game info popup
function showGameInfo(game) {
  const popup = document.createElement("div");
  popup.className = "game-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <h2>${game.title}</h2>
      <img src="${game.image}" alt="${game.title}" />
      <p>${game.description}</p>
      <p class="price">${game.price}</p>
      <div class="specs">
        <p>✨ 16-BIT GRAPHICS</p>
        <p>🎮 6 BUTTON SUPPORT</p>
        <p>🔊 STEREO SOUND</p>
      </div>
      <button class="button-3d close-popup">CLOSE</button>
    </div>
  `;
  document.body.appendChild(popup);

  // Add sound effect
  const beep = new Audio("startup.wav");
  beep.volume = 0.2;
  beep.play().catch(() => {});

  popup.querySelector(".close-popup").addEventListener("click", () => {
    popup.remove();
  });
}
