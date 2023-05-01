// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google';
import Head from 'next/head';

import React from 'react';
import Footer from './Footer/Footer';

const dm = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Layout({ children }) {
  const meta = {
    title: 'Memory Game',
    description: 'Juega al juego de memoria con tus amigos',
    cardImage: '/og.png',
    url: '',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.title} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>

      <div className={`${dm.className} subpixel-antialiased`}>{children}</div>

      <Footer />
    </>
  );
}
