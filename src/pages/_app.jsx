import Image from 'next/image';
// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google';
import { PlayerProvider } from '../contexts/PlayerContext';

import '@/styles/globals.scss';

const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <div className={`${dm.className} subpixel-antialiased`}>
        <Component {...pageProps} />
        <footer className="flex flex-col items-center justify-center flex-1 py-4 mt-4">
          <Image src="/images/modyo.svg" width={100} height={100} alt="Modyo" />
          <p className="text-xs text-slate-300 hover:text-slate-500 ease-in-out duration-300 mt-2">
            Crafted by <span className="font-bold">Fernando Figueroa</span>
          </p>
        </footer>
      </div>
    </PlayerProvider>
  );
}
