# full.md — Konten Hukum Ramah Tunanetra untuk Final Project

> **Catatan penting untuk developer**  
> Dokumen ini adalah *seed content* untuk platform informasi hukum ramah tunanetra. Isinya berupa ringkasan edukatif, teks pasal asli yang relevan, dan versi bahasa sederhana. Dokumen ini **bukan nasihat hukum resmi**. Untuk deployment publik, sebaiknya tetap tampilkan tautan sumber resmi dan mekanisme update berkala dari JDIH/peraturan.go.id/BPK.

---

## Metadata Konten

```yaml
project: Platform Informasi Hukum Ramah Tunanetra
file: full.md
versi_konten: 1.0
bahasa: id
last_checked_context: 2026-06-13
jenis_konten:
  - teks asli pasal
  - bahasa sederhana
  - keyword routing
  - kategori hak
catatan_validasi:
  - Cek kembali status peraturan sebelum produksi.
  - Beberapa UU lama masih berlaku tetapi sudah diubah sebagian.
  - Tampilkan status: berlaku, diubah, dicabut sebagian, atau dicabut.
```

---

# 1. Cara Pakai Konten Ini di Web

## 1.1 Konsep Tampilan untuk User Tunanetra

Tampilan yang disarankan jangan dimulai dari “daftar UU”, tetapi dari kebutuhan user.

Contoh menu utama:

1. Hak dasar saya
2. Hak pendidikan
3. Hak bekerja
4. Hak layanan kesehatan
5. Hak layanan publik
6. Hak aksesibilitas fasilitas umum
7. Hak informasi dan komunikasi
8. Hak bantuan sosial dan kesejahteraan
9. Hak perlindungan hukum
10. Saya ingin mengadu

Setiap topik sebaiknya punya format:

```md
## Judul Topik

### Ringkasan Singkat
Bahasa sederhana 1–3 kalimat.

### Dasar Hukum
- UUD 1945 Pasal ...
- UU Nomor ... Tahun ... Pasal ...

### Pasal Asli
Teks pasal asli.

### Bahasa Sederhana
Penjelasan non-teknis.

### Keyword Terkait
keyword: ...

### Saran Navigasi
Tombol: Dengarkan, Lihat Pasal Asli, Simpan, Cari Bantuan.
```

---

# 2. Daftar Aturan yang Dipakai

## 2.1 Prioritas Utama

| Kode | Aturan | Status ringkas | Fokus untuk platform |
|---|---|---|---|
| UUD1945 | UUD Negara Republik Indonesia Tahun 1945 | Berlaku | Dasar hak warga negara |
| UU8_2016 | UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas | Berlaku | Inti hak penyandang disabilitas |
| UU25_2009 | UU Nomor 25 Tahun 2009 tentang Pelayanan Publik | Berlaku | Hak mendapat layanan publik yang layak |
| UU39_1999 | UU Nomor 39 Tahun 1999 tentang Hak Asasi Manusia | Berlaku | Hak dasar dan anti-diskriminasi |
| UU13_2003 | UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan | Berlaku, sudah diubah sebagian oleh Cipta Kerja | Hak kerja dan non-diskriminasi kerja |
| UU20_2003 | UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional | Berlaku, ada catatan putusan MK/pencabutan sebagian pidana oleh KUHP baru | Hak pendidikan |
| UU17_2023 | UU Nomor 17 Tahun 2023 tentang Kesehatan | Berlaku | Hak layanan kesehatan terbaru |
| UU11_2009 | UU Nomor 11 Tahun 2009 tentang Kesejahteraan Sosial | Berlaku, dicabut/diubah sebagian oleh UU Pekerja Sosial | Bantuan sosial, rehabilitasi sosial, perlindungan sosial |

---

# 3. UUD Negara Republik Indonesia Tahun 1945

## 3.1 Ringkasan untuk User

UUD 1945 adalah aturan dasar tertinggi negara Indonesia. Untuk platform ini, UUD dipakai sebagai dasar bahwa setiap warga negara, termasuk tunanetra dan penyandang disabilitas, punya hak atas hukum yang sama, pekerjaan, pendidikan, kesehatan, jaminan sosial, informasi, dan perlakuan khusus untuk mencapai keadilan.

## 3.2 Keyword Utama

```yaml
keywords:
  - uud
  - hak warga negara
  - hak asasi manusia
  - pendidikan
  - pekerjaan
  - kesejahteraan sosial
  - jaminan sosial
  - persamaan hukum
  - perlakuan khusus
  - kesehatan
  - informasi
```

---

## 3.3 Pembukaan UUD 1945 Alinea Keempat

### Pasal/Teks Asli

> Kemudian daripada itu untuk membentuk suatu Pemerintah Negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah Kemerdekaan Kebangsaan Indonesia itu dalam suatu Undang-Undang Dasar Negara Indonesia, yang terbentuk dalam suatu susunan Negara Republik Indonesia yang berkedaulatan rakyat dengan berdasarkan kepada Ketuhanan Yang Maha Esa, Kemanusiaan yang adil dan beradab, Persatuan Indonesia dan Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam Permusyawaratan/Perwakilan, serta dengan mewujudkan suatu Keadilan sosial bagi seluruh rakyat Indonesia.

### Bahasa Sederhana

Negara Indonesia dibentuk untuk melindungi seluruh rakyat, meningkatkan kesejahteraan, mencerdaskan bangsa, dan ikut menjaga perdamaian dunia. Artinya, negara punya tanggung jawab besar untuk memastikan semua warga, termasuk tunanetra, bisa hidup aman, mendapat pendidikan, memperoleh layanan yang layak, dan merasakan keadilan sosial.

### Cocok untuk Fitur

- Halaman pembuka “Dasar Hak Warga Negara”.
- Narasi audio awal aplikasi.
- Penjelasan mengapa negara wajib melindungi penyandang disabilitas.

---

## 3.4 Pasal 27 Ayat (1): Persamaan di Hadapan Hukum dan Pemerintahan

### Pasal Asli

> Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya.

### Bahasa Sederhana

Semua warga negara punya kedudukan yang sama di depan hukum dan pemerintahan. Tunanetra tidak boleh diperlakukan lebih rendah saat mengurus administrasi, menghadapi proses hukum, memakai layanan pemerintah, atau meminta perlindungan.

### Keyword

```yaml
keywords:
  - sama di depan hukum
  - diskriminasi hukum
  - perlakuan pemerintah
  - keadilan
  - kantor pemerintah
  - administrasi
```

---

## 3.5 Pasal 27 Ayat (2): Hak atas Pekerjaan dan Penghidupan Layak

### Pasal Asli

> Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.

### Bahasa Sederhana

Setiap warga negara berhak bekerja dan hidup layak. Penyandang disabilitas, termasuk tunanetra, tidak boleh ditolak hanya karena kondisi disabilitasnya jika ia mampu menjalankan pekerjaan dengan dukungan yang sesuai.

### Keyword

```yaml
keywords:
  - kerja
  - pekerjaan
  - ditolak kerja
  - loker
  - penghidupan layak
  - diskriminasi kerja
```

---

## 3.6 Pasal 28A: Hak Hidup

### Pasal Asli

> Setiap orang berhak untuk hidup serta berhak mempertahankan hidup dan kehidupannya.

### Bahasa Sederhana

Setiap orang punya hak untuk hidup dan mempertahankan kehidupannya. Dalam konteks tunanetra, ini bisa dikaitkan dengan hak mendapat perlindungan dari kekerasan, penelantaran, pengucilan, dan kondisi yang membahayakan keselamatan.

### Keyword

```yaml
keywords:
  - hak hidup
  - keselamatan
  - penelantaran
  - kekerasan
  - perlindungan
```

---

## 3.7 Pasal 28C Ayat (1): Hak Mengembangkan Diri dan Pendidikan

### Pasal Asli

> Setiap orang berhak mengembangkan diri melalui pemenuhan kebutuhan dasarnya, berhak mendapat pendidikan dan memperoleh manfaat dari ilmu pengetahuan dan teknologi, seni dan budaya, demi meningkatkan kualitas hidupnya dan demi kesejahteraan umat manusia.

### Bahasa Sederhana

Setiap orang berhak belajar, berkembang, dan memakai ilmu pengetahuan serta teknologi. Untuk tunanetra, ini mendukung hak atas pendidikan inklusif, teknologi bantu, materi belajar yang bisa diakses, dan kesempatan berkembang.

### Keyword

```yaml
keywords:
  - sekolah
  - kuliah
  - pendidikan
  - teknologi bantu
  - belajar
  - akses materi
  - braille
  - screen reader
```

---

## 3.8 Pasal 28D Ayat (1): Kepastian Hukum dan Perlakuan Sama

### Pasal Asli

> Setiap orang berhak atas pengakuan, jaminan, perlindungan, dan kepastian hukum yang adil serta perlakuan yang sama dihadapan hukum.

### Bahasa Sederhana

Setiap orang berhak diakui dan dilindungi oleh hukum secara adil. Jika tunanetra mengalami diskriminasi, penolakan layanan, atau perlakuan tidak adil, pasal ini bisa menjadi dasar bahwa ia berhak mendapat perlindungan hukum.

### Keyword

```yaml
keywords:
  - kepastian hukum
  - perlindungan hukum
  - diskriminasi
  - diperlakukan tidak adil
  - pengaduan
```

---

## 3.9 Pasal 28D Ayat (2): Hak Bekerja dan Perlakuan Layak dalam Hubungan Kerja

### Pasal Asli

> Setiap orang berhak untuk bekerja serta mendapat imbalan dan perlakuan yang adil dan layak dalam hubungan kerja.

### Bahasa Sederhana

Setiap orang berhak bekerja, mendapat upah, dan diperlakukan adil di tempat kerja. Untuk tunanetra, ini berarti tempat kerja tidak boleh merendahkan, membayar lebih rendah untuk pekerjaan yang sama, atau menolak dukungan yang wajar tanpa alasan sah.

### Keyword

```yaml
keywords:
  - upah
  - gaji
  - kerja layak
  - perlakuan kerja
  - diskriminasi kantor
  - hak pekerja
```

---

## 3.10 Pasal 28E Ayat (1): Hak Memilih Pendidikan dan Pekerjaan

### Pasal Asli

> Setiap orang berhak memeluk agama dan beribadat menurut agamanya, memilih pendidikan dan pengajaran, memilih pekerjaan, memilih kewarganegaraan, memilih tempat tinggal di wilayah negara dan meninggalkannya, serta berhak kembali.

### Bahasa Sederhana

Setiap orang punya kebebasan memilih pendidikan dan pekerjaan. Tunanetra tidak boleh otomatis dibatasi hanya karena disabilitasnya. Pembatasan harus punya alasan yang jelas dan tidak diskriminatif.

### Keyword

```yaml
keywords:
  - memilih pekerjaan
  - memilih pendidikan
  - kebebasan memilih
  - ditolak sekolah
  - ditolak kerja
```

---

## 3.11 Pasal 28F: Hak Informasi dan Komunikasi

### Pasal Asli

> Setiap orang berhak untuk berkomunikasi dan memperoleh informasi untuk mengembangkan pribadi dan lingkungan sosialnya, serta berhak untuk mencari, memperoleh, memiliki, menyimpan, mengolah, dan menyampaikan informasi dengan menggunakan segala jenis saluran yang tersedia.

### Bahasa Sederhana

Setiap orang berhak mendapat informasi dan berkomunikasi. Untuk tunanetra, informasi seharusnya tersedia dalam bentuk yang bisa diakses, misalnya teks yang bisa dibaca screen reader, audio, braille, atau format digital yang ramah aksesibilitas.

### Keyword

```yaml
keywords:
  - informasi
  - komunikasi
  - screen reader
  - pdf tidak aksesibel
  - braille
  - audio
  - dokumen tidak bisa dibaca
```

---

## 3.12 Pasal 28G Ayat (1): Rasa Aman dan Perlindungan Diri

### Pasal Asli

> Setiap orang berhak atas perlindungan diri pribadi, keluarga, kehormatan, martabat, dan harta benda yang di bawah kekuasaannya, serta berhak atas rasa aman dan perlindungan dari ancaman ketakutan untuk berbuat atau tidak berbuat sesuatu yang merupakan hak asasi.

### Bahasa Sederhana

Setiap orang berhak merasa aman dan dilindungi. Tunanetra berhak terlindung dari ancaman, pemaksaan, perampasan barang, penipuan, atau perlakuan yang merendahkan martabat.

### Keyword

```yaml
keywords:
  - rasa aman
  - ancaman
  - dipaksa
  - pelecehan
  - martabat
  - perlindungan diri
```

---

## 3.13 Pasal 28H Ayat (1): Hak Kesehatan dan Lingkungan Baik

### Pasal Asli

> Setiap orang berhak hidup sejahtera lahir dan batin, bertempat tinggal, dan mendapatkan lingkungan hidup yang baik dan sehat serta berhak memperoleh pelayanan kesehatan.

### Bahasa Sederhana

Setiap orang berhak hidup sejahtera dan mendapat layanan kesehatan. Tunanetra berhak memperoleh layanan kesehatan yang aman, mudah dipahami, dan tidak diskriminatif.

### Keyword

```yaml
keywords:
  - kesehatan
  - rumah sakit
  - puskesmas
  - layanan kesehatan
  - akses kesehatan
  - pasien
```

---

## 3.14 Pasal 28H Ayat (2): Kemudahan dan Perlakuan Khusus

### Pasal Asli

> Setiap orang berhak mendapat kemudahan dan perlakuan khusus untuk memperoleh kesempatan dan manfaat yang sama guna mencapai persamaan dan keadilan.

### Bahasa Sederhana

