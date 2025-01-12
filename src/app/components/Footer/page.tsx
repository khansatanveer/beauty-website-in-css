import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section */}
        <div className="footer-grid">
          {/* Links Section */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link href="/Home" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <ul className="footer-links">
              <li>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="footer-link"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  className="footer-link"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="footer-link"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="footer-link"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="footer-heading">Subscribe to Our Newsletter</h3>
            <p className="footer-text">Stay updated with the latest news and offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="footer-heading">Contact Info</h3>
            <p>1234 Street Name, City, Country</p>
            <p>Email: contact@yourwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
