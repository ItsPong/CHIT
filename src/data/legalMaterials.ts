import legalContent from './legalContent.generated.json';

export type LegalArticle = {
  id: string;
  title: string;
  originalText: string;
  simpleText: string;
  keywords: string[];
};

export type LegalMaterial = {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  status: string;
  statusNotes: string[];
  keywords: string[];
  articles: LegalArticle[];
};

type KeywordRoute = {
  id: string;
  category: string;
  keywords: string[];
  references: string[];
  shortAnswer: string;
};

export type LegalSearchResult = {
  material: LegalMaterial;
  articles: LegalArticle[];
  category?: string;
  shortAnswer?: string;
  score: number;
};

type LegalContent = {
  source: string;
  disclaimer: string;
  documents: LegalMaterial[];
  keywordRoutes: KeywordRoute[];
};

const content = legalContent as LegalContent;
const STOP_WORDS = new Set([
  'aku',
  'anda',
  'apa',
  'atau',
  'bisa',
  'dalam',
  'dan',
  'dari',
  'dengan',
  'di',
  'ini',
  'itu',
  'karena',
  'ke',
  'mau',
  'saya',
  'tidak',
  'untuk',
  'yang',
]);

export const legalMaterials = content.documents;
export const legalDisclaimer = content.disclaimer;
export const legalDataSource = content.source;

function normalize(value: string) {
  return value
    .normalize('NFKD')
    .toLocaleLowerCase('id-ID')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function uniqueTerms(value: string) {
  return [
    ...new Set(
      normalize(value)
        .split(' ')
        .filter((term) => term.length > 1 && !STOP_WORDS.has(term))
    ),
  ];
}

function scoreText(text: string, terms: string[], weight: number) {
  const normalizedText = normalize(text);
  return terms.reduce(
    (score, term) => score + (normalizedText.includes(term) ? weight : 0),
    0
  );
}

function scoreRoute(route: KeywordRoute, normalizedQuery: string, terms: string[]) {
  return route.keywords.reduce((score, keyword) => {
    const normalizedKeyword = normalize(keyword);
    if (normalizedQuery.includes(normalizedKeyword)) return score + 15;
    return score + scoreText(normalizedKeyword, terms, 2);
  }, 0);
}

function referenceMatches(
  reference: string,
  material: LegalMaterial,
  article: LegalArticle
) {
  const normalizedReference = normalize(reference);
  const materialNumbers: string[] = material.shortTitle.match(/\d+/g) ?? [];
  const referenceNumbers: string[] = reference.match(/\d+/g) ?? [];

  const documentMatches = material.shortTitle.startsWith('UUD')
    ? normalizedReference.includes('uud 1945')
    : materialNumbers
        .slice(0, 2)
        .every((number) => referenceNumbers.includes(number));

  if (!documentMatches) return false;

  const articleLabel = normalize(article.title.split(':')[0]).match(
    /^pasal\s+\d+[a-z]?(?:\s+(?:ayat|angka)\s+\d+)?/
  )?.[0];
  return articleLabel
    ? normalizedReference.includes(articleLabel)
    : false;
}

export function searchLegalMaterials(query: string): LegalSearchResult[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  const terms = uniqueTerms(query);
  const documentQuery = normalizedQuery.split(' pasal ')[0];
  const documentNumbers = documentQuery
    .split(' ')
    .filter((term) => /^\d+$/.test(term));
  const requestsSpecificDocument = /\buu(?:d)?\b/.test(documentQuery);
  const requestsSpecificArticle = normalizedQuery.includes(' pasal ');
  const articleTerms = requestsSpecificArticle
    ? uniqueTerms(normalizedQuery.split(' pasal ')[1])
    : terms;
  const rankedRoutes = content.keywordRoutes
    .map((route) => ({ route, score: scoreRoute(route, normalizedQuery, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  const activeRoutes = rankedRoutes.slice(0, 2);
  const bestRoute = activeRoutes[0];

  const rankedResults = legalMaterials
    .map((material) => {
      const documentScore =
        scoreText(`${material.title} ${material.shortTitle}`, terms, 5) +
        scoreText(`${material.summary} ${material.keywords.join(' ')}`, terms, 2);
      const numberMatches =
        !requestsSpecificDocument ||
        documentNumbers.every((number) =>
          normalize(material.shortTitle).includes(number)
        );

      const rankedArticles = material.articles
        .map((article) => {
          const routeBoost = activeRoutes.reduce((boost, { route, score }) => {
            const isReferenced = route.references.some((reference) =>
              referenceMatches(reference, material, article)
            );
            return isReferenced ? boost + score : boost;
          }, 0);
          const score =
            (requestsSpecificArticle ? 0 : documentScore) +
            scoreText(article.title, articleTerms, 7) +
            scoreText(article.keywords.join(' '), articleTerms, 6) +
            scoreText(article.simpleText, articleTerms, 2) +
            scoreText(article.originalText, articleTerms, 1) +
            routeBoost;

          return { article, score };
        })
        .filter(({ score }) => score > 0 && numberMatches)
        .sort((a, b) => b.score - a.score);
      const highestScore = rankedArticles[0]?.score ?? 0;
      const relevantArticles = requestsSpecificDocument && !requestsSpecificArticle
        ? rankedArticles
        : rankedArticles
            .filter(({ score }) => score >= highestScore * 0.45)
            .slice(0, 6);

      return {
        material,
        articles: relevantArticles.map(({ article }) => article),
        category: bestRoute?.route.category,
        shortAnswer: bestRoute?.route.shortAnswer,
        score: highestScore,
      };
    })
    .filter(({ articles }) => articles.length > 0)
    .sort((a, b) => b.score - a.score);

  const highestResultScore = rankedResults[0]?.score ?? 0;
  return rankedResults
    .filter(({ score }) => score >= highestResultScore * 0.35)
    .slice(0, requestsSpecificDocument ? 1 : 5);
}
