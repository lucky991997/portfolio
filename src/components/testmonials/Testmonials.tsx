import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/main-styles/testmonial.scss'

const Testmonials = () => {
  const data = [
    {
      image: '../../../assest/Images/e-learning.jpg',
      title: 'Project E-Learning',
      demo: '#',
      description: 'In this project, I built an e-learning web admin page. The website helps us to manage student and teacher status.'

    },
    {
      image: '../../../assest/Images/ticket.jpg',
      title: 'Project CMS-Sale-Ticket',
      demo: 'https://sale-ticket-fff82.firebaseapp.com/',
      description: 'In this project, I built a CMS-ticket-sale web admin page. The website helps us to manage ticket sales'

    },
    {
      image: '../../../assest/Images/movies.jpg',
      title: 'Project Movies',
      demo: 'https://movies-abca2.firebaseapp.com/',
      description: 'In this project, I built a website for movies. View movie list, view movie details, search movies'

    },
  ]
  return (
    <section id="services">
      <h5>My Projects</h5>
      <h2>Projects</h2>
      <Swiper className="container testmonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}   
        autoplay
      
        
      >
        {
          data.map((item, index) => (
            <SwiperSlide key={index} className=" testmonial">
              <div className="project__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div>

                <h5 className="project__name">{item.title}</h5>
                <small className="project__description">
                  <h4>

                    {item.description}
                  </h4>
                </small>
                <a href={item.demo} className="project__link" >
                  <MdOutlineKeyboardArrowRight className="project__link-icon" />
                  <MdOutlineKeyboardArrowRight className="project__link-icon" />
                  <h3>
                    Xem live Demo
                  </h3>
                </a>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </section>
  )
}

export default Testmonials