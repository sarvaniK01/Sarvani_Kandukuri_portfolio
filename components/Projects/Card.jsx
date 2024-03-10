"use client"
import React from 'react'

// libraries
import ReactFlipCard from 'reactjs-flip-card';

const Card = ({ id, img, pName, pDescription, pSkills, icon1, iconLink1 ,icon2, iconLink2}) => {
    return (
        <ReactFlipCard
            frontComponent={
                <div className='w-[280px] h-[280px] relative' key={id}>
                    <img src={img} alt='project-img' />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-3 w-[65%]'>
                        <p className='text-center text-white text-2xl font-baskerville font-bold'>
                            {pName}
                        </p>
                    </div>
                </div>
            }
            backComponent={
                <div className='w-[280px] h-[280px]' key={id}>
                    <img src={img} alt='project-img' />
                    <div className='absolute top-[95%] bg-black/80 p-3 w-[280px]'>
                        <p className='text-center text-white text-xl font-baskerville font-bold'>
                            {pName}
                        </p>
                        <p className='font-nunito font-semibold text-white text-center pt-1'>
                            {pDescription}
                        </p>
                        <div className='flex flex-row gap-5 justify-center'>
                            {pSkills}
                        </div>
                        <div className='flex flex-row gap-3 mt-6 justify-center'>
                            <a href={iconLink1} target='_blank'>
                                <img src={icon1} alt='icon1' />
                            </a>
                            <a href={iconLink2} target='_blank'>
                                <img src={icon2} alt='icon2' />
                            </a>
                        </div>
                    </div>
                </div>
            }
        />
    )
}

export default Card