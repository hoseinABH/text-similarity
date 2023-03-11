import { Inter } from 'next/font/google';
// Components
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';
import MobileMenu from '@/components/MobileMenu';
import { Toaster } from '@/components/ui/toast';
// Utilities
import { cn } from '@/lib/utils';
// Styles
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />

          <MobileMenu />

          <main>{children}</main>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
