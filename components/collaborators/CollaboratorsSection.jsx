import React from 'react';
import CollaboratorCard from './CollaboratorCard';
import GradientBackground from '../common/GradientBackground';

const collaboratorsData = [
  {
    nameCollaborator: "toryskateshop",
    urlImage: "/images/collaborator/tory.webp",
    twitterHref: "",
    instagramHref: "https://www.instagram.com/toryskateshop/",
    websiteHref: "https://toryskateshop.com/",
  },
  {
    nameCollaborator: "devjonathanvargas",
    urlImage: "/images/collaborator/devjonathanvargas.png",
    twitterHref: "https://twitter.com/jonathanfva92",
    instagramHref: "https://www.instagram.com/jonathanvargasari/",
    websiteHref: "https://www.devjonathanvargas.website/",
  },
  {
    nameCollaborator: "devjonathanvargas",
    urlImage: "/images/collaborator/devjonathanvargas.png",
    twitterHref: "https://twitter.com/jonathanfva92",
    instagramHref: "",
    websiteHref: "https://www.devjonathanvargas.website/",
  },
  // Agrega más objetos de colaboradores según sea necesario
];

const CollaboratorsSection = () => {
  return (
    <GradientBackground>
      <div className='p-12 lg:px-[20%]'>
        <h2 className="text-xl md:text-7xl text-center my-12">Nuestros Colaboradores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-4">
          {collaboratorsData.map((collaborator, index) => (
            <CollaboratorCard
              key={index} // Asegura que cada elemento tenga una clave única
              nameCollaborator={collaborator.nameCollaborator}
              urlImage={collaborator.urlImage}
              twitterHref={collaborator.twitterHref}
              instagramHref={collaborator.instagramHref}
              websiteHref={collaborator.websiteHref}
            />
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};

export default CollaboratorsSection;
