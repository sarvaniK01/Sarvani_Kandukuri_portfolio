import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarvani Kandukuri',
  description: 'Sarvani Kandukuri Portfolio',
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
