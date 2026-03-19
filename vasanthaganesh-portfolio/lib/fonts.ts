import { Bebas_Neue, DM_Serif_Display, IBM_Plex_Mono, Space_Grotesk, Libre_Baskerville } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

export const dmSerifDisplay = DM_Serif_Display({
  weight: ['400', '400'], // Italic isn't a separate weight, we just use subsets/styles
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-baskerville',
  display: 'swap',
});
