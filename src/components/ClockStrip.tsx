import React from 'react';
import { ClockIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useClocks } from '../hooks/useClocks';

export function ClockStrip({
  variant = 'inline',
  className



}: {variant?: 'inline' | 'stacked';className?: string;}) {
  const { sriLanka, local, localZone, isBusinessHours } = useClocks();

  if (variant === 'stacked') {
    return (
      <div className={twMerge('space-y-2 text-sm', className)}>
        <div className="flex items-center justify-between gap-4">
          <span className="text-ink-muted">Sri Lanka (GMT+5:30)</span>
          <span className="font-semibold tabular-nums text-ink">{sriLanka}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-ink-muted">Your time ({localZone})</span>
          <span className="font-semibold tabular-nums text-ink">{local}</span>
        </div>
        <p
          className={twMerge(
            'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium',
            isBusinessHours ?
            'bg-emeraldg-50 text-emeraldg-600' :
            'bg-ink-wash text-ink-muted'
          )}>
          
          <span
            className={twMerge(
              'h-1.5 w-1.5 rounded-full',
              isBusinessHours ? 'bg-emeraldg-400' : 'bg-ink-faint'
            )}
            aria-hidden="true" />
          
          {isBusinessHours ? 'Open now — a good time to call' : 'Closed now — we reply next morning'}
        </p>
      </div>);

  }

  return (
    <div
      className={twMerge(
        'flex items-center gap-2 text-xs text-ink-muted',
        className
      )}>
      
      <ClockIcon className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
      <span>
        Sri Lanka{' '}
        <span className="font-semibold tabular-nums text-ink">{sriLanka}</span>
        <span className="text-ink-faint"> (GMT+5:30)</span>
      </span>
      <span className="text-ink-line" aria-hidden="true">
        |
      </span>
      <span>
        You <span className="font-semibold tabular-nums text-ink">{local}</span>
      </span>
      <span
        className={twMerge(
          'ml-0.5 h-1.5 w-1.5 rounded-full',
          isBusinessHours ? 'bg-emeraldg-400' : 'bg-ink-faint'
        )}
        title={isBusinessHours ? 'Open now' : 'Closed now'}
        aria-hidden="true" />
      
      <span className="sr-only">{isBusinessHours ? 'Open now' : 'Closed now'}</span>
    </div>);

}