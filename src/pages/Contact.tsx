import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  Loader2Icon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneCallIcon,
  PhoneIcon } from
'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { FormSuccess } from '../components/ui/FormSuccess';
import { Button } from '../components/ui/Button';
import { Field, Input, Textarea } from '../components/ui/Field';
import { ClockStrip } from '../components/ClockStrip';
import { BUSINESS } from '../data/site';
import { whatsappLink } from '../utils/format';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
    next.email = 'Please enter an email address we can reply to.';
    if (!form.message.trim()) next.message = 'Let us know how we can help.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 900);
  }

  const channels = [
  {
    label: 'WhatsApp',
    value: BUSINESS.phoneDisplay,
    hint: 'Usually the fastest way to reach us',
    href: whatsappLink('Hello Ruth Gems, I would like to ask about your Ceylon gemstones.'),
    icon: MessageCircleIcon,
    tone: 'text-[#128a4f] bg-emeraldg-50',
    external: true
  },
  {
    label: 'Call us',
    value: BUSINESS.phoneDisplay,
    hint: 'During Sri Lanka business hours',
    href: `tel:${BUSINESS.phone}`,
    icon: PhoneIcon,
    tone: 'text-sapphire-600 bg-sapphire-50',
    external: false
  },
  {
    label: 'Email',
    value: BUSINESS.email,
    hint: 'We reply within one working day',
    href: `mailto:${BUSINESS.email}`,
    icon: MailIcon,
    tone: 'text-amethyst-500 bg-amethyst-50',
    external: false
  }];


  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Contact"
        title="Talk to us directly"
        intro="However you prefer to get in touch, you will be speaking with one of the two partners — not a call centre. Ask us anything, including whether a stone is right for you." />
      

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {channels.map((c) =>
          <a
            key={c.label}
            href={c.href}
            {...c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {}}
            className="group flex items-center gap-4 rounded-2xl border border-ink-line bg-white p-5 transition-[border-color,box-shadow,transform] duration-200 ease-gem hover:-translate-y-0.5 hover:border-sapphire-200 hover:shadow-card">
            
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${c.tone}`}>
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-ink">{c.label}</span>
                <span className="block truncate text-sm text-ink-muted">{c.value}</span>
                <span className="block text-xs text-ink-faint">{c.hint}</span>
              </span>
            </a>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <section>
            <h2 className="font-display text-3xl text-ink">Send us a message</h2>
            <p className="mt-2 text-ink-muted">
              Three fields. We will reply to the email address you give us.
            </p>
            <div className="mt-6">
              {status === 'sent' ?
              <FormSuccess
                title="Thank you — your message is with us"
                message="We have received your message and will get back to you shortly, usually within a few hours during Sri Lanka business hours and always within one working day."
                primary={{ label: 'Browse gemstones', to: '/gemstones' }} /> :


              <form
                onSubmit={submit}
                noValidate
                className="rounded-3xl border border-ink-line bg-white p-6 shadow-card sm:p-8">
                
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" htmlFor="ct-name" error={errors.name}>
                      <Input
                      id="ct-name"
                      value={form.name}
                      autoComplete="name"
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Jane Fernando" />
                    
                    </Field>
                    <Field label="Email" htmlFor="ct-email" error={errors.email}>
                      <Input
                      id="ct-email"
                      type="email"
                      value={form.email}
                      autoComplete="email"
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jane@example.com" />
                    
                    </Field>
                  </div>
                  <Field
                  className="mt-5"
                  label="Message"
                  htmlFor="ct-message"
                  error={errors.message}>
                  
                    <Textarea
                    id="ct-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="I would like to ask about unheated blue sapphires around 3 ct." />
                  
                  </Field>
                  <div className="mt-6 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-ink-faint">
                      Your details are used only to reply to this message.
                    </p>
                    <Button type="submit" size="lg" disabled={status === 'sending'}>
                      {status === 'sending' ?
                    <>
                          <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending
                        </> :

                    'Send message'
                    }
                    </Button>
                  </div>
                </form>
              }
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink-line bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Visit us</h2>
              <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-ink-muted">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
                <span>
                  {BUSINESS.addressLines.map((line) =>
                  <span key={line} className="block">
                      {line}
                    </span>
                  )}
                </span>
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-ink-line">
                <iframe
                  title="Map showing Ruth Gems in Ratnapura, Sri Lanka"
                  src={BUSINESS.mapUrl}
                  className="h-56 w-full"
                  loading="lazy" />
                
              </div>
              <p className="mt-3 text-xs text-ink-faint">
                Visits are by appointment so we can have the right parcels ready.
              </p>
            </div>

            <div className="rounded-2xl border border-ink-line bg-ink-wash/50 p-6">
              <h2 className="font-display text-2xl text-ink">Business hours</h2>
              <ul className="mt-4 space-y-2 text-[0.95rem]">
                {BUSINESS.hours.map((h) =>
                <li key={h.day} className="flex justify-between gap-4 text-ink-muted">
                    <span>{h.day}</span>
                    <span className="text-ink">{h.time}</span>
                  </li>
                )}
              </ul>
              <div className="mt-5 border-t border-ink-line pt-4">
                <ClockStrip variant="stacked" />
              </div>
              <Link
                to="/request-a-callback"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
                
                <PhoneCallIcon className="h-4 w-4" aria-hidden="true" />
                Rather we called you? Request a callback
              </Link>
            </div>

            <div className="rounded-2xl border border-ink-line bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Follow along</h2>
              <p className="mt-2 text-sm text-ink-muted">
                New stones are often posted the day they reach the desk.
              </p>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line px-4 py-2 text-sm text-ink transition-colors duration-200 ease-gem hover:border-amethyst-400 hover:text-amethyst-600">
                  
                  <InstagramIcon className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-line px-4 py-2 text-sm text-ink transition-colors duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-700">
                  
                  <FacebookIcon className="h-4 w-4" aria-hidden="true" />
                  Facebook
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>);

}