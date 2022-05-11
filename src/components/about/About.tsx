import React from 'react'
import { FaAward } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { VscFolderLibrary } from 'react-icons/vsc'
import { AiOutlineMinus } from 'react-icons/ai'

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
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3 month Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects </h5>
              <small>3 Project Completed</small>
            </article>
          </div>
          <p style={{ color: 'white' }}>
            <GoPrimitiveDot style={{ marginRight: '6px' }} className="txt-light" />
            Purpose
            <div style={{ display: 'flex', marginLeft: '20px', marginTop: '10px' }}>
              <div>

                <AiOutlineMinus className="txt-light" style={{ marginRight: '6px', fontSize: '14px' }} />
              </div>
              
              <h5>
                Short-term: looking for a job that matches your career development orientation.
                Have the opportunity to learn, practice, and accumulate knowledge and experience on the front-end.
              </h5>
            </div>
            <div style={{ display: 'flex', marginLeft: '20px', marginTop: '10px' }}>
              <div>

                <AiOutlineMinus className="txt-light" style={{ marginRight: '6px', fontSize: '14px' }} />
              </div>
              <h5>
                Long-term: Have solid knowledge and skills in the field of full-stack development. Looking for career advancement opportunities
              </h5>
            </div>

          </p>

          <a
            className='btn btn-primary'
            href="./assest/TRAN_QUOC_TUAN_CV (2).pdf"
            download
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default About