import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button, LinkButton } from '../components/ui/Button';
import { ClockStrip } from '../components/ClockStrip';
import { IMAGES } from '../data/images';
import { BUSINESS } from '../data/site';
import { useEnquiry } from '../contexts/EnquiryContext';

const principles = [
{
  title: 'Trust',
  text: 'Everything we say about a stone must hold up when it is in your hand and under a loupe.',
  bar: 'bg-sapphire-500'
},
{
  title: 'Transparency',
  text: 'Treatment, certification status and condition are stated on every listing, including where they lower the price.',
  bar: 'bg-ruby-500'
},
{
  title: 'Authenticity',
  text: 'Natural Sri Lankan stones only. No synthetics, no glass-filled material, no diffusion, no exceptions.',
  bar: 'bg-emeraldg-500'
},
{
  title: 'Respect for the trade',
  text: 'We pay miners and cutters properly and name the towns our stones come from. The people at the start of the chain are why there is a business at all.',
  bar: 'bg-amethyst-500'
}];


export function About() {
  const { openEnquiry } = useEnquiry();

  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="About Ruth Gems"
        title="Two partners, one desk in Ratnapura"
        intro="Ruth Gems was founded by two partners who have spent their working lives inside Sri Lanka's gem trade — one on the sourcing and cutting side, one on the dealing and export side. We are not an inherited family house; what we bring is hands-on expertise and the relationships that come from years of buying in these towns." />
      

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-ink-line">
            <img
              src={IMAGES.workshop}
              alt="A partner examining a loose sapphire with a jeweller's loupe"
              className="h-full w-full object-cover" />
            
          </div>
          <div>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Why we started</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              Between us we had spent years watching good Ceylon material leave the island
              with its story stripped off it — treatment undisclosed, origin vague, prices set
              by whoever was furthest from the mine. Buyers abroad had no one to simply ask.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              So we built the opposite: a small, deliberately unautomated business where every
              stone is examined in hand, listed with what is actually true about it, and sold
              only after a real conversation. There is no cart on this site because there
              should not be one.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              We are based in Ratnapura, we buy in Ratnapura, Elahera and Okkampitiya, and we
              answer our own messages.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-wash/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">What we hold to</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) =>
            <article key={p.title} className="rounded-2xl border border-ink-line bg-white p-6">
                <span className={`block h-1 w-10 rounded-full ${p.bar}`} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{p.text}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink-line bg-white p-6">
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
          </div>

          <div className="rounded-2xl border border-ink-line bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Where we are</h2>
            <p className="mt-4 flex items-start gap-2 text-[0.95rem] leading-relaxed text-ink-muted">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" aria-hidden="true" />
              <span>
                {BUSINESS.addressLines.map((line) =>
                <span key={line} className="block">
                    {line}
                  </span>
                )}
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Visits are by appointment so that we can have the right parcels ready and give
              you our full attention.
            </p>
            <LinkButton className="mt-5" variant="secondary" to="/contact">
              See map and contact details
            </LinkButton>
          </div>

          <div className="rounded-2xl border border-sapphire-100 bg-sapphire-50 p-6">
            <h2 className="font-display text-2xl text-ink">Come and see for yourself</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
              Whether that means an hour at our desk in Ratnapura or twenty minutes on a video
              call from wherever you are, it is the same invitation — and there is no
              obligation attached to it.
            </p>
            <Button className="mt-5" onClick={() => openEnquiry()}>
              Arrange a Viewing
            </Button>
          </div>
        </div>
      </section>
    </div>);

}