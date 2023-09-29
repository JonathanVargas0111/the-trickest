import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsGlobeAmericas } from 'react-icons/bs';
import SocialLinkIcon from '../common/SocialLinkIcon'; 

const CollaboratorCard = ({ nameCollaborator, urlImage, twitterHref, instagramHref, websiteHref }) => {
    return (
        <div className="relative">
            {/* Capa 1 */}
            <div className="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>

            {/* Capa 2 */}
            <div className="relative w-full flex flex-col items-center rounded-lg px-5 pt-2 pb-5">
                <div className="rounded-full -mt-8 mb-2 bg-black overflow-auto">
                    <img src={urlImage} alt={nameCollaborator} className="max-h-16" />
                </div>
                <div className="rounded-l-lg flex flex-col items-center">
                    <h3 className="text-xl font-semibold">{nameCollaborator}</h3>
                    <div className="flex gap-5 mt-3">
                        {twitterHref && (
                            <SocialLinkIcon href={twitterHref} bgColor="bg-slate-950" icon={<AiOutlineTwitter />} />
                        )}
                        {instagramHref && (
                            <SocialLinkIcon href={instagramHref} bgColor="bg-pink-600" icon={<AiOutlineInstagram />} />
                        )}
                        {websiteHref && (
                            <SocialLinkIcon href={websiteHref} bgColor="bg-slate-500" icon={<BsGlobeAmericas />} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaboratorCard;