Perlakuan khusus bukan berarti diistimewakan secara tidak adil. Ini berarti negara dan layanan publik boleh, bahkan perlu, memberi dukungan tambahan agar penyandang disabilitas punya kesempatan yang setara. Contohnya: jalur aksesibel, pendampingan, dokumen audio, braille, atau bantuan navigasi.

### Keyword

```yaml
keywords:
  - perlakuan khusus
  - aksesibilitas
  - akomodasi layak
  - bantuan khusus
  - kesempatan sama
  - fasilitas disabilitas
```

---

## 3.15 Pasal 28H Ayat (3): Hak Jaminan Sosial

### Pasal Asli

> Setiap orang berhak atas jaminan sosial yang memungkinkan pengembangan dirinya secara utuh sebagai manusia yang bermartabat.

### Bahasa Sederhana

Setiap orang berhak atas jaminan sosial agar bisa hidup bermartabat. Ini relevan dengan bantuan sosial, jaminan kesehatan, rehabilitasi sosial, dan dukungan bagi penyandang disabilitas yang membutuhkan.

### Keyword

```yaml
keywords:
  - jaminan sosial
  - bantuan sosial
  - bansos
  - bpjs
  - hidup layak
  - disabilitas miskin
```

---

## 3.16 Pasal 28I Ayat (2): Bebas dari Perlakuan Diskriminatif

### Pasal Asli

> Setiap orang berhak bebas dari perlakuan yang bersifat diskriminatif atas dasar apa pun dan berhak mendapatkan perlindungan terhadap perlakuan yang bersifat diskriminatif itu.

### Bahasa Sederhana

Siapa pun tidak boleh diperlakukan lebih buruk karena disabilitas, kondisi fisik, agama, suku, jenis kelamin, atau alasan lain. Jika tunanetra ditolak sekolah, kerja, layanan publik, atau fasilitas umum hanya karena tunanetra, itu bisa masuk isu diskriminasi.

### Keyword

```yaml
keywords:
  - diskriminasi
  - ditolak karena tunanetra
  - tidak diterima karena disabilitas
  - perlakuan berbeda
  - hak setara
```

---

## 3.17 Pasal 28I Ayat (4): Tanggung Jawab Negara atas HAM

### Pasal Asli

> Perlindungan, pemajuan, penegakan, dan pemenuhan hak asasi manusia adalah tanggung jawab negara, terutama pemerintah.

### Bahasa Sederhana

Pemerintah bertanggung jawab melindungi dan memenuhi hak asasi manusia. Jadi, hak penyandang disabilitas bukan sekadar urusan pribadi atau keluarga, tetapi juga tanggung jawab negara.

### Keyword

```yaml
keywords:
  - tanggung jawab pemerintah
  - hak asasi manusia
  - negara wajib
  - pemenuhan hak
```

---

## 3.18 Pasal 31: Hak Pendidikan

### Pasal Asli

> (1) Setiap warga negara berhak mendapat pendidikan.  
> (2) Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya.  
> (3) Pemerintah mengusahakan dan menyelenggarakan satu sistem pendidikan nasional, yang meningkatkan keimanan dan ketakwaan serta akhlak mulia dalam rangka mencerdaskan kehidupan bangsa, yang diatur dengan undang-undang.  
> (4) Negara memprioritaskan anggaran pendidikan sekurang-kurangnya dua puluh persen dari anggaran pendapatan dan belanja negara serta dari anggaran pendapatan dan belanja daerah untuk memenuhi kebutuhan penyelenggaraan pendidikan nasional.  
> (5) Pemerintah memajukan ilmu pengetahuan dan teknologi dengan menjunjung tinggi nilai-nilai agama dan persatuan bangsa untuk kemajuan peradaban serta kesejahteraan umat manusia.

### Bahasa Sederhana

Setiap warga negara berhak sekolah. Pemerintah wajib menyelenggarakan sistem pendidikan nasional dan membiayai pendidikan dasar. Untuk tunanetra, pasal ini mendukung hak untuk belajar dengan akses yang sesuai.

### Keyword

```yaml
keywords:
  - pendidikan
  - sekolah
  - kuliah
  - biaya sekolah
  - pendidikan dasar
  - pendidikan inklusif
```

---

## 3.19 Pasal 34: Kesejahteraan Sosial dan Fasilitas Umum

### Pasal Asli

> (1) Fakir miskin dan anak-anak terlantar dipelihara oleh negara.  
> (2) Negara mengembangkan sistem jaminan sosial bagi seluruh rakyat dan memberdayakan masyarakat yang lemah dan tidak mampu sesuai dengan martabat kemanusiaan.  
> (3) Negara bertanggung jawab atas penyediaan fasilitas pelayanan kesehatan dan fasilitas pelayanan umum yang layak.  
> (4) Ketentuan lebih lanjut mengenai pelaksanaan pasal ini diatur dalam undang-undang.

### Bahasa Sederhana

Negara bertanggung jawab membantu warga yang lemah, tidak mampu, atau membutuhkan perlindungan sosial. Negara juga wajib menyediakan fasilitas kesehatan dan fasilitas umum yang layak. Untuk tunanetra, ini bisa dikaitkan dengan akses fasilitas umum, layanan kesehatan, dan jaminan sosial.

### Keyword

```yaml
keywords:
  - kesejahteraan sosial
  - fasilitas umum
  - fasilitas kesehatan
  - layanan umum
  - bantuan sosial
  - jaminan sosial
```

---

# 4. UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas

## 4.1 Ringkasan untuk User

UU ini adalah aturan utama tentang hak penyandang disabilitas di Indonesia. Untuk platform ini, UU ini harus menjadi konten inti karena membahas hak pendidikan, pekerjaan, kesehatan, aksesibilitas, pelayanan publik, informasi, pendataan, kartu penyandang disabilitas, dan perlindungan dari diskriminasi.

## 4.2 Status Ringkas

```yaml
nomor: 8
judul: Penyandang Disabilitas
tahun: 2016
status: berlaku
catatan:
  - Mencabut UU Nomor 4 Tahun 1997 tentang Penyandang Cacat.
  - Istilah lama "penyandang cacat" dalam peraturan lama harus dibaca sebagai "Penyandang Disabilitas" sepanjang tidak bertentangan dengan UU ini.
```

---

## 4.3 Pasal 1 Angka 1: Definisi Penyandang Disabilitas

### Pasal Asli

> Penyandang Disabilitas adalah setiap orang yang mengalami keterbatasan fisik, intelektual, mental, dan/atau sensorik dalam jangka waktu lama yang dalam berinteraksi dengan lingkungan dapat mengalami hambatan dan kesulitan untuk berpartisipasi secara penuh dan efektif dengan warga negara lainnya berdasarkan kesamaan hak.

### Bahasa Sederhana

Penyandang disabilitas adalah orang yang punya keterbatasan fisik, intelektual, mental, atau sensorik dalam jangka panjang. Hambatan muncul bukan hanya dari kondisi orangnya, tetapi juga dari lingkungan yang belum aksesibel.

### Keyword

```yaml
keywords:
  - definisi disabilitas
  - apa itu disabilitas
  - tunanetra
  - sensorik
  - hambatan lingkungan
```

---

## 4.4 Pasal 4: Ragam Penyandang Disabilitas

### Pasal Asli

> (1) Ragam Penyandang Disabilitas meliputi:  
> a. Penyandang Disabilitas fisik;  
> b. Penyandang Disabilitas intelektual;  
> c. Penyandang Disabilitas mental; dan/atau  
> d. Penyandang Disabilitas sensorik.  
>  
> (2) Ragam Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) dapat dialami secara tunggal, ganda, atau multi dalam jangka waktu lama yang ditetapkan oleh tenaga medis sesuai dengan ketentuan peraturan perundang-undangan.

### Bahasa Sederhana

Disabilitas tidak cuma satu jenis. Tunanetra masuk dalam disabilitas sensorik. Seseorang juga bisa punya lebih dari satu jenis disabilitas.

### Keyword

```yaml
keywords:
  - ragam disabilitas
  - disabilitas sensorik
  - tunanetra
  - jenis disabilitas
```

---

## 4.5 Pasal 5: Daftar Hak Penyandang Disabilitas

### Pasal Asli

> (1) Penyandang Disabilitas memiliki hak:  
> a. hidup;  
> b. bebas dari stigma;  
> c. privasi;  
> d. keadilan dan perlindungan hukum;  
> e. pendidikan;  
> f. pekerjaan, kewirausahaan, dan koperasi;  
> g. kesehatan;  
> h. politik;  
> i. keagamaan;  
> j. keolahragaan;  
> k. kebudayaan dan pariwisata;  
> l. kesejahteraan sosial;  
> m. Aksesibilitas;  
> n. Pelayanan Publik;  
> o. Pelindungan dari bencana;  
> p. habilitasi dan rehabilitasi;  
> q. Konsesi;  
> r. pendataan;  
> s. hidup secara mandiri dan dilibatkan dalam masyarakat;  
> t. berekspresi, berkomunikasi, dan memperoleh informasi;  
> u. berpindah tempat dan kewarganegaraan; dan  
> v. bebas dari tindakan Diskriminasi, penelantaran, penyiksaan, dan eksploitasi.

### Bahasa Sederhana

Penyandang disabilitas punya banyak hak, bukan hanya bantuan sosial. Haknya mencakup hidup, pendidikan, kerja, kesehatan, layanan publik, aksesibilitas, informasi, dan perlindungan dari diskriminasi.

### Keyword

```yaml
keywords:
  - hak disabilitas
  - hak tunanetra
  - aksesibilitas
  - pelayanan publik
  - pendidikan disabilitas
  - kerja disabilitas
  - kesehatan disabilitas
```

---

## 4.6 Pasal 9: Hak Keadilan dan Perlindungan Hukum

### Pasal Asli

> Hak keadilan dan perlindungan hukum untuk Penyandang Disabilitas meliputi hak:  
> a. atas perlakuan yang sama di hadapan hukum;  
> b. diakui sebagai subjek hukum;  
> c. memiliki dan mewarisi harta bergerak atau tidak bergerak;  
> d. mengendalikan masalah keuangan atau menunjuk orang untuk mewakili kepentingannya dalam urusan keuangan;  
> e. memperoleh akses terhadap pelayanan jasa perbankan dan nonperbankan;  
> f. memperoleh penyediaan Aksesibilitas dalam pelayanan peradilan;  
> g. atas Pelindungan dari segala tekanan, kekerasan, penganiayaan, Diskriminasi, dan/atau perampasan atau pengambilalihan hak milik;  
> h. memilih dan menunjuk orang untuk mewakili kepentingannya dalam hal keperdataan di dalam dan di luar pengadilan; dan  
> i. dilindungi hak kekayaan intelektualnya.

### Bahasa Sederhana

Penyandang disabilitas berhak diperlakukan sama di pengadilan, bank, dan urusan hukum. Tunanetra juga berhak mendapat akses dalam proses peradilan, misalnya dokumen yang bisa dibaca screen reader, pendampingan, atau format yang mudah diakses.

### Keyword

```yaml
keywords:
  - bantuan hukum
  - pengadilan
  - bank
  - peradilan aksesibel
  - subjek hukum
  - perlindungan hukum disabilitas
```

---

## 4.7 Pasal 10: Hak Pendidikan

### Pasal Asli

> Hak pendidikan untuk Penyandang Disabilitas meliputi hak:  
> a. mendapatkan pendidikan yang bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan secara inklusif dan khusus;  
> b. mempunyai Kesamaan Kesempatan untuk menjadi pendidik atau tenaga kependidikan pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan;  
> c. mempunyai Kesamaan Kesempatan sebagai penyelenggara pendidikan yang bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan; dan  
> d. mendapatkan Akomodasi yang Layak sebagai peserta didik.

### Bahasa Sederhana

Tunanetra berhak mendapat pendidikan yang bermutu, baik di sekolah/kampus inklusif maupun pendidikan khusus. Sekolah/kampus seharusnya menyediakan akomodasi yang layak, misalnya materi digital aksesibel, audio, braille, atau bantuan pembelajaran.

### Keyword

```yaml
keywords:
  - sekolah inklusif
  - kampus inklusif
  - materi aksesibel
  - akomodasi pendidikan
  - pendidikan khusus
  - tunanetra sekolah
```

---

## 4.8 Pasal 11: Hak Pekerjaan, Kewirausahaan, dan Koperasi

### Pasal Asli

> Hak pekerjaan, kewirausahaan, dan koperasi untuk Penyandang Disabilitas meliputi hak:  
> a. memperoleh pekerjaan yang diselenggarakan oleh Pemerintah, Pemerintah Daerah, atau swasta tanpa Diskriminasi;  
> b. memperoleh upah yang sama dengan tenaga kerja yang bukan Penyandang Disabilitas dalam jenis pekerjaan dan tanggung jawab yang sama;  
> c. memperoleh Akomodasi yang Layak dalam pekerjaan;  
> d. tidak diberhentikan karena alasan disabilitas;  
> e. mendapatkan program kembali bekerja;  
> f. penempatan kerja yang adil, proporsional, dan bermartabat;  
> g. memperoleh kesempatan dalam mengembangkan jenjang karier serta segala hak normatif yang melekat di dalamnya; dan  
> h. memajukan usaha, memiliki pekerjaan sendiri, wiraswasta, pengembangan koperasi, dan memulai usaha sendiri.

### Bahasa Sederhana

Tunanetra berhak bekerja tanpa diskriminasi, mendapat gaji yang sama untuk pekerjaan yang sama, mendapat akomodasi yang layak, dan tidak boleh diberhentikan hanya karena disabilitas.

### Keyword

```yaml
keywords:
  - kerja disabilitas
  - ditolak kerja
  - gaji sama
  - akomodasi kerja
  - phk karena disabilitas
  - karier disabilitas
```

---

## 4.9 Pasal 12: Hak Kesehatan

### Pasal Asli

