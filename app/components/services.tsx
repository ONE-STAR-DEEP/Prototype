'use client';
import { Building2, Cog, Network } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

const Services = () => {

    const [state, setState] = useState('planning');

    return (
        <div className='flex w-full h-[75%]'>

            <section className='bg-gray-600 flex flex-col pl-36 items-start justify-center w-[50%] h-full space-y-20'>
                <h1 className='text-4xl font-light'>SERVICES</h1>
                <div className='text-2xl space-y-2 flex flex-col items-start justify-start'>
                    <div className='flex items-center gap-2'>
                        <Image 
                        src='/icons/1.png'
                        alt='icon'
                        height={50}
                        width={50}
                        className='invert brightness-0' 
                        />
                        <p onClick={() => setState('planning')} className={`origin-left service-hover transition-colors duration-500 ease-in-out ${state === 'planning' ? 'text-white scale-125 ' : 'text-gray-400'}`}>Planning</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image 
                        src='/icons/4.png'
                        alt='icon'
                        height={50}
                        width={50}
                        className='invert brightness-0' 
                        />
                        <p onClick={() => setState('interior')} className={`origin-left service-hover transition-colors duration-500 ease-in-out ${state === 'interior' ? 'text-white scale-125' : 'text-gray-400'}`}>Interior design</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image 
                        src='/icons/6.png'
                        alt='icon'
                        height={50}
                        width={50}
                        className='invert brightness-0' 
                        />
                        <p onClick={() => setState('architecture')} className={`origin-left service-hover transition-colors duration-500 ease-in-out ${state === 'architecture' ? 'text-white scale-125' : 'text-gray-400'}`}>Architecture</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Image 
                        src='/icons/2.png'
                        alt='icon'
                        height={50}
                        width={50}
                        className='invert brightness-0' 
                        />
                        <p onClick={() => setState('programming')} className={`origin-left service-hover transition-colors duration-500 ease-in-out ${state === 'programming' ? 'text-white scale-125' : 'text-gray-400'}`}>Programming</p>
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-start px-12 justify-center w-[40%] h-ful'>


                {(state === 'architecture') &&
                    <div className='space-y-4'>
                        
                        <h1 className="text-5xl font-black tracking-wider text-[#023751]">Architecture</h1>
                        <p className='text-[#757c84] text-lg font-semibold'>Our highly-regarded architectural services span the full range of project development. We utilize our tried-and-true process to develop beautiful and functional spaces both on time and on budget.</p>
                        <p className='text-md tracking-widest font-black mt-10 text-[#ab901e]'>LET'S CONNECT</p>
                    </div>
                }

                {(state === 'interior') &&
                    <div className='space-y-4'>
                        
                        <h1 className="text-5xl font-black tracking-wider text-[#59788a]">Interior design</h1>
                        <p className='text-[#757c84] text-lg font-semibold'>Coleman Partners Architects, LLC has highly qualified, licensed interior designers on staff capable of everything from conceptual design and construction documentation to interior renderings and installation supervision.</p>
                        <p className='text-md tracking-widest font-black mt-10 text-[#ab901e]'>LET'S CONNECT</p>
                    </div>
                }

                {(state === 'planning') &&
                    <div className='space-y-4'>
                        
                        <h1 className="text-5xl font-black tracking-wider text-[#874000]">Planning</h1>
                        <p className='text-[#757c84] text-lg font-semibold'>Projects of all sizes are complex, and our process allows us to take a thoughtful and efficient approach to architectural development. Our team understands master planning and budgeting, as well as feasibility and other types of analyses that are relevant to a successful venture.</p>
                        <p className='text-md tracking-widest font-black mt-10 text-[#ab901e]'>LET'S CONNECT</p>
                    </div>
                }
                {(state === 'programming') &&
                    <div className='space-y-4'>
                        
                        <h1 className="text-5xl font-black tracking-wider text-[#6f6259]">Programming</h1>
                        <p className='text-[#757c84] text-lg font-semibold'>Understanding what is possible is often the first step toward developing a project. Coleman Partners researches the personnel demographics to determine the needs of the space — and its surrounding areas. We also account for the possibility of growth and take the full context into consideration.</p>
                        <p className='text-md tracking-widest font-black mt-10 text-[#ab901e]'>LET'S CONNECT</p>
                    </div>
                }
            </section>
        </div>
    )
}

export default Services