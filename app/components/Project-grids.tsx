import React from 'react'
import Image from 'next/image'

const ProjectGrid = () => {
    return (
        <div className='w-full grid grid-cols-2 mt-20'>
            <Image
                src="/images/7.jpg"
                alt='image'
                height={550}
                width={550}

            />
            <div className='w-96 flex flex-col items-start justify-center gap-4 p-4 text-gray-800'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Glasshaven Pavilion
                </h1>

                <p>Greenfield, Oregon, USA</p>

                Date: June 2023

                Status: Completed

                Description:
                A modern public pavilion using steel and smart glass, designed to blend urban functionality with transparent aesthetics. Features solar-integrated roofing and adaptive lighting

            </div>

            <div className='w-96 flex flex-col items-start justify-center gap-4 p-4 text-gray-800'>

                <h1 className='text-3xl font-bold text-gray-800'>
                    Echo Ridge Cultural Center
                </h1>
                <p>Location: Banff, Alberta, Canada</p>

                Date: Expected Q2 2025

                Status: Design Phase

                Description:
                A cultural and performing arts center designed to integrate into the alpine environment. Emphasizes wood-and-stone materials, geothermal heating, and modular theater spaces.
            </div>
            <Image
                src="/images/20.jpg"
                alt='image'
                height={550}
                width={550}
            />

            <Image
                src="/images/18.jpg"
                alt='image'
                height={550}
                width={550}
            />
            <div className='w-96 flex flex-col items-start justify-center gap-4 p-4 text-gray-800'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    KairoTech Headquarters
                </h1>
                <p>Location: Dubai, UAE</p>

                Date: October 2022

                Status: Completed

                Description:
                A LEED Platinum-certified corporate headquarters, incorporating parametric design, double-skin façades, and an AI-managed HVAC system to optimize energy usage.
            </div>
            <div className='w-96 flex flex-col items-start justify-center gap-4 p-4 text-gray-800'>
                <h1 className='text-3xl font-bold text-gray-800'>
                    Alto Verde Residential Complex
                </h1>
                <p>Location: Buenos Aires, Argentina</p>
                Date: March 2024

                Status: In Progress

                Description:
                A 5-building mid-rise residential complex focused on sustainability and community spaces. Includes green roofs, natural ventilation strategies, and a central courtyard.

            </div>

            <Image
                src="/images/17.jpg"
                alt='image'
                height={550}
                width={550}
            />


        </div>
    )
}

export default ProjectGrid