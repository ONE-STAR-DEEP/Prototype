'use client'
import { motion } from 'motion/react'
import React from 'react'
import { File, User, Workflow } from 'lucide-react'

const Experience = () => {
    return (
        <div className='h-full'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="h-full flex flex-col items-center justify-evenly"
            >
                <h1 className="text-5xl font-bold text-white pb-12">Experience</h1>
                <div className=' w-full flex items-baseline justify-evenly'>
                    <div className='max-w-[27%] flex flex-col items-center gap-6'>
                        <Workflow className='h-24 w-24 mb-10'></Workflow>
                        <h1 className="text-5xl font-bold text-white">75 yrs</h1>
                        <p className='text-gray-500 text-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vero ratione. Saepe rerum mollitia maiores, neque quo laudantium culpa beatae odio consequuntur quis natus maxime quisquam, repudiandae expedita rem vitae.</p>
                    </div>
                    <div className='max-w-[27%] flex flex-col items-center gap-6'>
                        <User className='h-24 w-24 mb-10' />
                        <h1 className="text-5xl font-bold text-white">100+ Clients</h1>
                        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis fugiat qui a similique inventore voluptate ut vel, dolorem natus? b</p>
                    </div>
                    <div className='max-w-[27%] flex flex-col items-center'>
                        <File className='h-24 w-24 mb-10' />
                        <h1 className="text-5xl font-bold text-white">200+ projects</h1>
                        <p className='text-gray-500'>Active & Completed Projects</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Experience