import React from 'react'
import '../../styles/main-styles/header.scss'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Trần Quốc Tuấn</h1>
        <h5 className="txt-light">Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="header__avt">
          <img src="../../assest/Images/avt.png" alt="avt"/>
        </div>

        <a href="#contact" className="scroll__down" > Scroll Down</a>
      </div>
    </header>
  )
}

export default Header