import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import '../../styles/main-styles/about.scss'

const About = () => {
  return (
    <section id="about" className="about">
      <h5>Get it Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image" >
            <img src="../../assest/Images/avt.png" alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>3 month Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about-icon"/>
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about-icon"/>
              <h5>Projects </h5>
              <small>3 Project Completed</small>
            </article>
          </div>
          <p>
            aljcfajdsfcajcf;acfacfascf
          </p>
          <a href="#contact" className="btn btn-primary">
            Pls contact me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About