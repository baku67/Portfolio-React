"use client";
import React from 'react';
import { useEffect } from 'react';

import '@splidejs/splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


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
                pauseOnHover: false,
            }}
        >
            <div className="custom-wrapper">
                <button className="splide__toggle" type="button" style={{border: "0px solid " + actualProject.primaryColor}}>
                    <span className="splide__toggle__play">
                        <FontAwesomeIcon icon={faPlay} style={{color: actualProject.primaryColor }} />
                    </span>
                    <span className="splide__toggle__pause">
                        <FontAwesomeIcon icon={faPause} style={{color: actualProject.primaryColor }} />
                    </span>
                </button>

                <SplideTrack>
                    {actualProject.carroussel_imgs.map((slide, index) => (
                        <SplideSlide key={index}>
                            <img src={slide.src} alt={slide.alt} className="carrousselImg" />
                        </SplideSlide>
                    ))}
                </SplideTrack>

                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                        <FontAwesomeIcon icon={faAngleRight} style={{color: actualProject.primaryColor }} />
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                        <FontAwesomeIcon icon={faAngleRight} style={{color: actualProject.primaryColor }} />
                    </button>
                </div>

                <div className="splide__progress">
                    <div className="splide__progress__bar" style={{backgroundColor: actualProject.primaryColor}} />
                </div>

            </div>
        </Splide>
    );
}