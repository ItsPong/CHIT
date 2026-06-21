import { readFileSync, writeFileSync } from 'node:fs';

const sourceUrl = new URL('../full.md', import.meta.url);
const outputUrl = new URL('../src/data/legalContent.generated.json', import.meta.url);
const source = readFileSync(sourceUrl, 'utf8').replace(/\r\n/g, '\n');
const lines = source.split('\n');

function cleanMarkdown(value) {
  return value
    .replace(/^>\s?/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/ {2}\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}

function sectionBody(start, end) {
  return lines.slice(start + 1, end).join('\n').trim();
}

function extractYamlList(body, key = 'keywords') {
  const yaml = body.match(/```yaml\n([\s\S]*?)```/i)?.[1] ?? body;
  const keyIndex = yaml.search(new RegExp(`^${key}:`, 'm'));

  if (keyIndex === -1) return [];

  const afterKey = yaml.slice(keyIndex).split('\n').slice(1);
  const values = [];

  for (const line of afterKey) {
    const match = line.match(/^\s*-\s+(.+?)\s*$/);
    if (match) {
      values.push(match[1].replace(/^["']|["']$/g, ''));
      continue;
    }
    if (line.trim() && !line.startsWith(' ')) break;
  }

  return values;
}

function extractYamlValue(body, key) {
  const yaml = body.match(/```yaml\n([\s\S]*?)```/i)?.[1] ?? '';
  return yaml.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
}

function extractArticlePart(body, headings) {
  const headingPattern = headings.map((heading) => heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const match = body.match(
    new RegExp(`### (?:${headingPattern})\\n([\\s\\S]*?)(?=\\n### |$)`, 'i')
  );
  return cleanMarkdown(match?.[1] ?? '');
}

function shortTitleFor(title) {
  if (title.startsWith('UUD Negara')) return 'UUD 1945';

  const match = title.match(/UU Nomor (\d+) Tahun (\d+)/i);
  if (match) return `UU No. ${match[1]} Tahun ${match[2]}`;

  return title;
}

const topLevelSections = [];
for (let index = 0; index < lines.length; index += 1) {
  const match = lines[index].match(/^# (\d+)\.\s+(.+)$/);
  if (match) {
    topLevelSections.push({
      number: Number(match[1]),
      title: match[2].trim(),
      start: index,
    });
  }
}

const documents = [];
for (const [sectionIndex, section] of topLevelSections.entries()) {
  if (section.number < 3 || section.number > 10) continue;

  const end = topLevelSections[sectionIndex + 1]?.start ?? lines.length;
  const subsections = [];

  for (let index = section.start + 1; index < end; index += 1) {
    const match = lines[index].match(/^## (\d+\.\d+)\s+(.+)$/);
    if (match) {
      subsections.push({
        label: match[1],
        title: match[2].trim(),
        start: index,
      });
    }
  }

  const documentId = slugify(shortTitleFor(section.title));
  const summarySection = subsections.find(({ title }) =>
    title.toLowerCase().startsWith('ringkasan')
  );
  const metadataSection = subsections.find(({ title }) =>
    /status ringkas|keyword utama/i.test(title)
  );

  const summaryEnd = summarySection
    ? subsections.find(({ start }) => start > summarySection.start)?.start ?? end
    : end;
  const metadataEnd = metadataSection
    ? subsections.find(({ start }) => start > metadataSection.start)?.start ?? end
    : end;
  const metadataBody = metadataSection
    ? sectionBody(metadataSection.start, metadataEnd)
    : '';

  const articles = [];
  for (const [articleIndex, subsection] of subsections.entries()) {
    if (!/pasal|pembukaan/i.test(subsection.title)) continue;

    const articleEnd = subsections[articleIndex + 1]?.start ?? end;
    const body = sectionBody(subsection.start, articleEnd);
    const originalText = extractArticlePart(body, ['Pasal Asli', 'Pasal/Teks Asli']);
    const simpleText = extractArticlePart(body, ['Bahasa Sederhana']);
    const keywords = extractYamlList(extractArticlePart(body, ['Keyword']));

    if (!originalText && !simpleText) continue;

    articles.push({
      id: `${documentId}-${slugify(subsection.title)}`,
      title: subsection.title,
      originalText,
      simpleText,
      keywords,
    });
  }

  documents.push({
    id: documentId,
    title: section.title,
    shortTitle: shortTitleFor(section.title),
    summary: summarySection
      ? cleanMarkdown(sectionBody(summarySection.start, summaryEnd))
      : '',
    status: extractYamlValue(metadataBody, 'status') || 'berlaku',
    statusNotes: extractYamlList(metadataBody, 'catatan'),
    keywords: extractYamlList(metadataBody),
    articles,
  });
}

const routeStart = lines.findIndex((line) => line.startsWith('## 11.2 '));
const routeEnd = lines.findIndex((line) => line.startsWith('# 12. '));
const routeLines = lines.slice(routeStart, routeEnd);
const keywordRoutes = [];

for (let index = 0; index < routeLines.length; index += 1) {
  const heading = routeLines[index].match(/^### Keyword Group:\s*(.+)$/);
  if (!heading) continue;

  const nextHeading = routeLines.findIndex(
    (line, candidateIndex) =>
      candidateIndex > index && line.startsWith('### Keyword Group:')
  );
  const end = nextHeading === -1 ? routeLines.length : nextHeading;
  const body = routeLines.slice(index + 1, end).join('\n');
  const yaml = body.match(/```yaml\n([\s\S]*?)```/)?.[1] ?? '';
  const category = yaml.match(/^kategori:\s*(.+)$/m)?.[1]?.trim() ?? heading[1].trim();
  const shortAnswer = yaml
    .match(/^jawaban_singkat:\s*>\n([\s\S]*)$/m)?.[1]
    ?.split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join(' ') ?? '';

  keywordRoutes.push({
    id: slugify(category),
    category,
    keywords: extractYamlList(yaml, 'user_keywords'),
    references: extractYamlList(yaml, 'aturan_utama'),
    shortAnswer,
  });
}

const payload = {
  source: 'full.md',
  disclaimer:
    'Konten ini bersifat edukatif dan bukan nasihat hukum resmi. Status peraturan perlu diverifikasi kembali melalui sumber resmi.',
  documents,
  keywordRoutes,
};

const articleCount = documents.reduce(
  (total, document) => total + document.articles.length,
  0
);
const incompleteArticles = documents.flatMap((document) =>
  document.articles.filter(
    (article) => !article.originalText || !article.simpleText
  )
);

if (
  documents.length < 8 ||
  articleCount < 70 ||
  keywordRoutes.length < 10 ||
  incompleteArticles.length > 0
) {
  throw new Error(
    `Legal data validation failed: ${documents.length} documents, ${articleCount} articles, ${keywordRoutes.length} routes, ${incompleteArticles.length} incomplete articles.`
  );
}

writeFileSync(outputUrl, `${JSON.stringify(payload, null, 2)}\n`);

console.log(
  `Generated ${documents.length} documents, ${articleCount} articles, and ${keywordRoutes.length} keyword routes.`
);
