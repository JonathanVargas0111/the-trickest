import React from 'react'
import CollaboratorCard from './CollaboratorCard'
import GradientBackground from '../common/GradientBackground'

const CollaboratorsSection = () => {
    return (
        <GradientBackground>
            <div className=" py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-semibold text-center mb-6">Nuestros Colaboradores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <CollaboratorCard></CollaboratorCard>
                    </div>
                </div>
            </div>
        </GradientBackground>

    )
}

export default CollaboratorsSection