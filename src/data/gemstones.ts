import { IMAGES } from './images';
import type { Gemstone } from '../types/gemstone';

export const gemstones: Gemstone[] = [
{
  id: 'rg-1001',
  ref: 'RG-1001',
  name: 'Cornflower Blue Ceylon Sapphire',
  type: 'Sapphire',
  cut: 'Oval',
  colour: 'Blue',
  carat: 4.12,
  price: 8600,
  status: 'Available',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 2215841097',
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '10.24 × 8.11 × 5.63 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Unheated — no treatment detected',
  addedAt: '2026-08-02',
  images: [IMAGES.blueOval, IMAGES.hero, IMAGES.tealRound],
  video: true,
  description:
  'An unheated Ceylon sapphire with the open, velvety cornflower blue that Sri Lanka is known for. Bright through the crown in daylight and even in colour across the stone, with no visible zoning. Cut to hold weight without going deep, so it faces up generously for its carat.'
},
{
  id: 'rg-1002',
  ref: 'RG-1002',
  name: 'Vivid Red Ruby',
  type: 'Ruby',
  cut: 'Cushion',
  colour: 'Red',
  carat: 2.35,
  price: 12400,
  status: 'Available',
  certified: true,
  certLab: 'GRS',
  certNumber: 'GRS 2026-041882',
  origin: 'Elahera, Sri Lanka',
  dimensions: '7.82 × 7.40 × 4.55 mm',
  clarity: 'Slightly included (SI)',
  treatment: 'Heated — traditional heat only, no fillers',
  addedAt: '2026-07-28',
  images: [IMAGES.rubyCushion, IMAGES.spinelRound, IMAGES.hero],
  description:
  'A saturated red cushion with strong life under both daylight and warm light. Traditionally heated, with no glass filling or diffusion of any kind. Fine silk gives the stone a soft glow rather than a flat, over-clean look.'
},
{
  id: 'rg-1003',
  ref: 'RG-1003',
  name: 'Hot Pink Ceylon Spinel',
  type: 'Spinel',
  cut: 'Round',
  colour: 'Pink',
  carat: 3.08,
  price: 4200,
  status: 'Available',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 6482210034',
  origin: 'Okkampitiya, Sri Lanka',
  dimensions: '8.90 × 8.88 × 5.71 mm',
  clarity: 'Eye clean (VVS)',
  treatment: 'Untreated',
  addedAt: '2026-08-05',
  images: [IMAGES.spinelRound, IMAGES.padparadscha, IMAGES.rubyCushion],
  description:
  'Spinel at its best: untreated by nature, brilliant, and quietly rarer than the sapphires beside it. This round has a clean hot pink with a slight neon lift in daylight, and no window when viewed face up.'
},
{
  id: 'rg-1004',
  ref: 'RG-1004',
  name: 'Colour-Change Alexandrite',
  type: 'Alexandrite',
  cut: 'Pear',
  colour: 'Green',
  carat: 1.24,
  price: 15800,
  status: 'Reserved',
  certified: true,
  certLab: 'GRS',
  certNumber: 'GRS 2026-039114',
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '8.05 × 5.60 × 3.90 mm',
  clarity: 'Slightly included (SI)',
  treatment: 'Untreated',
  addedAt: '2026-06-19',
  images: [IMAGES.alexandrite, IMAGES.purplePear, IMAGES.tealRound],
  video: true,
  description:
  'A genuine Ceylon alexandrite with a clear teal-green to purple shift between daylight and incandescent light. Colour change of this strength in a Sri Lankan stone is uncommon, and we would rather show you the shift on a video call than describe it.'
},
{
  id: 'rg-1005',
  ref: 'RG-1005',
  name: 'Padparadscha Sapphire',
  type: 'Sapphire',
  cut: 'Cushion',
  colour: 'Padparadscha',
  carat: 2.87,
  price: 21500,
  status: 'Available',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 1229487750',
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '8.44 × 7.92 × 5.10 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Unheated — no treatment detected',
  addedAt: '2026-08-08',
  images: [IMAGES.padparadscha, IMAGES.hero, IMAGES.spinelRound],
  description:
  'The classic Ceylon padparadscha balance of pink and orange, held evenly across the stone rather than pooling in one half. Unheated and laboratory confirmed as padparadscha, which matters — the name is applied far more often than it is earned.'
},
{
  id: 'rg-1006',
  ref: 'RG-1006',
  name: 'Canary Yellow Sapphire',
  type: 'Sapphire',
  cut: 'Emerald',
  colour: 'Yellow',
  carat: 5.46,
  price: 6900,
  status: 'Available',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 5471029338',
  origin: 'Balangoda, Sri Lanka',
  dimensions: '11.30 × 9.02 × 6.10 mm',
  clarity: 'Eye clean (VVS)',
  treatment: 'Heated — traditional heat only',
  addedAt: '2026-07-11',
  images: [IMAGES.yellowEmerald, IMAGES.padparadscha, IMAGES.hero],
  description:
  'A large, clean emerald cut in a bright canary yellow. Step cuts hide nothing, so clarity has to be there — and here it is. A practical choice for a statement ring where size is part of the brief.'
},
{
  id: 'rg-1007',
  ref: 'RG-1007',
  name: 'Teal Green Sapphire',
  type: 'Sapphire',
  cut: 'Round',
  colour: 'Green',
  carat: 1.95,
  price: 2850,
  status: 'Available',
  certified: false,
  origin: 'Elahera, Sri Lanka',
  dimensions: '7.55 × 7.51 × 4.62 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Unheated — no treatment detected',
  addedAt: '2026-08-09',
  images: [IMAGES.tealRound, IMAGES.alexandrite, IMAGES.blueOval],
  description:
  'A teal that reads green in daylight and leans blue indoors. Not yet certified — we can send it to GIA or GRS at cost before shipping if you would like a report, and we will tell you honestly whether it is worth doing for a stone at this price.'
},
{
  id: 'rg-1008',
  ref: 'RG-1008',
  name: 'Violet Sapphire',
  type: 'Sapphire',
  cut: 'Pear',
  colour: 'Purple',
  carat: 2.61,
  price: 3950,
  status: 'Sold',
  certified: true,
  certLab: 'GRS',
  certNumber: 'GRS 2026-037440',
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '10.10 × 6.85 × 4.40 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Heated — traditional heat only',
  addedAt: '2026-05-30',
  images: [IMAGES.purplePear, IMAGES.alexandrite, IMAGES.spinelRound],
  description:
  'A deep violet pear with good brilliance in the point. This stone has found its owner, but we see comparable material regularly — tell us what you liked about it and we will look.'
},
{
  id: 'rg-1009',
  ref: 'RG-1009',
  name: 'Grey-Blue Star Sapphire',
  type: 'Other',
  cut: 'Cabochon',
  colour: 'Grey',
  carat: 8.74,
  price: 1750,
  status: 'Available',
  certified: false,
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '12.90 × 10.40 × 7.20 mm',
  clarity: 'Translucent, silk present by nature',
  treatment: 'Untreated',
  addedAt: '2026-07-02',
  images: [IMAGES.starCab, IMAGES.blueOval, IMAGES.tealRound],
  video: true,
  description:
  'A sharp, centred six-ray star that stays legible as the stone moves — the only test that matters with asterism. Silk is what creates the star, so this stone is translucent by nature and should not be judged as a faceted gem.'
},
{
  id: 'rg-1010',
  ref: 'RG-1010',
  name: 'Royal Blue Sapphire',
  type: 'Sapphire',
  cut: 'Cushion',
  colour: 'Blue',
  carat: 3.44,
  price: 18900,
  status: 'Reserved',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 2189330471',
  origin: 'Ratnapura, Sri Lanka',
  dimensions: '9.10 × 8.35 × 5.80 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Unheated — no treatment detected',
  addedAt: '2026-06-25',
  images: [IMAGES.hero, IMAGES.blueOval, IMAGES.workshop],
  description:
  'A saturated royal blue cushion, unheated, with even colour and no extinction across the centre. Currently reserved for a client while their setting is finalised — we will let you know if it becomes available again.'
},
{
  id: 'rg-1011',
  ref: 'RG-1011',
  name: 'Pink Sapphire',
  type: 'Sapphire',
  cut: 'Oval',
  colour: 'Pink',
  carat: 1.58,
  price: 2200,
  status: 'Available',
  certified: true,
  certLab: 'GIA',
  certNumber: 'GIA 3374029118',
  origin: 'Okkampitiya, Sri Lanka',
  dimensions: '7.40 × 5.85 × 3.95 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Heated — traditional heat only',
  addedAt: '2026-08-10',
  images: [IMAGES.spinelRound, IMAGES.padparadscha, IMAGES.purplePear],
  description:
  'A soft, wearable pink oval in a size that sits comfortably in an everyday ring. Well proportioned, with no window and a clean face-up appearance.'
},
{
  id: 'rg-1012',
  ref: 'RG-1012',
  name: 'Red Spinel',
  type: 'Spinel',
  cut: 'Cushion',
  colour: 'Red',
  carat: 1.87,
  price: 3400,
  status: 'Available',
  certified: true,
  certLab: 'GRS',
  certNumber: 'GRS 2026-042207',
  origin: 'Elahera, Sri Lanka',
  dimensions: '7.05 × 6.70 × 4.25 mm',
  clarity: 'Eye clean (VS)',
  treatment: 'Untreated',
  addedAt: '2026-07-20',
  images: [IMAGES.rubyCushion, IMAGES.spinelRound, IMAGES.hero],
  description:
  'Historically mistaken for ruby, and on a stone like this you can see why. Untreated, bright, and considerably better value per carat than a ruby of the same face-up appearance.'
}];


export function getGemstone(ref: string): Gemstone | undefined {
  return gemstones.find((g) => g.ref.toLowerCase() === ref.toLowerCase());
}

export function relatedGemstones(gem: Gemstone, count = 3): Gemstone[] {
  const others = gemstones.filter((g) => g.id !== gem.id);
  const scored = others.
  map((g) => ({
    g,
    score:
    (g.type === gem.type ? 3 : 0) + (
    g.colour === gem.colour ? 2 : 0) + (
    g.cut === gem.cut ? 1 : 0) + (
    g.status === 'Available' ? 1 : 0)
  })).
  sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.g);
}