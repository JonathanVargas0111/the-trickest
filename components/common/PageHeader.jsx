import Image from 'next/image'

const PageHeader = () => {
    return (
        <header className="">
            <div className='w-full flex items-center justify-between px-[8%] fixed top-0 left-0 z-10'>
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
                


                <div className='hidden relative sm:flex items-center justify-center mx-auto'>
                    <div className='absolute rounded-3xl h-full w-full bg-slate-500 opacity-50'></div>
                    <nav className="relative h-full w-full flex justify-center items-center">
                        <ul className=' relative flex flex-row gap-3 p-2 px-4 rounded-3xl border-solid border-[1px] border-white'>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default PageHeader