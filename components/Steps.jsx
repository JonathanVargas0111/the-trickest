import React from 'react'
import CardStep from './CardStep'
import GradientBackground from './GradientBackground'


/* bg-[url('/images/png-big-city.png')]  bg-cover */

const Steps = () => {
    return (
        <GradientBackground backgroundImage="/images/darkness.png">               
            {/* Contenido */}
            <div className="flex flex-col p-5 justify-center items-center md:flex-row md:py-24">
                <CardStep urlImg={"/images/img-1-web-1.webp"} altImg={"The guitarist in the concert."} />
                <CardStep urlImg={"/images/img-2-web-1.webp"} altImg={"The guitarist in the concert."} />
                <CardStep urlImg={"/images/img-3-web-1.webp"} altImg={"The guitarist in the concert."} />
            </div>
        </GradientBackground>
       
      
    )
}

export default Steps