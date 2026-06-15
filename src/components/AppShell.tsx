'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import Icon from '@/components/Icon';
import InstallPrompt from '@/components/InstallPrompt';
import VoiceNavigationButton from '@/components/VoiceNavigationButton';
import { speak } from '@/services/speech';

const navigation = [
  { href: '/', label: 'Beranda', icon: 'home' as const },
  { href: '/pencarian', label: 'Pencarian', icon: 'search' as const },
  { href: '/koleksi', label: 'Koleksi', icon: 'bookmark' as const },
  { href: '/bantuan', label: 'Bantuan', icon: 'help' as const },
];

const pageAnnouncements: Record<string, string> = {
  '/': 'Memasuki halaman beranda. Selamat datang di CHIT. CHIT membantu pengguna tunanetra mencari, mendengarkan, dan menyimpan materi hukum. Fitur CHIT terdiri dari navigasi halaman menggunakan suara, mencari hukum menggunakan suara, meminta bantuan melalui menu bantuan, dan menyimpan pasal hukum di koleksi.',
  '/pencarian':
    'Memasuki halaman pencarian. Tekan tombol mikrofon untuk mencari hukum dengan suara.',
  '/koleksi':
    'Memasuki halaman koleksi. Materi dan pasal hukum yang disimpan tersedia di halaman ini.',
  '/bantuan':
    'Memasuki halaman bantuan. Pilih lembaga untuk mendengarkan informasi atau melakukan panggilan.',
  '/offline': 'Memasuki halaman offline.',
};

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const announcementTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const announcedByClickRef = useRef<string | null>(null);

  const announceClickedPage = (destination: string) => {
    announcedByClickRef.current = destination;
    speak(pageAnnouncements[destination] ?? 'Memasuki halaman CHIT.');
  };

  useEffect(() => {
    if (announcementTimerRef.current) {
      clearTimeout(announcementTimerRef.current);
    }

    if (announcedByClickRef.current === pathname) {
      announcedByClickRef.current = null;
      return;
    }

    announcementTimerRef.current = setTimeout(() => {
      speak(pageAnnouncements[pathname] ?? 'Memasuki halaman CHIT.');
    }, 100);

    return () => {
      if (announcementTimerRef.current) {
        clearTimeout(announcementTimerRef.current);
      }
    };
  }, [pathname]);

  return (
    <div className="site-canvas">
      <div className="app-shell">
        <aside className="desktop-sidebar" aria-label="Navigasi utama">
          <Link
            href="/"
            className="brand"
            aria-label="CHIT, kembali ke beranda"
            onClick={() => announceClickedPage('/')}
          >
            <span className="brand__mark">C</span>
            <span>
              <strong>CHIT</strong>
              <small>Informasi hukum inklusif</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  onClick={() => announceClickedPage(item.href)}
                  className={active ? 'desktop-nav__link is-active' : 'desktop-nav__link'}
                  key={item.href}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon name={item.icon} filled={active} width={22} height={22} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="desktop-sidebar__footer">
            <VoiceNavigationButton />
            <InstallPrompt />
            <p>Konten edukatif, bukan pengganti nasihat hukum profesional.</p>
          </div>
        </aside>

        <div className="app-viewport">
          <header className="mobile-header">
            <Link
              href="/"
              aria-label="CHIT, kembali ke beranda"
              onClick={() => announceClickedPage('/')}
            >
              CHIT
            </Link>
            <VoiceNavigationButton />
          </header>

          <main className="page-content">{children}</main>

          <nav className="mobile-nav" aria-label="Navigasi utama">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  onClick={() => announceClickedPage(item.href)}
                  className={active ? 'mobile-nav__link is-active' : 'mobile-nav__link'}
                  key={item.href}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon name={item.icon} filled={active} width={22} height={22} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
