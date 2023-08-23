import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './Footer.scss'
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+40740 777 777">Tel: 0740 777 777</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Companie</h4>
            <ul>
              <li>
                <Link to="/">Despre noi</Link>
              </li>
              <li>
                <Link to="/servicii">Servicii</Link>
              </li>
              <li>
                <Link to="/portofoliu">Portofoliu</Link>
              </li>
              <li>
                <Link to="/contact">Locații</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Blog</h4>
            <ul>
              <li>
                <Link to="/">Noutăți</Link>
              </li>
              <li>
                <Link to="/">Trenduri</Link>
              </li>
              <li>
                <Link to="/">Tips and Tricks</Link>
              </li>
              <li>
                <Link to="/">Ghid practic</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/xxxxxxxxx"
                title="Facebook"
              >
                <FaFacebook size="2rem" />
              </a>
              <a
                href="https://www.instagram.com/xxxxxxx"
                title="Instagram"
              >
                <FaInstagram size="2rem" />
              </a>
            </div>
            <div className="copyright">
              &copy; StilModern. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
