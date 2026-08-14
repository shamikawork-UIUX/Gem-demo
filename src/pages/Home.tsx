import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { BrowseTiles } from '../components/home/BrowseTiles';
import { HowItWorks } from '../components/home/HowItWorks';
import { TrustStrip } from '../components/home/TrustStrip';
import { GemCard } from '../components/GemCard';
import { Button, LinkButton } from '../components/ui/Button';
import { ClockStrip } from '../components/ClockStrip';
import { gemstones } from '../data/gemstones';
import { IMAGES } from '../data/images';
import { useEnquiry } from '../contexts/EnquiryContext';

export function Home() {
  const { openEnquiry } = useEnquiry();
  const featured = gemstones.filter((g) => g.status !== 'Sold').slice(0, 4);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Featured gemstones</h2>
            <p className="mt-2 max-w-xl text-ink-muted">
              A few stones currently at the desk. Each one is photographed in the same
              daylight-balanced light, unretouched.
            </p>
          </div>
          <Link
            to="/gemstones"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
            
            See the full collection
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((gem) =>
          <GemCard key={gem.id} gem={gem} />
          )}
        </div>
      </section>

      <BrowseTiles />
      <HowItWorks />
      <TrustStrip />

      <section className="border-y border-ink-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div className="overflow-hidden rounded-3xl border border-ink-line">
            <img
              src={IMAGES.heritage}
              alt="Miners washing gem gravel in a river near Ratnapura, Sri Lanka"
              loading="lazy"
              className="h-full w-full object-cover" />
            
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-emeraldg-50 px-3 py-1.5 text-xs font-semibold text-emeraldg-600">
              Ceylon gem heritage
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              An island that has supplied the world&apos;s gem trade for two thousand years
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              Sri Lanka&apos;s gem gravels around Ratnapura, Elahera and Okkampitiya are among
              the richest on earth, worked by hand in small pits and river beds much as they
              have been for centuries. Understanding where a stone comes from — and who dug,
              cut and traded it before it reached you — is part of buying one well.
            </p>
            <Link
              to="/ceylon-gems"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
              
              Read about the island and how we trade
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 rounded-3xl border border-ink-line bg-ink-wash/50 p-8 sm:p-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Tell us what you are looking for
            </h2>
            <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
              Whether it is a stone on this site or something we have not listed yet, the
              next step is the same: a short message, then a real conversation. No account,
              no payment, no obligation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => openEnquiry()}>
                Arrange a Viewing
              </Button>
              <LinkButton to="/custom-gem-request" size="lg" variant="secondary">
                Request a Custom Gem
              </LinkButton>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-line bg-white p-5">
            <h3 className="text-sm font-semibold text-ink">Is now a good time to call?</h3>
            <div className="mt-3">
              <ClockStrip variant="stacked" />
            </div>
            <Link
              to="/request-a-callback"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
              
              Rather we called you? Request a callback
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>);

}