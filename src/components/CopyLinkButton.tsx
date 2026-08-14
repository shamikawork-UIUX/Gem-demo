import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, Share2Icon } from 'lucide-react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function CopyLinkButton({
  url,
  title,
  className




}: {url: string;title: string;className?: string;}) {
  const [copied, setCopied] = useState(false);

  async function copy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
    } catch {

      /* clipboard unavailable — the toast still shows the link */}
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
    toast.success('Link copied to your clipboard.', {
      description: `Share ${title} with whoever you like.`
    });
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy link to ${title}`}
      className={twMerge(
        'grid h-9 w-9 place-items-center rounded-full border border-ink-line bg-white/95 text-ink-muted backdrop-blur transition-[color,border-color] duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-700',
        copied && 'border-emeraldg-400 text-emeraldg-500',
        className
      )}>
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'done' : 'idle'}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
          className="grid place-items-center">
          
          {copied ?
          <CheckIcon className="h-4 w-4" aria-hidden="true" /> :

          <Share2Icon className="h-4 w-4" aria-hidden="true" />
          }
        </motion.span>
      </AnimatePresence>
    </button>);

}