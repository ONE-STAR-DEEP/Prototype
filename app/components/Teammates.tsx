'use client'
import { User } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const Teammates = () => {
    return (
        <div>
            <div className='h-full'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="h-full flex flex-col items-center justify-between"
                >
                    <h1 className="text-5xl font-bold mb-20">Our Teammates</h1>
                    <div className=' w-full flex items-baseline justify-center gap-20'>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Mr. XYZ Name</h1>
                            <p className='text-gray-500 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vero ratione.</p>
                        </div>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Mr. ABC Name</h1>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugiat qui a similique inventore voluptate ut vel, dolorem natus? b</p>
                        </div>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Miss ABC Name</h1>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className=' w-full flex items-baseline justify-center gap-20'>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Mr. XYZ Name</h1>
                            <p className='text-gray-500 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vero ratione.</p>
                        </div>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Mr. ABC Name</h1>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugiat qui a similique inventore voluptate ut vel, dolorem natus? b</p>
                        </div>
                        <div className='max-w-[27%] flex flex-col items-center'>
                            <User className='h-34 w-34 bg-white rounded-full p-4 text-gray-600' />
                            <h1 className="text-md text-white mb-2 mt-1">Miss ABC Name</h1>
                            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Teammates