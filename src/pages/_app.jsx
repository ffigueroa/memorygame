import Image from 'next/image';
import { PlayerProvider } from '../contexts/PlayerContext';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
      <footer className="flex flex-col items-center justify-center flex-1 mt-12">
        <Image src="/images/modyo.svg" width={100} height={100} alt="Modyo" />
        <p className="text-xs text-slate-300 hover:text-slate-500 ease-in-out duration-300 mt-4">
          Crafted by <span className="font-bold">Fernando Figueroa</span>
        </p>
      </footer>
    </PlayerProvider>
  );
}
