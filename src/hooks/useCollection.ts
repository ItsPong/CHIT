'use client';

import { useCallback, useEffect, useState } from 'react';

import { legalMaterials, type LegalMaterial } from '@/data/legalMaterials';

const STORAGE_KEY = 'chit-saved-materials';
const listeners = new Set<() => void>();
let memoryItems: SavedCollectionItem[] = [];

export type SavedCollectionItem = {
  materialId: string;
  articleIds: string[];
};

export type SavedMaterial = {
  material: LegalMaterial;
  articles: LegalMaterial['articles'];
};

function normalizeStoredItems(value: unknown): SavedCollectionItem[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item) => {
    if (typeof item === 'string') {
      const material = legalMaterials.find((candidate) => candidate.id === item);
      return material
        ? [{ materialId: item, articleIds: material.articles.map((article) => article.id) }]
        : [];
    }

    if (
      item &&
      typeof item === 'object' &&
      'materialId' in item &&
      typeof item.materialId === 'string' &&
      'articleIds' in item &&
      Array.isArray(item.articleIds)
    ) {
      return [
        {
          materialId: item.materialId,
          articleIds: item.articleIds.filter(
            (articleId: unknown): articleId is string =>
              typeof articleId === 'string'
          ),
        },
      ];
    }

    return [];
  });
}

function readSavedItems() {
  if (typeof window === 'undefined') {
    return memoryItems;
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? normalizeStoredItems(JSON.parse(value)) : [];
  } catch {
    return [];
  }
}

function writeSavedItems(items: SavedCollectionItem[]) {
  memoryItems = items;

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Keep the in-memory collection available when browser storage is blocked.
    }
  }

  listeners.forEach((listener) => listener());
}

export default function useCollection() {
  const [savedItems, setSavedItems] = useState<SavedCollectionItem[]>([]);

  useEffect(() => {
    const update = () => setSavedItems(readSavedItems());
    update();
    listeners.add(update);

    return () => {
      listeners.delete(update);
    };
  }, []);

  const save = useCallback(
    (material: LegalMaterial, articles: LegalMaterial['articles']) => {
      const currentItems = readSavedItems();
      const existing = currentItems.find((item) => item.materialId === material.id);
      const articleIds = articles.map((article) => article.id);

      if (existing) {
        const mergedArticleIds = [...new Set([...existing.articleIds, ...articleIds])];
        if (mergedArticleIds.length === existing.articleIds.length) return false;

        writeSavedItems(
          currentItems.map((item) =>
            item.materialId === material.id
              ? { ...item, articleIds: mergedArticleIds }
              : item
          )
        );
        return true;
      }

      writeSavedItems([...currentItems, { materialId: material.id, articleIds }]);
      return true;
    },
    []
  );

  const remove = useCallback((materialId: string) => {
    writeSavedItems(
      readSavedItems().filter((item) => item.materialId !== materialId)
    );
  }, []);

  const savedMaterials = savedItems.flatMap((item): SavedMaterial[] => {
    const material = legalMaterials.find(
      (candidate) => candidate.id === item.materialId
    );
    if (!material) return [];

    return [
      {
        material,
        articles: item.articleIds
          .map((articleId) =>
            material.articles.find((article) => article.id === articleId)
          )
          .filter(
            (article): article is LegalMaterial['articles'][number] =>
              Boolean(article)
          ),
      },
    ];
  });

  return {
    savedMaterials,
    isSaved: (materialId: string, articleIds: string[]) => {
      const saved = savedItems.find((item) => item.materialId === materialId);
      return Boolean(
        saved && articleIds.every((articleId) => saved.articleIds.includes(articleId))
      );
    },
    save,
    remove,
  };
}
