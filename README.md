# CHIT

CHIT adalah aplikasi informasi dan bantuan hukum yang dirancang dengan
aksesibilitas pengguna tunanetra sebagai kebutuhan utama.

## Teknologi

- Expo SDK 56
- React Native
- Expo Router
- TypeScript
- NativeWind

## Menjalankan proyek

```bash
pnpm install
pnpm dev
```

Gunakan salah satu perintah berikut untuk platform tertentu:

```bash
pnpm android
pnpm ios
pnpm web
```

## PWA

Target web CHIT dikonfigurasi sebagai Progressive Web App:

- Tampilan desktop dibatasi ke viewport ponsel dengan lebar maksimum 430 px.
- Manifest, ikon instalasi, dan metadata aplikasi tersedia di folder `public`.
- Service worker aktif pada build produksi untuk cache aplikasi dan akses offline dasar.
- Navigasi web menggunakan fallback SPA yang dikonfigurasi melalui `vercel.json`.

Build produksi:

```bash
pnpm icons:pwa
pnpm build:web
```

Hasil build tersedia di folder `dist`. Service worker tidak didaftarkan saat
menjalankan `pnpm web` agar cache produksi tidak mengganggu proses development.
Untuk menguji instalasi dan mode offline, jalankan hasil build melalui server
lokal atau deploy ke Vercel.

## Pemeriksaan kode

```bash
pnpm typecheck
pnpm lint
```

## Struktur

```text
src/
├── app/         # Route dan layout Expo Router
├── constants/   # Design tokens
├── screens/     # Implementasi layar
└── global.css   # Entry CSS NativeWind
```

Route harus tetap tipis. Logika dan tampilan utama ditempatkan di `screens`,
sedangkan komponen yang dipakai ulang dapat ditambahkan ke `components`.

## Prinsip aksesibilitas

- Setiap kontrol interaktif harus memiliki `accessibilityRole` dan label yang jelas.
- Jangan mengandalkan warna saja untuk menyampaikan status.
- Urutan fokus pembaca layar harus mengikuti urutan visual dan alur tugas.
- Target sentuh minimal 44 x 44 poin.
- Uji perubahan penting dengan TalkBack dan VoiceOver.
