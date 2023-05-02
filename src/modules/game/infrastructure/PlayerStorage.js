const KEY = 'playerName';

// Checks if LocalStorage is available in the environment (e.g., not in a server-side rendering context)
function isLocalStorageAvailable() {
  return typeof window !== 'undefined';
}

// Loads the player's name from LocalStorage
function loadPlayer() {
  if (!isLocalStorageAvailable()) {
    return '';
  }

  const storedPlayerName = localStorage.getItem(KEY);
  return storedPlayerName;
}

// Saves the player's name to LocalStorage
function savePlayer(name) {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(KEY, name);
  }
}

// Exports an object with loadPlayer and savePlayer functions
const playerStorage = {
  loadPlayer,
  savePlayer,
};

export default playerStorage;
