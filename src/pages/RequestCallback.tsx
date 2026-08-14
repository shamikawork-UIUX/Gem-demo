import React, { useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { FormSuccess } from '../components/ui/FormSuccess';
import { Button } from '../components/ui/Button';
import { Field, Input, Select } from '../components/ui/Field';
import { ClockStrip } from '../components/ClockStrip';

interface FormState {
  name: string;
  phone: string;
  when: string;
  country: string;
}

const empty: FormState = { name: '', phone: '', when: 'Morning (your time)', country: '' };

const windows = [
'Morning (your time)',
'Afternoon (your time)',
'Evening (your time)',
'Any time — I am flexible'];


export function RequestCallback() {
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
    if (!form.name.trim()) next.name = 'Please tell us your name so we know who to ask for.';
    if (form.phone.trim().length < 6)
    next.phone = 'Please include your number with its country code.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('sending');
    window.setTimeout(() => setStatus('sent'), 900);
  }

  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Request a Callback' }]}
        eyebrow="Rather not make the first call?"
        title="Request a callback"
        intro="Leave your number and a time that suits you, and one of us will call. Four short fields — nothing else is needed, and there is never any pressure on the call." />
      

      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-16">
        <div>
          {status === 'sent' ?
          <FormSuccess
            title="Thank you — your callback is booked"
            message={`One of our team will call you back at your preferred time (${form.when.toLowerCase()}). If we cannot reach you we will send a WhatsApp message rather than keep calling.`}
            detail="Calls are made from a Sri Lankan number beginning +94, so it may show as an unknown caller." /> :


          <form
            onSubmit={submit}
            noValidate
            className="rounded-3xl border border-ink-line bg-white p-6 shadow-card sm:p-8">
            
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" htmlFor="cb-name" error={errors.name}>
                  <Input
                  id="cb-name"
                  value={form.name}
                  autoComplete="name"
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Fernando" />
                
                </Field>
                <Field
                label="Phone number"
                htmlFor="cb-phone"
                error={errors.phone}
                hint="Include your country code.">
                
                  <Input
                  id="cb-phone"
                  type="tel"
                  value={form.phone}
                  autoComplete="tel"
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="+44 7700 900123" />
                
                </Field>
                <Field label="Best time to call" htmlFor="cb-when">
                  <Select
                  id="cb-when"
                  value={form.when}
                  onChange={(e) => update('when', e.target.value)}>
                  
                    {windows.map((w) =>
                  <option key={w} value={w}>
                        {w}
                      </option>
                  )}
                  </Select>
                </Field>
                <Field label="Country / timezone" htmlFor="cb-country" optional>
                  <Input
                  id="cb-country"
                  value={form.country}
                  autoComplete="country-name"
                  onChange={(e) => update('country', e.target.value)}
                  placeholder="United Kingdom (GMT)" />
                
                </Field>
              </div>

              <div className="mt-7 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-relaxed text-ink-faint">
                  Your number is used only for this callback and is never shared.
                </p>
                <Button type="submit" size="lg" disabled={status === 'sending'}>
                  {status === 'sending' ?
                <>
                      <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Sending
                    </> :

                'Request callback'
                }
                </Button>
              </div>
            </form>
          }
        </div>

        <aside className="rounded-3xl border border-ink-line bg-ink-wash/50 p-6">
          <h2 className="font-display text-2xl text-ink">When we are at the desk</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            We are in Ratnapura, Sri Lanka (GMT+5:30). If your preferred time falls outside our
            hours we will suggest the nearest slot that works for both of us.
          </p>
          <div className="mt-5 border-t border-ink-line pt-5">
            <ClockStrip variant="stacked" />
          </div>
        </aside>
      </div>
    </div>);

}