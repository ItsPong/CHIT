export type LegalMaterial = {
  id: string;
  title: string;
  shortTitle: string;
  topic: string;
  summary: string;
  keywords: string[];
  articles: {
    title: string;
    content: string;
  }[];
};

export const legalMaterials: LegalMaterial[] = [
  {
    id: 'uu-8-2016',
    title: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas',
    shortTitle: 'UU No. 8 Tahun 2016',
    topic: 'Hak Penyandang Disabilitas',
    summary:
      'Menjamin hak penyandang disabilitas atas aksesibilitas, pendidikan, pekerjaan, pelayanan publik, informasi, dan perlindungan dari diskriminasi.',
    keywords: [
      'hak tunanetra',
      'hak disabilitas',
      'penyandang disabilitas',
      'aksesibilitas',
      'fasilitas umum',
      'diskriminasi',
      'pendidikan',
      'pekerjaan',
      'informasi braille',
      'informasi audio',
    ],
    articles: [
      {
        title: 'Pasal 5 - Hak Penyandang Disabilitas',
        content:
          'Penyandang disabilitas memiliki hak untuk hidup, bebas dari stigma, memperoleh pendidikan, pekerjaan, kesehatan, pelayanan publik, dan aksesibilitas.',
      },
      {
        title: 'Pasal 18 - Hak Aksesibilitas',
        content:
          'Penyandang disabilitas berhak mendapatkan aksesibilitas untuk memanfaatkan fasilitas publik dan akomodasi yang layak.',
      },
      {
        title: 'Pasal 24 - Hak Berekspresi dan Memperoleh Informasi',
        content:
          'Penyandang disabilitas berhak memperoleh informasi dan berkomunikasi melalui media yang mudah diakses.',
      },
    ],
  },
  {
    id: 'uud-1945-28h',
    title: 'UUD 1945 Pasal 28H',
    shortTitle: 'UUD 1945 Pasal 28H',
    topic: 'Persamaan dan Perlindungan Hak',
    summary:
      'Menegaskan hak setiap orang memperoleh kemudahan dan perlakuan khusus untuk mencapai persamaan dan keadilan.',
    keywords: [
      'hak warga negara',
      'persamaan',
      'keadilan',
      'perlakuan khusus',
      'kemudahan',
      'hak tunanetra',
      'hak disabilitas',
    ],
    articles: [
      {
        title: 'Pasal 28H Ayat 2',
        content:
          'Setiap orang berhak mendapat kemudahan dan perlakuan khusus untuk memperoleh kesempatan dan manfaat yang sama guna mencapai persamaan dan keadilan.',
      },
    ],
  },
  {
    id: 'uu-25-2009',
    title: 'UU Nomor 25 Tahun 2009 tentang Pelayanan Publik',
    shortTitle: 'UU No. 25 Tahun 2009',
    topic: 'Pelayanan Publik',
    summary:
      'Mengatur pelayanan publik yang layak, mudah diakses, tidak diskriminatif, dan menyediakan perlakuan khusus bagi kelompok rentan.',
    keywords: [
      'pelayanan publik',
      'fasilitas umum',
      'kelompok rentan',
      'diskriminasi',
      'akses layanan',
      'pengaduan',
      'lapor pelayanan',
    ],
    articles: [
      {
        title: 'Pasal 4 - Asas Pelayanan Publik',
        content:
          'Pelayanan publik diselenggarakan berdasarkan persamaan perlakuan, keterbukaan, akuntabilitas, fasilitas bagi kelompok rentan, dan aksesibilitas.',
      },
      {
        title: 'Pasal 29 - Pelayanan Khusus',
        content:
          'Penyelenggara berkewajiban memberikan pelayanan dengan perlakuan khusus kepada anggota masyarakat tertentu sesuai peraturan perundang-undangan.',
      },
    ],
  },
  {
    id: 'uu-39-1999',
    title: 'UU Nomor 39 Tahun 1999 tentang Hak Asasi Manusia',
    shortTitle: 'UU No. 39 Tahun 1999',
    topic: 'Hak Asasi Manusia',
    summary:
      'Melindungi setiap orang dari perlakuan diskriminatif dan menjamin hak memperoleh perlindungan serta perlakuan yang adil.',
    keywords: [
      'hak asasi manusia',
      'komnas ham',
      'diskriminasi',
      'perlindungan hukum',
      'melapor diskriminasi',
      'keadilan',
    ],
    articles: [
      {
        title: 'Pasal 3 - Persamaan di Hadapan Hukum',
        content:
          'Setiap orang berhak atas pengakuan, jaminan, perlindungan, perlakuan hukum yang adil, dan kepastian hukum.',
      },
      {
        title: 'Pasal 17 - Hak Memperoleh Keadilan',
        content:
          'Setiap orang berhak memperoleh keadilan dengan mengajukan permohonan, pengaduan, dan gugatan.',
      },
    ],
  },
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase('id-ID')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function searchLegalMaterials(query: string) {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(' ').filter((term) => term.length > 1);
  const numericTerms = normalizedQuery
    .split(' ')
    .filter((term) => /^\d+$/.test(term));

  return legalMaterials
    .map((material) => {
      const title = normalize(`${material.title} ${material.shortTitle}`);
      const keywords = normalize(material.keywords.join(' '));
      const content = normalize(
        `${material.topic} ${material.summary} ${material.articles
          .map((article) => `${article.title} ${article.content}`)
          .join(' ')}`
      );

      const score = terms.reduce((total, term) => {
        if (title.includes(term)) return total + 5;
        if (keywords.includes(term)) return total + 3;
        if (content.includes(term)) return total + 1;
        return total;
      }, 0);

      return {
        material,
        score,
        matchesNumbers: numericTerms.every((term) =>
          `${title} ${keywords} ${content}`.includes(term)
        ),
      };
    })
    .filter(({ score, matchesNumbers }) => score > 0 && matchesNumbers)
    .sort((a, b) => b.score - a.score)
    .map(({ material }) => material);
}
