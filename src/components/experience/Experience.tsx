import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import '../../styles/main-styles/experience.scss'
const Experience = () => {
  const experiences = [
    {
      name: 'HTML',
      content: 'Knowledged',
    },
    {
      name: 'CSS',
      content: 'Knowledged',
    },
    {
      name: 'JavaScript',
      content: 'Knowledged',
    },
    {
      name: 'Antd',
      content: 'Knowledged',
    },
    {
      name: 'React Js',
      content: 'Knowledged',
    },
    {
      name: 'TypeScript',
      content: 'Knowledged',
    },
  ]
  const experiences1 = [
    {
      name: 'Proficient in reading and understanding English books',
    },
    {
      name: 'Reading material about new technologies',
    },
    {
      name: 'Time management and Logical thinking skills',
    },
    {
      name: 'Ability to self-study and research on internet',
    },
  ]
  return (
    <section
      id="experience"
    >
      <h5>What skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            {
              experiences.map((item, index) => (
                <article key={index} className="experience__details">

                  <AiFillCheckCircle className="experience__details-icon" />
                  <div>

                    <h4>{item.name}</h4>
                    <small className="text-light">{item.content}</small>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
        <div className="experience__soft">
          <h3>Soft Skills</h3>
          <div className="experience__soft-content">
            {
              experiences1.map((item, index) => (
                <article key={index} className="experience__soft-details">

                  <AiFillCheckCircle className="experience__soft-details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                  </div>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>


  )
}

export default Experience