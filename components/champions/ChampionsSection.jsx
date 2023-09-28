import React from 'react'
import CardChampion from './ChampionCard'
import GradientBackground from '../common/GradientBackground'

const ChampionsSection = () => {
    return (
        <GradientBackground>
            <div className='p-12 lg:px-[20%]'>
                <h2 className='text-xl md:text-7xl text-center my-12'>Winners</h2>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-1 md:gap-9'>
                    <CardChampion nameSkate={"skate 1"} categori={"Best Heelflip"} imgSkate={"/images/img-1-web-1.webp"}></CardChampion>
                    <CardChampion nameSkate={"skate 2"} categori={"Random Heelflip"} imgSkate={"/images/img-2-web-1.webp"}></CardChampion>
                </div>
            </div>
        </GradientBackground>

    )
}

export default ChampionsSection