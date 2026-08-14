export type GemStatus = 'Available' | 'Reserved' | 'Sold';

export type GemType =
'Sapphire' |
'Ruby' |
'Spinel' |
'Alexandrite' |
'Other';

export type GemCut =
'Oval' |
'Cushion' |
'Round' |
'Emerald' |
'Pear' |
'Cabochon';

export type GemColour =
'Blue' |
'Red' |
'Pink' |
'Yellow' |
'Green' |
'Purple' |
'Padparadscha' |
'Grey';

export interface Gemstone {
  id: string;
  ref: string;
  name: string;
  type: GemType;
  cut: GemCut;
  colour: GemColour;
  carat: number;
  price: number;
  status: GemStatus;
  certified: boolean;
  certLab?: string;
  certNumber?: string;
  origin: string;
  dimensions: string;
  clarity: string;
  treatment: string;
  addedAt: string;
  images: string[];
  video?: boolean;
  description: string;
}