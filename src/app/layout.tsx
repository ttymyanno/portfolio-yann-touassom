import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Yann Touassom',
  description: 'Étudiant en BTS SIO SLAM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="bg-gray-900 text-white">
      <body className={`${montserrat.className} bg-gradient-to-br from-gray-900 to-black`}>
        {children}
      </body>
    </html>
  );
}
