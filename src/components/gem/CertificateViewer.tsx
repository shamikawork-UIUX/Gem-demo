import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeCheckIcon, RotateCwIcon, XIcon, ZoomInIcon } from 'lucide-react';
import { IMAGES } from '../../data/images';
import { Button } from '../ui/Button';
import type { Gemstone } from '../../types/gemstone';

export function CertificateViewer({ gem }: {gem: Gemstone;}) {
  const [flipped, setFlipped] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  if (!gem.certified) {
    return (
      <div className="rounded-3xl border border-dashed border-ink-line bg-ink-wash/40 p-6">
        <h2 className="font-display text-2xl text-ink">Certificate</h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
          This stone is not currently certified, and we would rather say so than imply
          otherwise. If you would like an independent report from GIA or GRS before it ships,
          we will arrange it at cost — usually two to three weeks — and send you the document
          before you decide.
        </p>
      </div>);

  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-2xl text-ink">Certificate</h2>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={() => setFlipped((f) => !f)}>
            <RotateCwIcon className="h-4 w-4" aria-hidden="true" />
            {flipped ? 'Show front' : 'Show back'}
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setZoomed(true)}>
            <ZoomInIcon className="h-4 w-4" aria-hidden="true" />
            Zoom
          </Button>
        </div>
      </div>

      <p className="mt-2 text-sm text-ink-muted">
        {gem.certLab} report {gem.certNumber} — the physical document that travels with the
        stone. Turn it over to see the reverse, and verify the number directly with the
        laboratory.
      </p>

      <div className="flip-3d mt-5">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative aspect-[4/3] w-full">
          
          <div className="flip-face absolute inset-0 overflow-hidden rounded-2xl border border-ink-line bg-white shadow-card">
            <img
              src={IMAGES.certificate}
              alt={`Front of the ${gem.certLab} certificate for ${gem.ref}`}
              className="h-full w-full object-cover" />
            
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-sapphire-700 backdrop-blur">
              <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {gem.certLab} · Front
            </span>
          </div>

          <div
            className="flip-face absolute inset-0 overflow-hidden rounded-2xl border border-ink-line bg-white p-6 shadow-card"
            style={{ transform: 'rotateY(180deg)' }}>
            
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-wash px-3 py-1.5 text-xs font-semibold text-ink-muted">
              {gem.certLab} · Reverse
            </span>
            <dl className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {[
              ['Report number', gem.certNumber ?? '—'],
              ['Species', gem.type === 'Other' ? 'Natural corundum' : `Natural ${gem.type.toLowerCase()}`],
              ['Weight', `${gem.carat.toFixed(2)} ct`],
              ['Dimensions', gem.dimensions],
              ['Colour', gem.colour],
              ['Cut', `${gem.cut} cut`],
              ['Origin opinion', gem.origin],
              ['Treatment', gem.treatment]].
              map(([label, value]) =>
              <div key={label}>
                  <dt className="text-xs uppercase tracking-wide text-ink-faint">{label}</dt>
                  <dd className="mt-0.5 text-ink">{value}</dd>
                </div>
              )}
            </dl>
            <p className="mt-5 border-t border-ink-line pt-3 text-xs leading-relaxed text-ink-faint">
              A laboratory report identifies and describes a gemstone. It is not a valuation,
              and it does not guarantee beauty — that part is for your own eyes.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {zoomed &&
        <div
          className="fixed inset-0 z-50 grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate, enlarged">
          
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setZoomed(false)} />
          
            <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white p-2">
            
              <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close certificate"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-ink shadow-card transition-colors duration-200 ease-gem hover:bg-ink-wash">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <img
              src={IMAGES.certificate}
              alt={`Enlarged ${gem.certLab} certificate for ${gem.ref}`}
              className="w-full rounded-xl" />
            
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>);

}