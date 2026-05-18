import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalFAQ from '@/components/GlobalFAQ';


export const metadata: Metadata = {
  title: 'Corporate Data Leak Assessment | Counter Surveillance | TSCM',
  description:
    'Any sensitive corporate data that has been unintentionally disclosed, leaked or spilled to the public by any electronic methods due to improper handling.',
  icons: {
    icon: [{ url: '/images/logo-1.png', type: 'image/png' }],
    shortcut: '/images/logo-1.png',
    apple: '/images/logo-1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <GlobalFAQ />
        <Footer />
      </body>
    </html>
  );
}
