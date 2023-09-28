import Image from 'next/image'

const CardStep = ({urlImg, altImg}) => {
    return (
        <div className="w-1/4">
            <Image
                alt={altImg}
                src={urlImg}
                width={2250}
                height={1390}
                layout="responsive"
            />
        </div>
    )
}

export default CardStep