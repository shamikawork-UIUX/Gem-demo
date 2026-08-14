import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'danger';
type Size = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-gem active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
  'bg-sapphire-600 text-white hover:bg-sapphire-700 shadow-[0_1px_2px_rgba(24,58,134,0.25)] hover:shadow-[0_6px_18px_-6px_rgba(24,58,134,0.6)]',
  secondary:
  'bg-white text-ink border border-ink-line hover:border-sapphire-400 hover:text-sapphire-700 hover:bg-sapphire-50',
  ghost: 'bg-transparent text-ink-muted hover:text-ink hover:bg-ink-wash',
  whatsapp: 'bg-[#128a4f] text-white hover:bg-[#0e7342]',
  danger: 'bg-ruby-500 text-white hover:bg-ruby-600'
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-12 px-7 text-base'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(base, variants[variant], sizes[size], className)}
      {...rest}>
      
      {children}
    </button>);

}

type LinkButtonProps = CommonProps & {to: string;} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={twMerge(base, variants[variant], sizes[size], className)}
      {...rest}>
      
      {children}
    </Link>);

}

type AnchorButtonProps = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function AnchorButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: AnchorButtonProps) {
  return (
    <a className={twMerge(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </a>);

}