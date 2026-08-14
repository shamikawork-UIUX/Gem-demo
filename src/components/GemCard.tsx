import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BadgeCheckIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { StatusBadge } from './ui/StatusBadge';
import { SaveButton } from './SaveButton';
import { CopyLinkButton } from './CopyLinkButton';
import { formatCarat, formatPrice, gemUrl } from '../utils/format';
import type { Gemstone } from '../types/gemstone';

export function GemCard({ gem, className }: {gem: Gemstone;className?: string;}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      className={twMerge(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-line bg-white transition-[border-color,box-shadow,transform] duration-200 ease-gem hover:-translate-y-1 hover:border-sapphire-200 hover:shadow-lift',
        className
      )}>
      
      <div className="relative aspect-square overflow-hidden bg-ink-wash">
        <img
          src={gem.images[0]}
          alt={`${gem.name}, ${formatCarat(gem.carat)} ${gem.cut} cut`}
          loading="lazy"
          className={twMerge(
            'h-full w-full object-cover transition-transform duration-500 ease-gem group-hover:scale-[1.04]',
            gem.status === 'Sold' && 'opacity-70 saturate-[0.7]'
          )} />
        
        <div className="absolute left-3 top-3">
          <StatusBadge status={gem.status} className="bg-white/95 backdrop-blur" />
        </div>
        <div className="absolute right-3 top-3 z-10 flex items-center gap-2 opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-200 sm:ease-gem sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
          <SaveButton gemId={gem.id} gemName={gem.name} />
          <CopyLinkButton url={gemUrl(gem.ref)} title={`${gem.name} (${gem.ref})`} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-faint">
          <span>{gem.ref}</span>
          {gem.certified &&
          <span
            className="inline-flex items-center gap-1 text-sapphire-600"
            title={`Certified by ${gem.certLab}`}>
            
              <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {gem.certLab}
            </span>
          }
        </div>

        <h3 className="mt-1.5 font-display text-xl leading-snug text-ink">
          <Link
            to={`/gemstones/${gem.ref}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-sapphire-700">
            
            {gem.name}
          </Link>
        </h3>

        <p className="mt-1 text-sm text-ink-muted">
          {formatCarat(gem.carat)} · {gem.cut} cut · {gem.colour}
        </p>

        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-lg font-semibold text-ink">{formatPrice(gem.price)}</p>
          <span className="text-sm font-medium text-sapphire-600 transition-transform duration-200 ease-gem group-hover:translate-x-0.5">
            View details
          </span>
        </div>
      </div>
    </motion.article>);

}