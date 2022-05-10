import React from 'react'
import '../../styles/main-styles/portfolio.scss'
const Portfolio = () => {
  const data = [
    {
      image: '../../../assest/Images/e-learning.jpg',
      title: 'Project E-Learning',
      github: 'https://github.com/lucky991997/E-learning',
      demo: '#',
    },
    {
      image: '../../../assest/Images/ticket.jpg',
      title: 'Project CMS-Sale-Ticket',
      github: 'https://github.com/lucky991997/sale-ticket',
      demo: 'https://sale-ticket-fff82.firebaseapp.com/',
    },
    {
      image: '../../../assest/Images/movies.jpg',
      title: 'Project Movies',
      github: 'https://github.com/lucky991997/movies',
      demo: 'https://movies-abca2.firebaseapp.com/',
    },
  ]
  return (
    <section id="services">
      <h5>My Recent Work</h5>
      <h2>Portfolio 
        <br/>
        Đây là những sản phẩm làm được trong quá trình học tập và thực tập

      </h2>



      <div className="container portfolio__container">
        {
          data.map((item, index) => (
            <article key={index} className=" portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">

                <a href={item.github} className="btn">Github</a>
                <a href={item.demo} className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          ))
        }

      </div>
    </section>

  )
}

export default Portfolio