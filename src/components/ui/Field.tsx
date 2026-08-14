import React from 'react';
import { twMerge } from 'tailwind-merge';

const controlBase =
'w-full rounded-xl border border-ink-line bg-white px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-faint transition-[border-color,box-shadow] duration-200 ease-gem hover:border-ink-faint focus:border-sapphire-500 focus:ring-4 focus:ring-sapphire-100 focus:outline-none';

interface FieldProps {
  label: string;
  htmlFor: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({
  label,
  htmlFor,
  optional,
  hint,
  error,
  className,
  children
}: FieldProps) {
  return (
    <div className={twMerge('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {optional && <span className="ml-1.5 font-normal text-ink-faint">(optional)</span>}
      </label>
      {children}
      {error ?
      <p className="text-sm text-ruby-500">{error}</p> :
      hint ?
      <p className="text-xs text-ink-muted">{hint}</p> :
      null}
    </div>);

}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return <input ref={ref} className={twMerge(controlBase, className)} {...rest} />;
  }
);

export function Textarea({
  className,
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={twMerge(controlBase, 'resize-y', className)} {...rest} />;
}

export function Select({
  className,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={twMerge(controlBase, 'appearance-none pr-9', className)} {...rest}>
      {children}
    </select>);

}