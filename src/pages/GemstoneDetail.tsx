import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BadgeCheckIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { AnchorButton, Button, LinkButton } from '../components/ui/Button';
import { StatusBadge } from '../components/ui/StatusBadge';
import { SaveButton } from '../components/SaveButton';
import { ShareMenu } from '../components/ShareMenu';
import { GemCard } from '../components/GemCard';
import { GemGallery } from '../components/gem/GemGallery';
import { CertificateViewer } from '../components/gem/CertificateViewer';
import { StickyEnquireBar } from '../components/gem/StickyEnquireBar';
import { NotFound } from './NotFound';
import { getGemstone, relatedGemstones } from '../data/gemstones';
import { BUSINESS } from '../data/site';
import { formatCarat, formatPrice, gemUrl, whatsappLink } from '../utils/format';
import { useEnquiry } from '../contexts/EnquiryContext';

export function GemstoneDetail() {
  const { ref = '' } = useParams();
  const gem = getGemstone(ref);
  const { openEnquiry } = useEnquiry();

  if (!gem) return <NotFound />;

  const related = relatedGemstones(gem);
  const specs: [string, string][] = [
  ['Origin', gem.origin],
  ['Carat weight', formatCarat(gem.carat)],
  ['Dimensions', gem.dimensions],
  ['Colour', gem.colour],
  ['Clarity', gem.clarity],
  ['Cut', `${gem.cut} cut`],
  ['Treatment', gem.treatment],
  ['Certification', gem.certified ? `${gem.certLab} — ${gem.certNumber}` : 'Not certified']];


  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <Breadcrumbs
          items={[
          { label: 'Home', to: '/' },
          { label: 'Gemstones', to: '/gemstones' },
          { label: gem.type, to: `/gemstones?type=${encodeURIComponent(gem.type)}` },
          { label: gem.ref }]
          } />
        

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <GemGallery gem={gem} />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={gem.status} />
              <span className="text-sm font-medium uppercase tracking-wide text-ink-faint">
                {gem.ref}
              </span>
              {gem.certified &&
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sapphire-50 px-2.5 py-1 text-xs font-semibold text-sapphire-700">
                  <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {gem.certLab} certified
                </span>
              }
            </div>

            <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
              {gem.name}
            </h1>

            <p className="mt-3 text-[1.05rem] text-ink-muted">
              {gem.type} · {formatCarat(gem.carat)} · {gem.cut} cut · {gem.colour}
            </p>

            <p className="mt-6 font-display text-4xl text-ink">{formatPrice(gem.price)}</p>
            <p className="mt-1 text-sm text-ink-muted">
              Price in USD, excluding shipping and any duties in your country. Always open to
              a conversation.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {gem.status === 'Available' &&
              <>
                  <Button size="lg" onClick={() => openEnquiry({ name: gem.name, ref: gem.ref })}>
                    Enquire Now
                  </Button>
                  <AnchorButton
                  size="lg"
                  variant="whatsapp"
                  href={whatsappLink(
                    `Hello Ruth Gems, I am interested in ${gem.name} (${gem.ref}). Could you tell me more?`
                  )}
                  target="_blank"
                  rel="noreferrer noopener">
                  
                    <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                  </AnchorButton>
                  <AnchorButton size="lg" variant="secondary" href={`tel:${BUSINESS.phone}`}>
                    <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                    Call
                  </AnchorButton>
                </>
              }

              {gem.status === 'Reserved' &&
              <>
                  <Button size="lg" onClick={() => openEnquiry({ name: gem.name, ref: gem.ref })}>
                    Enquire About This Gemstone
                  </Button>
                  <LinkButton
                  size="lg"
                  variant="secondary"
                  to={`/gemstones?type=${encodeURIComponent(gem.type)}`}>
                  
                    Explore Similar
                  </LinkButton>
                </>
              }

              {gem.status === 'Sold' &&
              <LinkButton
                size="lg"
                to={`/gemstones?type=${encodeURIComponent(gem.type)}`}>
                
                  Explore Similar Gemstones
                </LinkButton>
              }

              <div className="flex items-center gap-2">
                <SaveButton gemId={gem.id} gemName={gem.name} className="h-11 w-11" />
                <ShareMenu url={gemUrl(gem.ref)} title={`${gem.name} (${gem.ref})`} />
              </div>
            </div>

            {gem.status === 'Reserved' &&
            <p className="mt-5 rounded-2xl border border-gold-100 bg-gold-50 px-4 py-3 text-sm leading-relaxed text-gold-600">
                This stone is currently reserved for another client while their setting is
                finalised. Enquire anyway — we will tell you honestly whether it is likely to
                become available, and show you close alternatives in the meantime.
              </p>
            }

            {gem.status === 'Sold' &&
            <p className="mt-5 rounded-2xl border border-ink-line bg-ink-wash px-4 py-3 text-sm leading-relaxed text-ink-muted">
                This stone has found its owner. We see comparable material regularly — tell us
                what drew you to it and we will look on your behalf.
              </p>
            }

            <section className="mt-10">
              <h2 className="font-display text-2xl text-ink">Specifications</h2>
              <dl className="mt-4 overflow-hidden rounded-2xl border border-ink-line">
                {specs.map(([label, value], i) =>
                <div
                  key={label}
                  className={`grid grid-cols-[10rem_1fr] gap-4 px-4 py-3 text-[0.95rem] ${
                  i % 2 === 1 ? 'bg-ink-wash/50' : 'bg-white'}`
                  }>
                  
                    <dt className="text-ink-muted">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                )}
              </dl>
            </section>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <section>
            <h2 className="font-display text-2xl text-ink">About this stone</h2>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-ink-muted">
              {gem.description}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
              Photographs are taken in daylight-balanced light and are not retouched. Even so,
              no screen shows a stone honestly — we would rather show you this one live on
              video before you decide.{' '}
              <Link
                to="/gem-guide"
                className="font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
                
                Read the gem guide
              </Link>{' '}
              if you would like to know what to look for.
            </p>
          </section>

          <CertificateViewer gem={gem} />
        </div>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-ink">Related gemstones</h2>
            <Link
              to="/gemstones"
              className="text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
              
              View all gemstones
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) =>
            <GemCard key={g.id} gem={g} />
            )}
          </div>
        </section>
      </div>

      <StickyEnquireBar gem={gem} />
    </div>);

}