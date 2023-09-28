import Image from 'next/image'

const PageHeader = () => {
    return (
        <header className="w-full flex px-4 bg-blue-950">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="flex justify-start items-center h-20">
                    <Image
                        src="/logo.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={50}
                        height={12}
                        priority
                    />
                </div>
            </div>
        </header>
    )
}

export default PageHeader