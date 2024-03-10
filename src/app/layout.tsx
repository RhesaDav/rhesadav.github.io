import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppHeader from '@/components/shared/AppHeader';
import UseScrollToTop from '@/hooks/useScrollToTop';
import DefaultLayout from '@/components/layout/DefaultLayout';
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RhesaDav',
  description: 'Rhesa Davinanto Web Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultLayout>
            {children}
        </DefaultLayout>
      </body>
    </html>
  );
}
