import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon } from
'lucide-react';
import { ClockStrip } from '../ClockStrip';
import { BUSINESS } from '../../data/site';
import { whatsappLink } from '../../utils/format';

const groups: {title: string;links: {label: string;to: string;}[];}[] = [
{
  title: 'Explore',
  links: [
  { label: 'All Gemstones', to: '/gemstones' },
  { label: 'Sapphire', to: '/gemstones?type=Sapphire' },
  { label: 'Ruby', to: '/gemstones?type=Ruby' },
  { label: 'Spinel', to: '/gemstones?type=Spinel' },
  { label: 'Alexandrite', to: '/gemstones?type=Alexandrite' }]

},
{
  title: 'Learn',
  links: [
  { label: 'Gem Guide', to: '/gem-guide' },
  { label: 'Ceylon Gem Heritage', to: '/ceylon-gems' },
  { label: 'Treatments Explained', to: '/gem-guide#treatments' },
  { label: 'How Certification Works', to: '/gem-guide#certification' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Ruth Gems', to: '/about' },
  { label: 'Our Way of Trading', to: '/ceylon-gems#trading' },
  { label: 'Request a Custom Gem', to: '/custom-gem-request' },
  { label: 'Request a Callback', to: '/request-a-callback' }]

}];


export function Footer() {
  return (
    <footer className="border-t border-ink-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr]">
          <div>
            <p className="font-display text-2xl text-ink">Ruth Gems</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Ceylon sapphires, rubies, spinels and alexandrite, sourced in Sri Lanka and
              sold through direct conversation — never a checkout.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Ruth Gems on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-line text-ink-muted transition-colors duration-200 ease-gem hover:border-amethyst-400 hover:text-amethyst-500">
                
                <InstagramIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Ruth Gems on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-line text-ink-muted transition-colors duration-200 ease-gem hover:border-sapphire-400 hover:text-sapphire-600">
                
                <FacebookIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappLink('Hello Ruth Gems, I have a question.')}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Message Ruth Gems on WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-line text-ink-muted transition-colors duration-200 ease-gem hover:border-emeraldg-400 hover:text-emeraldg-500">
                
                <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {groups.map((group) =>
          <nav key={group.title} aria-label={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-sm text-ink-muted transition-colors duration-200 ease-gem hover:text-sapphire-700">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-gem hover:text-sapphire-700">
                  
                  <PhoneIcon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-gem hover:text-sapphire-700">
                  
                  <MailIcon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
                <span>{BUSINESS.addressLines.join(', ')}</span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-ink-line bg-ink-wash/60 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                Business hours
              </h3>
              <ul className="mt-2.5 space-y-1 text-sm text-ink-muted">
                {BUSINESS.hours.map((h) =>
                <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span className="text-ink">{h.time}</span>
                  </li>
                )}
              </ul>
              <div className="mt-4 border-t border-ink-line pt-3">
                <ClockStrip variant="stacked" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ruth Gems. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/about" className="transition-colors duration-200 ease-gem hover:text-ink">
              Terms of Trade
            </Link>
            <Link to="/about" className="transition-colors duration-200 ease-gem hover:text-ink">
              Privacy
            </Link>
            <Link to="/contact" className="transition-colors duration-200 ease-gem hover:text-ink">
              Complaints & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}