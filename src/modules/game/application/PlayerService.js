import Player from '../domain/Player';
import PlayerStorage from '../infrastructure/PlayerStorage';

function getPlayer() {
  const playerName = PlayerStorage.loadPlayer();
  return new Player(playerName);
}

function setPlayer(player) {
  PlayerStorage.savePlayer(player.name);
}

const PlayerService = { getPlayer, setPlayer };

export default PlayerService;
