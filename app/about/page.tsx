'use client';
import { motion } from 'framer-motion';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='h-screen'></div>
            <div className='h-screen'></div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="my-8"
            >
                <div className="p-6 h-screen bg-white rounded-lg shadow">
                    <h2 className="text-xl font-bold">Smooth Scroll Fade</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        This content fades in as you scroll. So clean, so smooth ✨
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default page