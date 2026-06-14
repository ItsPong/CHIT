import { useEffect } from 'react';

export default function PwaServiceWorker() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== 'production' ||
      !('serviceWorker' in navigator)
    ) {
      return;
    }

    const registerServiceWorker = () => {
      navigator.serviceWorker.register('/sw.js').catch((error: unknown) => {
        console.warn('Service worker gagal didaftarkan:', error);
      });
    };

    window.addEventListener('load', registerServiceWorker);

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);

  return null;
}
