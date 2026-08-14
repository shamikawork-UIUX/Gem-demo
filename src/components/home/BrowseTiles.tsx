import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { categories, cuts } from '../../data/site';
import { accentStyles } from '../../utils/accents';
import { gemstones } from '../../data/gemstones';

function countByType(type: string) {
  return gemstones.filter((g) => g.type === type && g.status !== 'Sold').length;
}

function countByCut(cut: string) {
  return gemstones.filter((g) => g.cut === cut && g.status !== 'Sold').length;
}

const cutShapes: Record<string, string> = {
  Oval: 'rounded-[50%/60%] h-10 w-8',
  Cushion: 'rounded-2xl h-9 w-9',
  Round: 'rounded-full h-9 w-9',
  Emerald: 'rounded-md h-10 w-7',
  Pear: 'rounded-[50%_50%_50%_50%/70%_70%_30%_30%] h-10 w-8'
};

export function BrowseTiles() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Browse by gemstone</h2>
          <p className="mt-2 max-w-xl text-ink-muted">
            Start with the stone you have in mind, or open the full collection and filter it
            down.
          </p>
        </div>
        <Link
          to="/gemstones"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
          
          View all gemstones
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((c) => {
          const a = accentStyles[c.accent];
          return (
            <Link
              key={c.type}
              to={`/gemstones?type=${encodeURIComponent(c.type)}`}
              className={twMerge(
                'group relative flex flex-col overflow-hidden rounded-2xl border border-ink-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-200 ease-gem hover:-translate-y-1 hover:shadow-card',
                a.hoverBorder
              )}>
              
              <span
                className={twMerge(
                  'absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 ease-gem group-hover:scale-x-100',
                  a.bar
                )}
                aria-hidden="true" />
              
              <span
                className={twMerge(
                  'inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold',
                  a.chip
                )}>
                
                {countByType(c.type)} available
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">{c.label}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">{c.blurb}</p>
              <span
                className={twMerge(
                  'mt-4 inline-flex items-center gap-1 text-sm font-medium transition-transform duration-200 ease-gem group-hover:translate-x-0.5',
                  a.text
                )}>
                
                Browse
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>);

        })}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Browse by cut</h2>
        <p className="mt-2 max-w-xl text-ink-muted">
          Already know the shape? Jump straight to it.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cuts.map((c) =>
          <Link
            key={c.cut}
            to={`/gemstones?cut=${encodeURIComponent(c.cut)}`}
            className="group flex items-center gap-4 rounded-2xl border border-ink-line bg-white p-4 transition-[border-color,background-color,transform] duration-200 ease-gem hover:-translate-y-0.5 hover:border-sapphire-200 hover:bg-sapphire-50/40">
            
              <span
              className={twMerge(
                'shrink-0 border-2 border-sapphire-400 bg-sapphire-50 transition-colors duration-200 ease-gem group-hover:border-sapphire-500 group-hover:bg-sapphire-100',
                cutShapes[c.cut]
              )}
              aria-hidden="true" />
            
              <span>
                <span className="block font-medium text-ink">{c.label}</span>
                <span className="block text-xs text-ink-muted">
                  {countByCut(c.cut)} available
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>);

}