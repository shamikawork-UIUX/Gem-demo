import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button, LinkButton } from '../ui/Button';
import { ClockStrip } from '../ClockStrip';
import { categories, cuts } from '../../data/site';
import { useEnquiry } from '../../contexts/EnquiryContext';

const navLinkClass = ({ isActive }: {isActive: boolean;}) =>
twMerge(
  'rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors duration-200 ease-gem',
  isActive ? 'text-sapphire-700' : 'text-ink-muted hover:text-ink'
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;
    function onDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setDropdownOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropdownOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-line bg-white/90 backdrop-blur-md">
      <div className="hidden border-b border-ink-line/70 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="text-xs text-ink-muted">
            Direct from Ratnapura, Sri Lanka — every stone examined in hand.
          </p>
          <ClockStrip />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-baseline gap-2 rounded-lg"
          aria-label="Ruth Gems — home">
          
          <span className="font-display text-2xl leading-none text-ink">Ruth Gems</span>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-sapphire-600 sm:inline">
            Ceylon
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((o) => !o)}
              className={twMerge(
                'inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors duration-200 ease-gem',
                pathname.startsWith('/gemstones') ?
                'text-sapphire-700' :
                'text-ink-muted hover:text-ink'
              )}>
              
              Gemstones
              <ChevronDownIcon
                className={twMerge(
                  'h-4 w-4 transition-transform duration-200 ease-gem',
                  dropdownOpen && 'rotate-180'
                )}
                aria-hidden="true" />
              
            </button>
            <AnimatePresence>
              {dropdownOpen &&
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                className="absolute left-0 z-40 mt-2 w-[30rem] rounded-2xl border border-ink-line bg-white p-4 shadow-lift">
                
                  <Link
                  to="/gemstones"
                  className="block rounded-xl bg-sapphire-50 px-4 py-3 text-sm font-semibold text-sapphire-700 transition-colors duration-150 ease-gem hover:bg-sapphire-100">
                  
                    All gemstones
                    <span className="block text-xs font-normal text-sapphire-600">
                      The full collection with search, filters and sort
                    </span>
                  </Link>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div>
                      <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        By gemstone
                      </p>
                      {categories.map((c) =>
                    <Link
                      key={c.type}
                      to={`/gemstones?type=${encodeURIComponent(c.type)}`}
                      className="block rounded-lg px-2 py-1.5 text-sm text-ink transition-colors duration-150 ease-gem hover:bg-ink-wash">
                      
                          {c.label}
                        </Link>
                    )}
                    </div>
                    <div>
                      <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        By cut
                      </p>
                      {cuts.map((c) =>
                    <Link
                      key={c.cut}
                      to={`/gemstones?cut=${encodeURIComponent(c.cut)}`}
                      className="block rounded-lg px-2 py-1.5 text-sm text-ink transition-colors duration-150 ease-gem hover:bg-ink-wash">
                      
                          {c.label}
                        </Link>
                    )}
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          <NavLink to="/ceylon-gems" className={navLinkClass}>
            Ceylon Gems
          </NavLink>
          <NavLink to="/gem-guide" className={navLinkClass}>
            Gem Guide
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            size="sm"
            onClick={() => openEnquiry()}>
            
            Arrange a Viewing
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-line text-ink transition-colors duration-200 ease-gem hover:bg-ink-wash lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}>
            
            {menuOpen ?
            <XIcon className="h-5 w-5" aria-hidden="true" /> :

            <MenuIcon className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border-t border-ink-line bg-white lg:hidden">
          
            <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile">
              {[
            { to: '/gemstones', label: 'All Gemstones' },
            { to: '/ceylon-gems', label: 'Ceylon Gems' },
            { to: '/gem-guide', label: 'Gem Guide' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' }].
            map((item) =>
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
              twMerge(
                'block rounded-xl px-3 py-2.5 text-base font-medium transition-colors duration-200 ease-gem',
                isActive ?
                'bg-sapphire-50 text-sapphire-700' :
                'text-ink hover:bg-ink-wash'
              )
              }>
              
                  {item.label}
                </NavLink>
            )}
              <div className="flex flex-col gap-2 pt-3">
                <Button onClick={() => openEnquiry()}>Arrange a Viewing</Button>
                <LinkButton to="/request-a-callback" variant="secondary">
                  Request a Callback
                </LinkButton>
              </div>
              <div className="pt-4">
                <ClockStrip variant="stacked" />
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}