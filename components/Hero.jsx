import React from 'react'
import Image from 'next/image'
import GradientBackground from './GradientBackground'

const Hero = () => {
    return (
        <GradientBackground>
            <div className='flex flex-col'>
                <div className='w-full'>
                    <Image
                        src="/images/logo.png"
                        alt="Trickest est"
                        className="mx-auto md:w-1/6"
                        width={300}
                        height={350}
                        priority
                    />
                </div>
                <div className='w-full flex flex-col p-5 items-center md:flex-row md:py-24 md:justify-center'>
                    <div className='w-full flex flex-col text-center md:w-3/5 '>
                        <div className='w-full'>
                            <h1 className="text-2xl font-extrabold text-white mb-5 md:text-4xl lg:text-6xl">
                                ¿Tienes algo especial para mostrar?
                            </h1>
                            <h2 className="text-lg text-white md:text-2xl lg:text-3xl">
                                ¡Esta es tu oportunidad!
                            </h2>
                        </div>
                        <div className='w-full'>
                            <form className="flex shadow justify-between mt-6 w-72 md:w-10/12 lg:w-9/12 lg:max-w-xl h-13 relative p-[2px] rounded-full bg-white transition mx-auto lg:mt-12">
                                <input
                                    className="z-10 w-44 md:w-full h-11 px-6 outline-none bg-transparent text-sm text-gray-700"
                                    placeholder="Enter your email"
                                    type="email"
                                    required=""
                                />
                                <button
                                    type="submit"
                                    className="z-10 w-28 md:w-48 h-11 flex justify-center items-center bg-black rounded-full text-white text-xs cursor-pointer transition outline-0 hover:bg-violet-950 disabled:opacity-50 disabled:cursor-not-allowed">Join the waitlist </button>
                            </form>
                        </div>
                    </div>

                    <div className='w-1/2 hidden md:block justify-center md:w-1/5'>
                        <Image
                            src="/images/trick-est.webp"
                            alt="Trickest est"
                            className="mx-auto md:w-full"
                            width={300}
                            height={350}
                            priority
                        />
                    </div>
                </div>

            </div>
        </GradientBackground>

    )
}

export default Hero
