'use client';

import Icon from '@/components/Icon';

const features = [
  {
    icon: 'mic' as const,
    title: 'Navigasi Halaman Pakai Suara',
    description:
      'Pindah ke Beranda, Pencarian, Koleksi, atau Bantuan hanya dengan menyebutkan nama halaman.',
  },
  {
    icon: 'search' as const,
    title: 'Mencari Hukum Menggunakan Suara',
    description:
      'Ceritakan masalah atau sebutkan pasal yang ingin dicari melalui tombol mikrofon.',
  },
  {
    icon: 'help' as const,
    title: 'Minta Tolong di Menu Bantuan',
    description:
      'Dengarkan informasi lembaga pendamping dan hubungi layanan yang dibutuhkan.',
  },
  {
    icon: 'bookmark' as const,
    title: 'Simpan Hukum di Koleksi',
    description:
      'Simpan pasal yang sudah dibacakan agar mudah didengarkan kembali.',
  },
];

export default function HomePage() {
  return (
    <div className="page page--home">
      <section className="hero">
        <div className="hero__content">
          <h1>Selamat datang di CHIT</h1>
          <p className="hero__description">
            CHIT adalah aplikasi informasi hukum yang membantu pengguna tunanetra
            mencari, mendengarkan, dan menyimpan materi hukum dengan lebih mudah.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <div>
            <h2>Fitur CHIT</h2>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-card__icon">
                <Icon name={feature.icon} />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