> Hak kesehatan untuk Penyandang Disabilitas meliputi hak:  
> a. memperoleh informasi dan komunikasi yang mudah diakses dalam pelayanan kesehatan;  
> b. memperoleh kesamaan dan kesempatan akses atas sumber daya di bidang kesehatan;  
> c. memperoleh kesamaan dan kesempatan pelayanan kesehatan yang aman, bermutu, dan terjangkau;  
> d. memperoleh kesamaan dan kesempatan secara mandiri dan bertanggung jawab menentukan sendiri pelayanan kesehatan yang diperlukan bagi dirinya;  
> e. memperoleh Alat Bantu Kesehatan berdasarkan kebutuhannya;  
> f. memperoleh obat yang bermutu dengan efek samping yang rendah;  
> g. memperoleh Pelindungan dari upaya percobaan medis; dan  
> h. memperoleh Pelindungan dalam penelitian dan pengembangan kesehatan yang mengikutsertakan manusia sebagai subjek.

### Bahasa Sederhana

Tunanetra berhak mendapat informasi kesehatan yang bisa diakses, layanan kesehatan yang aman, dan kesempatan yang sama dalam pelayanan kesehatan. Petugas kesehatan sebaiknya menjelaskan tindakan medis dengan cara yang bisa dipahami.

### Keyword

```yaml
keywords:
  - rumah sakit aksesibel
  - puskesmas
  - informasi kesehatan
  - alat bantu kesehatan
  - pasien disabilitas
  - layanan kesehatan
```

---

## 4.10 Pasal 17: Hak Kesejahteraan Sosial

### Pasal Asli

> Hak kesejahteraan sosial untuk Penyandang Disabilitas meliputi hak rehabilitasi sosial, jaminan sosial, pemberdayaan sosial, dan perlindungan sosial.

### Bahasa Sederhana

Penyandang disabilitas berhak mendapat dukungan sosial, misalnya rehabilitasi sosial, jaminan sosial, pemberdayaan, dan perlindungan sosial sesuai kebutuhan.

### Keyword

```yaml
keywords:
  - bantuan sosial
  - jaminan sosial
  - rehabilitasi sosial
  - perlindungan sosial
  - pemberdayaan disabilitas
```

---

## 4.11 Pasal 18: Hak Aksesibilitas

### Pasal Asli

> Hak Aksesibilitas untuk Penyandang Disabilitas meliputi hak:  
> a. mendapatkan Aksesibilitas untuk memanfaatkan fasilitas publik; dan  
> b. mendapatkan Akomodasi yang Layak sebagai bentuk Aksesibilitas bagi individu.

### Bahasa Sederhana

Tunanetra berhak memakai fasilitas publik dengan akses yang layak. Contohnya jalur pemandu, informasi suara, dokumen digital aksesibel, petunjuk yang jelas, dan bantuan jika diperlukan.

### Keyword

```yaml
keywords:
  - aksesibilitas
  - fasilitas publik
  - jalur pemandu
  - guiding block
  - akomodasi layak
  - fasilitas disabilitas
```

---

## 4.12 Pasal 19: Hak Pelayanan Publik

### Pasal Asli

> Hak Pelayanan Publik untuk Penyandang Disabilitas meliputi hak:  
> a. memperoleh Akomodasi yang Layak dalam Pelayanan Publik secara optimal, wajar, bermartabat tanpa Diskriminasi; dan  
> b. pendampingan, penerjemahan, dan penyediaan fasilitas yang mudah diakses di tempat layanan publik tanpa tambahan biaya.

### Bahasa Sederhana

Saat mengurus layanan publik, tunanetra berhak mendapat bantuan atau fasilitas yang mudah diakses tanpa biaya tambahan. Contohnya dibantu membaca formulir, diberi dokumen digital aksesibel, atau dibantu navigasi di kantor layanan.

### Keyword

```yaml
keywords:
  - pelayanan publik
  - kantor pemerintah
  - formulir aksesibel
  - pendampingan
  - layanan tanpa diskriminasi
  - biaya tambahan
```

---

## 4.13 Pasal 20: Hak Pelindungan dari Bencana

### Pasal Asli

> Hak Pelindungan dari bencana untuk Penyandang Disabilitas meliputi hak:  
> a. mendapatkan informasi yang mudah diakses akan adanya bencana;  
> b. mendapatkan pengetahuan tentang pengurangan risiko bencana;  
> c. mendapatkan prioritas dalam proses penyelamatan dan evakuasi dalam keadaan bencana;  
> d. mendapatkan fasilitas dan sarana penyelamatan dan evakuasi yang mudah diakses; dan  
> e. mendapatkan prioritas, fasilitas, dan sarana yang mudah diakses di lokasi pengungsian.

### Bahasa Sederhana

Dalam bencana, tunanetra berhak mendapat informasi bencana yang bisa diakses, prioritas evakuasi, dan fasilitas pengungsian yang aman serta mudah dipakai.

### Keyword

```yaml
keywords:
  - bencana
  - evakuasi
  - pengungsian
  - informasi bencana
  - prioritas penyelamatan
```

---

## 4.14 Pasal 21: Hak Habilitasi dan Rehabilitasi

### Pasal Asli

> Hak habilitasi dan rehabilitasi untuk Penyandang Disabilitas meliputi hak:  
> a. mendapatkan habilitasi dan rehabilitasi sejak dini dan secara inklusif sesuai dengan kebutuhan;  
> b. bebas memilih bentuk rehabilitasi yang akan diikuti; dan  
> c. mendapatkan habilitasi dan rehabilitasi yang tidak merendahkan martabat manusia.

### Bahasa Sederhana

Tunanetra berhak mendapat layanan habilitasi/rehabilitasi yang sesuai kebutuhan dan tidak merendahkan martabat. Layanan ini seharusnya membantu kemandirian, bukan memperlakukan penyandang disabilitas sebagai beban.

### Keyword

```yaml
keywords:
  - rehabilitasi
  - habilitasi
  - pelatihan mandiri
  - orientasi mobilitas
  - kemandirian tunanetra
```

---

## 4.15 Pasal 24: Hak Berekspresi, Berkomunikasi, dan Memperoleh Informasi

### Pasal Asli

> Hak berekspresi, berkomunikasi, dan memperoleh informasi untuk Penyandang Disabilitas meliputi hak:  
> a. memiliki kebebasan berekspresi dan berpendapat;  
> b. mendapatkan informasi dan berkomunikasi melalui media yang mudah diakses; dan  
> c. menggunakan dan memperoleh fasilitas informasi dan komunikasi berupa bahasa isyarat, braille, dan komunikasi augmentatif dalam interaksi resmi.

### Bahasa Sederhana

Tunanetra berhak mendapat informasi lewat media yang bisa diakses. Untuk tunanetra, ini bisa berarti braille, audio, website ramah screen reader, dokumen teks, atau format lain yang mudah digunakan.

### Keyword

```yaml
keywords:
  - braille
  - audio
  - screen reader
  - informasi aksesibel
  - komunikasi resmi
  - dokumen digital
```

---

## 4.16 Pasal 26: Bebas dari Diskriminasi, Penelantaran, Penyiksaan, dan Eksploitasi

### Pasal Asli

> Hak bebas dari Diskriminasi, penelantaran, penyiksaan, dan eksploitasi untuk Penyandang Disabilitas meliputi hak:  
> a. bersosialisasi dan berinteraksi dalam kehidupan berkeluarga, bermasyarakat, dan bernegara tanpa rasa takut; dan  
> b. mendapatkan Pelindungan dari segala bentuk kekerasan fisik, psikis, ekonomi, dan seksual.

### Bahasa Sederhana

Tunanetra berhak hidup di keluarga dan masyarakat tanpa takut direndahkan, dikucilkan, dimanfaatkan, atau disakiti. Jika ada kekerasan atau eksploitasi, itu bukan “urusan pribadi” saja, tetapi bisa menjadi pelanggaran hak.

### Keyword

```yaml
keywords:
  - diskriminasi
  - penelantaran
  - eksploitasi
  - kekerasan
  - pelecehan
  - dikucilkan
```

---

## 4.17 Pasal 40: Pendidikan Inklusif dan Pendidikan Khusus

### Pasal Asli

> (1) Pemerintah dan Pemerintah Daerah wajib menyelenggarakan dan/atau memfasilitasi pendidikan untuk Penyandang Disabilitas di setiap jalur, jenis, dan jenjang pendidikan sesuai dengan kewenangannya.  
> (2) Penyelenggaraan dan/atau fasilitasi pendidikan untuk Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) dilaksanakan dalam sistem pendidikan nasional melalui pendidikan inklusif dan pendidikan khusus.

### Bahasa Sederhana

Pemerintah wajib memfasilitasi pendidikan bagi penyandang disabilitas di semua jenjang. Bentuknya bisa pendidikan inklusif atau pendidikan khusus.

### Keyword

```yaml
keywords:
  - pendidikan inklusif
  - pendidikan khusus
  - sekolah disabilitas
  - kampus disabilitas
  - pemerintah wajib pendidikan
```

---

## 4.18 Pasal 53: Kuota Pekerja Penyandang Disabilitas

### Pasal Asli

> (1) Pemerintah, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah wajib mempekerjakan paling sedikit 2% (dua persen) Penyandang Disabilitas dari jumlah pegawai atau pekerja.  
> (2) Perusahaan swasta wajib mempekerjakan paling sedikit 1% (satu persen) Penyandang Disabilitas dari jumlah pegawai atau pekerja.

### Bahasa Sederhana

Instansi pemerintah/BUMN/BUMD wajib punya paling sedikit 2% pekerja penyandang disabilitas. Perusahaan swasta wajib punya paling sedikit 1%. Ini bisa dipakai untuk halaman tentang kesempatan kerja.

### Keyword

```yaml
keywords:
  - kuota disabilitas
  - lowongan disabilitas
  - kerja di perusahaan
  - bumn disabilitas
  - cpns disabilitas
  - 1 persen
  - 2 persen
```

---

## 4.19 Pasal 97 dan Pasal 98: Infrastruktur dan Bangunan Gedung

### Pasal Asli

> **Pasal 97**  
> (1) Pemerintah dan Pemerintah Daerah wajib menjamin infrastruktur yang mudah diakses oleh Penyandang Disabilitas.  
> (2) Infrastruktur yang mudah diakses oleh Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) meliputi:  
> a. bangunan gedung;  
> b. jalan;  
> c. permukiman; dan  
> d. pertamanan dan permakaman.  
>  
> **Pasal 98**  
> (1) Bangunan gedung yang mudah diakses oleh Penyandang Disabilitas sebagaimana dimaksud dalam Pasal 97 ayat (2) huruf a memiliki fungsi: hunian, keagamaan, usaha, sosial dan budaya, olahraga, dan khusus.  
> (2) Bangunan gedung yang mudah diakses oleh Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) harus dilengkapi dengan fasilitas dan Aksesibilitas dengan mempertimbangkan kebutuhan, fungsi, luas, dan ketinggian bangunan gedung sesuai dengan ketentuan peraturan perundang-undangan.

### Bahasa Sederhana

Bangunan dan infrastruktur publik harus mudah diakses penyandang disabilitas. Untuk tunanetra, ini bisa berarti jalur pemandu, petunjuk suara, tanda yang jelas, petugas pendamping, atau desain bangunan yang tidak membahayakan.

### Keyword

```yaml
keywords:
  - bangunan aksesibel
  - jalan aksesibel
  - guiding block
  - fasilitas umum
  - gedung publik
  - infrastruktur disabilitas
```

---

## 4.20 Pasal 101 dan Pasal 102: Jalan dan Penyeberangan

### Pasal Asli

> **Pasal 101**  
> (1) Pemerintah dan Pemerintah Daerah wajib menyediakan fasilitas untuk pejalan kaki yang mudah diakses oleh Penyandang Disabilitas.  
> (2) Fasilitas untuk pejalan kaki yang mudah diakses sebagaimana dimaksud pada ayat (1) dilaksanakan sesuai dengan ketentuan peraturan perundang-undangan.  
>  
> **Pasal 102**  
> (1) Pemerintah dan Pemerintah Daerah wajib menyediakan tempat penyeberangan pejalan kaki yang mudah diakses oleh Penyandang Disabilitas.  
> (2) Persyaratan mengenai tempat penyeberangan pejalan kaki yang mudah diakses oleh Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) dilaksanakan sesuai dengan ketentuan peraturan perundang-undangan.

### Bahasa Sederhana

Trotoar dan tempat penyeberangan seharusnya bisa dipakai penyandang disabilitas. Untuk tunanetra, penyeberangan yang aman bisa mencakup suara penyeberangan, marka yang jelas, dan jalur pemandu yang tidak terhalang.

### Keyword

```yaml
keywords:
  - trotoar
  - penyeberangan
  - zebra cross
  - guiding block rusak
  - jalan tidak aksesibel
```

---

## 4.21 Pasal 105–108: Pelayanan Publik Mudah Diakses

### Pasal Asli

