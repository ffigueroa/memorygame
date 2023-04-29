import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { usePlayer } from '../../contexts/PlayerContext';

import Loading from '../../components/Loading';

export default function Game() {
  const router = useRouter();
  const { player } = usePlayer();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!player.name) {
    setTimeout(() => {
      router.push('/');
    }, 5000);
    return (
      <p className="text-sm text-slate-800 text-center">
        Para jugar necesitamos saber tu nombre, en 5 segundos serás redireccionado.
      </p>
    );
  }

  return (
    <div>
      <div>
        <span>{player.name}</span>
      </div>

      <div>
        <p>Testing</p>
      </div>
    </div>
  );
}
