// Import the Player domain model and PlayerStorage infrastructure class
import Player from '../domain/Player';
import PlayerStorage from '../infrastructure/PlayerStorage';

// Retrieve the player's name from storage and create a new Player instance
function getPlayer() {
  const playerName = PlayerStorage.loadPlayer();
  return new Player(playerName);
}

// Save the player's name in the storage
function setPlayer(player) {
  PlayerStorage.savePlayer(player.name);
}

// Export the PlayerService object with getPlayer and setPlayer functions
const PlayerService = { getPlayer, setPlayer };

export default PlayerService;
