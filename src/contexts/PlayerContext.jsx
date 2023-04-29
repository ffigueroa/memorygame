// src/contexts/PlayerContext.js
import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import PlayerService from '@/modules/game/application/PlayerService';

const PlayerContext = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export function PlayerProvider({ children }) {
  const [player, setPlayerState] = useState(PlayerService.getPlayer());

  useEffect(() => {
    setPlayerState(PlayerService.getPlayer());
  }, []);

  const setPlayer = useCallback(name => {
    const newPlayer = { name };
    PlayerService.setPlayer(newPlayer);
    setPlayerState(newPlayer);
  }, []);

  const value = useMemo(() => ({ player, setPlayer }), [player, setPlayer]);

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
