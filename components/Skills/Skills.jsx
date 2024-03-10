"use client";

import React from 'react';
import Image from 'next/image';

// data
import skillsData from "./skills.json"

// libraries
import ProgressBar from 'react-customizable-progressbar'


import html from "../../public/skills/bootstrap.svg"

const Skills = () => {
  return (
    <section id='skills' className='bg-white'>
      <div className='container mx-auto px-12 xl:px-48 py-32'>
        <p className='heading font-baskerville text-5xl text-black text-center mx-auto'>Skills</p>
        <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-14 gap-y-36 md:gap-x-0 lg:gap-x-5 xl:gap-x-32 lg:gap-y-48 xl:gap-y-48 mt-28 xl:mt-36 justify-center mx-auto'>
          {
            skillsData.map((skill) => {
              return (
                <div className="logoContainer mx-auto" key={skill.id}>
                  <img src={skill.image} alt={skill.skill} aria-label={skill.skill} className='skillsIcon md:w-[55%] md:mx-auto lg:skillsIcon xl:w-full' title={skill.skill} />
                  <div className="overlay">
                    {/* mobile version */}
                    <ProgressBar
                      progress={skill.progressPercent}
                      radius={77}
                      strokeColor="#12ABC4"
                      trackTransition='1.5s ease'
                      transition='1.5s ease'
                      initialAnimation={true}
                      initialAnimationDelay={1}
                      className='progressBar block xl:hidden'
                    />
                    {/* desktop */}
                    <ProgressBar
                      progress={skill.progressPercent}
                      radius={105}
                      strokeColor="#12ABC4"
                      trackTransition='1.5s ease'
                      transition='1.5s ease'
                      initialAnimation={true}
                      initialAnimationDelay={1}
                      className='progressBar hidden xl:block'
                    />
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  )
}

export default Skills