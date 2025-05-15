import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className='screen-limit'>
      <div className="projects-section screen-limit">
        <div className='screen-limit inset-0 bg-black/50 h-full w-full absolute flex flex-col items-center justify-between'>
          <Navbar />
          <h1 className='text-7xl font-semibold'>Our Projects</h1>

          <div className='ml-auto w-2/3 h-28 bg-[#e8cfad]/70 flex items-center justify-evenly '>
            <div className='text-[#4a2d19] flex flex-col items-center justify-center'>
              <h1 className='text-5xl font-black'>204</h1>
              <p>Total Projects</p>
            </div>
            <div className='text-[#4a2d19] flex flex-col items-center justify-center'>
              <h1 className='text-5xl font-black'>14</h1>
              <p>Active Projects</p>
            </div>
            <div className='text-[#4a2d19] flex flex-col items-center justify-center'>
              <h1 className='text-5xl font-black'>190</h1>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-white py-10 px-32'>

        <div className='flex items-center gap-4'>
          <h1 className='text-gray-500 ml-10 text-2xl font-extralight'>OUR PORTFOLIO</h1>
          <div className='h-20 w-px bg-gray-600'></div>
          <p className='w-42 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>


        <div className='grid grid-cols-3 gap-4 mt-10 mb-20'>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102">
            <div className="bg-[url('/images/11.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/15.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>
          
          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/16.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/17.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/19.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
              <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/20.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102">
            <div className="bg-[url('/images/18.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/3.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>
          
          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/4.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/5.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/6.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
              <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>

          <div className="relative h-96 w-full overflow-hidden group transition-transform duration-300 hover:scale-102 hover:cursor-pointer">
            <div className="bg-[url('/images/9.jpg')] bg-cover bg-center h-full w-full transition duration-300 group-hover:brightness-35 flex items-center justify-center">
            </div>
            <div className="absolute inset-0 p-2 flex flex-col items-center justify-between text-white text-xl">
                <p className='w-full text-sm font-light'>
                  Project Lead 
                </p>
                <h1>Card Title</h1>
                <p className='w-full text-sm font-light'>Simple Details</p>
              </div>
          </div>


        </div>

      </section>

      <footer className='h-96 bg-[#000000] flex flex-col items-center gap-4 justify-center'>

        <h1 className='text-2xl font-bold text-white'>Contact Us</h1>
        <p className='text-white/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        <p className='text-white/70'>© Copyright 2025 Spatial Elegance. All rights reserved.</p>
      </footer>


    </div>
  )
}

export default page