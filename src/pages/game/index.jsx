import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { usePlayer } from '../../contexts/PlayerContext';
import GameAPI from '../../modules/game/infrastructure/GameAPI';
import Loading from '../../components/Loading/Loading';
import GameBoard from '../../components/GameBoard/GameBoard';

export default function Game({ imagesData }) {
  const router = useRouter();
  const { player } = usePlayer();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [imagesData]);

  if (loading) {
    return <Loading />;
  }

  if (!player.name) {
    setTimeout(() => {
      router.push('/');
    }, 5000);
    return (
      <p className="text-sm text-slate-800 text-center">
        Para jugar necesitamos saber tu nombre, en 5 segundos serás redireccionado al inicio.
      </p>
    );
  }

  return <GameBoard player={player} imagesData={imagesData} />;
}

export async function getServerSideProps() {
  const imagesData = await GameAPI.fetchImages();

  return {
    props: {
      imagesData,
    },
  };
}
