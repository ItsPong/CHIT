import Link from 'next/link';

import Icon from '@/components/Icon';

export default function OfflinePage() {
  return (
    <div className="page offline-page">
      <div className="empty-state">
        <Icon name="info" width={48} height={48} />
        <p className="eyebrow">KONEKSI TERPUTUS</p>
        <h1>Anda sedang offline</h1>
        <p>
          Halaman ini belum tersimpan di perangkat. Periksa koneksi internet lalu
          coba kembali, atau buka halaman utama yang sudah dicache.
        </p>
        <Link className="button button--primary" href="/">
          <Icon name="home" width={20} height={20} />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
