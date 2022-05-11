import React from 'react'

import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import '../../styles/main-styles/footer.scss'
const Footer = () => {
  return (
    <footer>

      <div className="footer">


        <ul className="permalinks">


          <li >
            <h2 style={{ marginBottom: '10px', textAlign: 'left' }}>Soft Skillss</h2>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>Proficient in reading and understanding English books</h5>
            </div>

            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>Reading material about new technologies</h5>
            </div>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>Time management and Logical thinking skills</h5>
            </div>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>Ability to self-study and research on internet</h5>
            </div>

          </li>
          <li >
            <h2 style={{ marginBottom: '10px', textAlign: 'left' }}>Technical Skills</h2>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>HTML / CSS</h5>
            </div>

            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>JavaScript</h5>
            </div>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>React Js</h5>
            </div>
            <div className="footer__contact-item">
              <GoPrimitiveDot className="txt-light footer__contact-icon" />
              <h5>TypeScript</h5>
            </div>

          </li>
          <li >
            <h2 style={{ marginBottom: '10px', textAlign: 'left' }}>Contact</h2>
            <div className="footer__contact-item">
              <MdLocationOn className="txt-light footer__contact-icon" />
              <h5 >27/1/56 Street 8, 16 Ward,
                Go Vap District, Ho Chi Minh
                City</h5>
            </div>
            <div className="footer__contact-item">
              <BsFillTelephoneFill className="txt-light footer__contact-icon" />
              <h5>0865992248</h5>
            </div>
            <div className="footer__contact-item">
              <AiOutlineMail className="txt-light footer__contact-icon" />
              <h5>quoctuan090997@gmail.com</h5>
            </div>
            <a style={{ color: 'white' }}
              href="https://github.com/" className="footer__contact-item">
              <AiFillGithub className="txt-light footer__contact-icon" />
              <h5>https://github.com/</h5>

            </a>
          </li>
        </ul>

        <div className="footer__copyright">
          <small>
            All right reserved
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer