import { useEffect, useId, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiChevronDown, FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { GoHomeFill } from 'react-icons/go'
import { navItems, phone, phoneHref } from '../data/content'

function Dropdown({ items }) {
  return (
    <ul className="dropdown" role="menu">
      {items.map((item) => (
        <li key={item.label} role="none">
          <a href={item.to} role="menuitem">
            {item.label}
          </a>
          {item.children ? (
            <ul className="dropdown-sub" role="menu">
              {item.children.map((child) => (
                <li key={child.label}>
                  <a href={child.to}>{child.label}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export default function Header({
  currentPath,
  onSearchOpen,
  onNavigate,
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMobile, setOpenMobile] = useState('')
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = (event, to) => {
    event.preventDefault()
    setMenuOpen(false)
    onNavigate(to)
  }

  return (
    <>
      <div className="theme-promo">
        <div className="theme-promo-inner">
          <a className="theme-promo-brand" href="https://xtratheme.com/" target="_blank" rel="noreferrer">
            envato market
          </a>
          <p>
            Limited time offer, Buy XTRA WordPress theme only <strong>$39</strong>
          </p>
          <a
            className="theme-promo-download"
            href="https://1.envato.market/xtra"
            target="_blank"
            rel="noreferrer"
          >
            Download XTRA Theme
          </a>
        </div>
      </div>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contact">
            <span>Have any questions? call us</span>
            <FaPhoneAlt size={13} aria-hidden="true" />
            <a href={phoneHref}>{phone}</a>
          </div>
          <div className="socials" aria-label="Social media">
            <a className="social-facebook" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a className="social-x" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <FaXTwitter />
            </a>
            <a className="social-instagram" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="social-linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-inner">
          <a className="logo" href="/" onClick={(e) => go(e, '/')}>
            <img src="/images/logo-construction.png" alt="XTRA Construction" />
          </a>

          <nav className="nav" aria-label="Primary">
            {navItems.map((item) =>
              item.children ? (
                <div className="nav-drop" key={item.id}>
                  <button type="button" aria-haspopup="true">
                    {item.label} <FiChevronDown aria-hidden="true" />
                  </button>
                  <Dropdown items={item.children} />
                </div>
              ) : (
                <a
                  key={item.id}
                  className={`nav-link ${item.icon ? 'nav-home' : ''} ${currentPath === item.to ? 'is-active' : ''}`}
                  href={item.to}
                  onClick={(e) => go(e, item.to)}
                  aria-label={item.icon ? 'Home' : undefined}
                >
                  {item.icon ? <GoHomeFill size={18} /> : item.label}
                </a>
              ),
            )}
          </nav>

          <div className="header-tools">
            <button className="search-btn" type="button" aria-label="Search box" onClick={onSearchOpen}>
              <FiSearch size={20} />
            </button>
            <a
              className="btn btn-white header-consult"
              href="/contact"
              onClick={(e) => go(e, '/contact')}
            >
              Free Consultation
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <button
          className="drawer-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <div
        id={menuId}
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        {navItems.map((item) =>
          item.children ? (
            <div key={item.id}>
              <button
                type="button"
                className="linkish"
                onClick={() => setOpenMobile((v) => (v === item.id ? '' : item.id))}
              >
                {item.label}
              </button>
              {openMobile === item.id
                ? item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.to}
                      style={{ paddingLeft: 16 }}
                      onClick={(e) => go(e, child.to)}
                    >
                      {child.label}
                    </a>
                  ))
                : null}
            </div>
          ) : (
            <a key={item.id} href={item.to} onClick={(e) => go(e, item.to)}>
              {item.label}
            </a>
          ),
        )}
        <a href="/contact" className="btn btn-gold" style={{ marginTop: 16 }} onClick={(e) => go(e, '/contact')}>
          Free Consultation
        </a>
      </div>
    </>
  )
}
