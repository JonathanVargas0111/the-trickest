import React from 'react'
import CardStep from './StepCard'
import GradientBackground from '../common/GradientBackground'


/* bg-[url('/images/png-big-city.png')]  bg-cover */

const StepsSection = () => {
    return (
        <GradientBackground backgroundImage="/images/darkness.png">               
            {/* Contenido */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:px-[10%]">
                <CardStep urlImg={"/images/img-1-web-1.webp"} altImg={"The guitarist in the concert."} />
                <CardStep urlImg={"/images/img-2-web-1.webp"} altImg={"The guitarist in the concert."} />
                <CardStep urlImg={"/images/img-3-web-1.webp"} altImg={"The guitarist in the concert."} />
            </div>
        </GradientBackground>
    )
}

export default StepsSection