import React from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHeader({
  crumbs,
  eyebrow,
  title,
  intro,
  children






}: {crumbs: Crumb[];eyebrow?: string;title: string;intro?: string;children?: React.ReactNode;}) {
  return (
    <header className="border-b border-ink-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
        <Breadcrumbs items={crumbs} />
        {eyebrow &&
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-sapphire-600">
            {eyebrow}
          </p>
        }
        <h1 className="mt-2 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {intro &&
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-muted">{intro}</p>
        }
        {children}
      </div>
    </header>);

}