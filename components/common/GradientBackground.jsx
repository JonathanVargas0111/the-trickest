import React from 'react';

const GradientBackground = ({ backgroundImage, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage || '/images/darkness.png'})` ,
  };

  return (
    <section className="relative">
      {/* Fondo de imagen */}
      <div className="absolute inset-0 bg-cover bg-repeat" style={backgroundStyle}></div>
      {/* Gradiente transparente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-purple-900 to-blue-950 opacity-50"></div>
      {/* Contenido */}
      <div className='relative'>
        {children}
      </div>
    </section>
  );
};

export default GradientBackground;
