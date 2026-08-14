import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon, ZoomInIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import type { Gemstone } from '../../types/gemstone';

export function GemGallery({ gem }: {gem: Gemstone;}) {
  const [index, setIndex] = useState(0);
  const [zooming, setZooming] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const frameRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width * 100;
    const y = (e.clientY - rect.top) / rect.height * 100;
    setOrigin(`${x}% ${y}%`);
  }

  return (
    <div>
      <div
        ref={frameRef}
        onMouseEnter={() => setZooming(true)}
        onMouseLeave={() => setZooming(false)}
        onMouseMove={onMove}
        className="group relative aspect-square overflow-hidden rounded-3xl border border-ink-line bg-ink-wash">
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={gem.images[index]}
            src={gem.images[index]}
            alt={`${gem.name}, view ${index + 1} of ${gem.images.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: origin }}
            className={twMerge(
              'h-full w-full object-cover transition-transform duration-300 ease-gem',
              zooming && 'scale-[1.9]'
            )} />
          
        </AnimatePresence>

        <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ink-muted opacity-100 backdrop-blur transition-opacity duration-200 ease-gem group-hover:opacity-0">
          <ZoomInIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Hover to zoom
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        {gem.images.map((img, i) =>
        <button
          key={img + i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`View image ${i + 1}`}
          aria-current={i === index}
          className={twMerge(
            'h-20 w-20 overflow-hidden rounded-2xl border-2 transition-[border-color,transform] duration-200 ease-gem hover:-translate-y-0.5',
            i === index ? 'border-sapphire-600' : 'border-ink-line hover:border-sapphire-200'
          )}>
          
            <img src={img} alt="" className="h-full w-full object-cover" />
          </button>
        )}

        {gem.video &&
        <button
          type="button"
          className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-ink-line text-ink-muted transition-[border-color,color] duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-700"
          title="A 360° video of this stone is available on request">
          
            <PlayIcon className="h-5 w-5" aria-hidden="true" />
            <span className="text-[0.65rem] font-medium leading-none">360° video</span>
          </button>
        }
      </div>
    </div>);

}