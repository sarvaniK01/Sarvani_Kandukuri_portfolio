"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// libraries
import { AnimatePresence, motion } from "framer-motion";

// images
import logo from "../../public/logo.svg"
import menu from "../../public/menu.svg"
import menuClose from "../../public/close.svg";


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const menuVars = {
    initial: {
      y: '-100vh',
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      y: '-100vh',
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }

  function disable() {
    document.querySelector('.scrollable').addEventListener('wheel', preventScroll);
  }

  function enable() {
    document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
  }

  return (
    <div className='scrollable'>
      {/* mobile version */}
      <nav className='xl:hidden bg-lightBlue/30 py-5 px-7 flex flex-row justify-between'>
        <Image src={logo} alt='logo' className='w-[100px]' />
        <div className='my-auto'>
          <div onClick={() => {
            setOpen(true);
            disable()
          }}>
            <Image src={menu} alt='menu-icon' className={`${open ? 'hidden' : 'block'}`} />
          </div>
          <div onClick={() => {
            setOpen(false);
            enable()
          }}>
            <Image src={menuClose} alt='close-icon' className={`${open ? 'block' : 'hidden'}`} />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {
          open && (
            <motion.div
              // variants={menuVars}
              initial={{ opacity: 0, y: -100 }
              }
              animate={{ opacity: 1 , y:0}}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "backOut", stiffness: 100 }}
            >
              <div className={`block xl:hidden px-7 bg-lightBlue/30 h-screen w-full mx-auto py-32`}>
                <ul className='grid grid-cols-2 font-baskerville text-2xl gap-y-20 justify-center mx-auto w-fit'>
                  <Link href="#home" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li className='text-center'>Home</li>
                  </Link>
                  <Link href="#experience" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li>Experience</li>
                  </Link>
                  <Link href="#about" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li className='text-center'>About</li>
                  </Link>
                  <Link href="#projects" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li className='text-center'>Projects</li>
                  </Link>
                  <Link href="#skills" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li className='text-center'>Skills</li>
                  </Link>
                  <Link href="#contact" className='footerItem w-fit' onClick={() => {
                    setOpen(false);
                    enable()
                  }}>
                    <li className='text-center'>Contact</li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          )
        }

      </AnimatePresence>
      
      
      {/* Desktop version */}
      <nav className="hidden container mx-auto xl:flex flex-row justify-between mx-20 py-10 2xl:px-20">
        <Link href="/">
          <Image src={logo} alt="logo" aria-label='logo' width={120} />
        </Link>
        <ul className='text-black font-baskerville flex flex-row gap-12 my-auto text-2xl'>
          <Link href='#hero' aria-label='hero nav link'>
            <li className='navItem'>
              Home
            </li>
          </Link>
          <Link href='#about' aria-label='hero nav link'>
            <li className='navItem'>
              About
            </li>
          </Link>
          <Link href='#skills' aria-label='hero nav link'>
            <li className='navItem'>
              Skills
            </li>
          </Link>
          <Link href='#experience' aria-label='hero nav link'>
            <li className='navItem'>
              Experience
            </li>
          </Link>
          <Link href='#projects' aria-label='hero nav link'>
            <li className='navItem'>
              Projects
            </li>
          </Link>
          <Link href='#contact' aria-label='hero nav link'>
            <li className='navItem'>
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar
