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
      name: 'Javascript',
      content: 'Knowledged',
    },
    {
      name: 'Antd',
      content: 'Knowledged',
    },
    {
      name: 'ReactJs',
      content: 'Knowledged',
    },
    {
      name: 'Typescript',
      content: 'Knowledged',
    },
  ]
  return (
    <section
      id="experience"
    >
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
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
      </div>
    </section>


  )
}

export default Experience