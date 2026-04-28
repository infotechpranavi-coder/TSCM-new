import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalFAQ from '@/components/GlobalFAQ';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Corporate Data Leak Assessment | Counter Surveillance | TSCM',
  description: 'Any sensitive corporate data that has been unintentionally disclosed, leaked or spilled to the public by any electronic methods due to improper handling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <GlobalFAQ />
        <Footer />
      </body>
    </html>
  );
}
