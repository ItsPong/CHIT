import { useCallback, useEffect, useState } from 'react';

import { legalMaterials, type LegalMaterial } from '@/data/legalMaterials';

const STORAGE_KEY = 'chit-saved-materials';
const listeners = new Set<() => void>();
let memoryIds: string[] = [];

function readSavedIds() {
  if (typeof window === 'undefined') {
    return memoryIds;
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? (JSON.parse(value) as string[]) : [];
  } catch {
    return [];
  }
}

function writeSavedIds(ids: string[]) {
  memoryIds = ids;

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // Keep the in-memory collection available when browser storage is blocked.
    }
  }

  listeners.forEach((listener) => listener());
}

export default function useCollection() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const update = () => setSavedIds(readSavedIds());
    update();
    listeners.add(update);

    return () => {
      listeners.delete(update);
    };
  }, []);

  const save = useCallback((material: LegalMaterial) => {
    const currentIds = readSavedIds();
    if (currentIds.includes(material.id)) return false;

    writeSavedIds([...currentIds, material.id]);
    return true;
  }, []);

  const remove = useCallback((materialId: string) => {
    writeSavedIds(readSavedIds().filter((id) => id !== materialId));
  }, []);

  return {
    savedMaterials: savedIds
      .map((id) => legalMaterials.find((material) => material.id === id))
      .filter((material): material is LegalMaterial => Boolean(material)),
    isSaved: (materialId: string) => savedIds.includes(materialId),
    save,
    remove,
  };
}
