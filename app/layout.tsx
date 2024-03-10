import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sarvani Kandukuri',
  description: 'Sarvani Kandukuri Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