> **Pasal 105**  
> (1) Pemerintah dan Pemerintah Daerah wajib menyediakan Pelayanan Publik yang mudah diakses oleh Penyandang Disabilitas sesuai dengan ketentuan peraturan perundang-undangan.  
> (2) Pelayanan Publik sebagaimana dimaksud pada ayat (1) termasuk pelayanan jasa transportasi publik.  
> (3) Pelayanan Publik yang mudah diakses sebagaimana dimaksud pada ayat (1) diselenggarakan oleh institusi penyelenggara negara, korporasi, lembaga independen yang dibentuk berdasarkan undang-undang untuk kegiatan Pelayanan Publik, dan badan hukum lain yang dibentuk untuk Pelayanan Publik.  
> (4) Pendanaan Pelayanan Publik bagi Penyandang Disabilitas bersumber dari Anggaran Pendapatan dan Belanja Negara, anggaran pendapatan dan belanja daerah, dan/atau anggaran korporasi atau badan hukum yang menyelenggarakan Pelayanan Publik.  
>  
> **Pasal 106**  
> (1) Pemerintah dan Pemerintah Daerah wajib menyebarluaskan dan menyosialisasikan Pelayanan Publik yang mudah diakses sebagaimana dimaksud dalam Pasal 105 kepada Penyandang Disabilitas dan masyarakat.  
> (2) Penyelenggara Pelayanan Publik wajib menyediakan panduan Pelayanan Publik yang mudah diakses oleh Penyandang Disabilitas.  
>  
> **Pasal 107**  
> (1) Pelayanan jasa transportasi sebagaimana dimaksud dalam Pasal 105 ayat (2) terdiri dari pelayanan jasa transportasi darat, transportasi kereta api, transportasi laut, dan transportasi udara.  
> (2) Pemerintah dan Pemerintah Daerah dapat bekerja sama dengan korporasi atau badan hukum dalam menyediakan pelayanan jasa transportasi publik.  
>  
> **Pasal 108**  
> Ketentuan lebih lanjut mengenai Pelayanan Publik yang mudah diakses oleh Penyandang Disabilitas diatur dengan Peraturan Pemerintah.

### Bahasa Sederhana

Layanan publik wajib mudah diakses penyandang disabilitas, termasuk transportasi umum. Penyelenggara layanan juga wajib menyediakan panduan yang mudah diakses.

### Keyword

```yaml
keywords:
  - layanan publik aksesibel
  - transportasi publik
  - kereta
  - bus
  - pesawat
  - panduan layanan
  - kantor layanan
```

---

## 4.22 Pasal 117–121: Pendataan dan Kartu Penyandang Disabilitas

### Pasal Asli

> **Pasal 117**  
> (1) Penyelenggaraan pendataan terhadap Penyandang Disabilitas dilakukan oleh kementerian yang menyelenggarakan urusan pemerintahan di bidang sosial secara mandiri atau bersama dengan lembaga yang menyelenggarakan urusan pemerintahan di bidang statistik berdasarkan ketentuan peraturan perundang-undangan.  
> (2) Pendataan terhadap Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) dilakukan untuk memperoleh data akurat tentang karakteristik pokok dan rinci Penyandang Disabilitas.  
>  
> **Pasal 119**  
> (1) Penyandang Disabilitas yang belum terdata dalam pendataan sebagaimana dimaksud dalam Pasal 117 dapat secara aktif mendaftarkan diri kepada lurah atau kepala desa atau nama lain di tempat tinggalnya.  
>  
> **Pasal 121**  
> (1) Penyandang Disabilitas yang telah terdapat dalam data nasional Penyandang Disabilitas berhak mendapatkan kartu Penyandang Disabilitas.  
> (2) Kartu Penyandang Disabilitas sebagaimana dimaksud pada ayat (1) dikeluarkan oleh kementerian yang menyelenggarakan urusan pemerintahan di bidang sosial.  
> (3) Ketentuan lebih lanjut mengenai penerbitan kartu Penyandang Disabilitas diatur dengan Peraturan Menteri.

### Bahasa Sederhana

Penyandang disabilitas bisa didata agar hak dan layanan lebih mudah diberikan. Jika belum terdata, bisa mendaftarkan diri melalui lurah/kepala desa. Penyandang disabilitas yang sudah masuk data nasional berhak mendapat Kartu Penyandang Disabilitas.

### Keyword

```yaml
keywords:
  - kartu disabilitas
  - data disabilitas
  - daftar disabilitas
  - kelurahan
  - kepala desa
  - dtks
```

---

## 4.23 Pasal 122: Komunikasi Penyandang Disabilitas

### Pasal Asli

> (1) Pemerintah dan Pemerintah Daerah wajib mengakui, menerima, dan memfasilitasi komunikasi Penyandang Disabilitas dengan menggunakan cara tertentu.  
> (2) Komunikasi dengan menggunakan cara tertentu sebagaimana dimaksud pada ayat (1) dilakukan dengan cara, alat, dan bentuk lainnya yang dapat dijangkau sesuai dengan pilihan Penyandang Disabilitas dalam berinteraksi.

### Bahasa Sederhana

Pemerintah wajib menerima cara komunikasi yang sesuai dengan kebutuhan penyandang disabilitas. Untuk tunanetra, ini bisa berupa audio, braille, teks digital, pembacaan dokumen, atau aplikasi yang ramah screen reader.

### Keyword

```yaml
keywords:
  - komunikasi aksesibel
  - braille
  - audio
  - screen reader
  - dokumen digital
  - cara komunikasi
```

---

## 4.24 Pasal 143 dan 145: Larangan Menghalangi Hak dan Sanksi

### Pasal Asli

> **Pasal 143**  
> Setiap Orang dilarang menghalang-halangi dan/atau melarang Penyandang Disabilitas untuk mendapatkan: hak pendidikan, hak pekerjaan, hak kesehatan, hak politik, hak keagamaan, hak keolahragaan, hak kebudayaan dan pariwisata, hak kesejahteraan sosial, hak Aksesibilitas, hak Pelayanan Publik, hak Pelindungan dari bencana, hak habilitasi dan rehabilitasi, hak pendataan, hak hidup secara mandiri dan dilibatkan dalam masyarakat, hak berekspresi, berkomunikasi, dan memperoleh informasi, hak kewarganegaraan, hak bebas dari Diskriminasi, penelantaran, penyiksaan, dan eksploitasi, dan hak keadilan dan perlindungan hukum.  
>  
> **Pasal 145**  
> Setiap Orang yang menghalang-halangi dan/atau melarang Penyandang Disabilitas untuk mendapatkan hak sebagaimana dimaksud dalam Pasal 143 dipidana dengan pidana penjara paling lama 2 (dua) tahun dan denda paling banyak Rp200.000.000,00 (dua ratus juta rupiah).

### Bahasa Sederhana

Orang tidak boleh menghalangi penyandang disabilitas untuk mendapatkan haknya. Jika menghalangi hak-hak tersebut, ada ancaman pidana. Untuk web, pasal ini cocok ditampilkan saat user mencari “ditolak”, “dilarang”, “tidak boleh masuk”, “tidak dilayani”, atau “didiskriminasi”.

### Keyword

```yaml
keywords:
  - menghalangi hak
  - dilarang masuk
  - tidak dilayani
  - ditolak sekolah
  - ditolak kerja
  - pidana diskriminasi
```

---

# 5. UU Nomor 25 Tahun 2009 tentang Pelayanan Publik

## 5.1 Ringkasan untuk User

UU Pelayanan Publik mengatur hubungan antara masyarakat dan penyelenggara layanan publik. Ini penting untuk tunanetra ketika mengurus KTP, BPJS, rumah sakit, kampus, transportasi, kantor pemerintah, perbankan tertentu, dan layanan lain.

## 5.2 Status Ringkas

```yaml
nomor: 25
tahun: 2009
judul: Pelayanan Publik
status: berlaku
fokus:
  - kepastian hukum layanan
  - standar pelayanan
  - hak masyarakat
  - pengaduan layanan publik
  - fasilitas dan perlakuan khusus kelompok rentan
```

---

## 5.3 Pasal 2: Kepastian Hukum dalam Pelayanan Publik

### Pasal Asli

> Undang-Undang tentang Pelayanan Publik dimaksudkan untuk memberikan kepastian hukum dalam hubungan antara masyarakat dan penyelenggara dalam pelayanan publik.

### Bahasa Sederhana

Pelayanan publik harus punya aturan yang jelas. Masyarakat, termasuk tunanetra, tidak boleh dibuat bingung oleh layanan yang tidak jelas, berbelit-belit, atau berubah-ubah tanpa alasan.

### Keyword

```yaml
keywords:
  - pelayanan publik
  - kepastian layanan
  - kantor pemerintah
  - prosedur tidak jelas
```

---

## 5.4 Pasal 3: Tujuan Pelayanan Publik

### Pasal Asli

> Tujuan Undang-Undang tentang Pelayanan Publik adalah:  
> a. terwujudnya batasan dan hubungan yang jelas tentang hak, tanggung jawab, kewajiban, dan kewenangan seluruh pihak yang terkait dengan penyelenggaraan pelayanan publik;  
> b. terwujudnya sistem penyelenggaraan pelayanan publik yang layak sesuai dengan asas-asas umum pemerintahan dan korporasi yang baik;  
> c. terpenuhinya penyelenggaraan pelayanan publik sesuai dengan peraturan perundang-undangan; dan  
> d. terwujudnya perlindungan dan kepastian hukum bagi masyarakat dalam penyelenggaraan pelayanan publik.

### Bahasa Sederhana

Layanan publik harus jelas hak dan kewajibannya, layak, sesuai aturan, dan memberi perlindungan hukum bagi masyarakat.

### Keyword

```yaml
keywords:
  - layanan layak
  - hak masyarakat
  - perlindungan hukum layanan
  - pelayanan berbelit
```

---

## 5.5 Pasal 4: Asas Pelayanan Publik

### Pasal Asli

> Penyelenggaraan pelayanan publik berasaskan: kepentingan umum; kepastian hukum; kesamaan hak; keseimbangan hak dan kewajiban; keprofesionalan; partisipatif; persamaan perlakuan/tidak diskriminatif; keterbukaan; akuntabilitas; fasilitas dan perlakuan khusus bagi kelompok rentan; ketepatan waktu; dan kecepatan, kemudahan, dan keterjangkauan.

### Bahasa Sederhana

Layanan publik harus adil, terbuka, cepat, mudah, tidak diskriminatif, dan memberi fasilitas/perlakuan khusus bagi kelompok rentan. Penyandang disabilitas termasuk kelompok yang membutuhkan akses dan dukungan khusus.

### Keyword

```yaml
keywords:
  - tidak diskriminatif
  - fasilitas khusus
  - kelompok rentan
  - layanan cepat
  - layanan mudah
  - pelayanan setara
```

---

## 5.6 Pasal 5: Ruang Lingkup Pelayanan Publik

### Pasal Asli

> (1) Ruang lingkup pelayanan publik meliputi pelayanan barang publik dan jasa publik serta pelayanan administratif yang diatur dalam peraturan perundang-undangan.  
> (2) Ruang lingkup sebagaimana dimaksud pada ayat (1) meliputi pendidikan, pengajaran, pekerjaan dan usaha, tempat tinggal, komunikasi dan informasi, lingkungan hidup, kesehatan, jaminan sosial, energi, perbankan, perhubungan, sumber daya alam, pariwisata, dan sektor lain yang terkait.

### Bahasa Sederhana

Pelayanan publik sangat luas. Termasuk pendidikan, pekerjaan, kesehatan, jaminan sosial, transportasi, informasi, dan administrasi. Jadi, jika tunanetra mengalami hambatan di layanan-layanan itu, bisa masuk isu pelayanan publik.

### Keyword

```yaml
keywords:
  - administrasi
  - kesehatan
  - transportasi
  - pendidikan
  - perbankan
  - jaminan sosial
  - komunikasi informasi
```

---

## 5.7 Pasal 8: Kewajiban Penyelenggara Layanan

### Pasal Asli

> (1) Organisasi Penyelenggara berkewajiban menyelenggarakan pelayanan publik sesuai dengan tujuan pembentukan.  
> (2) Penyelenggaraan pelayanan publik sebagaimana dimaksud pada ayat (1), sekurang-kurangnya meliputi:  
> a. pelaksanaan pelayanan;  
> b. pengelolaan pengaduan masyarakat;  
> c. pengelolaan informasi;  
> d. pengawasan internal;  
> e. penyuluhan kepada masyarakat; dan  
> f. pelayanan konsultasi.  
> (3) Penyelenggara dan seluruh bagian Organisasi Penyelenggara bertanggung jawab atas ketidakmampuan, pelanggaran, dan kegagalan penyelenggaraan pelayanan.

### Bahasa Sederhana

Penyelenggara layanan wajib menyediakan layanan, informasi, pengaduan, dan konsultasi. Jika layanan gagal atau melanggar, penyelenggara bertanggung jawab.

### Keyword

```yaml
keywords:
  - pengaduan layanan
  - konsultasi layanan
  - layanan gagal
  - informasi layanan
  - tanggung jawab penyelenggara
```

---

## 5.8 Pasal 15: Kewajiban Penyelenggara

### Pasal Asli

> Penyelenggara berkewajiban:  
> a. menyusun dan menetapkan standar pelayanan;  
> b. menyusun, menetapkan, dan memublikasikan maklumat pelayanan;  
> c. menempatkan pelaksana yang kompeten;  
> d. menyediakan sarana, prasarana, dan/atau fasilitas pelayanan publik yang mendukung terciptanya iklim pelayanan yang memadai;  
> e. memberikan pelayanan yang berkualitas sesuai dengan asas penyelenggaraan pelayanan publik;  
> f. melaksanakan pelayanan sesuai dengan standar pelayanan;  
> g. berpartisipasi aktif dan mematuhi peraturan perundang-undangan yang terkait dengan penyelenggaraan pelayanan publik;  
> h. memberikan pertanggungjawaban terhadap pelayanan yang diselenggarakan;  
> i. membantu masyarakat dalam memahami hak dan tanggung jawabnya;  
> j. bertanggung jawab dalam pengelolaan organisasi penyelenggara pelayanan publik;  
> k. memberikan pertanggungjawaban sesuai dengan hukum yang berlaku apabila mengundurkan diri atau melepaskan tanggung jawab atas posisi atau jabatan; dan  
> l. memenuhi panggilan atau mewakili organisasi untuk hadir atau melaksanakan perintah suatu tindakan hukum atas permintaan pejabat yang berwenang.

### Bahasa Sederhana

