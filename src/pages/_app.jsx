import { PlayerProvider } from '../contexts/PlayerContext';
import Layout from '../components/Layout';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlayerProvider>
  );
}
