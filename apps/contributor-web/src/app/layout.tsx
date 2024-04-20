import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import BackgroudSvg from "@repo/ui/primitives/BackgroundSvg"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SolidPull',
  description: 'GitHub Gold Rush - Pull, Earn, Repeat!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-gradient-to-b from-black via-[#111] to-black`}
      >
        <main className="w-full relative overflow-hidden min-h-screen">
          <BackgroudSvg/>
          <div className='max-w-7xl mx-auto w-full relative z-[1]'>
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}