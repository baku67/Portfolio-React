"use client";
import React from 'react';
import { useEffect } from 'react';

import '@splidejs/splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';


export function CarrousselProject({ actualProject }) {


    return (
        <Splide 
            hasTrack={false} 
            aria-label="captures d'écran" 
            className="splide"
            options={{
                rewind: true,
                gap   : '1rem',
                type   : 'loop',
                autoplay: "true",
            }}
        >
            <div className="custom-wrapper">
                <button className="splide__toggle" type="button">
                    <span className="splide__toggle__play">Play</span>
                    <span className="splide__toggle__pause">Pause</span>
                </button>

                <SplideTrack>
                    {actualProject.carroussel_imgs.map((slide, index) => (
                        <SplideSlide key={index}>
                            <img src={slide.src} alt={slide.alt} className="carrousselImg" />
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className="splide__progress">
                    <div className="splide__progress__bar" style={{backgroundColor: actualProject.primaryColor}} />
                </div>

            </div>
        </Splide>
    );
}