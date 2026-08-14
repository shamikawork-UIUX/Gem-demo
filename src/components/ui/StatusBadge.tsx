import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { GemStatus } from '../../types/gemstone';

const styles: Record<GemStatus, string> = {
  Available: 'bg-emeraldg-50 text-emeraldg-600 ring-emeraldg-100',
  Reserved: 'bg-gold-50 text-gold-600 ring-gold-100',
  Sold: 'bg-ink-wash text-ink-muted ring-ink-line'
};

const dots: Record<GemStatus, string> = {
  Available: 'bg-emeraldg-400',
  Reserved: 'bg-gold-500',
  Sold: 'bg-ink-faint'
};

export function StatusBadge({
  status,
  className



}: {status: GemStatus;className?: string;}) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1',
        styles[status],
        className
      )}>
      
      <span className={twMerge('h-1.5 w-1.5 rounded-full', dots[status])} aria-hidden="true" />
      {status}
    </span>);

}