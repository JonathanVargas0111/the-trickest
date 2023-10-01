'use client'
import React, { useEffect } from 'react';
import GradientBackground from '../common/GradientBackground';

function InstagramSection() {

    const woxoSrc = process.env.NEXT_PUBLIC_WOXO_SRC;
    const dataMcSrc = process.env.NEXT_PUBLIC_WOXO_DATA_MC_SRC

    const loadInstagramContent = () => {
        const script = document.createElement('script');
        script.src = woxoSrc;
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
                    data-mc-src={dataMcSrc}
                    className='p-5'
                ></div>
            </div>
        </GradientBackground>

    );
}

export default InstagramSection;

