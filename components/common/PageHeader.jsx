'use client'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'


const PageHeader = () => {
    const [nav, setNav] = useState(false);
    const menuItems = [
        { id: 1, idSection: "inicio", titleBtn: "Inicio" },
        { id: 2, idSection: "acerca-de", titleBtn: "Participa" },
        { id: 3, idSection: "servicios", titleBtn: "Ganadores" },
        { id: 4, idSection: "collaborators", titleBtn: "Partners" },
    ];

    const toggleNav = () => {
        // Cambiar el valor de la variable nav de true a false o viceversa
        setNav(!nav);
        console.log(nav)
    }


    return (
        <header className="">
            {/* Mobile */}
            <div className="w-full flex flex-col items-center justify-between fixed top-0 left-0 z-50 sm:hidden">
                <div className={`w-full flex flex-row justify-between items-center pt-5 px-[8%] ${nav ? ' bg-gray-800' : ''}`}>
                    <div className="flex items-center h-20">
                        <Image
                            src="/logo.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={70}
                            height={25}
                            priority
                        />
                    </div>
                    <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-500 transition-all duration-300">
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>
                </div>
                {
                    nav ? <div className={`flex flex-col justify-start items-center w-full h-screen bg-gradient-to-b bg-gray-800 overflow-hidden transition-opacity duration-300 ${nav ? 'opacity-100' : 'opacity-0 h-0'}`}>
                        {
                            menuItems.map(({ id, idSection, titleBtn }) => (
                                <Link href={`/#section-${idSection}`}
                                    key={id}
                                    className='font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 border-b-[1px] border-solid w-full text-3xl' >
                                    <button className='m-5 capitalize'
                                        onClick={() => { toggleNav() }}
                                    >{titleBtn}</button>
                                </Link>
                            ))
                        }

                    </div>
                        :
                        ''
                }
            </div>

            {/* Desktop */}
            <div className='hidden w-full sm:flex items-center justify-between px-[8%] fixed top-0 left-0 z-50'>
                <div className="flex items-center h-20">
                    <Image
                        src="/logo.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={70}
                        height={25}
                        priority
                    />
                </div>
                <div className='relative flex items-center justify-center mx-auto'>
                    <div className='absolute rounded-3xl h-full w-full bg-slate-500 opacity-50'></div>
                    <nav className="relative h-full w-full flex justify-center items-center">
                        <ul className='relative flex flex-row gap-5 p-2 px-4 rounded-3xl border-solid border-[1px] border-white'>
                            {menuItems.map(({ id, idSection, titleBtn }) => (
                                <li key={id} className='hover:transition-translate duration-300 hover:-translate-y-1 '>
                                    <Link href={`/#section-${idSection}`}
                                        key={id}
                                        className='' >
                                        {titleBtn}
                                    </Link>
                                </li>
                            ))}
                            {/*  <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li> */}
                        </ul>
                    </nav>
                </div>

            </div>
        </header >
    )
}

export default PageHeader