import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GemIcon, SearchIcon, SlidersHorizontalIcon, XIcon } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { Button, LinkButton } from '../components/ui/Button';
import { GemCard } from '../components/GemCard';
import { FilterControls } from '../components/collection/FilterControls';
import {
  countActive,
  emptyFilters,
  sortOptions,
  useGemFilters,
  type SortKey } from
'../hooks/useGemFilters';
import type { GemCut, GemType } from '../types/gemstone';

export function Collection() {
  const [params] = useSearchParams();
  const typeParam = params.get('type') as GemType | null;
  const cutParam = params.get('cut') as GemCut | null;

  const { filters, setFilters, sort, setSort, results } = useGemFilters({
    types: typeParam ? [typeParam] : [],
    cuts: cutParam ? [cutParam] : []
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const active = countActive(filters);

  useEffect(() => {
    setFilters((f) => ({
      ...f,
      types: typeParam ? [typeParam] : [],
      cuts: cutParam ? [cutParam] : []
    }));
  }, [typeParam, cutParam, setFilters]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Gemstones' }]} />

      <header className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-ink sm:text-5xl">Gemstone collection</h1>
          <p className="mt-2 max-w-2xl text-ink-muted">
            Every stone currently at our desk in Ratnapura, with its real status and
            treatment. Prices are in USD and always open to a conversation.
          </p>
        </div>
        <p className="text-sm text-ink-muted">
          <span className="font-semibold text-ink">{results.length}</span>{' '}
          {results.length === 1 ? 'gemstone' : 'gemstones'}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <SearchIcon
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint"
            aria-hidden="true" />
          
          <label htmlFor="gem-search" className="sr-only">
            Search by name or reference number
          </label>
          <input
            id="gem-search"
            type="search"
            value={filters.query}
            onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
            placeholder="Search by name or reference number, e.g. RG-1001"
            className="h-12 w-full rounded-full border border-ink-line bg-white pl-11 pr-4 text-[0.95rem] text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-200 ease-gem hover:border-ink-faint focus:border-sapphire-500 focus:outline-none focus:ring-4 focus:ring-sapphire-100" />
          
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            className="h-12 lg:hidden"
            onClick={() => setDrawerOpen(true)}>
            
            <SlidersHorizontalIcon className="h-4 w-4" aria-hidden="true" />
            Filters
            {active > 0 &&
            <span className="ml-1 rounded-full bg-sapphire-600 px-2 py-0.5 text-xs font-semibold text-white">
                {active}
              </span>
            }
          </Button>

          <div className="relative">
            <label htmlFor="gem-sort" className="sr-only">
              Sort gemstones
            </label>
            <select
              id="gem-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-12 rounded-full border border-ink-line bg-white px-5 text-[0.95rem] text-ink transition-[border-color] duration-200 ease-gem hover:border-ink-faint focus:border-sapphire-500 focus:outline-none focus:ring-4 focus:ring-sapphire-100">
              
              {sortOptions.map((o) =>
              <option key={o.key} value={o.key}>
                  Sort: {o.label}
                </option>
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[17rem_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ink">Filters</h2>
              {active > 0 &&
              <button
                type="button"
                onClick={() => setFilters({ ...emptyFilters })}
                className="text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
                
                  Clear all ({active})
                </button>
              }
            </div>
            <div className="mt-5 max-h-[calc(100vh-13rem)] overflow-y-auto pr-2">
              <FilterControls filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </aside>

        <section aria-label="Gemstone results">
          {results.length > 0 ?
          <motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {results.map((gem) =>
              <GemCard key={gem.id} gem={gem} />
              )}
              </AnimatePresence>
            </motion.div> :

          <div className="rounded-3xl border border-dashed border-ink-line bg-ink-wash/40 px-6 py-16 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-sapphire-600 ring-1 ring-ink-line">
                <GemIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-ink">
                Nothing matches that just yet
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-muted">
                Our stock changes weekly, and much of what we source never reaches the site.
                Loosen a filter, or tell us what you are after and we will look for it on
                your behalf.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <LinkButton to="/custom-gem-request">Request a Custom Gem</LinkButton>
                <Button variant="secondary" onClick={() => setFilters({ ...emptyFilters })}>
                  Clear all filters
                </Button>
              </div>
            </div>
          }
        </section>
      </div>

      <AnimatePresence>
        {drawerOpen &&
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)} />
          
            <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-ink-line bg-white">
            
              <div className="flex items-center justify-between border-b border-ink-line px-5 py-4">
                <h2 className="font-display text-2xl text-ink">Filters</h2>
                <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close filters"
                className="grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors duration-200 ease-gem hover:bg-ink-wash hover:text-ink">
                
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <FilterControls filters={filters} setFilters={setFilters} />
              </div>
              <div className="flex items-center gap-3 border-t border-ink-line px-5 py-4">
                <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setFilters({ ...emptyFilters })}>
                
                  Clear all
                </Button>
                <Button className="flex-1" onClick={() => setDrawerOpen(false)}>
                  Show {results.length} {results.length === 1 ? 'result' : 'results'}
                </Button>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>

      <p className="mt-12 text-center text-sm text-ink-muted">
        Cannot see what you had in mind?{' '}
        <Link
          to="/custom-gem-request"
          className="font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
          
          Request a custom gem
        </Link>{' '}
        and we will search our network in Sri Lanka for you.
      </p>
    </div>);

}