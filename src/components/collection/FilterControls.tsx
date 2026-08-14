import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from 'lucide-react';
import { Field, Input } from '../ui/Field';
import {
  CARAT_BOUNDS,
  PRICE_BOUNDS,
  type Filters } from
'../../hooks/useGemFilters';
import type { GemColour, GemCut, GemStatus, GemType } from '../../types/gemstone';

const types: GemType[] = ['Sapphire', 'Ruby', 'Spinel', 'Alexandrite', 'Other'];
const cutList: GemCut[] = ['Oval', 'Cushion', 'Round', 'Emerald', 'Pear', 'Cabochon'];
const statuses: GemStatus[] = ['Available', 'Reserved', 'Sold'];

const colourSwatches: {colour: GemColour;hex: string;}[] = [
{ colour: 'Blue', hex: '#2a5fd0' },
{ colour: 'Red', hex: '#c8203f' },
{ colour: 'Pink', hex: '#e0568e' },
{ colour: 'Yellow', hex: '#e2b021' },
{ colour: 'Green', hex: '#128a5f' },
{ colour: 'Purple', hex: '#6d33d9' },
{ colour: 'Padparadscha', hex: '#e88b62' },
{ colour: 'Grey', hex: '#8b93a1' }];


interface Props {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function Group({ title, children }: {title: string;children: React.ReactNode;}) {
  return (
    <section className="border-t border-ink-line py-5 first:border-t-0 first:pt-0">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>);

}

function CheckRow({
  label,
  checked,
  onChange,
  hint





}: {label: string;checked: boolean;onChange: () => void;hint?: string;}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg py-1.5 text-[0.95rem] text-ink transition-colors duration-150 ease-gem hover:text-sapphire-700">
      <span
        className={twMerge(
          'grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-[background-color,border-color] duration-200 ease-gem',
          checked ? 'border-sapphire-600 bg-sapphire-600 text-white' : 'border-ink-line bg-white'
        )}>
        
        {checked && <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange} />
      
      <span className="flex-1">{label}</span>
      {hint && <span className="text-xs text-ink-faint">{hint}</span>}
    </label>);

}

export function FilterControls({ filters, setFilters }: Props) {
  return (
    <div>
      <Group title="Gemstone type">
        {types.map((t) =>
        <CheckRow
          key={t}
          label={t}
          checked={filters.types.includes(t)}
          onChange={() => setFilters((f) => ({ ...f, types: toggle(f.types, t) }))} />

        )}
      </Group>

      <Group title="Cut / shape">
        <div className="flex flex-wrap gap-2">
          {cutList.map((c) => {
            const active = filters.cuts.includes(c);
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setFilters((f) => ({ ...f, cuts: toggle(f.cuts, c) }))}
                className={twMerge(
                  'rounded-full border px-3.5 py-1.5 text-sm transition-[background-color,border-color,color] duration-200 ease-gem',
                  active ?
                  'border-sapphire-600 bg-sapphire-50 text-sapphire-700' :
                  'border-ink-line text-ink-muted hover:border-sapphire-400 hover:text-ink'
                )}>
                
                {c}
              </button>);

          })}
        </div>
      </Group>

      <Group title="Colour">
        <div className="flex flex-wrap gap-2">
          {colourSwatches.map((s) => {
            const active = filters.colours.includes(s.colour);
            return (
              <button
                key={s.colour}
                type="button"
                aria-pressed={active}
                onClick={() => setFilters((f) => ({ ...f, colours: toggle(f.colours, s.colour) }))}
                className={twMerge(
                  'inline-flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-sm transition-[background-color,border-color,color] duration-200 ease-gem',
                  active ?
                  'border-sapphire-600 bg-sapphire-50 text-sapphire-700' :
                  'border-ink-line text-ink-muted hover:border-sapphire-400 hover:text-ink'
                )}>
                
                <span
                  className="h-5 w-5 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ backgroundColor: s.hex }}
                  aria-hidden="true" />
                
                {s.colour}
              </button>);

          })}
        </div>
      </Group>

      <Group title="Carat weight">
        <div className="grid grid-cols-2 gap-3">
          <Field label="From" htmlFor="carat-min">
            <Input
              id="carat-min"
              type="number"
              min={CARAT_BOUNDS[0]}
              max={CARAT_BOUNDS[1]}
              step={0.25}
              value={filters.caratMin}
              onChange={(e) =>
              setFilters((f) => ({ ...f, caratMin: Number(e.target.value) || 0 }))
              } />
            
          </Field>
          <Field label="To" htmlFor="carat-max">
            <Input
              id="carat-max"
              type="number"
              min={CARAT_BOUNDS[0]}
              max={CARAT_BOUNDS[1]}
              step={0.25}
              value={filters.caratMax}
              onChange={(e) =>
              setFilters((f) => ({
                ...f,
                caratMax: Number(e.target.value) || CARAT_BOUNDS[1]
              }))
              } />
            
          </Field>
        </div>
      </Group>

      <Group title="Price (USD)">
        <input
          type="range"
          aria-label="Maximum price"
          min={1000}
          max={PRICE_BOUNDS[1]}
          step={500}
          value={filters.priceMax}
          onChange={(e) => setFilters((f) => ({ ...f, priceMax: Number(e.target.value) }))}
          className="w-full accent-sapphire-600" />
        
        <div className="mt-1 flex justify-between text-sm text-ink-muted">
          <span>$0</span>
          <span className="font-medium text-ink">
            Up to ${filters.priceMax.toLocaleString('en-US')}
            {filters.priceMax >= PRICE_BOUNDS[1] && '+'}
          </span>
        </div>
      </Group>

      <Group title="Certification">
        <CheckRow
          label="Certified stones only"
          hint="GIA / GRS"
          checked={filters.certifiedOnly}
          onChange={() => setFilters((f) => ({ ...f, certifiedOnly: !f.certifiedOnly }))} />
        
      </Group>

      <Group title="Availability">
        {statuses.map((s) =>
        <CheckRow
          key={s}
          label={s}
          checked={filters.statuses.includes(s)}
          onChange={() => setFilters((f) => ({ ...f, statuses: toggle(f.statuses, s) }))} />

        )}
      </Group>
    </div>);

}