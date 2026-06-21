'use client';

import { useCallback, useState } from 'react';

import Icon from '@/components/Icon';
import {
  legalDisclaimer,
  searchLegalMaterials,
  type LegalSearchResult,
} from '@/data/legalMaterials';
import useCollection from '@/hooks/useCollection';
import useVoiceSearch from '@/hooks/useVoiceSearch';
import { speak } from '@/services/speech';

const suggestions = [
  'Aku ditolak kerja karena tunanetra',
  'Kampus tidak kasih materi yang bisa dibaca screen reader',
  'Trotoar guiding block rusak dan ketutup motor',
];

type ResultCardProps = {
  result: LegalSearchResult;
  expanded: boolean;
  saved: boolean;
  onListen: () => void;
  onToggleDetails: () => void;
  onSave: () => void;
};

function ResultCard({
  result,
  expanded,
  saved,
  onListen,
  onToggleDetails,
  onSave,
}: ResultCardProps) {
  const { material, articles, category, shortAnswer } = result;

  return (
    <article className="result-card">
      <button className="result-card__content" onClick={onListen}>
        <p className="result-card__topic">
          {(category ?? 'Materi hukum terkait').toUpperCase()}
        </p>
        <h3>{material.shortTitle}</h3>
        <p className="result-card__status">
          Status: {material.status.replaceAll('_', ' ')}
        </p>
        <p className="result-card__summary">{material.summary}</p>

        {shortAnswer && (
          <div className="short-answer">
            <strong>Jawaban singkat</strong>
            <p>{shortAnswer}</p>
          </div>
        )}

        <p className="result-card__count">
          {articles.length} pasal atau kelompok pasal relevan
        </p>

        <span>
          <Icon name="volume" width={18} height={18} />
          Tekan untuk dengarkan pasal
        </span>
      </button>

      <div className="button-row">
        <button
          className="button button--outline button--compact"
          onClick={onToggleDetails}
          aria-expanded={expanded}
        >
          <Icon name={expanded ? 'chevron' : 'book'} width={18} height={18} />
          {expanded ? 'Tutup' : 'Lihat Materi'}
        </button>
        <button
          className={`button button--outline button--compact ${saved ? 'is-saved' : ''}`}
          disabled={saved}
          onClick={onSave}
        >
          <Icon name="bookmark" filled={saved} width={18} height={18} />
          {saved ? 'Tersimpan' : 'Simpan'}
        </button>
      </div>

      {expanded && (
        <div className="material-details">
          {material.statusNotes.length > 0 && (
            <div className="status-notes">
              <strong>Catatan status</strong>
              {material.statusNotes.map((note) => (
                <p key={note}>• {note}</p>
              ))}
            </div>
          )}
          <h4>Materi terkait</h4>
          {articles.map((article) => (
            <section className="article-detail" key={article.id}>
              <h5>{article.title}</h5>
              <strong>Bahasa sederhana</strong>
              <p>{article.simpleText}</p>
              <strong>Teks pasal asli</strong>
              <blockquote>{article.originalText}</blockquote>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchedQuery, setSearchedQuery] = useState('');
  const [results, setResults] = useState<LegalSearchResult[]>([]);
  const [lastReadResults, setLastReadResults] = useState<LegalSearchResult[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [status, setStatus] = useState(
    'Tekan mikrofon untuk mencari, membacakan, atau menyimpan pasal.'
  );
  const { isSaved, save } = useCollection();

  const readResults = useCallback((matches: LegalSearchResult[]) => {
    if (matches.length === 0) {
      const message = 'Belum ada pasal yang dapat dibacakan. Cari materi terlebih dahulu.';
      setStatus(message);
      speak(message);
      return;
    }

    const materialText = matches
      .map((result) => {
        const articles = result.articles
          .map((article) => `${article.title}. ${article.simpleText}`)
          .join(' ');
        return `${result.material.title}. ${result.shortAnswer ?? result.material.summary}. ${articles}`;
      })
      .join(' ');

    setLastReadResults(matches);
    setStatus(
      `Sedang membacakan ${matches.reduce(
        (total, result) => total + result.articles.length,
        0
      )} pasal terkait. Setelah selesai, ucapkan simpan untuk memasukkannya ke koleksi.`
    );
    speak(materialText);
  }, []);

  const runSearch = useCallback(
    (searchQuery: string, readAfterSearch = false) => {
      const trimmedQuery = searchQuery.trim();

      if (!trimmedQuery) {
        const message = 'Masukkan nomor undang-undang atau pertanyaan hukum.';
        setResults([]);
        setSearchedQuery('');
        setStatus(message);
        speak(message);
        return;
      }

      const matches = searchLegalMaterials(trimmedQuery);
      const message =
        matches.length > 0
          ? `Ditemukan ${matches.reduce(
              (total, result) => total + result.articles.length,
              0
            )} pasal terkait dari ${matches.length} dokumen hukum.`
          : 'Materi yang sesuai belum ditemukan. Coba gunakan kata kunci lain.';

      setQuery(trimmedQuery);
      setSearchedQuery(trimmedQuery);
      setResults(matches);
      setExpandedId(null);
      setStatus(message);

      if (readAfterSearch && matches.length > 0) {
        const announced = speak(message, { onEnd: () => readResults(matches) });
        if (!announced) readResults(matches);
      } else {
        speak(message);
      }
    },
    [readResults]
  );

  const saveReadResults = useCallback(() => {
    if (lastReadResults.length === 0) {
      const message =
        'Belum ada pasal yang baru dibacakan. Ucapkan bacakan setelah melakukan pencarian.';
      setStatus(message);
      speak(message);
      return;
    }

    let changed = false;
    lastReadResults.forEach((result) => {
      if (save(result.material, result.articles)) changed = true;
    });

    const articleCount = lastReadResults.reduce(
      (total, result) => total + result.articles.length,
      0
    );
    const message = changed
      ? `${articleCount} pasal yang baru dibacakan berhasil disimpan ke koleksi.`
      : 'Semua pasal yang baru dibacakan sudah ada di koleksi.';
    setStatus(message);
    speak(message);
  }, [lastReadResults, save]);

  const handleVoiceResult = useCallback(
    (transcript: string) => {
      const normalized = transcript.toLocaleLowerCase('id-ID').trim();
      setQuery(transcript);

      if (normalized.includes('simpan')) {
        saveReadResults();
        return;
      }

      if (
        normalized.includes('bacakan') ||
        normalized.includes('baca') ||
        normalized.includes('dengarkan')
      ) {
        const searchTerms = normalized
          .replace(/\b(tolong|coba|bantu aku|bacakan|baca|dengarkan)\b/g, ' ')
          .replace(/\b(semua|pasal|materi|yang|terkait|hasilnya)\b/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        if (searchTerms.length > 2) {
          runSearch(searchTerms, true);
        } else {
          readResults(results);
        }
        return;
      }

      const searchTerms = normalized
        .replace(/\b(tolong|coba|bantu aku|cari|carikan|materi tentang)\b/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      runSearch(searchTerms || transcript);
    },
    [readResults, results, runSearch, saveReadResults]
  );

  const { isListening, isSupported, startListening } = useVoiceSearch({
    onResult: handleVoiceResult,
    onStatusChange: setStatus,
  });

  const listenToMaterial = (result: LegalSearchResult) => {
    readResults([result]);
  };

  const saveMaterial = (result: LegalSearchResult) => {
    const saved = save(result.material, result.articles);
    const message = saved
      ? `${result.articles.length} pasal dari ${result.material.shortTitle} berhasil disimpan ke koleksi.`
      : `Pasal dari ${result.material.shortTitle} sudah ada di koleksi.`;
    setStatus(message);
    speak(message);
  };

  return (
    <div className="page page--search">
      <header className="page-heading">
        <p className="eyebrow">TEMUKAN DASAR HUKUM</p>
        <h1>Cari Hukum</h1>
        <p>Cari berdasarkan nomor UU, topik, atau pertanyaan sehari-hari.</p>
      </header>

      <div className="search-layout">
        <section className="search-panel">
          <div className="voice-search">
            <button
              className={`voice-search__button ${isListening ? 'is-listening' : ''}`}
              disabled={isListening}
              onClick={startListening}
              type="button"
              aria-label={isListening ? 'Mikrofon sedang mendengarkan' : 'Cari dengan suara'}
            >
              <Icon
                name={isListening ? 'radio' : 'mic'}
                width={54}
                height={54}
              />
            </button>
            <strong>
              {isListening
                ? 'Sedang mendengarkan...'
                : 'Tekan untuk mencari, bacakan, atau simpan'}
            </strong>
            <p className="voice-search__hint">
              Contoh: “cari hak kerja”, “bacakan”, atau “simpan”.
            </p>
            {!isSupported && (
              <p>
                Voice search belum tersedia di browser ini. Pencarian keyboard
                tetap dapat digunakan.
              </p>
            )}
          </div>

          <label className="input-label" htmlFor="legal-search">
            CARI DENGAN KEYBOARD
          </label>
          <form
            className="search-form"
            onSubmit={(event) => {
              event.preventDefault();
              runSearch(query);
            }}
          >
            <input
              id="legal-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Contoh: Apa hak tunanetra?"
              type="search"
            />
            <button type="submit" aria-label="Jalankan pencarian">
              <Icon name="search" width={22} height={22} />
            </button>
          </form>

          <div className="status-box" role="status" aria-live="polite">
            <Icon name="info" width={19} height={19} />
            <p>{status}</p>
          </div>
          <p className="disclaimer">{legalDisclaimer}</p>

          {!searchedQuery && (
            <div className="suggestions">
              <h2>Contoh pencarian</h2>
              {suggestions.map((suggestion) => (
                <button key={suggestion} onClick={() => runSearch(suggestion)}>
                  <span>{suggestion}</span>
                  <Icon name="arrow" width={18} height={18} />
                </button>
              ))}
            </div>
          )}
        </section>

        {searchedQuery && (
          <section className="results">
            <h2>Hasil untuk &ldquo;{searchedQuery}&rdquo;</h2>
            {results.length === 0 && (
              <div className="empty-state">
                <Icon name="search" width={42} height={42} />
                <h3>Belum ada materi yang cocok</h3>
                <p>Coba gunakan kata kunci yang lebih singkat atau nomor undang-undang.</p>
              </div>
            )}
            {results.map((result) => (
              <ResultCard
                key={result.material.id}
                result={result}
                expanded={expandedId === result.material.id}
                saved={isSaved(
                  result.material.id,
                  result.articles.map((article) => article.id)
                )}
                onListen={() => listenToMaterial(result)}
                onToggleDetails={() =>
                  setExpandedId((current) =>
                    current === result.material.id ? null : result.material.id
                  )
                }
                onSave={() => saveMaterial(result)}
              />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
