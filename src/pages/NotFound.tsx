import React from 'react';
import { LinkButton } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sapphire-600">
        Page not found
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
        We could not find that gemstone or page
      </h1>
      <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
        It may have been sold and archived, or the link may be slightly off. The full
        collection is only a click away, and if you tell us what you were looking for we will
        find it for you.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton to="/gemstones" size="lg">
          Browse gemstones
        </LinkButton>
        <LinkButton to="/custom-gem-request" size="lg" variant="secondary">
          Request a custom gem
        </LinkButton>
      </div>
    </div>);

}