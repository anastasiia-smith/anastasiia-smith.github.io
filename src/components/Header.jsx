import { useState } from 'react';

const NAV = [
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand" onClick={() => setOpen(false)}>
          <img
            className="header__mark"
            src="/favicon.ico"
            alt=""
            width={36}
            height={36}
            decoding="async"
          />
          <span>Anastasiia Smith</span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV.map(({ href, label }) => (
            <a key={href} href={href} className="header__link">
              {label}
            </a>
          ))}
        </nav>

        <a className="header__cta" href="/resume.pdf" download>
          <svg className="header__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3v12M8 11l4 4 4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Resume
        </a>

        <button
          type="button"
          className="header__burger"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" className={`container header__mobile ${open ? 'is-open' : ''}`}>
        {NAV.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="header__link"
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="header__cta" href="/resume.pdf" download onClick={() => setOpen(false)} style={{ alignSelf: 'flex-start' }}>
          <svg className="header__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3v12M8 11l4 4 4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Resume
        </a>
      </div>
    </header>
  );
}
