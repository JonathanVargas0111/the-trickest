import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="flex flex-col mx-auto max-w-screen-xl w-full justify-center items-center text-center z-10 px-4 text-gray-200">
            <span className="flex items-center">Made with by
                <Link className="ml-1 underline decoration-dashed decoration-0 underline-offset-4 transition-colors hover:text-violet-600" target="_blank" href="https://twitter.com/jonathanfva92">
                 @jonathanfva92
                </Link>
            </span>
        </footer>
    )
}

export default Footer