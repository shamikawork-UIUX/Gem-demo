import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { Button, LinkButton } from '../ui/Button';
import { IMAGES } from '../../data/images';
import { useEnquiry } from '../../contexts/EnquiryContext';

export function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative overflow-hidden border-b border-ink-line bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          
          <span className="inline-flex items-center gap-2 rounded-full bg-sapphire-50 px-3 py-1.5 text-xs font-semibold text-sapphire-700">
            <ShieldCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Sourced and examined in Ratnapura, Sri Lanka
          </span>

          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]">
            Ceylon gemstones you can actually ask questions about.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Sapphires, rubies, spinels and alexandrite, listed with their real status,
            their real treatment and their certificate in full. Nothing here is bought with
            a button — every stone is agreed in conversation with the two of us.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton to="/gemstones" size="lg">
              Browse Gemstones
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </LinkButton>
            <Button size="lg" variant="secondary" onClick={() => openEnquiry()}>
              Arrange a Viewing
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-ink-line pt-6">
            {[
            { value: 'GIA & GRS', label: 'Certificates shown in full' },
            { value: '100%', label: 'Treatment disclosed' },
            { value: 'Direct', label: 'You speak to the sourcers' }].
            map((stat) =>
            <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-xl text-ink">{stat.value}</span>
                  <span className="mt-1 block text-xs leading-snug text-ink-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          className="relative">
          
          <div className="overflow-hidden rounded-3xl border border-ink-line bg-ink-wash">
            <img
              src={IMAGES.hero}
              alt="An unheated cornflower blue Ceylon sapphire, oval cut, photographed on white"
              className="h-full w-full object-cover" />
            
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-ink-line bg-white px-4 py-3 shadow-card sm:left-8">
            <span className="h-2 w-2 rounded-full bg-emeraldg-400" aria-hidden="true" />
            <p className="text-sm text-ink">
              <span className="font-semibold">RG-1010</span>
              <span className="text-ink-muted"> · 3.44 ct unheated royal blue</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}