import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import logo from "../public/logo.svg"

// icons
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section id='footer' className='bg-lightBlue/30'>
      <div className='container mx-auto px-12 xl:px-20 py-32 grid lg:grid-cols-3 gap-y-24 lg:gap-y-0 lg:justify-between'>
        {/* left div */}
        <div className='flex flex-col justify-center xl:justify-between text-2xl font-nunito xl:basis-1/3'>
          <Link href="/" aria-label='logo' className='mx-auto lg:mx-0'>
            <Image src={logo} alt='logo' />
          </Link>
          <p className='font-extrabold mt-10 text-center lg:text-left'>Reach out to me!</p>
          <p className='text-center lg:text-left lg:w-[70%]'>Want to discuss a project or say Hi?</p>
          <p className='text-center lg:text-left'>My inbox is open for all!</p>
        </div>
        
        {/* center div */}
        <div className='basis-1/3 my-auto justify-self-center'>
          <ul className='grid grid-cols-2 font-baskerville text-2xl gap-y-8 lg:gap-y-12'>
            <Link href="#home" className='footerItem w-fit'>
              <li>Home</li>
            </Link>
            <Link href="#experience" className='footerItem w-fit'>
              <li>Experience</li>
            </Link>
            <Link href="#about" className='footerItem w-fit'>
              <li>About</li>
            </Link>
            <Link href="#projects" className='footerItem w-fit'>
              <li>Projects</li>
            </Link>
            <Link href="#skills" className='footerItem w-fit'>
              <li>Skills</li>
            </Link>
            <Link href="#contact" className='footerItem w-fit'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        
        {/* right div */}
        <div className='basis-1/3 flex flex-col gap-8 lg:gap-5 xl:gap-8 my-auto'>
          <div className='flex flex-row gap-8 lg:gap-5 xl:gap-8 mx-auto'>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sarvanik60@gmail.com"
              target='_blank'
              aria-label='mail icon'
              className='bg-white text-blue w-20 h-20 p-5 rounded-full hover:bg-blue hover:text-white transition-all duration-300 ease-in'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sarvani-kandukuri/"
              target='_blank'
              aria-label='Linkedin icon'
              className='bg-white text-blue w-20 h-20 p-5 rounded-full hover:bg-blue hover:text-white transition-all duration-300 ease-in'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://github.com/sarvaniK01"
              target='_blank'
              aria-label='github icon'
              className='bg-white text-blue w-20 h-20 p-5 rounded-full hover:bg-blue hover:text-white transition-all duration-300 ease-in'
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
          
          <div className='flex flex-row gap-8 lg:gap-5 xl:gap-8 mx-auto'>
            <Link
              href="/"
              target='_blank'
              aria-label='website icon'
              className='bg-white text-blue w-20 h-20 p-5 rounded-full hover:bg-blue hover:text-white transition-all duration-300 ease-in'
            >
              <FontAwesomeIcon icon={faGlobe} />
            </Link>
            <Link
              href="https://www.instagram.com/_sarvani_k/"
              target='_blank'
              aria-label='instagram icon'
              className='bg-white text-blue w-20 h-20 p-5 rounded-full hover:bg-blue hover:text-white transition-all duration-300 ease-in'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-blue w-full'>
        <p className='py-4 text-white text-center font-nunito text-xl font-semibold'>© Copyrights 2023. All Rights Reserved Sarvani Kandukuri</p>
      </div>
    </section>
  )
}

export default Footer