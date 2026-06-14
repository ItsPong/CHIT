# CHIT

CHIT adalah Progressive Web App (PWA) informasi dan bantuan hukum yang dirancang
dengan aksesibilitas pengguna tunanetra sebagai kebutuhan utama.

Pengguna dapat:

- Menceritakan masalah dengan bahasa sehari-hari.
- Mencari hukum menggunakan suara atau keyboard.
- Mencari langsung berdasarkan nomor undang-undang dan pasal.
- Membaca teks pasal asli dan penjelasan bahasa sederhana.
- Mendengarkan materi menggunakan pembaca suara.
- Menyimpan dokumen hukum ke Koleksi.

> CHIT memberikan informasi awal dan bukan pengganti nasihat hukum profesional.
> Pastikan kembali aturan melalui JDIH, BPK, atau sumber resmi lainnya.

## Daftar Isi

- [Panduan Singkat](#panduan-singkat)
- [Cara Mencari dengan Suara](#cara-mencari-dengan-suara)
- [Cara Mencari dengan Keyboard](#cara-mencari-dengan-keyboard)
- [Format Pencarian yang Didukung](#format-pencarian-yang-didukung)
- [Panduan Ucapan dan Hasil](#panduan-ucapan-dan-hasil)
- [Memahami Hasil Pencarian](#memahami-hasil-pencarian)
- [Panduan Tombol](#panduan-tombol)
- [Tips Mendapatkan Hasil yang Tepat](#tips-mendapatkan-hasil-yang-tepat)
- [Masalah Pencarian Suara](#masalah-pencarian-suara)
- [Panduan Pembaca Layar](#panduan-pembaca-layar)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Mengelola Data Hukum](#mengelola-data-hukum)

## Panduan Singkat

1. Buka menu **Cari** pada navigasi bawah.
2. Tekan tombol mikrofon atau pilih kolom **Cari dengan Keyboard**.
3. Ucapkan atau ketik masalah yang sedang dialami.
4. CHIT akan menyebutkan jumlah pasal dan dokumen yang ditemukan.
5. Pilih **Lihat Materi**, **Dengarkan**, atau **Simpan**.

Pengguna tidak harus mengetahui istilah hukum. Kalimat seperti berikut dapat
langsung digunakan:

```text
Aku ditolak kerja karena tunanetra
Kampus tidak memberi materi yang bisa dibaca screen reader
Petugas tidak membantu aku mengisi formulir
Guiding block di trotoar rusak
Aku mau membuat kartu disabilitas
```

## Cara Mencari dengan Suara

1. Buka menu **Cari**.
2. Tekan tombol bulat bergambar mikrofon.
3. Browser mungkin meminta izin mikrofon. Pilih **Izinkan**.
4. Tunggu sampai muncul status **Mikrofon aktif** atau **Sedang mendengarkan**.
5. Ucapkan satu pertanyaan dengan jelas.
6. CHIT mengubah ucapan menjadi teks dan langsung menjalankan pencarian.
7. CHIT membacakan jumlah pasal dan dokumen yang ditemukan.

Contoh:

> Aku ditolak kerja karena tunanetra.

Ucapan diproses satu kali setiap tombol mikrofon ditekan. Untuk pertanyaan baru,
tekan kembali tombol mikrofon.

Pencarian suara menggunakan bahasa Indonesia (`id-ID`) dan fitur pengenalan
suara milik browser. Dukungan dapat berbeda pada setiap browser dan perangkat.

## Cara Mencari dengan Keyboard

1. Buka menu **Cari**.
2. Pilih kolom **Cari dengan Keyboard**.
3. Ketik pertanyaan, kata kunci, nomor UU, atau pasal.
4. Tekan tombol bergambar kaca pembesar atau tombol pencarian pada keyboard.

Contoh pertanyaan:

```text
Apa hak tunanetra saat mencari kerja?
Kampus menolak mahasiswa tunanetra
Rumah sakit tidak menjelaskan obat
Bagaimana cara mengadu pelayanan publik?
```

## Format Pencarian yang Didukung

### 1. Ceritakan kejadian

Gunakan kalimat yang menjelaskan masalah:

```text
Aku tidak dibantu mengisi formulir di kantor pemerintah
Aku dilarang masuk karena tunanetra
Materi kuliah tidak bisa dibaca screen reader
```

### 2. Ketik topik

Gunakan satu atau beberapa kata kunci:

```text
diskriminasi kerja
pendidikan aksesibel
kartu disabilitas
bantuan hukum
evakuasi bencana
```

### 3. Cari dokumen hukum

Gunakan nama atau nomor aturan:

```text
UUD 1945
UU 8 Tahun 2016
UU 25 Tahun 2009
UU 39 Tahun 1999
UU 13 Tahun 2003
UU 20 Tahun 2003
UU 17 Tahun 2023
UU 11 Tahun 2009
```

Pencarian dokumen menampilkan pasal-pasal yang tersedia di dalam dataset CHIT.

### 4. Cari pasal tertentu

Gabungkan nomor aturan dan pasal:

```text
UUD 1945 Pasal 28F
UU 8 Tahun 2016 Pasal 18
UU 8 Tahun 2016 Pasal 121
UU 25 Tahun 2009 Pasal 18
UU 20 Tahun 2003 Pasal 5
```

Pencarian ini diarahkan ke satu dokumen dan pasal yang paling sesuai.

## Panduan Ucapan dan Hasil

CHIT saat ini mengenali 10 kelompok kebutuhan hukum. Contoh di bawah dapat
diucapkan maupun diketik. Kalimat tidak harus sama persis, tetapi sebaiknya
memuat kata yang menjelaskan kejadian utama.

### 1. Hak Bekerja

Contoh ucapan atau ketikan:

```text
Aku ditolak kerja karena tunanetra
Apakah tunanetra boleh ditolak saat melamar kerja?
Lowongan ini melarang penyandang disabilitas
Gajiku dibedakan karena disabilitas
Aku mengalami diskriminasi di tempat kerja
Aku di-PHK karena disabilitas
Perusahaan tidak memberi akomodasi kerja
```

Kata yang dikenali:

`kerja`, `pekerjaan`, `loker`, `lowongan`, `ditolak kerja`,
`diskriminasi kerja`, `gaji beda`, dan `PHK karena disabilitas`.

CHIT akan menjelaskan bahwa penyandang disabilitas berhak mendapat kesempatan
kerja tanpa diskriminasi, upah yang sama untuk pekerjaan yang sama, perlakuan
adil, perlindungan kerja, dan akomodasi yang layak.

Dasar hukum utama:

- UUD 1945 Pasal 27 ayat (2).
- UUD 1945 Pasal 28D ayat (2).
- UU 8/2016 Pasal 11 dan Pasal 53.
- UU 13/2003 Pasal 5, 6, dan 67.
- UU 39/1999 Pasal 38.

### 2. Hak Pendidikan

Contoh ucapan atau ketikan:

```text
Kampus tidak memberi materi yang bisa dibaca screen reader
Sekolah menolak siswa tunanetra
Ujian di kampus tidak aksesibel
PDF materi kuliah tidak bisa dibaca
Apakah tunanetra berhak kuliah?
Kampus tidak menyediakan akomodasi belajar
```

Kata yang dikenali:

`sekolah`, `kuliah`, `pendidikan`, `kampus`, `ditolak sekolah`,
`materi tidak bisa dibaca`, `PDF tidak aksesibel`, dan `ujian tidak aksesibel`.

CHIT akan menjelaskan hak memperoleh pendidikan bermutu, pendidikan inklusif
atau khusus, layanan tanpa diskriminasi, dan akomodasi yang layak.

Dasar hukum utama:

- UUD 1945 Pasal 28C ayat (1) dan Pasal 31.
- UU 8/2016 Pasal 10 dan Pasal 40.
- UU 20/2003 Pasal 4, 5, 11, dan 12.
- UU 39/1999 Pasal 12.

### 3. Hak Pelayanan Publik

Contoh ucapan atau ketikan:

```text
Aku tidak dibantu mengisi formulir di kantor pemerintah
Petugas tidak mau membantu tunanetra
Aku tidak dilayani saat mengurus KTP
Layanan BPJS tidak aksesibel
Aku kesulitan mengurus KK
Bagaimana mengadu pelayanan publik yang buruk?
```

Kata yang dikenali:

`layanan publik`, `kantor pemerintah`, `KTP`, `KK`, `BPJS`, `formulir`,
`tidak dilayani`, `petugas tidak membantu`, dan `pelayanan buruk`.

CHIT akan menjelaskan hak memperoleh pelayanan yang aksesibel, bermartabat,
tidak diskriminatif, memiliki fasilitas khusus, serta hak mengajukan pengaduan.

Dasar hukum utama:

- UUD 1945 Pasal 27 ayat (1) dan Pasal 28H ayat (2).
- UU 8/2016 Pasal 19, 105, dan 106.
- UU 25/2009 Pasal 2, 4, 8, 15, dan 18.

### 4. Hak Aksesibilitas

Contoh ucapan atau ketikan:

```text
Guiding block di trotoar rusak
Jalur pemandu tertutup motor
Gedung pemerintah tidak aksesibel
Penyeberangan tidak aman untuk tunanetra
Bus tidak memberikan informasi suara
Stasiun kereta sulit digunakan tunanetra
Bandara tidak menyediakan pendampingan
```

Kata yang dikenali:

`aksesibilitas`, `fasilitas umum`, `guiding block`, `jalur pemandu`,
`trotoar`, `penyeberangan`, `transportasi`, `bus`, `kereta`, dan `bandara`.

CHIT akan menjelaskan bahwa jalan, gedung, fasilitas pejalan kaki, penyeberangan,
dan transportasi publik perlu aman dan mudah diakses penyandang disabilitas.

Dasar hukum utama:

- UUD 1945 Pasal 28H ayat (2) dan Pasal 34 ayat (3).
- UU 8/2016 Pasal 18, 97, 98, 101, 102, dan 105.
- UU 25/2009 Pasal 4.

### 5. Hak Kesehatan

Contoh ucapan atau ketikan:

```text
Rumah sakit tidak menjelaskan obat yang diberikan
Informasi medis tidak bisa aku baca
Puskesmas tidak membantu pasien tunanetra
Dokter tidak menjelaskan hasil pemeriksaan
Aku kesulitan mengakses rekam medis
Apakah tunanetra berhak didampingi saat berobat?
```

Kata yang dikenali:

`kesehatan`, `rumah sakit`, `puskesmas`, `dokter`, `pasien`, `rekam medis`,
`informasi medis`, dan `obat`.

CHIT akan menjelaskan hak mendapat layanan kesehatan yang aman, bermutu,
terjangkau, serta informasi medis yang jelas dan mudah diakses.

Dasar hukum utama:

- UUD 1945 Pasal 28H ayat (1) dan Pasal 34 ayat (3).
- UU 8/2016 Pasal 12.
- UU 17/2023 Pasal 2, 3, 4, 6, dan 11.

### 6. Hak Informasi dan Komunikasi

Contoh ucapan atau ketikan:

```text
PDF dari kantor tidak bisa dibaca screen reader
Website layanan publik tidak aksesibel
Aku membutuhkan dokumen dalam format braille
Informasi hanya diberikan dalam bentuk gambar
Apakah informasi harus tersedia dalam bentuk audio?
Dokumen digital tidak bisa dibaca tunanetra
```

Kata yang dikenali:

`informasi`, `komunikasi`, `braille`, `audio`, `screen reader`,
`PDF tidak aksesibel`, `dokumen tidak bisa dibaca`, dan
`website tidak aksesibel`.

CHIT akan menjelaskan hak memperoleh informasi dan berkomunikasi melalui format
yang aksesibel, seperti teks digital, screen reader, audio, atau braille.

Dasar hukum utama:

- UUD 1945 Pasal 28F.
- UU 8/2016 Pasal 24 dan Pasal 122.
- UU 39/1999 Pasal 14.
- UU 25/2009 Pasal 5.

### 7. Anti-Diskriminasi dan Perlindungan Martabat

Contoh ucapan atau ketikan:

```text
Aku dihina karena tunanetra
Aku dilarang masuk karena disabilitas
Aku dikucilkan dari kegiatan
Aku tidak boleh ikut acara
Aku direndahkan oleh petugas
Aku ditolak hanya karena penyandang disabilitas
```

Kata yang dikenali:

`diskriminasi`, `direndahkan`, `dikucilkan`, `ditolak`, `dilarang masuk`,
`tidak boleh ikut`, `dihina`, dan `stigma`.

CHIT akan menjelaskan hak bebas dari diskriminasi, stigma, penelantaran,
eksploitasi, kekerasan, dan perlakuan yang merendahkan martabat.

Dasar hukum utama:

- UUD 1945 Pasal 28I ayat (2).
- UU 8/2016 Pasal 5, 7, 26, 143, dan 145.
- UU 39/1999 Pasal 1 angka 3, Pasal 3, dan Pasal 5.

### 8. Hak Kesejahteraan Sosial

Contoh ucapan atau ketikan:

```text
Aku mau mendaftar kartu disabilitas
Bagaimana cara masuk data penyandang disabilitas?
Aku ingin bertanya tentang bantuan sosial
Apakah penyandang disabilitas mendapat jaminan sosial?
Bagaimana cara mendaftar DTKS?
Aku harus datang ke kelurahan atau Dinas Sosial?
```

Kata yang dikenali:

`bantuan sosial`, `bansos`, `jaminan sosial`, `kartu disabilitas`, `DTKS`,
`daftar disabilitas`, `kelurahan`, dan `Dinsos`.

CHIT akan menjelaskan pendataan penyandang disabilitas, kartu penyandang
disabilitas, rehabilitasi sosial, jaminan sosial, pemberdayaan, dan perlindungan
sosial.

Dasar hukum utama:

- UUD 1945 Pasal 28H ayat (3) dan Pasal 34.
- UU 8/2016 Pasal 17, 117, 119, dan 121.
- UU 11/2009 Pasal 4, 5, 6, dan 9.

### 9. Hak Perlindungan Hukum dan Pengaduan

Contoh ucapan atau ketikan:

```text
Aku membutuhkan bantuan hukum
Bagaimana cara membuat pengaduan?
Aku ingin melaporkan pelayanan yang buruk
Ke mana aku harus mengadu?
Apakah tunanetra mendapat akses di pengadilan?
Aku mau melapor ke Ombudsman
Aku ingin membuat gugatan
```

Kata yang dikenali:

`hukum`, `pengadilan`, `pengaduan`, `bantuan hukum`, `lapor`, `gugatan`,
`perlindungan hukum`, dan `Ombudsman`.

CHIT akan menjelaskan hak memperoleh perlindungan hukum, keadilan tanpa
diskriminasi, bantuan dalam proses hukum, serta hak mengadu dan mendapat
tanggapan.

Dasar hukum utama:

- UUD 1945 Pasal 27 ayat (1) dan Pasal 28D ayat (1).
- UU 8/2016 Pasal 9.
- UU 25/2009 Pasal 18.
- UU 39/1999 Pasal 5 dan Pasal 17.

### 10. Hak Perlindungan dari Bencana

Contoh ucapan atau ketikan:

```text
Bagaimana evakuasi tunanetra saat gempa?
Informasi banjir tidak aksesibel
Apakah penyandang disabilitas mendapat prioritas evakuasi?
Pengungsian tidak bisa digunakan tunanetra
Bagaimana perlindungan tunanetra saat kebakaran?
Aku membutuhkan informasi darurat dalam bentuk suara
```

Kata yang dikenali:

`bencana`, `evakuasi`, `pengungsian`, `banjir`, `gempa`, `kebakaran`, dan
`darurat`.

CHIT akan menjelaskan hak memperoleh informasi bencana yang aksesibel, prioritas
penyelamatan dan evakuasi, serta fasilitas pengungsian yang mudah diakses.

Dasar hukum utama:

- UU 8/2016 Pasal 20.
- UU 8/2016 Pasal 109.

## Ringkasan Cepat

| Jika pengguna membahas | Coba ucapkan | Kategori hasil |
| --- | --- | --- |
| Lamaran atau pekerjaan | `Aku ditolak kerja karena tunanetra` | Hak Bekerja |
| Sekolah atau kampus | `Ujian di kampus tidak aksesibel` | Hak Pendidikan |
| KTP, BPJS, atau formulir | `Petugas tidak membantu isi formulir` | Hak Pelayanan Publik |
| Trotoar atau kendaraan umum | `Guiding block tertutup motor` | Hak Aksesibilitas |
| Rumah sakit atau obat | `Dokter tidak menjelaskan obat` | Hak Kesehatan |
| Dokumen atau website | `PDF tidak bisa dibaca screen reader` | Hak Informasi dan Komunikasi |
| Penghinaan atau penolakan | `Aku dihina karena tunanetra` | Anti-Diskriminasi |
| Bansos atau kartu disabilitas | `Aku mau daftar kartu disabilitas` | Hak Kesejahteraan Sosial |
| Laporan atau bantuan hukum | `Aku ingin membuat pengaduan` | Perlindungan Hukum |
| Gempa, banjir, atau kebakaran | `Bagaimana evakuasi tunanetra?` | Perlindungan dari Bencana |

## Memahami Hasil Pencarian

Setelah pencarian dijalankan, CHIT menampilkan:

1. **Status pencarian**

   Menyebutkan jumlah pasal dan jumlah dokumen hukum yang ditemukan.

2. **Kategori kebutuhan**

   Contohnya Hak Bekerja, Hak Pendidikan, atau Hak Aksesibilitas.

3. **Nama dokumen hukum**

   Contohnya UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas.

4. **Status aturan**

   Menjelaskan apakah aturan masih berlaku atau memiliki catatan perubahan.

5. **Jawaban singkat**

   Ringkasan awal mengenai hak yang berkaitan dengan pertanyaan.

6. **Pasal terkait**

   Daftar pasal yang dinilai paling sesuai dengan kata dalam pertanyaan.

7. **Bahasa sederhana**

   Penjelasan isi pasal menggunakan bahasa yang lebih mudah dipahami.

8. **Teks pasal asli**

   Teks hukum yang menjadi dasar penjelasan.

Satu pertanyaan dapat menghasilkan beberapa dokumen karena satu kejadian dapat
berkaitan dengan lebih dari satu aturan. Pencarian kasus menampilkan maksimal
lima dokumen. Setiap dokumen menampilkan maksimal enam pasal yang paling relevan.

## Panduan Tombol

### Lihat Materi

Membuka detail hasil, yang berisi:

- Status dan catatan aturan.
- Pasal yang relevan.
- Penjelasan bahasa sederhana.
- Teks pasal asli.

Tekan kembali tombol detail untuk menutup materi.

### Dengarkan

Membacakan:

- Nama dokumen hukum.
- Jawaban singkat atau ringkasan dokumen.
- Judul pasal yang relevan.
- Penjelasan bahasa sederhana setiap pasal.

Tombol ini memakai fitur text-to-speech dari browser atau perangkat.

### Simpan

Menyimpan dokumen hukum ke menu **Koleksi**.

- Jika berhasil, CHIT mengumumkan bahwa materi sudah disimpan.
- Jika materi sudah pernah disimpan, CHIT mengumumkan bahwa materi sudah ada.
- Pada web, Koleksi disimpan di `localStorage` browser yang sedang digunakan.
- Jika penyimpanan browser diblokir, Koleksi hanya bertahan selama aplikasi aktif.

## Tips Mendapatkan Hasil yang Tepat

### Sebutkan tempat dan masalah

Lebih baik:

```text
Petugas rumah sakit tidak menjelaskan obat kepada pasien tunanetra
```

Daripada:

```text
Aku tidak dibantu
```

### Gunakan kata utama

Sertakan kata seperti `kerja`, `kampus`, `formulir`, `trotoar`, `rumah sakit`,
`screen reader`, `diskriminasi`, `bansos`, `pengaduan`, atau `bencana`.

### Pisahkan masalah yang berbeda

Jika memiliki dua masalah, cari satu per satu.

```text
Kampus tidak menyediakan materi aksesibel
```

Kemudian:

```text
Aku dihina oleh petugas kampus
```

### Cari pasal secara langsung

Jika sudah mengetahui dasar hukumnya, masukkan nomor UU dan pasal:

```text
UU 8 Tahun 2016 Pasal 18
```

### Coba sinonim atau kalimat lain

Jika hasil belum tepat, ganti kata:

- `pekerjaan` menjadi `kerja` atau `lowongan`.
- `layanan negara` menjadi `pelayanan publik` atau `kantor pemerintah`.
- `jalur kuning` menjadi `guiding block` atau `jalur pemandu`.
- `dokumen tidak terbaca` menjadi `PDF tidak aksesibel`.
- `melapor` menjadi `pengaduan` atau `bantuan hukum`.

### Jika materi tidak ditemukan

CHIT akan menampilkan:

> Materi yang sesuai belum ditemukan. Coba gunakan kata kunci lain.

Perjelas pertanyaan dengan menyebutkan topik, tempat kejadian, atau bentuk
masalah. Dataset CHIT masih terbatas pada materi yang tersedia di `full.md`.

## Masalah Pencarian Suara

### Tombol mikrofon tidak tersedia

Browser tersebut mungkin belum mendukung Web Speech Recognition. Gunakan kolom
pencarian keyboard atau coba browser yang mendukung fitur pengenalan suara.

### Izin mikrofon ditolak

1. Buka pengaturan izin situs pada browser.
2. Ubah izin mikrofon menjadi **Izinkan**.
3. Muat ulang CHIT.
4. Tekan kembali tombol mikrofon.

### Ucapan tidak dikenali

- Dekatkan perangkat dan bicara dengan jelas.
- Kurangi suara di sekitar.
- Ucapkan satu pertanyaan dalam satu kesempatan.
- Gunakan kalimat yang lebih pendek.
- Tekan mikrofon lagi dan ulangi pertanyaan.

### Hasil suara keliru

Periksa teks hasil pengenalan pada kolom pencarian. Koreksi dengan keyboard lalu
tekan tombol pencarian.

### CHIT tidak membacakan hasil

- Pastikan volume media perangkat aktif.
- Periksa apakah browser mendukung speech synthesis.
- Pastikan tab browser tidak sedang dibisukan.
- Tekan kembali tombol **Dengarkan**.

## Panduan Pembaca Layar

- Navigasi utama berada di bagian bawah: Beranda, Cari, Koleksi, dan Bantuan.
- Setiap tombol memiliki label aksesibilitas.
- Status pencarian diumumkan melalui live region.
- Gunakan navigasi heading untuk berpindah ke judul hasil.
- Gunakan navigasi tombol untuk menemukan mikrofon, Cari, Lihat Materi,
  Dengarkan, dan Simpan.
- Detail materi disusun dengan urutan judul pasal, bahasa sederhana, lalu teks
  pasal asli.
- Pada desktop, tampilan tetap dibatasi seperti layar ponsel agar alurnya
  konsisten.

Pengujian aksesibilitas tetap disarankan menggunakan TalkBack di Android,
VoiceOver di iOS, atau pembaca layar desktop.

## Batasan Saat Ini

- Hasil ditentukan dari kecocokan kata, frasa, nomor aturan, dan rute topik.
- CHIT belum memahami seluruh variasi bahasa seperti sistem konsultasi manusia.
- Pencarian suara bergantung pada dukungan browser dan izin mikrofon.
- Materi hukum terbatas pada dataset yang tersedia.
- Isi hukum perlu diverifikasi kembali melalui sumber resmi.
- CHIT belum menggantikan advokat, pendamping hukum, atau lembaga pengaduan.

## Menjalankan Proyek

### Persiapan

Pastikan Node.js dan pnpm tersedia, kemudian pasang dependency:

```bash
pnpm install
```

### Daftar command

| Command | Yang terjadi |
| --- | --- |
| `pnpm dev` | Membuat ulang data hukum lalu membuka Expo development server |
| `pnpm start` | Sama seperti `pnpm dev` |
| `pnpm web` | Membuat ulang data lalu menjalankan CHIT sebagai web lokal |
| `pnpm android` | Membuat ulang data lalu membuka CHIT di Android atau emulator |
| `pnpm ios` | Membuat ulang data lalu membuka CHIT di iOS Simulator |
| `pnpm data:generate` | Membaca `full.md` dan membuat data JSON aplikasi |
| `pnpm icons:pwa` | Membuat ulang ikon instalasi PWA |
| `pnpm build:web` | Membuat build produksi web di folder `dist` |
| `pnpm typecheck` | Memeriksa kesalahan tipe TypeScript tanpa membuat build |
| `pnpm lint` | Memeriksa kualitas dan konsistensi kode |

### Menjalankan web lokal

```bash
pnpm install
pnpm web
```

Expo akan menampilkan alamat lokal yang dapat dibuka melalui browser.

### Membuat build PWA

```bash
pnpm icons:pwa
pnpm build:web
```

Hasil build berada di folder:

```text
dist/
```

Folder tersebut dapat digunakan untuk deployment ke Vercel.

## Mengelola Data Hukum

Sumber utama data berada di:

```text
full.md
```

File tersebut memuat:

- Ringkasan dokumen.
- Status dan catatan aturan.
- Teks pasal asli.
- Penjelasan bahasa sederhana.
- Kata kunci setiap pasal.
- Rute kata kunci ke kategori dan dasar hukum.

Setelah mengubah `full.md`, jalankan:

```bash
pnpm data:generate
```

Generator menghasilkan:

```text
src/data/legalContent.generated.json
```

Jangan mengedit JSON hasil generator secara manual karena isinya akan ditimpa
saat `pnpm dev`, `pnpm web`, atau `pnpm build:web` dijalankan.

Dataset saat ini berisi:

- 8 dokumen hukum.
- 76 kelompok pasal.
- 10 rute kebutuhan pengguna.

## PWA

- Tampilan desktop dibatasi ke viewport ponsel dengan lebar maksimum 430 px.
- Manifest, ikon instalasi, dan metadata tersedia di folder `public`.
- Service worker aktif pada build produksi untuk cache dan akses offline dasar.
- Navigasi web memakai fallback SPA melalui `vercel.json`.
- Hasil `pnpm build:web` dapat di-deploy ke Vercel.

Service worker tidak didaftarkan saat development agar cache produksi tidak
mengganggu perubahan terbaru. Instalasi dan mode offline perlu diuji melalui
build produksi.

## Teknologi

- Expo SDK 56
- React Native dan React Native Web
- Expo Router
- TypeScript
- NativeWind

## Struktur Proyek

```text
src/
├── app/         # Route dan layout Expo Router
├── components/  # Komponen yang digunakan ulang
├── constants/   # Design tokens
├── data/        # Dataset hukum hasil generator
├── hooks/       # Voice search dan hook aplikasi
├── screens/     # Implementasi layar
├── services/    # Text-to-speech dan layanan aplikasi
└── global.css   # Entry CSS NativeWind
```

## Prinsip Aksesibilitas

- Setiap kontrol interaktif memiliki label dan peran aksesibilitas yang jelas.
- Informasi tidak disampaikan hanya melalui warna.
- Urutan fokus pembaca layar mengikuti urutan visual dan alur tugas.
- Target sentuh minimal 44 x 44 poin.
- Perubahan penting diuji menggunakan TalkBack dan VoiceOver.
