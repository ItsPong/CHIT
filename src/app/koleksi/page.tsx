'use client';

import Icon from '@/components/Icon';
import { legalMaterials, type LegalMaterial } from '@/data/legalMaterials';
import useCollection, { type SavedMaterial } from '@/hooks/useCollection';
import { speak } from '@/services/speech';

function SavedItem({
  savedMaterial,
  onRemove,
}: {
  savedMaterial: SavedMaterial;
  onRemove: () => void;
}) {
  const { material, articles } = savedMaterial;
  const readSavedArticles = () => {
    const articleText = articles
      .map(
        (article) =>
          `${article.title}. Penjelasan sederhana. ${article.simpleText}. Teks pasal asli. ${article.originalText}`
      )
      .join(' ');
    speak(`${material.title}. ${articleText}`);
  };

  return (
    <article className="saved-card">
      <button className="saved-card__content" onClick={readSavedArticles}>
        <p className="saved-card__topic">
          {articles.length} PASAL TERSIMPAN
        </p>
        <h3>{material.shortTitle}</h3>
        <p>{articles.map((article) => article.title).join(', ')}</p>
        <span>
          <Icon name="volume" width={18} height={18} />
          Tekan untuk dengarkan pasal
        </span>
      </button>
      <div className="button-row">
        <button
          className="button button--primary button--compact"
          onClick={readSavedArticles}
        >
          <Icon name="play" width={19} height={19} />
          Dengarkan
        </button>
        <button
          className="button button--outline button--compact"
          onClick={onRemove}
        >
          <Icon name="trash" width={19} height={19} />
          Hapus
        </button>
      </div>
    </article>
  );
}

export default function CollectionPage() {
  const { savedMaterials, remove } = useCollection();

  const removeMaterial = (material: LegalMaterial) => {
    remove(material.id);
    speak(`${material.shortTitle} dihapus dari koleksi.`);
  };

  return (
    <div className="page">
      <header className="page-heading">
        <p className="eyebrow">MATERI TERSIMPAN</p>
        <h1>Koleksiku</h1>
        <p>Materi hukum yang Anda simpan tersedia di sini.</p>
      </header>

      <div className="collection-layout">
        <section>
          {savedMaterials.length === 0 ? (
            <div className="empty-state">
              <Icon name="bookmark" width={42} height={42} />
              <h2>Belum ada materi tersimpan</h2>
              <p>
                Gunakan tombol Simpan pada hasil pencarian agar materi mudah
                ditemukan kembali.
              </p>
            </div>
          ) : (
            <div className="saved-list">
              {savedMaterials.map((material) => (
                <SavedItem
                  key={material.material.id}
                  savedMaterial={material}
                  onRemove={() => removeMaterial(material.material)}
                />
              ))}
            </div>
          )}
        </section>

        <aside className="popular-section">
          <h2>Materi yang sering dicari</h2>
          {legalMaterials.slice(0, 3).map((material, index) => (
            <article className="popular-item" key={material.id}>
              <span>0{index + 1}</span>
              <div>
                <h3>{material.shortTitle}</h3>
                <p>{material.articles.length} materi pasal</p>
              </div>
            </article>
          ))}
        </aside>
      </div>
    </div>
  );
}
