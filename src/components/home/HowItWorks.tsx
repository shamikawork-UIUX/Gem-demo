import React from 'react';
import {
  HandshakeIcon,
  MessagesSquareIcon,
  PackageCheckIcon,
  SearchIcon,
  SparklesIcon } from
'lucide-react';
import { howItWorks } from '../../data/site';

const icons = [SearchIcon, SparklesIcon, MessagesSquareIcon, HandshakeIcon, PackageCheckIcon];

export function HowItWorks() {
  return (
    <section className="border-y border-ink-line bg-ink-wash/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">How it works</h2>
          <p className="mt-2 text-ink-muted">
            Five steps, no checkout. You can stop at any point and simply ask us something.
          </p>
        </div>

        <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-sapphire-600 ring-1 ring-ink-line">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {i < howItWorks.length - 1 &&
                  <span
                    className="hidden h-px flex-1 bg-ink-line lg:block"
                    aria-hidden="true" />

                  }
                </div>
                <h3 className="mt-4 text-[0.95rem] font-semibold text-ink">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{step.text}</p>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}