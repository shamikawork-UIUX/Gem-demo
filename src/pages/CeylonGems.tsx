import React from 'react';
import { Link } from 'react-router-dom';
import { GemIcon, HandshakeIcon, MapPinnedIcon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Button, LinkButton } from '../components/ui/Button';
import { IMAGES } from '../data/images';
import { useEnquiry } from '../contexts/EnquiryContext';

const mines = [
{
  place: 'Ratnapura',
  text: 'The "city of gems". Alluvial pits sunk by hand into the gem gravels of the Kalu Ganga basin, worked in small teams with hand winches and woven baskets.'
},
{
  place: 'Elahera',
  text: 'A long belt of river gravels in the centre of the island, known for fine rubies, spinels and strongly saturated blue sapphire.'
},
{
  place: 'Okkampitiya',
  text: 'Further south-east, and the source of much of the island’s best spinel — including the hot pinks and reds that were mistaken for ruby for centuries.'
}];


export function CeylonGems() {
  const { openEnquiry } = useEnquiry();

  return (
    <div>
      <PageHeader
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Ceylon Gems' }]}
        eyebrow="Ceylon gems"
        title="Where these stones come from, and how they reach you"
        intro="Sri Lanka — Ceylon, Serendib, Ratna-dweepa, the island of gems — has been supplying the world's gem trade for more than two thousand years. Understanding that trade is part of buying from it well." />
      

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl border border-ink-line">
            <img
              src={IMAGES.heritage}
              alt="Miners washing gem-bearing gravel in a river near Ratnapura"
              className="h-full w-full object-cover" />
            
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emeraldg-50 px-3 py-1.5 text-xs font-semibold text-emeraldg-600">
              <MapPinnedIcon className="h-3.5 w-3.5" aria-hidden="true" />
              From our mines
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">From our mines</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              Almost all Sri Lankan gem mining is small-scale and licensed, done with hand
              tools rather than machinery, in pits a metre wide and river beds worked by
              hand. It is slow, physical work, and the people who do it are the first link in
              a chain we deal with directly.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              We buy rough and cut stones at the source in the towns below, see them in
              daylight before we commit, and have them cut by cutters we know personally.
            </p>
            <ul className="mt-7 space-y-4">
              {mines.map((m) =>
              <li key={m.place} className="rounded-2xl border border-ink-line bg-white p-4">
                  <h3 className="text-[0.95rem] font-semibold text-ink">{m.place}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{m.text}</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-line bg-ink-wash/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sapphire-50 px-3 py-1.5 text-xs font-semibold text-sapphire-700">
              <GemIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Ceylon gem heritage
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              An industry older than most countries
            </h2>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {[
            {
              title: 'Two millennia of trade',
              text: 'Ceylon gems reached Rome, Persia and China along the same sea routes as spice and pearl. Ptolemy wrote about the island’s sapphires; Marco Polo described its rubies. The trade never stopped.'
            },
            {
              title: 'A trade of small hands',
              text: 'Mining, cutting, brokering and dealing are spread across thousands of small family operations rather than a few large companies. Reputation and personal relationships hold the whole system together.'
            },
            {
              title: 'Why Ceylon material stands apart',
              text: 'The island’s gem gravels produce corundum with unusually bright, open colour — the pastel and cornflower blues, the yellows, and the padparadscha found almost nowhere else at this quality.'
            }].
            map((item) =>
            <article key={item.title} className="rounded-2xl border border-ink-line bg-white p-6">
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{item.text}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section id="trading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amethyst-50 px-3 py-1.5 text-xs font-semibold text-amethyst-600">
              <HandshakeIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Our way of trading
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              Nothing here is sold with a button
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
              A gemstone is not a commodity with a fixed price and a checkout. Two stones of
              identical weight and grade can differ in value by half, and only conversation
              reveals which one is right for you.
            </p>
            <ul className="mt-6 space-y-3">
              {[
              'We tell you when a stone is not right for what you described — including when a cheaper one would serve you better.',
              'Treatment is disclosed on every stone, in plain words, even where it lowers the price.',
              'We will show you any stone live on video, in daylight, before you commit to anything.',
              'Price, payment terms and insured shipping are agreed with you directly, in writing.'].
              map((line) =>
              <li key={line} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sapphire-500"
                  aria-hidden="true" />
                
                  {line}
                </li>
              )}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => openEnquiry()}>
                Arrange a Viewing
              </Button>
              <LinkButton size="lg" variant="secondary" to="/about">
                Meet the partners
              </LinkButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink-line">
            <img
              src={IMAGES.workshop}
              alt="A dealer examining a loose blue sapphire with a loupe over a paper parcel"
              className="h-full w-full object-cover" />
            
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-ink-muted">
          New to buying coloured stones?{' '}
          <Link
            to="/gem-guide"
            className="font-medium text-sapphire-600 transition-colors duration-200 ease-gem hover:text-sapphire-700">
            
            Start with the gem guide
          </Link>
          .
        </p>
      </section>
    </div>);

}