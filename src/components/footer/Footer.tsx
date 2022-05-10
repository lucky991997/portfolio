import React from 'react'
import { BsFacebook, BsTelegram } from 'react-icons/bs'
import { SiZalo } from 'react-icons/si'
import '../../styles/main-styles/footer.scss'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Việt Nạm</a>
      <div className="footer">


        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#Contact">Contact</a></li>

        </ul>
        <div className="footer__socials">
          <a href="https://facebook.com"><BsFacebook /></a>
          <a href="https://zalo.com"><SiZalo /></a>
          <a href="https://telegram.com"><BsTelegram /></a>
        </div>
        <div className="footer__copyright">
          <small>
            EGATOR Tutorials. All right reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer