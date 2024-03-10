import React from 'react'
import Image from 'next/image'

// components
import Navbar from './Navbar'

// images
import hero1 from "../../public/hero/img1.png"
import hero2 from "../../public/hero/img2.png"


const Hero = () => {
  return (
    <section id='hero' className='bg-white'>
      <Navbar />
      <div className='container mx-auto'>
        {/* mobile version */}
        <div className='xl:hidden flex flex-col justify-between h-[85vh] justify-items-center text-black text-3xl md:text-4xl font-baskerville px-20 py-20 md:py-32'>
          {/* left text */}
          <div className='self-center mobileWordAnimation1 text-center'>
            <ul className='mobileFlip2'>
              <li>I'm a</li>
              <li>Hello</li>
            </ul>
          </div>
          {/* Image */}
          <div className='mobileWordAnimation2'>
            <ul className=''>
              {/* <li><Image src={hero2} className='self-center' alt='hero image' /></li> */}
              <li><Image src={hero1} className='self-center mx-auto md:w-[35%] lg:w-[25%]' alt='hero image'/></li>
            </ul>
          </div>
          {/* right text */}
          <div className='self-center mobileWordAnimation1 text-center'>
            <ul className='mobileFlip2'>
              <li>Frontend Dev</li>
              <li>I'm Sarvani</li>
            </ul>
          </div>
        </div>

        {/*small desktop version */}
        <div className='hidden xl:grid 2xl:hidden grid-cols-3 justify-center justify-items-center text-black text-4xl font-baskerville px-20 py-20'>
          {/* left text */}
          <div className='self-start smallWordAnimation1'>
            <ul className='smallFlip2'>
              <li>I'm a</li>
              <li>Hello</li>
            </ul>
          </div>
          {/* Image */}
          <div className='smallWordAnimation2'>
            <ul className='smallFlip3'>
              <li><Image src={hero2} className='self-center' alt='hero image' /></li>
              <li><Image src={hero1} className='self-center' alt='hero image' /></li>
            </ul>
          </div>
          {/* right text */}
          <div className='self-end smallWordAnimation1'>
            <ul className='smallFlip2'>
              <li>Frontend Dev</li>
              <li>I'm Sarvani</li>
            </ul>
          </div>
        </div>

        {/* desktop version */}
        <div className='hidden 2xl:grid grid-cols-3 justify-center justify-items-center text-black text-6xl font-baskerville px-20 py-40'>
          {/* left text */}
          <div className='self-start wordAnimation1'>
            <ul className='flip2'>
              <li>I'm a</li>
              <li>Hello</li>
            </ul>
          </div>
          {/* Image */}
          <div className='wordAnimation2'>
            <ul className='flip3'>
              <li><Image src={hero2} className='self-center' alt='hero image' /></li>
              <li><Image src={hero1} className='self-center' alt='hero image' /></li>
            </ul>
          </div>
          {/* right text */}
          <div className='self-end wordAnimation1'>
            <ul className='flip2'>
              <li>Frontend Dev</li>
              <li>I'm Sarvani</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero