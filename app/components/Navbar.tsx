'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className='w-full'>
            <nav className='rounded-xl h-16 w-full px-10 flex items-center'>
                <h1 className="text-xl font-bold">Company Name</h1>
                <ul className='flex space-x-10 items-center ml-auto'>
                    <Link href="/"
                        className={` ${pathname === '/' ? 'text-green-600' : 'text-muted'}`}
                    >
                        Home
                    </Link>
                    <li>
                    <Link href="/"
                            className={`${pathname === '/about' ? 'text-green-600 rounded-lg' : 'text-muted'}`}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects"
                            className={`${pathname === '/projects' ? 'text-green-600' : 'text-muted'}`}>
                            Our Projects
                        </Link>
                    </li>

                    <li>
                        <Link href="/"
                            className={`${pathname === '/sevices' ? 'text-green-600 rounded-lg' : 'text-muted'}`}>
                        Services
                        </Link>
                        </li>

                    <li>
                        <Link href="/"
                            className={`${pathname === '/contact' ? 'text-green-600 rounded-lg' : 'text-muted'}`}>
                        Contact
                        </Link>
                        </li>
                </ul>
            </nav>
            <div className='w-full h-px bg-white/30'></div>
        </div>
    )
}

export default Navbar