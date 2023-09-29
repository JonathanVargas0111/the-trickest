import Image from 'next/image'

const CardStep = ({urlImg, altImg}) => {
    return (
        <div className="w-full p-5">
            <Image
                alt={altImg}
                src={urlImg}
                width={2250}
                height={1390}
                layout="responsive"
                className='w-full'
            />
        </div>
    )
}

export default CardStep