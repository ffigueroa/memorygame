import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import PlayerInput from '../components/PlayerInput/PlayerInput';
import { usePlayer } from '../contexts/PlayerContext';

import Loading from '../components/Loading/Loading';

export default function Home() {
  const router = useRouter();

  const { player, setPlayer } = usePlayer();
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (player) {
      setInputValue(player.name);
    }

    setLoading(false);
  }, [player]);

  const handleChangePlayer = () => {
    setPlayer('');
  };

  const handleChange = event => setInputValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setPlayer(inputValue.trim());
  };

  const initGame = () => {
    if (player?.name) {
      setLoading(true);
      router.push('/game');
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const renderPlayerName = () => {
    if (player.name) {
      return (
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-medium text-slate-600">
            ¿<span className="font-black">{player.name}</span> estás listo para jugar?
          </h2>
          <p
            type="button"
            className="text-xs underline text-slate-300 cursor-pointer"
            onClick={handleChangePlayer}
            aria-hidden="true">
            Cambiar Nombre
          </p>
        </div>
      );
    }

    return (
      <PlayerInput
        inputValue={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return (
    <main className={`flex text-gray-500 flex-col items-center pt-10 `}>
      <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
        <span className="text-modyo-green font-medium">Memory</span>Game
      </h1>
      <div className="flex h-36 justify-center items-center">{renderPlayerName()}</div>
      <button
        className={`h-12 w-60 font-medium text-lg text-white bg-gray-300  rounded-full  transition ease-in-out hover:scale-105 ${
          player?.name ? 'bg-modyo-green' : ''
        }`}
        type="button"
        disabled={!player}
        onClick={() => initGame()}>
        ¡Jugar Ahora!
      </button>
    </main>
  );
}
