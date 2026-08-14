import type { GemCut, GemType } from '../types/gemstone';

export const BUSINESS = {
  name: 'Ruth Gems',
  tagline: 'Ceylon gemstones, sold the way they should be — in conversation.',
  phoneDisplay: '+94 77 214 8860',
  phone: '+94772148860',
  whatsapp: '94772148860',
  email: 'hello@ruthgems.com',
  addressLines: ['No. 42, Gem Street', 'Ratnapura 70000', 'Sri Lanka'],
  hours: [
  { day: 'Monday – Friday', time: '9:00 – 18:00' },
  { day: 'Saturday', time: '9:00 – 14:00' },
  { day: 'Sunday', time: 'By appointment' }],

  mapUrl:
  'https://www.openstreetmap.org/export/embed.html?bbox=80.37%2C6.66%2C80.42%2C6.72&layer=mapnik&marker=6.6828%2C80.3992'
};

export interface CategoryTile {
  type: GemType;
  label: string;
  blurb: string;
  accent: 'sapphire' | 'ruby' | 'emeraldg' | 'amethyst' | 'gold';
}

export const categories: CategoryTile[] = [
{
  type: 'Sapphire',
  label: 'Sapphire',
  blurb: 'Blue, yellow, pink, teal and padparadscha',
  accent: 'sapphire'
},
{
  type: 'Ruby',
  label: 'Ruby',
  blurb: 'Ceylon reds, traditionally heated or untreated',
  accent: 'ruby'
},
{
  type: 'Spinel',
  label: 'Spinel',
  blurb: 'Almost always untreated, often overlooked',
  accent: 'amethyst'
},
{
  type: 'Alexandrite',
  label: 'Alexandrite',
  blurb: 'Genuine daylight-to-lamplight colour change',
  accent: 'emeraldg'
},
{
  type: 'Other',
  label: 'Other Ceylon Gems',
  blurb: 'Star stones, cat’s eye, garnet, zircon',
  accent: 'gold'
}];


export const cuts: {cut: GemCut;label: string;}[] = [
{ cut: 'Oval', label: 'Oval' },
{ cut: 'Cushion', label: 'Cushion' },
{ cut: 'Round', label: 'Round' },
{ cut: 'Emerald', label: 'Emerald' },
{ cut: 'Pear', label: 'Pear' }];


export const howItWorks = [
{
  title: 'Browse the collection',
  text: 'Filter by stone, cut, colour, carat and budget. Every listing shows its true status.'
},
{
  title: 'Look closely',
  text: 'Full specifications, treatment disclosure and the certificate itself, front and back.'
},
{
  title: 'Send an enquiry',
  text: 'One short form. Tell us how you prefer to be reached and we reply there.'
},
{
  title: 'Talk it through',
  text: 'WhatsApp, a call, a live video viewing, or in person in Ratnapura. No pressure, no bots.'
},
{
  title: 'Agree and receive',
  text: 'Terms, payment and insured shipping are arranged directly with you, person to person.'
}];


export const trustPoints = [
{
  title: 'Authenticity first',
  text: 'Every stone is examined in hand before it is listed. If we are not certain what it is, it does not go online.',
  accent: 'sapphire' as const
},
{
  title: 'Treatment always disclosed',
  text: 'Heated, unheated or untreated is stated on every listing — including where it lowers the price.',
  accent: 'ruby' as const
},
{
  title: 'Independent certification',
  text: 'Certified stones show the lab, the report number and the document itself. Uncertified stones say so plainly.',
  accent: 'emeraldg' as const
},
{
  title: 'Direct dealing',
  text: 'You speak with the two people who source the stones. No middlemen, no checkout, no automated pricing.',
  accent: 'amethyst' as const
}];