Instansi layanan wajib punya standar, fasilitas, petugas yang kompeten, layanan berkualitas, dan membantu masyarakat memahami haknya. Ini penting jika user tunanetra tidak tahu prosedur atau tidak bisa membaca formulir.

### Keyword

```yaml
keywords:
  - standar pelayanan
  - fasilitas layanan
  - petugas tidak membantu
  - formulir tidak aksesibel
  - hak masyarakat layanan
```

---

## 5.9 Pasal 18: Hak Masyarakat dalam Pelayanan Publik

### Pasal Asli

> Masyarakat berhak:  
> a. mengetahui kebenaran isi standar pelayanan;  
> b. mengawasi pelaksanaan standar pelayanan;  
> c. mendapat tanggapan terhadap pengaduan yang diajukan;  
> d. mendapat advokasi, perlindungan, dan/atau pemenuhan pelayanan;  
> e. memberitahukan kepada pimpinan penyelenggara untuk memperbaiki pelayanan apabila pelayanan yang diberikan tidak sesuai dengan standar pelayanan;  
> f. memberitahukan kepada pelaksana untuk memperbaiki pelayanan apabila pelayanan yang diberikan tidak sesuai dengan standar pelayanan;  
> g. mengadukan pelaksana yang melakukan penyimpangan standar pelayanan dan/atau tidak memperbaiki pelayanan kepada penyelenggara dan ombudsman;  
> h. mengadukan penyelenggara yang melakukan penyimpangan standar pelayanan dan/atau tidak memperbaiki pelayanan kepada pembina penyelenggara dan ombudsman; dan  
> i. mendapat pelayanan yang berkualitas sesuai dengan asas dan tujuan pelayanan.

### Bahasa Sederhana

Masyarakat berhak tahu standar layanan, mengawasi layanan, mengadu, mendapat tanggapan, dan mendapat layanan yang berkualitas. Jika tunanetra tidak dilayani dengan baik, ia berhak mengadu.

### Keyword

```yaml
keywords:
  - hak masyarakat
  - komplain layanan
  - ombudsman
  - pengaduan
  - pelayanan buruk
  - tidak ditanggapi
```

---

# 6. UU Nomor 39 Tahun 1999 tentang Hak Asasi Manusia

## 6.1 Ringkasan untuk User

UU HAM memperkuat dasar bahwa setiap orang punya hak yang melekat sebagai manusia. Untuk platform ini, UU HAM cocok dipakai sebagai dasar anti-diskriminasi, hak pendidikan, hak kerja, hak memperoleh keadilan, hak kelompok rentan, dan tanggung jawab pemerintah.

## 6.2 Status Ringkas

```yaml
nomor: 39
tahun: 1999
judul: Hak Asasi Manusia
status: berlaku
fokus:
  - anti-diskriminasi
  - hak hidup
  - hak pendidikan
  - hak keadilan
  - hak kerja
  - kelompok rentan
  - tanggung jawab pemerintah
```

---

## 6.3 Pasal 1 Angka 3: Definisi Diskriminasi

### Pasal Asli

> Diskriminasi adalah setiap pembatasan, pelecehan, atau pengucilan yang langsung ataupun tak langsung didasarkan pada pembedaan manusia atas dasar agama, suku, ras, etnik, kelompok, golongan, status sosial, status ekonomi, jenis kelamin, bahasa, keyakinan politik, yang berakibat pengurangan, penyimpangan atau penghapusan pengakuan, pelaksanaan atau penggunaan hak asasi manusia dan kebebasan dasar dalam kehidupan baik individual maupun kolektif dalam bidang politik, ekonomi, hukum, sosial, budaya, dan aspek kehidupan lainnya.

### Bahasa Sederhana

Diskriminasi adalah perlakuan membatasi, melecehkan, atau mengucilkan seseorang karena identitas/kondisinya sehingga haknya berkurang atau hilang. Untuk platform ini, diskriminasi bisa dipakai saat user bercerita ditolak, dipersulit, atau direndahkan karena tunanetra.

### Keyword

```yaml
keywords:
  - diskriminasi
  - dikucilkan
  - dilecehkan
  - dibatasi
  - ditolak
```

---

## 6.4 Pasal 3: Perlakuan Hukum dan HAM Tanpa Diskriminasi

### Pasal Asli

> (1) Setiap orang dilahirkan bebas dengan harkat dan martabat manusia yang sama dan sederajat serta dikaruniai akal dan hati murni untuk hidup bermasyarakat, berbangsa, dan bernegara dalam semangat persaudaraan.  
> (2) Setiap orang berhak atas pengakuan, jaminan, perlindungan dan perlakuan hukum yang adil serta mendapat kepastian hukum dan perlakuan yang sama di depan hukum.  
> (3) Setiap orang berhak atas perlindungan hak asasi manusia dan kebebasan dasar manusia, tanpa diskriminasi.

### Bahasa Sederhana

Semua orang punya martabat yang sama. Semua orang berhak dilindungi hukum dan HAM tanpa diskriminasi, termasuk penyandang disabilitas.

### Keyword

```yaml
keywords:
  - perlakuan hukum
  - martabat
  - hak asasi
  - tanpa diskriminasi
  - hukum adil
```

---

## 6.5 Pasal 5: Kelompok Rentan Berhak Perlindungan Lebih

### Pasal Asli

> (1) Setiap orang diakui sebagai manusia pribadi yang berhak menuntut dan memperoleh perlakuan serta perlindungan yang sama sesuai dengan martabat kemanusiaannya di depan hukum.  
> (2) Setiap orang berhak mendapat bantuan dan perlindungan yang adil dari pengadilan yang obyektif dan tidak berpihak.  
> (3) Setiap orang yang termasuk kelompok masyarakat yang rentan berhak memperoleh perlakuan dan perlindungan lebih berkenaan dengan kekhususannya.

### Bahasa Sederhana

Kelompok rentan berhak mendapat perlindungan tambahan sesuai kebutuhannya. Penyandang disabilitas dapat masuk konteks kelompok rentan, sehingga dukungan aksesibilitas bukan “keistimewaan”, tetapi bagian dari perlindungan yang adil.

### Keyword

```yaml
keywords:
  - kelompok rentan
  - perlindungan lebih
  - perlakuan khusus
  - bantuan pengadilan
```

---

## 6.6 Pasal 8: Tanggung Jawab Pemerintah

### Pasal Asli

> Perlindungan, pemajuan, penegakan, dan pemenuhan hak asasi manusia terutama menjadi tanggung jawab Pemerintah.

### Bahasa Sederhana

Pemerintah bertanggung jawab melindungi dan memenuhi HAM. Hak disabilitas bukan cuma urusan keluarga atau individu.

### Keyword

```yaml
keywords:
  - tanggung jawab pemerintah
  - pemenuhan ham
  - perlindungan ham
  - negara wajib
```

---

## 6.7 Pasal 9: Hak Hidup dan Lingkungan Sehat

### Pasal Asli

> (1) Setiap orang berhak untuk hidup, mempertahankan hidup dan meningkatkan taraf kehidupannya.  
> (2) Setiap orang berhak tenteram, aman, damai, bahagia, sejahtera lahir dan batin.  
> (3) Setiap orang berhak atas lingkungan hidup yang baik dan sehat.

### Bahasa Sederhana

Setiap orang berhak hidup aman, damai, sejahtera, dan punya lingkungan yang baik. Ini relevan untuk isu keselamatan, penelantaran, dan akses lingkungan yang tidak membahayakan tunanetra.

### Keyword

```yaml
keywords:
  - hak hidup
  - hidup aman
  - lingkungan sehat
  - keselamatan
  - penelantaran
```

---

## 6.8 Pasal 12: Hak Pendidikan dan Pengembangan Diri

### Pasal Asli

> Setiap orang berhak atas perlindungan bagi pengembangan pribadinya, untuk memperoleh pendidikan, mencerdaskan dirinya, dan meningkatkan kualitas hidupnya agar menjadi manusia yang beriman, bertaqwa, bertanggung jawab, berakhlak mulia, bahagia, dan sejahtera sesuai dengan hak asasi manusia.

### Bahasa Sederhana

Setiap orang berhak belajar dan mengembangkan diri. Tunanetra berhak mendapat pendidikan yang membantu meningkatkan kualitas hidupnya.

### Keyword

```yaml
keywords:
  - pendidikan
  - pengembangan diri
  - belajar
  - kualitas hidup
```

---

## 6.9 Pasal 14: Hak Informasi

### Pasal Asli

> (1) Setiap orang berhak untuk berkomunikasi dan memperoleh informasi yang diperlukan untuk mengembangkan pribadinya dan lingkungan sosialnya.  
> (2) Setiap orang berhak untuk mencari, memperoleh, memiliki, menyimpan, mengolah, dan menyampaikan informasi dengan menggunakan segala jenis sarana yang tersedia.

### Bahasa Sederhana

Setiap orang berhak memperoleh dan menyampaikan informasi. Untuk tunanetra, informasi seharusnya disediakan dalam format yang bisa diakses.

### Keyword

```yaml
keywords:
  - informasi
  - komunikasi
  - dokumen aksesibel
  - screen reader
  - audio
```

---

## 6.10 Pasal 17: Hak Memperoleh Keadilan

### Pasal Asli

> Setiap orang, tanpa diskriminasi, berhak untuk memperoleh keadilan dengan mengajukan permohonan, pengaduan, dan gugatan, baik dalam perkara pidana, perdata, maupun administrasi serta diadili melalui proses peradilan yang bebas dan tidak memihak, sesuai dengan hukum acara yang menjamin pemeriksaan yang obyektif oleh hakim yang jujur dan adil untuk memperoleh putusan yang adil dan benar.

### Bahasa Sederhana

Setiap orang berhak mencari keadilan melalui pengaduan atau gugatan tanpa diskriminasi. Jika tunanetra mengalami penolakan layanan atau diskriminasi, ia berhak mencari penyelesaian yang adil.

### Keyword

```yaml
keywords:
  - pengaduan
  - gugatan
  - keadilan
  - peradilan
  - tanpa diskriminasi
```

---

## 6.11 Pasal 38: Hak Pekerjaan

### Pasal Asli

> (1) Setiap warga negara, sesuai dengan bakat, kecakapan, dan kemampuan, berhak atas pekerjaan yang layak.  
> (2) Setiap orang berhak dengan bebas memilih pekerjaan yang disukainya dan berhak pula atas syarat-syarat ketenagakerjaan yang adil.  
> (3) Setiap orang, baik pria maupun wanita yang melakukan pekerjaan yang sama, sebanding, setara atau serupa, berhak atas upah serta syarat-syarat perjanjian kerja yang sama.  
> (4) Setiap orang, baik pria maupun wanita, dalam melakukan pekerjaan yang sepadan dengan martabat kemanusiaannya berhak atas upah yang adil sesuai dengan prestasinya dan dapat menjamin kelangsungan kehidupan keluarganya.

### Bahasa Sederhana

Setiap warga negara berhak atas pekerjaan yang layak, memilih pekerjaan, mendapat syarat kerja adil, dan mendapat upah yang adil. Ini relevan jika user tunanetra ditolak kerja atau diperlakukan tidak adil di tempat kerja.

### Keyword

```yaml
keywords:
  - kerja layak
  - syarat kerja
  - upah adil
  - pilih pekerjaan
  - diskriminasi kerja
```

---

## 6.12 Pasal 42: Hak Kelompok Disabilitas dalam Perawatan dan Bantuan Khusus

### Pasal Asli

> Setiap warga negara yang berusia lanjut, cacat fisik dan/atau cacat mental berhak memperoleh perawatan, pendidikan, pelatihan, dan bantuan khusus atas biaya negara, untuk menjamin kehidupan yang layak sesuai dengan martabat kemanusiaannya, meningkatkan rasa percaya diri, dan kemampuan berpartisipasi dalam kehidupan bermasyarakat, berbangsa, dan bernegara.

### Bahasa Sederhana

Walaupun istilah lama dalam pasal ini masih memakai kata “cacat”, maknanya relevan dengan penyandang disabilitas. Negara perlu menyediakan bantuan, pendidikan, pelatihan, dan perawatan khusus agar penyandang disabilitas dapat hidup layak dan berpartisipasi.

### Keyword

```yaml
keywords:
  - bantuan khusus
  - pelatihan
  - perawatan
  - hidup layak
  - partisipasi masyarakat
```

---

# 7. UU Nomor 13 Tahun 2003 tentang Ketenagakerjaan

## 7.1 Ringkasan untuk User

UU Ketenagakerjaan mengatur hak pekerja dan tenaga kerja. Untuk platform ini, gunakan pasal-pasal yang mendukung kesempatan kerja tanpa diskriminasi, perlakuan yang sama, perlindungan pekerja penyandang disabilitas, keselamatan kerja, dan penghidupan layak. Catatan: sebagian aturan ketenagakerjaan sudah diubah oleh UU Cipta Kerja dan aturan turunannya.

## 7.2 Status Ringkas

```yaml
nomor: 13
tahun: 2003
judul: Ketenagakerjaan
status: berlaku_dengan_perubahan
catatan:
  - Diubah oleh UU Cipta Kerja/UU Nomor 6 Tahun 2023.
  - Untuk fitur final, tampilkan catatan "beberapa ketentuan telah diubah".
  - Pasal yang diambil di sini fokus pada prinsip non-diskriminasi dan hak dasar pekerja.
```

---

## 7.3 Pasal 5: Kesempatan Kerja Tanpa Diskriminasi

### Pasal Asli

> Setiap tenaga kerja memiliki kesempatan yang sama tanpa diskriminasi untuk memperoleh pekerjaan.

### Bahasa Sederhana

Setiap orang yang mampu bekerja punya kesempatan yang sama untuk mendapat pekerjaan. Tunanetra tidak boleh otomatis ditolak hanya karena tunanetra.

### Keyword

