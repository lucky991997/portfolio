import React, { useRef, useState } from 'react'

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'

import emailjs from 'emailjs-com';

import '../../styles/main-styles/contact.scss'
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const ms = 2000;
  const sendEmail = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    emailjs.sendForm('service_skj707n', 'template_0109tyv', formRef.current, 'a6ihRVE9qiMBXVVws')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setTimeout(() => { e.target.reset() }, ms)

  };
  const handleContactForm = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value.email !== '' && value.name !== '' && value.phone !== '' && value.message !== '') {
      if (regex.test(value.email)) {
        setTimeout(() => {

          alert('Contact Form successfully!!!! ')
        }, ms)
      } else {
        alert('pls enter email ')

      }



    } else {
      alert('pls enter full field ')
    }
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>ConTact Me</h2>
      <div className="container contact__container">
        <div className="contact__options" >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>quoctuan090997@gmail.com</h5>
          </article>
          <article className="contact__option">
            <BsFillTelephoneFill className="contact__option-icon" />
            <h4>Phone number</h4>
            <h5>0865992248</h5>
          </article>
       
        </div>
        {/* End OF CONTACT OPTION */}

        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name='name'
            placeholder="Your Full name" required
            onChange={(e) => setValue({ ...value, name: e.target.value })} />

          <input
            type="email"
            name='email'
            placeholder="Your email"
            required
            onChange={(e) => setValue({ ...value, email: e.target.value })} />

          <input
            type="text"
            name='phone'
            placeholder="Your Phone number"
            required
            onChange={(e) => setValue({ ...value, phone: e.target.value })} />

          <textarea
            name='message'
            rows={7}
            placeholder="Your message"
            required
            onChange={(e) => setValue({ ...value, message: e.target.value })} />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleContactForm()}
          >Send Message</button>
        </form>

      </div>
    </section>

  )
}

export default Contact