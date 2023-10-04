import React from 'react'
import Image from 'next/image'
import GradientBackground from './common/GradientBackground'
import FormRegister from './common/FormRegister'

const Hero = () => {
    return (
        <GradientBackground>
            <div className='flex flex-col pt-24'>
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
                        {/* <FormRegister /> */}
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