```yaml
keywords:
  - kesempatan kerja
  - tanpa diskriminasi
  - ditolak kerja
  - lowongan kerja
  - rekrutmen
```

---

## 7.4 Pasal 6: Perlakuan Sama di Tempat Kerja

### Pasal Asli

> Setiap pekerja/buruh berhak memperoleh perlakuan yang sama tanpa diskriminasi dari pengusaha.

### Bahasa Sederhana

Pekerja berhak diperlakukan sama oleh perusahaan. Jika tunanetra sudah bekerja, perusahaan tidak boleh merendahkan, membedakan hak, atau memperlakukan tidak adil karena disabilitasnya.

### Keyword

```yaml
keywords:
  - perlakuan sama
  - diskriminasi perusahaan
  - pekerja tunanetra
  - hak pekerja
```

---

## 7.5 Pasal 31: Hak Memilih dan Mendapat Pekerjaan

### Pasal Asli

> Setiap tenaga kerja mempunyai hak dan kesempatan yang sama untuk memilih, mendapatkan, atau pindah pekerjaan dan memperoleh penghasilan yang layak di dalam atau di luar negeri.

### Bahasa Sederhana

Setiap tenaga kerja berhak memilih pekerjaan, mendapat pekerjaan, pindah pekerjaan, dan memperoleh penghasilan layak. Tunanetra juga punya hak untuk memilih jalur kerja yang sesuai kemampuan dan minatnya.

### Keyword

```yaml
keywords:
  - memilih pekerjaan
  - pindah kerja
  - penghasilan layak
  - kerja luar negeri
```

---

## 7.6 Pasal 67: Perlindungan Pekerja Penyandang Disabilitas

### Pasal Asli

> (1) Pengusaha yang mempekerjakan tenaga kerja penyandang cacat wajib memberikan perlindungan sesuai dengan jenis dan derajat kecacatannya.  
> (2) Pemberian perlindungan sebagaimana dimaksud dalam ayat (1) dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku.

### Bahasa Sederhana

Istilah lama “penyandang cacat” sekarang lebih baik dipahami sebagai “penyandang disabilitas”. Jika perusahaan mempekerjakan penyandang disabilitas, perusahaan wajib memberi perlindungan sesuai kebutuhannya.

### Keyword

```yaml
keywords:
  - perlindungan pekerja disabilitas
  - pekerja penyandang disabilitas
  - akomodasi kerja
  - keselamatan kerja
```

---

## 7.7 Pasal 86: Keselamatan dan Kesehatan Kerja

### Pasal Asli

> (1) Setiap pekerja/buruh mempunyai hak untuk memperoleh perlindungan atas:  
> a. keselamatan dan kesehatan kerja;  
> b. moral dan kesusilaan; dan  
> c. perlakuan yang sesuai dengan harkat dan martabat manusia serta nilai-nilai agama.  
> (2) Untuk melindungi keselamatan pekerja/buruh guna mewujudkan produktivitas kerja yang optimal diselenggarakan upaya keselamatan dan kesehatan kerja.  
> (3) Perlindungan sebagaimana dimaksud dalam ayat (1) dan ayat (2) dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku.

### Bahasa Sederhana

Setiap pekerja berhak atas keselamatan, kesehatan kerja, dan perlakuan yang manusiawi. Untuk tunanetra, tempat kerja perlu memastikan lingkungan kerja aman dan tidak membahayakan.

### Keyword

```yaml
keywords:
  - keselamatan kerja
  - kesehatan kerja
  - lingkungan kerja aman
  - martabat pekerja
```

---

# 8. UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional

## 8.1 Ringkasan untuk User

UU Sisdiknas mengatur sistem pendidikan nasional. Untuk platform ini, fokus pada hak pendidikan yang sama, pendidikan khusus, prinsip non-diskriminasi, kewajiban pemerintah memberi layanan dan kemudahan, dan hak peserta didik mendapat pelayanan pendidikan sesuai kebutuhan.

## 8.2 Status Ringkas

```yaml
nomor: 20
tahun: 2003
judul: Sistem Pendidikan Nasional
status: berlaku_dengan_catatan
catatan:
  - Beberapa bagian terkena putusan MK dan pasal pidana tertentu dicabut oleh KUHP baru.
  - Untuk konten hak pendidikan, pasal inti tetap relevan.
```

---

## 8.3 Pasal 4: Prinsip Penyelenggaraan Pendidikan

### Pasal Asli

> (1) Pendidikan diselenggarakan secara demokratis dan berkeadilan serta tidak diskriminatif dengan menjunjung tinggi hak asasi manusia, nilai keagamaan, nilai kultural, dan kemajemukan bangsa.  
> (2) Pendidikan diselenggarakan sebagai satu kesatuan yang sistemik dengan sistem terbuka dan multimakna.  
> (3) Pendidikan diselenggarakan sebagai suatu proses pembudayaan dan pemberdayaan peserta didik yang berlangsung sepanjang hayat.  
> (4) Pendidikan diselenggarakan dengan memberi keteladanan, membangun kemauan, dan mengembangkan kreativitas peserta didik dalam proses pembelajaran.  
> (5) Pendidikan diselenggarakan dengan mengembangkan budaya membaca, menulis, dan berhitung bagi segenap warga masyarakat.  
> (6) Pendidikan diselenggarakan dengan memberdayakan semua komponen masyarakat melalui peran serta dalam penyelenggaraan dan pengendalian mutu layanan pendidikan.

### Bahasa Sederhana

Pendidikan harus adil dan tidak diskriminatif. Sekolah atau kampus tidak boleh menolak atau mempersulit tunanetra hanya karena disabilitasnya.

### Keyword

```yaml
keywords:
  - pendidikan tidak diskriminatif
  - sekolah adil
  - kampus inklusif
  - hak peserta didik
```

---

## 8.4 Pasal 5: Hak Warga Negara atas Pendidikan

### Pasal Asli

> (1) Setiap warga negara mempunyai hak yang sama untuk memperoleh pendidikan yang bermutu.  
> (2) Warga negara yang memiliki kelainan fisik, emosional, mental, intelektual, dan/atau sosial berhak memperoleh pendidikan khusus.  
> (3) Warga negara di daerah terpencil atau terbelakang serta masyarakat adat yang terpencil berhak memperoleh pendidikan layanan khusus.  
> (4) Warga negara yang memiliki potensi kecerdasan dan bakat istimewa berhak memperoleh pendidikan khusus.  
> (5) Setiap warga negara berhak mendapat kesempatan meningkatkan pendidikan sepanjang hayat.

### Bahasa Sederhana

Setiap warga negara berhak mendapat pendidikan bermutu. Penyandang disabilitas juga berhak memperoleh pendidikan khusus jika dibutuhkan, dan tetap berhak meningkatkan pendidikan sepanjang hidup.

### Keyword

```yaml
keywords:
  - hak pendidikan
  - pendidikan bermutu
  - pendidikan khusus
  - belajar seumur hidup
  - tunanetra sekolah
```

---

## 8.5 Pasal 11: Kewajiban Pemerintah dalam Pendidikan

### Pasal Asli

> (1) Pemerintah dan pemerintah daerah wajib memberikan layanan dan kemudahan, serta menjamin terselenggaranya pendidikan yang bermutu bagi setiap warga negara tanpa diskriminasi.  
> (2) Pemerintah dan pemerintah daerah wajib menjamin tersedianya dana guna terselenggaranya pendidikan bagi setiap warga negara yang berusia tujuh sampai dengan lima belas tahun.

### Bahasa Sederhana

Pemerintah wajib memberi layanan dan kemudahan pendidikan tanpa diskriminasi. Ini bisa dipakai untuk menjelaskan bahwa akses pendidikan bagi tunanetra bukan sekadar kebaikan sekolah, tapi bagian dari kewajiban sistem pendidikan.

### Keyword

```yaml
keywords:
  - pemerintah wajib pendidikan
  - layanan pendidikan
  - kemudahan pendidikan
  - tanpa diskriminasi
```

---

## 8.6 Pasal 12: Hak Peserta Didik

### Pasal Asli

> (1) Setiap peserta didik pada setiap satuan pendidikan berhak:  
> a. mendapatkan pendidikan agama sesuai dengan agama yang dianutnya dan diajarkan oleh pendidik yang seagama;  
> b. mendapatkan pelayanan pendidikan sesuai dengan bakat, minat, dan kemampuannya;  
> c. mendapatkan beasiswa bagi yang berprestasi;  
> d. mendapatkan biaya pendidikan bagi mereka yang orang tuanya tidak mampu membiayai pendidikannya;  
> e. pindah ke program pendidikan pada jalur dan satuan pendidikan lain yang setara;  
> f. menyelesaikan program pendidikan sesuai dengan kecepatan belajar masing-masing dan tidak menyimpang dari ketentuan batas waktu yang ditetapkan.

### Bahasa Sederhana

Peserta didik berhak mendapat layanan pendidikan sesuai bakat, minat, dan kemampuan. Untuk tunanetra, sekolah/kampus sebaiknya menyesuaikan cara belajar agar peserta didik bisa mengikuti pendidikan dengan adil.

### Keyword

```yaml
keywords:
  - peserta didik
  - layanan pendidikan
  - beasiswa
  - biaya pendidikan
  - belajar sesuai kemampuan
```

---

# 9. UU Nomor 17 Tahun 2023 tentang Kesehatan

## 9.1 Ringkasan untuk User

UU Kesehatan 2023 adalah rujukan terbaru untuk hak dan kewajiban kesehatan. Untuk platform ini, gunakan pasal hak kesehatan, akses layanan kesehatan, tanggung jawab pemerintah, dan nondiskriminasi.

## 9.2 Status Ringkas

```yaml
nomor: 17
tahun: 2023
judul: Kesehatan
status: berlaku
catatan:
  - Mencabut UU Nomor 36 Tahun 2009 tentang Kesehatan dan beberapa UU kesehatan lain.
  - Untuk konten kesehatan, gunakan UU Nomor 17 Tahun 2023 sebagai rujukan utama.
```

---

## 9.3 Pasal 2: Asas Penyelenggaraan Kesehatan

### Pasal Asli

> Undang-Undang ini diselenggarakan berdasarkan asas: perikemanusiaan; keseimbangan; manfaat; ilmiah; pemerataan; etika dan profesionalitas; pelindungan dan keselamatan; penghormatan terhadap hak dan kewajiban; keadilan; nondiskriminatif; pertimbangan moral dan nilai-nilai agama; partisipatif; kepentingan umum; keterpaduan; kesadaran hukum; kedaulatan negara; kelestarian lingkungan hidup; kearifan budaya; dan ketertiban dan kepastian hukum.

### Bahasa Sederhana

Layanan kesehatan harus adil, manusiawi, aman, dan tidak diskriminatif. Tunanetra berhak mendapat pelayanan kesehatan tanpa direndahkan atau dipersulit.

### Keyword

```yaml
keywords:
  - kesehatan nondiskriminatif
  - layanan manusiawi
  - pasien disabilitas
  - rumah sakit
```

---

## 9.4 Pasal 3: Tujuan Penyelenggaraan Kesehatan

### Pasal Asli

> Penyelenggaraan Kesehatan bertujuan:  
> a. meningkatkan perilaku hidup sehat;  
> b. meningkatkan akses dan mutu Pelayanan Kesehatan dan Sumber Daya Kesehatan;  
> c. meningkatkan pengelolaan sumber daya manusia yang efektif dan efisien;  
> d. memenuhi kebutuhan masyarakat akan Pelayanan Kesehatan;  
> e. meningkatkan ketahanan Kesehatan dalam menghadapi KLB atau Wabah;  
> f. menjamin ketersediaan pendanaan Kesehatan yang berkesinambungan dan berkeadilan serta dikelola secara transparan, efektif, dan efisien;  
> g. mewujudkan pengembangan dan pemanfaatan Teknologi Kesehatan yang berkelanjutan; dan  
> h. memberikan pelindungan dan kepastian hukum bagi Pasien, Sumber Daya Manusia Kesehatan, dan masyarakat.

### Bahasa Sederhana

Sistem kesehatan bertujuan meningkatkan akses dan mutu layanan, memenuhi kebutuhan masyarakat, dan memberi perlindungan hukum bagi pasien. Tunanetra sebagai pasien berhak mendapat layanan yang aksesibel dan bermutu.

### Keyword

```yaml
keywords:
  - akses kesehatan
  - mutu layanan kesehatan
  - pasien
  - perlindungan pasien
```

---

## 9.5 Pasal 4: Hak Setiap Orang di Bidang Kesehatan

### Pasal Asli

> (1) Setiap Orang berhak:  
> a. hidup sehat secara fisik, jiwa, dan sosial;  
> b. mendapatkan informasi dan edukasi tentang Kesehatan yang seimbang dan bertanggung jawab;  
> c. mendapatkan Pelayanan Kesehatan yang aman, bermutu, dan terjangkau agar dapat mewujudkan derajat Kesehatan yang setinggi-tingginya;  
> d. mendapatkan perawatan Kesehatan sesuai dengan standar Pelayanan Kesehatan;  
> e. mendapatkan akses atas Sumber Daya Kesehatan;  
> f. menentukan sendiri Pelayanan Kesehatan yang diperlukan bagi dirinya secara mandiri dan bertanggung jawab;  
> g. mendapatkan lingkungan yang sehat bagi pencapaian derajat Kesehatan;  
> h. menerima atau menolak sebagian atau seluruh tindakan pertolongan yang akan diberikan kepadanya setelah menerima dan memahami informasi mengenai tindakan tersebut secara lengkap;  
> i. memperoleh kerahasiaan data dan informasi Kesehatan pribadinya;  
> j. memperoleh informasi tentang data Kesehatan dirinya, termasuk tindakan dan pengobatan yang telah ataupun yang akan diterimanya dari Tenaga Medis dan/atau Tenaga Kesehatan; dan  
> k. mendapatkan pelindungan dari risiko Kesehatan.

