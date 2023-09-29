'use client'
import React, { useEffect } from 'react';
import GradientBackground from '../common/GradientBackground';

function InstagramSection() {

    const loadInstagramContent = () => {
        const script = document.createElement('script');
        script.src = 'https://cdn2.woxo.tech/a.js#6516e7b679b4b76c4d894446';
        script.async = true;
        script.setAttribute('data-usrc', '');
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    };

    

    useEffect(() => {
        loadInstagramContent();
    }, []);

    return (
        <GradientBackground>
            <div className='p-12 lg:px-[20%]'>
                <h2 className="text-xl md:text-7xl text-center my-12">Síguenos en Instagram</h2>
                <div
                    loading="lazy"
                    data-mc-src="c47ea058-03e1-4c45-aaf8-cda3be09b8e2#instagram"
                    className='p-5'
                ></div>
            </div>
        </GradientBackground>

    );
}

export default InstagramSection;

