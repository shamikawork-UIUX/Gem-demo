import { useMemo, useState } from 'react';
import { gemstones } from '../data/gemstones';
import type { GemColour, GemCut, GemStatus, GemType, Gemstone } from '../types/gemstone';

export type SortKey = 'recent' | 'price-asc' | 'price-desc' | 'carat-desc';

export interface Filters {
  query: string;
  types: GemType[];
  cuts: GemCut[];
  colours: GemColour[];
  statuses: GemStatus[];
  caratMin: number;
  caratMax: number;
  priceMin: number;
  priceMax: number;
  certifiedOnly: boolean;
}

export const CARAT_BOUNDS: [number, number] = [0, 10];
export const PRICE_BOUNDS: [number, number] = [0, 25000];

export const emptyFilters: Filters = {
  query: '',
  types: [],
  cuts: [],
  colours: [],
  statuses: [],
  caratMin: CARAT_BOUNDS[0],
  caratMax: CARAT_BOUNDS[1],
  priceMin: PRICE_BOUNDS[0],
  priceMax: PRICE_BOUNDS[1],
  certifiedOnly: false
};

export const sortOptions: {key: SortKey;label: string;}[] = [
{ key: 'recent', label: 'Recently added' },
{ key: 'price-asc', label: 'Price: low to high' },
{ key: 'price-desc', label: 'Price: high to low' },
{ key: 'carat-desc', label: 'Carat weight' }];


export function countActive(filters: Filters): number {
  let n = 0;
  n += filters.types.length;
  n += filters.cuts.length;
  n += filters.colours.length;
  n += filters.statuses.length;
  if (filters.certifiedOnly) n += 1;
  if (filters.caratMin !== CARAT_BOUNDS[0] || filters.caratMax !== CARAT_BOUNDS[1]) n += 1;
  if (filters.priceMin !== PRICE_BOUNDS[0] || filters.priceMax !== PRICE_BOUNDS[1]) n += 1;
  return n;
}

export function useGemFilters(initial: Partial<Filters>) {
  const [filters, setFilters] = useState<Filters>({ ...emptyFilters, ...initial });
  const [sort, setSort] = useState<SortKey>('recent');

  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const list = gemstones.filter((g: Gemstone) => {
      if (
      q &&
      !g.name.toLowerCase().includes(q) &&
      !g.ref.toLowerCase().includes(q) &&
      !g.type.toLowerCase().includes(q) &&
      !g.colour.toLowerCase().includes(q))

      return false;
      if (filters.types.length && !filters.types.includes(g.type)) return false;
      if (filters.cuts.length && !filters.cuts.includes(g.cut)) return false;
      if (filters.colours.length && !filters.colours.includes(g.colour)) return false;
      if (filters.statuses.length && !filters.statuses.includes(g.status)) return false;
      if (filters.certifiedOnly && !g.certified) return false;
      if (g.carat < filters.caratMin || g.carat > filters.caratMax) return false;
      if (g.price < filters.priceMin || g.price > filters.priceMax) return false;
      return true;
    });

    const sorted = [...list];
    sorted.sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'carat-desc':
          return b.carat - a.carat;
        default:
          return b.addedAt.localeCompare(a.addedAt);
      }
    });
    return sorted;
  }, [filters, sort]);

  return { filters, setFilters, sort, setSort, results };
}