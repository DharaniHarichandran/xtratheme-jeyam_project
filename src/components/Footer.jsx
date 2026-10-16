import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <img
          className="footer-logo-img"
          src="/images/footer-logo-construction.png"
          alt="XTRA Construction"
        />
        <p className="footer-description">
          A company is any entity that engages in business.<br />
          Companies can be structured in different ways.<br />
          For example, your company can be a sole proprietorship,<br />
          a partnership, or a corporation.
        </p>
        <nav className="footer-socials" aria-label="Social media">
          <a className="social-facebook" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a className="social-x" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
          <a className="social-instagram" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a className="social-youtube" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </nav>
      </div>
      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© {new Date().getFullYear()} XTRA, Powered by WordPress</span>
          <nav className="footer-bar-links" aria-label="Footer links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
