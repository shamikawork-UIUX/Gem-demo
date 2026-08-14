import { BUSINESS } from '../data/site';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price);
}

export function formatCarat(carat: number): string {
  return `${carat.toFixed(2)} ct`;
}

export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export function gemUrl(ref: string): string {
  if (typeof window === 'undefined') return `/gemstones/${ref}`;
  return `${window.location.origin}/gemstones/${ref}`;
}