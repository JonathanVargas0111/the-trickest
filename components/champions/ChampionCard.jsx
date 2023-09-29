import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

const CardChampion = ({ nameSkate, categori, imgSkate }) => {
  return (
    <div className="relative">
      {/* Capa 1 */}
      <div className="absolute left-0 w-full h-full bg-black opacity-30 rounded-lg"></div>

      {/* Capa 2 */}
      <div className="relative z-10 w-full flex flex-row rounded-lg border-none mx-auto items-center shadow-lg">
        <div className="bg-black w-44 h-32 justify-center items-center rounded-l-lg overflow-hidden">
          <img className="object-cover h-full" src={imgSkate} alt="Bonnie image" />
        </div>

        <div className="w-full flex flex-col rounded-lg text-left">
          <div className="px-4">
            <h5 className="text-xl font-medium mb-3">{nameSkate}</h5>
            <span className="text-sm">{categori}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CardChampion