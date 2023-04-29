const KEY = 'playerName';

function isLocalStorageAvailable() {
  return typeof window !== 'undefined';
}

function loadPlayer() {
  if (!isLocalStorageAvailable()) {
    return '';
  }

  const storedPlayerName = localStorage.getItem(KEY);
  return storedPlayerName;
}

function savePlayer(name) {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(KEY, name);
  }
}

const playerStorage = {
  loadPlayer,
  savePlayer,
};

export default playerStorage;
