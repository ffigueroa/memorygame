import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePlayer } from '../contexts/PlayerContext';
import PlayerName from '../components/PlayerName/PlayerName';
import PlayerInput from '../components/PlayerInput/PlayerInput';
import Loading from '../components/Loading/Loading';

export default function Home() {
  const { player, setPlayer } = usePlayer();
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();

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
    if (player) {
      setInputValue(player.name || '');
    } else {
      setInputValue('');
    }

    setLoading(false);
  }, [player]);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={`flex text-gray-500 flex-col items-center pt-10 `}>
      <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
        <span className="text-modyo-green font-medium">Memory</span>Game
      </h1>
      <div className="flex h-36 justify-center items-center">
        {player?.name ? (
          <PlayerName player={player} handleChangePlayer={handleChangePlayer} />
        ) : (
          <PlayerInput
            inputValue={inputValue}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
      <button
        className={`h-12 w-60 font-medium text-lg text-white bg-gray-300  rounded-full  transition ease-in-out hover:scale-105 ${
          player?.name ? 'bg-modyo-green' : ''
        }`}
        type="button"
        disabled={!player?.name}
        onClick={() => initGame()}>
        ¡Jugar Ahora!
      </button>
    </main>
  );
}
