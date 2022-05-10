import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/"><AiOutlineGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100005713549209"><AiFillFacebook/></a>
        <a href="#"><AiFillLinkedin/></a>

    </div>
  )
}

export default HeaderSocials