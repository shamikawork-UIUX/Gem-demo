import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface SavedGemsValue {
  saved: string[];
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => boolean;
}

const SavedGemsContext = createContext<SavedGemsValue | null>(null);

export function SavedGemsProvider({ children }: {children: React.ReactNode;}) {
  const [saved, setSaved] = useState<string[]>([]);

  const isSaved = useCallback((id: string) => saved.includes(id), [saved]);

  const toggleSaved = useCallback((id: string) => {
    let nowSaved = false;
    setSaved((prev) => {
      nowSaved = !prev.includes(id);
      return nowSaved ? [...prev, id] : prev.filter((s) => s !== id);
    });
    return !saved.includes(id);
  }, [saved]);

  const value = useMemo(
    () => ({ saved, isSaved, toggleSaved }),
    [saved, isSaved, toggleSaved]
  );

  return <SavedGemsContext.Provider value={value}>{children}</SavedGemsContext.Provider>;
}

export function useSavedGems(): SavedGemsValue {
  const ctx = useContext(SavedGemsContext);
  if (!ctx) throw new Error('useSavedGems must be used within SavedGemsProvider');
  return ctx;
}