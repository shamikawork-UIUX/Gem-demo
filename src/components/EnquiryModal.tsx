import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  Loader2Icon,
  MailIcon,
  MessageCircleIcon,
  XIcon } from
'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from './ui/Button';
import { Field, Input, Textarea } from './ui/Field';
import { useEnquiry } from '../contexts/EnquiryContext';
import { BUSINESS } from '../data/site';
import { whatsappLink } from '../utils/format';

type Contact = 'WhatsApp' | 'Email';

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  preferred: Contact;
  message: string;
}

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  country: '',
  preferred: 'WhatsApp',
  message: ''
};

export function EnquiryModal() {
  const { isOpen, target, closeEnquiry } = useEnquiry();
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setForm(empty);
      setErrors({});
      setStatus('idle');
      window.setTimeout(() => firstFieldRef.current?.focus(), 60);
    }
  }, [isOpen, target.ref]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeEnquiry();
    }
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, closeEnquiry]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name so we know who we are replying to.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
    next.email = 'Please enter an email address we can reach you on.';
    if (form.preferred === 'WhatsApp' && !form.phone.trim())
    next.phone = 'We need a WhatsApp number to reply there.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    window.setTimeout(() => {
      setStatus('sent');
      if (form.preferred === 'WhatsApp') {
        const lines = [
        `Hello Ruth Gems, this is ${form.name}.`,
        target.ref ? `I am enquiring about ${target.name ?? 'a gemstone'} (${target.ref}).` : 'I would like to enquire about a Ceylon gemstone.',
        form.message.trim() ? form.message.trim() : ''].
        filter(Boolean);
        window.open(whatsappLink(lines.join('\n\n')), '_blank', 'noopener');
      }
    }, 900);
  }

  return (
    <AnimatePresence>
      {isOpen &&
      <div
        className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title">
        
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={closeEnquiry} />
        
          <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-ink-line bg-white p-6 shadow-lift sm:max-w-lg sm:rounded-3xl sm:p-8">
          
            <button
            type="button"
            onClick={closeEnquiry}
            aria-label="Close enquiry form"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors duration-200 ease-gem hover:bg-ink-wash hover:text-ink">
            
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {status === 'sent' ?
          <div className="py-6 text-center">
                <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emeraldg-50 text-emeraldg-500">
              
                  <CheckCircle2Icon className="h-7 w-7" aria-hidden="true" />
                </motion.div>
                <h2 id="enquiry-title" className="mt-5 font-display text-2xl text-ink">
                  Thank you, {form.name.split(' ')[0]}
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-muted">
                  We have received your enquiry
                  {target.ref ? ` about ${target.ref}` : ''} and will get back to you shortly
                  on {form.preferred}. During Sri Lanka business hours that is usually within
                  a few hours, and always within one working day.
                </p>
                {form.preferred === 'WhatsApp' &&
            <p className="mx-auto mt-3 max-w-sm text-sm text-ink-faint">
                    We have also opened WhatsApp with your message ready to send, in case you
                    would like to start the conversation now.
                  </p>
            }
                <Button className="mt-6" onClick={closeEnquiry}>
                  Continue browsing
                </Button>
              </div> :

          <form onSubmit={submit} noValidate>
                <h2 id="enquiry-title" className="pr-10 font-display text-2xl text-ink">
                  {target.ref ? 'Enquire about this gemstone' : 'Arrange a viewing'}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  A short form — we only ask what we need to reply properly. Your details are
                  used to answer your enquiry and nothing else.
                </p>

                {target.ref &&
            <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl border border-sapphire-100 bg-sapphire-50 px-4 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-sapphire-600">
                        Enquiring about
                      </p>
                      <p className="text-[0.95rem] font-medium text-ink">
                        {target.name ?? 'Gemstone'}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-sapphire-700">
                      {target.ref}
                    </span>
                  </div>
            }

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="enq-name" error={errors.name}>
                    <Input
                  id="enq-name"
                  ref={firstFieldRef}
                  value={form.name}
                  autoComplete="name"
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Fernando" />
                
                  </Field>
                  <Field label="Email" htmlFor="enq-email" error={errors.email}>
                    <Input
                  id="enq-email"
                  type="email"
                  value={form.email}
                  autoComplete="email"
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com" />
                
                  </Field>
                  <Field
                label="Phone / WhatsApp"
                htmlFor="enq-phone"
                error={errors.phone}
                optional={form.preferred === 'Email'}>
                
                    <Input
                  id="enq-phone"
                  type="tel"
                  value={form.phone}
                  autoComplete="tel"
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+44 7700 900123" />
                
                  </Field>
                  <Field label="Country" htmlFor="enq-country" optional>
                    <Input
                  id="enq-country"
                  value={form.country}
                  autoComplete="country-name"
                  onChange={(e) => update('country', e.target.value)}
                  placeholder="United Kingdom" />
                
                  </Field>
                </div>

                <fieldset className="mt-5">
                  <legend className="text-sm font-medium text-ink">
                    How would you prefer we reply?
                  </legend>
                  <div className="mt-2 inline-flex rounded-full border border-ink-line bg-ink-wash p-1">
                    {(['WhatsApp', 'Email'] as Contact[]).map((option) =>
                <button
                  key={option}
                  type="button"
                  aria-pressed={form.preferred === option}
                  onClick={() => update('preferred', option)}
                  className={twMerge(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,box-shadow] duration-200 ease-gem',
                    form.preferred === option ?
                    'bg-white text-ink shadow-card' :
                    'text-ink-muted hover:text-ink'
                  )}>
                  
                        {option === 'WhatsApp' ?
                  <MessageCircleIcon className="h-4 w-4 text-[#128a4f]" aria-hidden="true" /> :

                  <MailIcon className="h-4 w-4 text-sapphire-600" aria-hidden="true" />
                  }
                        {option}
                      </button>
                )}
                  </div>
                </fieldset>

                <Field
              className="mt-5"
              label="Message"
              htmlFor="enq-message"
              optional
              hint="Anything helpful — your budget, timing, or what you would like to see.">
              
                  <Textarea
                id="enq-message"
                rows={3}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="I would like to see this stone on a video call this week." />
              
                </Field>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-ink-faint">
                    Sent straight to {BUSINESS.email}. No account, no payment, no obligation.
                  </p>
                  <Button type="submit" size="lg" disabled={status === 'sending'}>
                    {status === 'sending' ?
                <>
                        <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending
                      </> :

                'Send enquiry'
                }
                  </Button>
                </div>
              </form>
          }
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}