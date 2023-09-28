import React from 'react'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const CollaboratorCard = () => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="absolute w-full h-16 -top-8 left-0 flex justify-center items-center">
                <img src="/images/img-1-web-1.webp" alt="Colaborador 1" className="max-h-16" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold">Colaborator 1</h3>

                <div className="flex gap-5 mt-3">
                    <Link href="#">
                        <div className="rounded-full bg-slate-950 p-1">
                            <AiOutlineTwitter />
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="rounded-full bg-pink-600 p-1">
                            <AiOutlineInstagram />
                        </div>
                    </Link>
                    <Link href="#" className="text-green-500 hover:underline">
                        <i className="fas fa-globe"></i>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default CollaboratorCard