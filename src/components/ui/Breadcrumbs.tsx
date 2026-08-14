import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-ink-muted">
        {items.map((item, i) =>
        <li key={item.label} className="flex items-center gap-1">
            {i > 0 &&
          <ChevronRightIcon className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true" />
          }
            {item.to ?
          <Link
            to={item.to}
            className="rounded transition-colors duration-200 ease-gem hover:text-sapphire-700">
            
                {item.label}
              </Link> :

          <span className="font-medium text-ink" aria-current="page">
                {item.label}
              </span>
          }
          </li>
        )}
      </ol>
    </nav>);

}