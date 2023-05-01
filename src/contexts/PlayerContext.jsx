import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import PlayerService from '@/modules/game/application/PlayerService';

// Create a new context called PlayerContext
const PlayerContext = createContext();

// Custom hook usePlayer to access player context
export function usePlayer() {
  return useContext(PlayerContext);
}

// Player context provider that wraps children components
export function PlayerProvider({ children }) {
  // Player state and function to update it, initialized with data from PlayerService
  const [player, setPlayerState] = useState(PlayerService.getPlayer());

  // On mount, set the player state using data from PlayerService
  useEffect(() => {
    setPlayerState(PlayerService.getPlayer());
  }, []);

  // Function to set the player name, update the state and save it to PlayerService
  const setPlayer = useCallback(name => {
    const newPlayer = { name };
    PlayerService.setPlayer(newPlayer);
    setPlayerState(newPlayer);
  }, []);

  // Memoize the value of the context to avoid unnecessary re-renders
  const value = useMemo(() => ({ player, setPlayer }), [player, setPlayer]);

  // Return the context provider with the memoized value
  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
