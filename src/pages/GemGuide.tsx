import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { PageHeader } from '../components/ui/PageHeader';
import { LinkButton } from '../components/ui/Button';
import { guideEntries } from '../data/guide';
import { accentStyles } from '../utils/accents';

export function GemGuide() {
  const [open, setOpen] = useState<string[]>([guideEntries[0].id]);

  function toggle(id: string) {
    setOpen((o) => o.includes(id) ? o.filter((x) => x !== id) : [...o, id]);
  }

  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Gem Guide' }]}
        eyebrow="Gem guide"
        title="What to look at before you look at the price"
        intro="Everything below is what we would tell you on a call, written down. No jargon for its own sake, and nothing that pushes you towards a more expensive stone." />
      

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="space-y-3">
          {guideEntries.map((entry) => {
            const isOpen = open.includes(entry.id);
            const a = accentStyles[entry.accent];
            return (
              <article
                key={entry.id}
                id={entry.id}
                className={twMerge(
                  'overflow-hidden rounded-2xl border bg-white transition-[border-color,box-shadow] duration-200 ease-gem',
                  isOpen ? 'border-sapphire-200 shadow-card' : 'border-ink-line hover:border-ink-faint'
                )}>
                
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${entry.id}`}
                    onClick={() => toggle(entry.id)}
                    className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6">
                    
                    <span
                      className={twMerge(
                        'mt-0.5 h-8 w-1.5 shrink-0 rounded-full',
                        a.bar
                      )}
                      aria-hidden="true" />
                    
                    <span className="flex-1">
                      <span className="block font-display text-2xl leading-snug text-ink">
                        {entry.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">{entry.summary}</span>
                    </span>
                    <ChevronDownIcon
                      className={twMerge(
                        'mt-1 h-5 w-5 shrink-0 text-ink-faint transition-transform duration-200 ease-gem',
                        isOpen && 'rotate-180 text-sapphire-600'
                      )}
                      aria-hidden="true" />
                    
                  </button>
                </h2>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    id={`panel-${entry.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden">
                    
                      <div className="space-y-3 px-5 pb-6 pl-[3.25rem] pr-6 sm:px-6 sm:pl-[3.75rem]">
                        {entry.body.map((p) =>
                      <p key={p} className="text-[0.98rem] leading-relaxed text-ink-muted">
                            {p}
                          </p>
                      )}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </article>);

          })}
        </div>

        <div className="mt-12 rounded-3xl border border-ink-line bg-ink-wash/50 p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl text-ink">Still deciding?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
            Tell us roughly what you have in mind and we will send two or three honest
            options, with the trade-offs of each explained. If nothing suits, we will say so.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LinkButton to="/custom-gem-request" size="lg">
              Request a Custom Gem
            </LinkButton>
            <LinkButton to="/gemstones" size="lg" variant="secondary">
              Browse the collection
            </LinkButton>
          </div>
        </div>
      </div>
    </div>);

}