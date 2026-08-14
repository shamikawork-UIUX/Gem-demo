import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { useSavedGems } from '../contexts/SavedGemsContext';

export function SaveButton({
  gemId,
  gemName,
  className




}: {gemId: string;gemName: string;className?: string;}) {
  const { isSaved, toggleSaved } = useSavedGems();
  const saved = isSaved(gemId);

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${gemName} from saved` : `Save ${gemName}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(gemId);
        toast(saved ? 'Removed from your saved gemstones.' : 'Saved to your gemstones.', {
          description: saved ?
          undefined :
          'Mention it in your enquiry and we will keep it aside while we talk.'
        });
      }}
      className={twMerge(
        'relative grid h-9 w-9 place-items-center rounded-full border border-ink-line bg-white/95 text-ink-muted backdrop-blur transition-[color,border-color,background-color] duration-200 ease-gem hover:border-ruby-400 hover:text-ruby-500',
        saved && 'border-ruby-100 bg-ruby-50 text-ruby-500',
        className
      )}>
      
      <motion.span
        key={saved ? 'on' : 'off'}
        initial={{ scale: saved ? 0.7 : 1 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 16 }}
        className="grid place-items-center">
        
        <HeartIcon
          className="h-4 w-4"
          fill={saved ? 'currentColor' : 'none'}
          aria-hidden="true" />
        
      </motion.span>
      <AnimatePresence>
        {saved &&
        <motion.span
          key="ring"
          initial={{ scale: 0.6, opacity: 0.6 }}
          animate={{ scale: 1.6, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="pointer-events-none absolute inset-0 rounded-full border border-ruby-400"
          aria-hidden="true" />

        }
      </AnimatePresence>
    </button>);

}