import type { Metadata, Viewport } from 'next';

import AppShell from '@/components/AppShell';
import PwaServiceWorker from '@/components/PwaServiceWorker';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CHIT - Akses Informasi Hukum',
    template: '%s | CHIT',
  },
  description:
    'CHIT membantu pengguna mengakses informasi dan bantuan hukum secara inklusif.',
  applicationName: 'CHIT',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CHIT',
  },
  icons: {
    icon: '/icons/pwa-192x192.png',
    apple: '/icons/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#161309',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <AppShell>{children}</AppShell>
        <PwaServiceWorker />
      </body>
    </html>
  );
}
