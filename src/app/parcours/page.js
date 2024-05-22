"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { DownloadCvBtn } from "/src/app/Components/CvPage/DownloadCvBtn";
import { Experiences } from "/src/app/Components/CvPage/Experiences";
import { Formations } from "/src/app/Components/CvPage/Formations";
import { Skills } from "/src/app/Components/CvPage/Skills";
import { Tools } from "/src/app/Components/CvPage/Tools";
import { Hobbies } from "/src/app/Components/CvPage/Hobbies";


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};






export default function Home() {

  const [isMobile, setIsMobile] = useState(false); // Initialize state with false


  
  useEffect(() => {

    setIsMobile(isMobileDevice()); // Set initial state when component mounts


    // Fonts:
    // Dynamic import for webfontloader (fix pb SSR)
    import('webfontloader').then((WebFontLoader) => {
      WebFontLoader.load({
        google: {
          families: ['Julius Sans One', 'Nunito', 'Kavoon', 'Montserrat Alternates', 'Righteous', 'Kalam']
        }
      });
    });


  }, []); 






  return (

    <main className="main">
      


        {/* Page 2: Parcours */}
        <section className="section page2" id="home-scroll-skills">

            {/* Icone Page (top-right) */}
            {/* <FontAwesomeIcon icon={faPersonRunning} className="pageIcon" /> */}
            <FontAwesomeIcon icon={faClipboardCheck} className="pageIcon" />

            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />

            {/* Header */}
            <div className="projectPageHeader">
                <h2 className="titleSection" style={{marginBottom:"0.4em"}}>
                    <FontAwesomeIcon icon={faChevronLeft} className="faIcon-chevron" /> 
                    <span style={{margin:"0px 15px"}}>Mon parcours</span>
                    <span className="slash">/</span>
                    <FontAwesomeIcon icon={faChevronRight} className="faIcon-chevron" /> 
                </h2>
            </div>


            <Experiences />
            <Formations />

            <Skills />
            <Tools />

            <Hobbies />

            <DownloadCvBtn isMobile={isMobile} />
        
        </section>




    </main>
  );
}
