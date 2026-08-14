import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { AnchorButton, Button } from '../ui/Button';
import { StatusBadge } from '../ui/StatusBadge';
import { BUSINESS } from '../../data/site';
import { formatCarat, formatPrice, whatsappLink } from '../../utils/format';
import { useEnquiry } from '../../contexts/EnquiryContext';
import type { Gemstone } from '../../types/gemstone';

export function StickyEnquireBar({ gem }: {gem: Gemstone;}) {
  const [visible, setVisible] = useState(false);
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 520);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sold = gem.status === 'Sold';

  return (
    <AnimatePresence>
      {visible &&
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-line bg-white/95 backdrop-blur-md">
        
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <img
              src={gem.images[0]}
              alt=""
              className="hidden h-11 w-11 rounded-xl object-cover sm:block" />
            
              <div>
                <p className="text-sm font-semibold text-ink">
                  {sold ? 'This gemstone has been sold' : 'Interested in this gemstone?'}
                </p>
                <p className="flex items-center gap-2 text-xs text-ink-muted">
                  {gem.ref} · {formatCarat(gem.carat)} · {formatPrice(gem.price)}
                  <StatusBadge status={gem.status} className="hidden sm:inline-flex" />
                </p>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2 pr-16 sm:flex-none sm:pr-20">
              {sold ?
            <Button size="sm" onClick={() => openEnquiry({ name: gem.name, ref: gem.ref })}>
                  Find me something similar
                </Button> :

            <>
                  <AnchorButton
                variant="secondary"
                size="sm"
                className="hidden sm:inline-flex"
                href={`tel:${BUSINESS.phone}`}>
                
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    Call
                  </AnchorButton>
                  <AnchorButton
                variant="whatsapp"
                size="sm"
                href={whatsappLink(
                  `Hello Ruth Gems, I am interested in ${gem.name} (${gem.ref}).`
                )}
                target="_blank"
                rel="noreferrer noopener">
                
                    <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </AnchorButton>
                  <Button size="sm" onClick={() => openEnquiry({ name: gem.name, ref: gem.ref })}>
                    Enquire
                  </Button>
                </>
            }
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}