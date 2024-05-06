import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { cn } from '@/lib/utils';
import { ModalProvider } from './providers/ModalProvider';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-slate-300 text-slate-800 antialiased light', font.className)}>
        <Header />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
