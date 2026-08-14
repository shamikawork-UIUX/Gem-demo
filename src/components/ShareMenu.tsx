import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckIcon,
  FacebookIcon,
  LinkIcon,
  MailIcon,
  MessageCircleIcon,
  Share2Icon,
  TwitterIcon } from
'lucide-react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

interface ShareMenuProps {
  url: string;
  title: string;
  compact?: boolean;
  className?: string;
}

export function ShareMenu({ url, title, compact = false, className }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {

      /* clipboard unavailable — the toast still confirms the link */}
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
    toast.success('Link copied to your clipboard.', { description: url });
    setOpen(false);
  }

  const items = [
  {
    label: 'Share on WhatsApp',
    icon: MessageCircleIcon,
    href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`,
    tone: 'text-[#128a4f]'
  },
  {
    label: 'Share on Facebook',
    icon: FacebookIcon,
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    tone: 'text-sapphire-600'
  },
  {
    label: 'Share on X',
    icon: TwitterIcon,
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    tone: 'text-ink'
  },
  {
    label: 'Share by email',
    icon: MailIcon,
    href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    tone: 'text-amethyst-500'
  }];


  return (
    <div ref={wrapRef} className={twMerge('relative', className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Share ${title}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={twMerge(
          'inline-flex items-center gap-2 rounded-full border border-ink-line bg-white/95 text-ink-muted backdrop-blur transition-[color,border-color,background-color] duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-700',
          compact ? 'h-9 w-9 justify-center' : 'h-11 px-5 text-[0.95rem] font-medium',
          open && 'border-sapphire-400 text-sapphire-700'
        )}>
        
        <Share2Icon className="h-4 w-4" aria-hidden="true" />
        {!compact && 'Share'}
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.97 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="absolute right-0 z-30 mt-2 w-60 origin-top-right overflow-hidden rounded-2xl border border-ink-line bg-white p-1.5 shadow-lift">
          
            <button
            type="button"
            role="menuitem"
            onClick={copyLink}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-ink transition-colors duration-150 ease-gem hover:bg-ink-wash">
            
              {copied ?
            <CheckIcon className="h-4 w-4 text-emeraldg-500" aria-hidden="true" /> :

            <LinkIcon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            }
              {copied ? 'Link copied' : 'Copy link'}
            </button>
            {items.map((item) =>
          <a
            key={item.label}
            role="menuitem"
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink transition-colors duration-150 ease-gem hover:bg-ink-wash">
            
                <item.icon className={twMerge('h-4 w-4', item.tone)} aria-hidden="true" />
                {item.label}
              </a>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}