"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faClipboardCheck, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Skills } from "/src/app/Components/CvPage/Skills";
import { Tools } from "/src/app/Components/CvPage/Tools";
import { Hobbies } from "/src/app/Components/CvPage/Hobbies";


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};





const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = '/CV_BasileKuntz.pdf'; 
  link.download = 'CV_BasileKuntz.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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


        {/* Background image wood */}
        <Image 
            src="/wood-bg.jpeg"
            fill={true}
            style={{opacity: "0.7", zIndex:"0"}}
        />
      


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

            <div className="parcours-main">

               <div className="parcours-chronologie">

                  <ul className="parcours-chronologie-ul">

                    <li className="parcours-chronologie-li">
                      <span>2023</span>
                      <span>Titre RNCP &quot;Développeur web et web mobile&quot;</span>
                      <span>Stage chez Hoplunch</span>
                    </li>

                    <li className="parcours-chronologie-li">
                      <span>2020-2022</span>
                      <span>BTS SIO option SLAM</span>
                      <span>Alternance chez Europ Tech Group</span>
                    </li>

                    <li className="parcours-chronologie-li">
                      <span>2019</span>
                      <span>Service Civique &quot;Médiateur numérique&quot;</span>
                      <span>Centre social & culturel l&apos;Éscale</span>
                    </li>

                  </ul >

                </div>

                <Skills />
                <Tools />
                <Hobbies />

            </div>


            <div className="cv-pdf-wrapper">

              <Image 
                src="/CV_BasileKuntz.png" 
                // width={100} 
                // height={250} 
                fill={true}
                alt="CV de Basile Kuntz"
                onClick={downloadPDF} 
                className="cv-pdf"
              />

              {/* Download icone: */}
              <FontAwesomeIcon icon={faFilePdf} className="cv-pdf-dlIcon" />

            </div>
        

        </section>




    </main>
  );
}
