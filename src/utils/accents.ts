export type Accent = 'sapphire' | 'ruby' | 'emeraldg' | 'amethyst' | 'gold';

interface AccentStyle {
  chip: string;
  icon: string;
  hoverBorder: string;
  bar: string;
  text: string;
}

export const accentStyles: Record<Accent, AccentStyle> = {
  sapphire: {
    chip: 'bg-sapphire-50 text-sapphire-700',
    icon: 'bg-sapphire-50 text-sapphire-600',
    hoverBorder: 'hover:border-sapphire-400',
    bar: 'bg-sapphire-500',
    text: 'text-sapphire-700'
  },
  ruby: {
    chip: 'bg-ruby-50 text-ruby-600',
    icon: 'bg-ruby-50 text-ruby-500',
    hoverBorder: 'hover:border-ruby-400',
    bar: 'bg-ruby-500',
    text: 'text-ruby-600'
  },
  emeraldg: {
    chip: 'bg-emeraldg-50 text-emeraldg-600',
    icon: 'bg-emeraldg-50 text-emeraldg-500',
    hoverBorder: 'hover:border-emeraldg-400',
    bar: 'bg-emeraldg-500',
    text: 'text-emeraldg-600'
  },
  amethyst: {
    chip: 'bg-amethyst-50 text-amethyst-600',
    icon: 'bg-amethyst-50 text-amethyst-500',
    hoverBorder: 'hover:border-amethyst-400',
    bar: 'bg-amethyst-500',
    text: 'text-amethyst-600'
  },
  gold: {
    chip: 'bg-gold-50 text-gold-600',
    icon: 'bg-gold-50 text-gold-500',
    hoverBorder: 'hover:border-gold-500',
    bar: 'bg-gold-500',
    text: 'text-gold-600'
  }
};