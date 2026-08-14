import React, { useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { FormSuccess } from '../components/ui/FormSuccess';
import { Button } from '../components/ui/Button';
import { Field, Input, Select, Textarea } from '../components/ui/Field';
import { BUSINESS } from '../data/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  type: string;
  carat: string;
  budget: string;
  description: string;
}

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  type: 'Sapphire',
  carat: '',
  budget: '',
  description: ''
};

export function CustomGemRequest() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please tell us your name so we know who we are helping.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
    next.email = 'Please enter an email address we can send options to.';
    if (!form.description.trim())
    next.description = 'A sentence or two is enough — it helps us search properly.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 900);
  }

  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Request a Custom Gem' }]}
        eyebrow="Not in stock? Not a problem"
        title="Request a custom gem"
        intro="Most of what passes through our hands never reaches the site. Tell us what you are looking for and we will search our network of miners, cutters and dealers in Sri Lanka on your behalf — with no obligation to buy anything we find." />
      

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        {status === 'sent' ?
        <FormSuccess
          title="Thank you for your request"
          message="Our team will review it and get back to you soon with matching options. We usually reply within one working day, and if a search will take longer than that we will tell you honestly how long."
          detail={`A copy has been sent to ${BUSINESS.email}. If anything changes about what you are looking for, just reply to that email.`} /> :


        <form
          onSubmit={submit}
          noValidate
          className="rounded-3xl border border-ink-line bg-white p-6 shadow-card sm:p-8">
          
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" htmlFor="cg-name" error={errors.name}>
                <Input
                id="cg-name"
                value={form.name}
                autoComplete="name"
                onChange={(e) => update('name', e.target.value)}
                placeholder="Jane Fernando" />
              
              </Field>
              <Field label="Email" htmlFor="cg-email" error={errors.email}>
                <Input
                id="cg-email"
                type="email"
                value={form.email}
                autoComplete="email"
                onChange={(e) => update('email', e.target.value)}
                placeholder="jane@example.com" />
              
              </Field>
              <Field label="Phone / WhatsApp" htmlFor="cg-phone" optional>
                <Input
                id="cg-phone"
                type="tel"
                value={form.phone}
                autoComplete="tel"
                onChange={(e) => update('phone', e.target.value)}
                placeholder="+44 7700 900123" />
              
              </Field>
              <Field label="Gemstone wanted" htmlFor="cg-type">
                <Select
                id="cg-type"
                value={form.type}
                onChange={(e) => update('type', e.target.value)}>
                
                  {['Sapphire', 'Ruby', 'Spinel', 'Alexandrite', 'Star stone', 'Not sure yet'].map(
                  (t) =>
                  <option key={t} value={t}>
                        {t}
                      </option>

                )}
                </Select>
              </Field>
              <Field label="Approximate carat" htmlFor="cg-carat" optional>
                <Input
                id="cg-carat"
                value={form.carat}
                onChange={(e) => update('carat', e.target.value)}
                placeholder="2 – 3 ct" />
              
              </Field>
              <Field label="Approximate budget" htmlFor="cg-budget" optional>
                <Input
                id="cg-budget"
                value={form.budget}
                onChange={(e) => update('budget', e.target.value)}
                placeholder="USD 5,000 – 8,000" />
              
              </Field>
            </div>

            <Field
            className="mt-5"
            label="What are you looking for?"
            htmlFor="cg-description"
            error={errors.description}
            hint="Colour, shape, whether it must be unheated or certified, and what it is for — an engagement ring, a collection piece, a gift.">
            
              <Textarea
              id="cg-description"
              rows={5}
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              placeholder="An unheated cornflower blue sapphire, around 3 ct, oval or cushion, for an engagement ring. GIA report preferred." />
            
            </Field>

            <div className="mt-7 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-ink-faint">
                We only use your details to answer this request. No mailing list, no
                obligation, and no payment is taken anywhere on this site.
              </p>
              <Button type="submit" size="lg" disabled={status === 'sending'}>
                {status === 'sending' ?
              <>
                    <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </> :

              'Send request'
              }
              </Button>
            </div>
          </form>
        }
      </div>
    </div>);

}