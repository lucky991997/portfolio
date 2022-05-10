import path from 'path'
import React, { useEffect, useState } from 'react'

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import '../../styles/main-styles/nav.scss'
const Nav = () => {
  const menu = [
    {
      path: '#',
      icons: <AiOutlineHome />,

    },
    {
      path: '#about',
      icons: <AiOutlineUser />,

    },
    {
      path: '#experience',
      icons: <BiBook />,

    },
    {
      path: '#services',
      icons: <RiServiceLine />,
 
    },
    {
      path: '#contact',
      icons: <BiMessageDetail />,
    
    },

  ]
  const [active, setActive] = useState("#")
 
  return (
    <nav >
      {
        menu.map((item, index) => (
          <a
            
            key={index}
            href={item.path} 
            className={`${active === item.path ? 'active' : ''}`}
            onClick={() => setActive(item.path)}
            >
            {item.icons}
          </a>
        ))
      }

    </nav>
  )
}

export default Nav