import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contacts.css'

const Contacts = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus officia, voluptas sint soluta omnis veniam quo architecto commodi nisi
      </Header>
      <section className='contact'>
        <div className="conatiner contact__container">
          <div className="contact__wrapper">
            <a href="mailto:ukeshsaravanan@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
            <a href="http://m.me/" target="_blank" rel="noopener noreferrer"><BsMessenger /></a>
            <a href="https://wa.me/+918678930210" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contacts