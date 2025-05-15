import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Services from './components/services'
import ProjectGrid from './components/Project-grids'
import Experience from './components/Experience'
import Teammates from './components/Teammates'


const page = () => {

  return (
    <div>
      <div className="hero-section screen-limit">
        <div className='h-full w-full pb-4  flex flex-col items-center justify-between'>

          <Navbar />

          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-3xl  text-white/70 tracking-widest"></h1>
            <p className='text-8xl font-black font-stretch-20% tracking-wider'>CREATING PLACES</p>
          </div>

          <div className='w-[80%] flex justify-evenly pb-10'>
            <div className='w-[27%] h-28 gap-2 rounded-sm bg-white/20 flex items-center justify-center'>
              <Image
                src='/icons/6.png'
                alt='icon'
                height={50}
                width={50}
                className='invert brightness-0'
              />
              <div>
                <h1 className='text-xl font-extralight'>Intuitive design</h1>
                <p>Lorem ipsum dolor</p>
              </div>
            </div>

            <div className='w-[27%] gap-2 h-28 rounded-sm bg-white/20 flex items-center justify-center'>
              <Image
                src='/icons/6.png'
                alt='icon'
                height={50}
                width={50}
                className='invert brightness-0'
              />
              <div>
                <h1 className='text-xl font-extralight'>Creative Solutions</h1>
                <p>consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className='w-[27%] gap-2 h-28 rounded-sm bg-white/20 flex items-center justify-center'>
              <Image
                src='/icons/6.png'
                alt='icon'
                height={50}
                width={50}
                className='invert brightness-0'
              />
              <div>
                <h1 className='text-xl font-extralight'>Construction</h1>
                <p>Lorem ipsum dolor elit.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='h-screen bg-white bg-[radial-gradient(circle,_#ccc_1px,_transparent_2px)] [background-size:70px_70px] min-h-[768px] flex items-center justify-center min-w-[1280px] sticky top-0 z-2'>
        <Services />
      </div>

      <div className='h-32'></div>
      <div className='h-32'></div>

      <div className='h-screen bg-black min-h-[768px] min-w-[1280px] sticky top-0 z-2'>

        <Experience />

      </div>

      <div className='h-32'></div>
      <div className='h-32'></div>

      <div className='h-screen bg-gray-600 flex flex-col items-center justify-evenly min-h-[768px] min-w-[1280px] sticky top-0 z-4'>

        <Teammates />

      </div>

      <div className='h-32'></div>
      <div className='h-32'></div>


      <div className='h-full w-full bg-white bg-[radial-gradient(circle,_#ccc_1px,_transparent_2px)] [background-size:70px_70px] pt-20 flex flex-col space-y-10 items-center justify-center min-h-[768px] min-w-[1280px] sticky top-0 z-6'>
        <h1 className="text-5xl font-bold text-black">Project Section</h1>
        <div className='flex items-center justify-center'>

          <ProjectGrid />

        </div>
        <Link className='bg-blue-800 px-6 py-3 rounded-lg' href="/projects" >View all</Link>



        <footer className='h-96 bg-[#000000] w-full flex flex-col items-center gap-4 justify-center sticky top-0 z-8'>

          <h1 className='text-2xl font-bold text-white'>Contact Us</h1>
          <p className='text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          <p className='text-white/70'>© Copyright 2025 Sample Page. All rights reserved.</p>
        </footer>
      </div>


    </div>
  )
}

export default page