import React, { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon, PhoneCallIcon, XIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { whatsappLink } from '../../utils/format';
import { useClocks } from '../../hooks/useClocks';

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const isDetail = useMatch('/gemstones/:ref');
  const { pathname } = useLocation();
  const { isBusinessHours } = useClocks();

  const message =
  pathname.startsWith('/gemstones/') ?
  `Hello Ruth Gems, I am looking at a gemstone on your site (${pathname.split('/').pop()}) and would like to know more.` :
  'Hello Ruth Gems, I would like to ask about your Ceylon gemstones.';

  return (
    <div
      className={twMerge(
        'fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-6',
        isDetail ? 'bottom-28 sm:bottom-28' : 'bottom-5 sm:bottom-6'
      )}>
      
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="w-72 origin-bottom-right rounded-2xl border border-ink-line bg-white p-4 shadow-lift">
          
            <p className="font-display text-lg text-ink">Talk to us directly</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              {isBusinessHours ?
            'We are at the desk in Ratnapura right now and usually reply within minutes.' :
            'It is outside our hours in Sri Lanka, so we will reply first thing in the morning.'}
            </p>
            <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 flex items-center gap-2 rounded-xl bg-[#128a4f] px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 ease-gem hover:bg-[#0e7342]">
            
              <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <Link
            to="/request-a-callback"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-xl border border-ink-line px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-700">
            
              <PhoneCallIcon className="h-4 w-4" aria-hidden="true" />
              Request a callback instead
            </Link>
          </motion.div>
        }
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#128a4f] text-white shadow-lift transition-[background-color,transform] duration-200 ease-gem hover:bg-[#0e7342] active:scale-95">
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'close' : 'chat'}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
            className="grid place-items-center">
            
            {open ?
            <XIcon className="h-6 w-6" aria-hidden="true" /> :

            <MessageCircleIcon className="h-6 w-6" aria-hidden="true" />
            }
          </motion.span>
        </AnimatePresence>
      </button>
    </div>);

}