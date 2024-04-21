import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SolidPull',
  description: 'GitHub Gold Rush - Pull, Earn, Repeat!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-gradient-to-r   from-[#c0c1ee] to-[#2f10f8] `}
      >
        <Navbar />
        <main className=" ">{children}</main>
      </body>
    </html>
  );
}
