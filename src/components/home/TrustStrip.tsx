import React from 'react';
import { BadgeCheckIcon, FileTextIcon, HandshakeIcon, ScanEyeIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { trustPoints } from '../../data/site';
import { accentStyles } from '../../utils/accents';

const icons = [ScanEyeIcon, FileTextIcon, BadgeCheckIcon, HandshakeIcon];

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <h2 className="font-display text-3xl text-ink sm:text-4xl">Trust & transparency</h2>
      <p className="mt-2 max-w-2xl text-ink-muted">
        The four commitments behind every listing on this site.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, i) => {
          const Icon = icons[i];
          const a = accentStyles[point.accent];
          return (
            <div key={point.title} className="flex flex-col">
              <span
                className={twMerge('grid h-11 w-11 place-items-center rounded-xl', a.icon)}>
                
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-[0.95rem] font-semibold text-ink">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{point.text}</p>
            </div>);

        })}
      </div>
    </section>);

}