### Bahasa Sederhana

Setiap orang berhak mendapat layanan kesehatan aman, bermutu, terjangkau, informasi kesehatan yang jelas, dan perlindungan data kesehatan. Untuk tunanetra, informasi medis sebaiknya dijelaskan dengan cara yang mudah diakses dan dipahami.

### Keyword

```yaml
keywords:
  - hak pasien
  - informasi medis
  - pelayanan kesehatan aman
  - kesehatan terjangkau
  - data kesehatan
  - rekam medis
```

---

## 9.6 Pasal 6–7: Tanggung Jawab Pemerintah atas Upaya Kesehatan

### Pasal Asli

> **Pasal 6**  
> Pemerintah Pusat dan Pemerintah Daerah bertanggung jawab merencanakan, mengatur, menyelenggarakan, membina, dan mengawasi penyelenggaraan Upaya Kesehatan yang bermutu, aman, efisien, merata, dan terjangkau oleh masyarakat.  
>  
> **Pasal 7**  
> (1) Pemerintah Pusat dan Pemerintah Daerah bertanggung jawab meningkatkan dan mengembangkan Upaya Kesehatan dalam rangka meningkatkan akses dan mutu Pelayanan Kesehatan.  
> (2) Peningkatan dan pengembangan Upaya Kesehatan sebagaimana dimaksud pada ayat (1) dilakukan berdasarkan penelitian dan pengkajian.

### Bahasa Sederhana

Pemerintah pusat dan daerah bertanggung jawab menyediakan layanan kesehatan yang bermutu, aman, merata, dan terjangkau. Ini penting untuk menilai apakah layanan kesehatan sudah aksesibel bagi tunanetra.

### Keyword

```yaml
keywords:
  - tanggung jawab pemerintah kesehatan
  - layanan kesehatan daerah
  - akses puskesmas
  - mutu layanan
```

---

## 9.7 Pasal 10–11: Sumber Daya dan Fasilitas Pelayanan Kesehatan

### Pasal Asli

> **Pasal 10**  
> (1) Pemerintah Pusat dan Pemerintah Daerah bertanggung jawab atas ketersediaan Sumber Daya Kesehatan yang adil dan merata bagi seluruh masyarakat.  
>  
> **Pasal 11**  
> Pemerintah Pusat dan Pemerintah Daerah bertanggung jawab atas ketersediaan dan akses terhadap Fasilitas Pelayanan Kesehatan serta informasi dan edukasi Kesehatan.

### Bahasa Sederhana

Pemerintah bertanggung jawab menyediakan fasilitas kesehatan dan informasi kesehatan yang bisa diakses masyarakat. Untuk tunanetra, akses informasi kesehatan perlu ramah screen reader/audio atau dijelaskan langsung secara jelas.

### Keyword

```yaml
keywords:
  - fasilitas kesehatan
  - informasi kesehatan
  - edukasi kesehatan
  - akses rumah sakit
  - akses puskesmas
```

---

# 10. UU Nomor 11 Tahun 2009 tentang Kesejahteraan Sosial

## 10.1 Ringkasan untuk User

UU Kesejahteraan Sosial mengatur penyelenggaraan kesejahteraan sosial, termasuk rehabilitasi sosial, jaminan sosial, pemberdayaan sosial, perlindungan sosial, bantuan sosial, dan tanggung jawab pemerintah.

## 10.2 Status Ringkas

```yaml
nomor: 11
tahun: 2009
judul: Kesejahteraan Sosial
status: berlaku_dengan_catatan
catatan:
  - Dicabut/diubah sebagian oleh UU Nomor 14 Tahun 2019 tentang Pekerja Sosial, terutama ketentuan pekerja sosial profesional.
  - Pasal tentang rehabilitasi sosial, jaminan sosial, pemberdayaan sosial, dan perlindungan sosial tetap relevan untuk konten umum.
```

---

## 10.3 Pasal 4: Tanggung Jawab Negara

### Pasal Asli

> Negara bertanggung jawab atas penyelenggaraan kesejahteraan sosial.

### Bahasa Sederhana

Kesejahteraan sosial bukan hanya urusan pribadi atau keluarga. Negara punya tanggung jawab untuk menyelenggarakannya.

### Keyword

```yaml
keywords:
  - tanggung jawab negara
  - kesejahteraan sosial
  - negara wajib
```

---

## 10.4 Pasal 5: Sasaran Penyelenggaraan Kesejahteraan Sosial

### Pasal Asli

> (1) Penyelenggaraan kesejahteraan sosial ditujukan kepada:  
> a. perseorangan;  
> b. keluarga;  
> c. kelompok; dan/atau  
> d. masyarakat.  
>  
> (2) Penyelenggaraan kesejahteraan sosial sebagaimana dimaksud pada ayat (1) diprioritaskan kepada mereka yang memiliki kehidupan yang tidak layak secara kemanusiaan dan memiliki kriteria masalah sosial.

### Bahasa Sederhana

Kesejahteraan sosial bisa diberikan kepada individu, keluarga, kelompok, atau masyarakat. Prioritasnya adalah orang yang hidupnya belum layak secara kemanusiaan atau punya masalah sosial.

### Keyword

```yaml
keywords:
  - bantuan sosial
  - hidup tidak layak
  - masalah sosial
  - keluarga miskin
  - penyandang disabilitas miskin
```

---

## 10.5 Pasal 6: Bentuk Penyelenggaraan Kesejahteraan Sosial

### Pasal Asli

> Penyelenggaraan kesejahteraan sosial meliputi:  
> a. rehabilitasi sosial;  
> b. jaminan sosial;  
> c. pemberdayaan sosial; dan  
> d. perlindungan sosial.

### Bahasa Sederhana

Kesejahteraan sosial tidak hanya bantuan uang. Bentuknya bisa rehabilitasi, jaminan sosial, pemberdayaan, dan perlindungan sosial.

### Keyword

```yaml
keywords:
  - rehabilitasi sosial
  - jaminan sosial
  - pemberdayaan sosial
  - perlindungan sosial
  - bantuan sosial
```

---

## 10.6 Pasal 7: Rehabilitasi Sosial

### Pasal Asli

> Rehabilitasi sosial dimaksudkan untuk memulihkan dan mengembangkan kemampuan seseorang yang mengalami disfungsi sosial agar dapat melaksanakan fungsi sosialnya secara wajar.

### Bahasa Sederhana

Rehabilitasi sosial bertujuan membantu seseorang agar bisa kembali berfungsi dan berpartisipasi di masyarakat. Untuk tunanetra, ini bisa berupa pelatihan kemandirian, orientasi mobilitas, keterampilan kerja, atau dukungan sosial.

### Keyword

```yaml
keywords:
  - rehabilitasi sosial
  - kemandirian
  - pelatihan keterampilan
  - fungsi sosial
```

---

## 10.7 Pasal 9: Jaminan Sosial

### Pasal Asli

> Jaminan sosial dimaksudkan untuk:  
> a. menjamin fakir miskin, anak yatim piatu terlantar, lanjut usia terlantar, penyandang cacat fisik, cacat mental, cacat fisik dan mental, eks penderita penyakit kronis yang mengalami masalah ketidakmampuan sosial-ekonomi agar kebutuhan dasarnya terpenuhi; dan  
> b. menghargai pejuang, perintis kemerdekaan, dan keluarga pahlawan atas jasa-jasanya.

### Bahasa Sederhana

Jaminan sosial bertujuan membantu orang yang tidak mampu secara sosial-ekonomi agar kebutuhan dasarnya terpenuhi. Istilah lama “penyandang cacat” sebaiknya dibaca sebagai penyandang disabilitas dalam konteks sekarang.

### Keyword

```yaml
keywords:
  - jaminan sosial
  - kebutuhan dasar
  - penyandang disabilitas miskin
  - bantuan negara
```

---

## 10.8 Pasal 14: Perlindungan Sosial

### Pasal Asli

> Perlindungan sosial dimaksudkan untuk mencegah dan menangani risiko dari guncangan dan kerentanan sosial seseorang, keluarga, kelompok, dan/atau masyarakat agar kelangsungan hidupnya dapat dipenuhi sesuai dengan kebutuhan dasar minimal.

### Bahasa Sederhana

Perlindungan sosial membantu orang menghadapi risiko atau kondisi rentan agar kebutuhan dasar tetap terpenuhi.

### Keyword

```yaml
keywords:
  - perlindungan sosial
  - risiko sosial
  - kerentanan sosial
  - kebutuhan dasar
```

---

# 11. Peta Keyword ke Aturan dan Pasal

Bagian ini bisa langsung dipakai untuk membuat routing sederhana di backend/frontend.

## 11.1 Format Data Rekomendasi

```yaml
keyword_map_schema:
  user_input_keywords: []
  kategori: string
  aturan_utama: []
  pasal_utama: []
  jawaban_singkat: string
  tombol:
    - dengarkan_ringkasan
    - lihat_pasal_asli
    - lihat_bahasa_sederhana
    - simpan
```

---

## 11.2 Keyword Map Lengkap

### Keyword Group: kerja, pekerjaan, loker, ditolak kerja, diskriminasi kerja

```yaml
user_keywords:
  - kerja
  - pekerjaan
  - loker
  - lowongan
  - ditolak kerja
  - diskriminasi kerja
  - gaji beda
  - phk karena disabilitas
kategori: Hak Bekerja
aturan_utama:
  - UUD 1945 Pasal 27 ayat (2)
  - UUD 1945 Pasal 28D ayat (2)
  - UU 8/2016 Pasal 11
  - UU 8/2016 Pasal 53
  - UU 13/2003 Pasal 5
  - UU 13/2003 Pasal 6
  - UU 13/2003 Pasal 67
  - UU 39/1999 Pasal 38
jawaban_singkat: >
  Penyandang disabilitas berhak memperoleh pekerjaan tanpa diskriminasi,
  memperoleh upah yang sama untuk pekerjaan yang sama, dan mendapat akomodasi
  yang layak di tempat kerja.
```

---

### Keyword Group: sekolah, kuliah, pendidikan, kampus tidak aksesibel, materi tidak bisa dibaca

```yaml
user_keywords:
  - sekolah
  - kuliah
  - pendidikan
  - kampus
  - ditolak sekolah
  - materi tidak bisa dibaca
  - pdf tidak aksesibel
  - ujian tidak aksesibel
kategori: Hak Pendidikan
aturan_utama:
  - UUD 1945 Pasal 28C ayat (1)
  - UUD 1945 Pasal 31
  - UU 8/2016 Pasal 10
  - UU 8/2016 Pasal 40
  - UU 20/2003 Pasal 4
  - UU 20/2003 Pasal 5
  - UU 20/2003 Pasal 11
  - UU 20/2003 Pasal 12
  - UU 39/1999 Pasal 12
jawaban_singkat: >
  Setiap warga negara berhak mendapat pendidikan. Penyandang disabilitas berhak
  atas pendidikan bermutu, inklusif atau khusus, dan akomodasi yang layak.
```

---

### Keyword Group: layanan publik, kantor pemerintah, formulir, ktp, bpjs, tidak dilayani

```yaml
user_keywords:
  - layanan publik
  - kantor pemerintah
  - ktp
  - kk
  - bpjs
  - formulir
  - tidak dilayani
  - petugas tidak membantu
  - pelayanan buruk
kategori: Hak Pelayanan Publik
aturan_utama:
  - UUD 1945 Pasal 27 ayat (1)
  - UUD 1945 Pasal 28H ayat (2)
  - UU 8/2016 Pasal 19
  - UU 8/2016 Pasal 105
  - UU 8/2016 Pasal 106
  - UU 25/2009 Pasal 2
  - UU 25/2009 Pasal 4
  - UU 25/2009 Pasal 8
  - UU 25/2009 Pasal 15
  - UU 25/2009 Pasal 18
jawaban_singkat: >
  Penyandang disabilitas berhak memperoleh pelayanan publik yang mudah diakses,
  bermartabat, tanpa diskriminasi, serta dapat mengadu jika layanan tidak sesuai standar.
```

---

### Keyword Group: aksesibilitas, fasilitas umum, guiding block, trotoar, transportasi

```yaml
user_keywords:
  - aksesibilitas
  - fasilitas umum
  - guiding block
  - jalur pemandu
  - trotoar
  - penyeberangan
  - transportasi
  - bus
  - kereta
  - bandara
kategori: Hak Aksesibilitas
aturan_utama:
  - UUD 1945 Pasal 28H ayat (2)
  - UUD 1945 Pasal 34 ayat (3)
  - UU 8/2016 Pasal 18
  - UU 8/2016 Pasal 97
  - UU 8/2016 Pasal 98
  - UU 8/2016 Pasal 101
  - UU 8/2016 Pasal 102
  - UU 8/2016 Pasal 105
  - UU 25/2009 Pasal 4
jawaban_singkat: >
  Fasilitas publik, jalan, penyeberangan, gedung, dan transportasi publik perlu
  mudah diakses oleh penyandang disabilitas.
```

---

### Keyword Group: kesehatan, rumah sakit, puskesmas, pasien, rekam medis, informasi medis

```yaml
user_keywords:
  - kesehatan
  - rumah sakit
  - puskesmas
  - dokter
  - pasien
  - rekam medis
  - informasi medis
  - obat
kategori: Hak Kesehatan
aturan_utama:
  - UUD 1945 Pasal 28H ayat (1)
  - UUD 1945 Pasal 34 ayat (3)
  - UU 8/2016 Pasal 12
  - UU 17/2023 Pasal 2
  - UU 17/2023 Pasal 3
  - UU 17/2023 Pasal 4
  - UU 17/2023 Pasal 6
  - UU 17/2023 Pasal 11
jawaban_singkat: >
  Setiap orang berhak memperoleh layanan kesehatan yang aman, bermutu,
  terjangkau, dan informasi kesehatan yang jelas. Penyandang disabilitas berhak
  memperoleh informasi kesehatan yang mudah diakses.
```

