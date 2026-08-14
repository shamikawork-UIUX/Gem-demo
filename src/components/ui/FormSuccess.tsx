import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
import { LinkButton } from './Button';

export function FormSuccess({
  title,
  message,
  detail,
  primary = { label: 'Browse gemstones', to: '/gemstones' }





}: {title: string;message: string;detail?: string;primary?: {label: string;to: string;};}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-3xl border border-emeraldg-100 bg-emeraldg-50/50 p-8 text-center sm:p-12"
      role="status">
      
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-emeraldg-500 ring-1 ring-emeraldg-100">
        <CheckCircle2Icon className="h-7 w-7" aria-hidden="true" />
      </span>
      <h2 className="mt-5 font-display text-3xl text-ink">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-[1.05rem] leading-relaxed text-ink-muted">
        {message}
      </p>
      {detail &&
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-faint">{detail}</p>
      }
      <LinkButton className="mt-7" to={primary.to}>
        {primary.label}
      </LinkButton>
    </motion.div>);

}