---

### Keyword Group: informasi, komunikasi, braille, audio, screen reader, pdf tidak aksesibel

```yaml
user_keywords:
  - informasi
  - komunikasi
  - braille
  - audio
  - screen reader
  - pdf tidak aksesibel
  - dokumen tidak bisa dibaca
  - website tidak aksesibel
kategori: Hak Informasi dan Komunikasi
aturan_utama:
  - UUD 1945 Pasal 28F
  - UU 8/2016 Pasal 24
  - UU 8/2016 Pasal 122
  - UU 39/1999 Pasal 14
  - UU 25/2009 Pasal 5
jawaban_singkat: >
  Setiap orang berhak memperoleh informasi dan berkomunikasi. Untuk tunanetra,
  informasi sebaiknya disediakan dalam format yang bisa dibaca screen reader,
  audio, braille, atau teks digital yang aksesibel.
```

---

### Keyword Group: diskriminasi, direndahkan, dikucilkan, ditolak, dilarang masuk

```yaml
user_keywords:
  - diskriminasi
  - direndahkan
  - dikucilkan
  - ditolak
  - dilarang masuk
  - tidak boleh ikut
  - dihina
  - stigma
kategori: Anti-Diskriminasi dan Perlindungan Martabat
aturan_utama:
  - UUD 1945 Pasal 28I ayat (2)
  - UU 8/2016 Pasal 5
  - UU 8/2016 Pasal 7
  - UU 8/2016 Pasal 26
  - UU 8/2016 Pasal 143
  - UU 8/2016 Pasal 145
  - UU 39/1999 Pasal 1 angka 3
  - UU 39/1999 Pasal 3
  - UU 39/1999 Pasal 5
jawaban_singkat: >
  Penyandang disabilitas berhak bebas dari diskriminasi, stigma, penelantaran,
  penyiksaan, eksploitasi, dan perlakuan yang merendahkan martabat.
```

---

### Keyword Group: bantuan sosial, bansos, jaminan sosial, kartu disabilitas, dtks

```yaml
user_keywords:
  - bantuan sosial
  - bansos
  - jaminan sosial
  - kartu disabilitas
  - dtks
  - daftar disabilitas
  - kelurahan
  - dinsos
kategori: Hak Kesejahteraan Sosial
aturan_utama:
  - UUD 1945 Pasal 28H ayat (3)
  - UUD 1945 Pasal 34
  - UU 8/2016 Pasal 17
  - UU 8/2016 Pasal 117
  - UU 8/2016 Pasal 119
  - UU 8/2016 Pasal 121
  - UU 11/2009 Pasal 4
  - UU 11/2009 Pasal 5
  - UU 11/2009 Pasal 6
  - UU 11/2009 Pasal 9
jawaban_singkat: >
  Penyandang disabilitas dapat terkait dengan hak rehabilitasi sosial, jaminan sosial,
  pemberdayaan sosial, perlindungan sosial, pendataan, dan kartu penyandang disabilitas.
```

---

### Keyword Group: hukum, pengadilan, pengaduan, bantuan hukum, lapor

```yaml
user_keywords:
  - hukum
  - pengadilan
  - pengaduan
  - bantuan hukum
  - lapor
  - gugatan
  - perlindungan hukum
  - ombudsman
kategori: Hak Perlindungan Hukum dan Pengaduan
aturan_utama:
  - UUD 1945 Pasal 27 ayat (1)
  - UUD 1945 Pasal 28D ayat (1)
  - UU 8/2016 Pasal 9
  - UU 25/2009 Pasal 18
  - UU 39/1999 Pasal 5
  - UU 39/1999 Pasal 17
jawaban_singkat: >
  Setiap orang berhak atas perlindungan hukum dan keadilan tanpa diskriminasi.
  Dalam pelayanan publik, masyarakat juga berhak mengadu dan mendapat tanggapan.
```

---

### Keyword Group: bencana, evakuasi, pengungsian, darurat

```yaml
user_keywords:
  - bencana
  - evakuasi
  - pengungsian
  - banjir
  - gempa
  - kebakaran
  - darurat
kategori: Hak Perlindungan dari Bencana
aturan_utama:
  - UU 8/2016 Pasal 20
  - UU 8/2016 Pasal 109
jawaban_singkat: >
  Penyandang disabilitas berhak mendapat informasi bencana yang mudah diakses,
  prioritas evakuasi, dan fasilitas pengungsian yang mudah diakses.
```

---

# 12. Contoh Jawaban Otomatis Berdasarkan Input User

## 12.1 Input: “Aku ditolak kerja karena tunanetra”

### Output yang Disarankan

```md
Kamu kemungkinan sedang mencari informasi tentang hak bekerja tanpa diskriminasi.

Dasar hukum yang relevan:
- UUD 1945 Pasal 27 ayat (2): hak atas pekerjaan dan penghidupan layak.
- UUD 1945 Pasal 28D ayat (2): hak bekerja dan mendapat perlakuan adil.
- UU No. 8 Tahun 2016 Pasal 11: hak penyandang disabilitas atas pekerjaan tanpa diskriminasi.
- UU No. 8 Tahun 2016 Pasal 53: kuota pekerja penyandang disabilitas.
- UU No. 13 Tahun 2003 Pasal 5 dan Pasal 6: kesempatan kerja dan perlakuan yang sama tanpa diskriminasi.

Bahasa sederhana:
Penyandang disabilitas, termasuk tunanetra, tidak boleh otomatis ditolak kerja hanya karena disabilitasnya. Jika mampu menjalankan pekerjaan dengan atau tanpa akomodasi yang layak, ia berhak mendapat kesempatan yang sama.

Catatan:
Simpan bukti penolakan, tangkapan layar lowongan, email, pesan, atau rekaman kronologi. Untuk langkah hukum, hubungi layanan bantuan hukum atau kanal pengaduan resmi.
```

---

## 12.2 Input: “Kampus tidak kasih materi yang bisa dibaca screen reader”

### Output yang Disarankan

```md
Kamu kemungkinan sedang mencari informasi tentang hak pendidikan aksesibel.

Dasar hukum yang relevan:
- UUD 1945 Pasal 28C ayat (1): hak pendidikan dan pengembangan diri.
- UUD 1945 Pasal 31: setiap warga negara berhak mendapat pendidikan.
- UU No. 8 Tahun 2016 Pasal 10: hak pendidikan penyandang disabilitas dan akomodasi yang layak.
- UU No. 20 Tahun 2003 Pasal 4: pendidikan harus berkeadilan dan tidak diskriminatif.
- UU No. 20 Tahun 2003 Pasal 11: pemerintah wajib menjamin pendidikan bermutu tanpa diskriminasi.

Bahasa sederhana:
Materi belajar untuk tunanetra sebaiknya disediakan dalam format yang bisa diakses, misalnya dokumen teks yang bisa dibaca screen reader, audio, braille, atau format lain yang sesuai.
```

---

## 12.3 Input: “Aku tidak dibantu isi formulir di kantor pemerintah”

### Output yang Disarankan

```md
Kamu kemungkinan sedang mencari informasi tentang hak pelayanan publik.

Dasar hukum yang relevan:
- UU No. 8 Tahun 2016 Pasal 19: hak akomodasi layak dan pendampingan dalam pelayanan publik.
- UU No. 8 Tahun 2016 Pasal 105–106: pelayanan publik wajib mudah diakses dan panduannya harus tersedia.
- UU No. 25 Tahun 2009 Pasal 4: pelayanan publik berasas kesamaan hak, tidak diskriminatif, dan fasilitas khusus bagi kelompok rentan.
- UU No. 25 Tahun 2009 Pasal 18: masyarakat berhak mengadu dan mendapat pelayanan berkualitas.

Bahasa sederhana:
Tunanetra berhak mendapat bantuan atau fasilitas yang mudah diakses saat menggunakan layanan publik, termasuk bantuan memahami formulir, prosedur, dan informasi layanan.
```

---

## 12.4 Input: “Trotoar guiding block rusak dan ketutup motor”

### Output yang Disarankan

```md
Kamu kemungkinan sedang mencari informasi tentang hak aksesibilitas fasilitas umum.

Dasar hukum yang relevan:
- UUD 1945 Pasal 28H ayat (2): hak mendapat kemudahan dan perlakuan khusus untuk mencapai persamaan dan keadilan.
- UU No. 8 Tahun 2016 Pasal 18: hak aksesibilitas.
- UU No. 8 Tahun 2016 Pasal 97: infrastruktur wajib mudah diakses.
- UU No. 8 Tahun 2016 Pasal 101: fasilitas pejalan kaki wajib mudah diakses.

Bahasa sederhana:
Jalur pejalan kaki dan fasilitas publik seharusnya aman dan bisa dipakai penyandang disabilitas, termasuk tunanetra. Jika jalur pemandu rusak atau terhalang, itu dapat menghambat hak aksesibilitas.
```

---

## 12.5 Input: “Aku mau daftar kartu disabilitas”

### Output yang Disarankan

```md
Kamu kemungkinan sedang mencari informasi tentang pendataan dan kartu penyandang disabilitas.

Dasar hukum yang relevan:
- UU No. 8 Tahun 2016 Pasal 117: pendataan penyandang disabilitas.
- UU No. 8 Tahun 2016 Pasal 119: penyandang disabilitas yang belum terdata dapat mendaftarkan diri ke lurah/kepala desa.
- UU No. 8 Tahun 2016 Pasal 121: penyandang disabilitas yang masuk data nasional berhak mendapat Kartu Penyandang Disabilitas.

Bahasa sederhana:
Jika belum terdata, penyandang disabilitas dapat memulai dari kelurahan/desa atau dinas sosial setempat untuk bertanya proses pendataan dan kartu penyandang disabilitas.
```

---

# 13. Rekomendasi Struktur Database

## 13.1 Tabel `legal_documents`

```sql
CREATE TABLE legal_documents (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  number TEXT,
  year TEXT,
  status TEXT,
  source_name TEXT,
  source_url TEXT,
  notes TEXT
);
```

## 13.2 Tabel `legal_articles`

```sql
CREATE TABLE legal_articles (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  article_label TEXT NOT NULL,
  topic TEXT,
  original_text TEXT NOT NULL,
  simple_text TEXT NOT NULL,
  keywords TEXT,
  FOREIGN KEY (document_id) REFERENCES legal_documents(id)
);
```

## 13.3 Tabel `keyword_routes`

```sql
CREATE TABLE keyword_routes (
  id TEXT PRIMARY KEY,
  keyword TEXT NOT NULL,
  category TEXT NOT NULL,
  article_ids TEXT NOT NULL,
  short_answer TEXT
);
```

---

# 14. Rekomendasi Fitur Aksesibilitas Web

## 14.1 Fitur Wajib

- Semua teks pasal dalam HTML, bukan gambar.
- Kompatibel dengan screen reader.
- Navigasi keyboard penuh.
- Tombol “Dengarkan Ringkasan”.
- Tombol “Baca Pasal Asli”.
- Tombol “Bahasa Sederhana”.
- Pencarian berbasis keyword dan sinonim.
- Hindari PDF sebagai satu-satunya format.
- Heading rapi: H1, H2, H3.
- Label tombol jelas, bukan hanya ikon.

## 14.2 Fitur Bagus untuk Ditambahkan

- Voice input: user bisa bertanya dengan suara.
- Text-to-speech per pasal.
- Bookmark pasal.
- Riwayat pencarian.
- Mode kontras tinggi.
- Ukuran teks besar.
- “Saya ingin mengadu” yang mengarahkan ke Ombudsman, Komnas HAM, dinas sosial, atau bantuan hukum sesuai kasus.

---

# 15. Catatan Sumber dan Validasi

Sumber utama yang disarankan untuk validasi ulang:

1. Portal peraturan BPK: `peraturan.bpk.go.id`
2. Portal peraturan nasional: `peraturan.go.id`
3. JDIH DPR RI: `dpr.go.id/dokumen/jdih`
4. JDIH Kementerian/Lembaga terkait
5. Wikisumber sebagai salinan teks pasal yang mudah dibaca, tetapi status resmi tetap perlu dicek ke JDIH/peraturan resmi.

## 15.1 Catatan Implementasi Status

Jangan hanya tampilkan “tahun terbaru”. Tampilkan:

```yaml
status_display:
  - Berlaku
  - Tidak berlaku
  - Dicabut
  - Dicabut sebagian
  - Diubah
  - Berlaku dengan perubahan
```

Contoh:

```yaml
UU13_2003:
  display: "Berlaku, tetapi beberapa ketentuan telah diubah oleh UU Cipta Kerja."
UU17_2023:
  display: "Berlaku dan menjadi rujukan utama bidang kesehatan; mencabut UU Kesehatan lama."
UU11_2009:
  display: "Berlaku, tetapi sebagian ketentuan pekerja sosial profesional dicabut/diubah oleh UU No. 14 Tahun 2019."
```

---

# 16. Penutup Konten

Dokumen ini cocok dijadikan versi awal database konten. Fokus utamanya adalah membantu user tunanetra memahami hak yang paling sering dibutuhkan: pendidikan, kerja, kesehatan, layanan publik, aksesibilitas, informasi, kesejahteraan sosial, dan perlindungan hukum.

Untuk versi berikutnya, tambahkan:

1. PP turunan UU 8/2016 tentang akomodasi layak, aksesibilitas, dan pelayanan publik.
2. Kanal pengaduan resmi per kategori.
3. Contoh surat pengaduan.
4. Daftar lembaga bantuan hukum ramah disabilitas.
5. Update otomatis status peraturan dari API/JDIH jika tersedia.
