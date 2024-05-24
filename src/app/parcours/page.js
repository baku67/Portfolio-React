"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPersonRunning, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Skills } from "/src/app/Components/CvPage/Skills";
import PageTitleNav from "../Components/PageTitleNav";


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



        {/* Page 2: Parcours */}
        <section className="section page2" id="home-scroll-skills">


            {/* Background image wood */}
            <Image 
                src="/wood-bg.jpeg"
                fill={true}
                style={{opacity: "0.7", zIndex:"0"}}
            />



            {/* Icone Page (top-right) */}
            {/* <FontAwesomeIcon icon={faPersonRunning} className="pageIcon" /> */}
            <FontAwesomeIcon icon={faPersonRunning} className="pageIcon" />

            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />


            <PageTitleNav title={"Parcours"} />



            <div className="parcours-main">

                <div className="parcours-chronologie">

                  <ul className="parcours-chronologie-ul">


                    <li className="parcours-chronologie-li">

                      <div className="parcours-chronologie-li-header">
                        <span>
                          <span className="parcours-chrono-date">2024</span>
                          <span className="parcours-chrono-title">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="parcours-chrono-titleIcon" />
                            <span>
                              Alternance &quot;Concepteur Développeur d&apos;Application&quot;</span>
                            </span>
                        </span>
                      </div>

                      <span className="parcours-chrono-exp">24 Juin</span>

                    </li>



                    <li className="parcours-chronologie-li">

                      <div className="parcours-chronologie-li-header">
                        <span>
                          <span className="parcours-chrono-date">2023</span>
                          <span className="parcours-chrono-title">Titre RNCP &quot;Développeur web et web mobile&quot;</span>
                        </span>
                      </div>

                      <span className="parcours-chrono-exp">Stage chez Hoplunch</span>

                    </li>

                    <li className="parcours-chronologie-li">

                      <div className="parcours-chronologie-li-header">
                        <span>
                          <span className="parcours-chrono-date">2020-2022</span>
                          <span className="parcours-chrono-title">BTS SIO option SLAM</span>
                        </span>
                      </div>

                      <span className="parcours-chrono-exp">Alternance chez Europ Tech Group</span>

                    </li>

                    <li className="parcours-chronologie-li">

                      <div className="parcours-chronologie-li-header">
                        <span>
                          <span className="parcours-chrono-date">2019</span>
                          <span className="parcours-chrono-title">Service Civique &quot;Médiateur numérique&quot;</span>
                        </span>

                      </div>

                      <span className="parcours-chrono-exp">Centre social & culturel l&apos;Éscale</span>

                    </li>

                  </ul >


                </div>

                <Skills />

            </div>




            {/* CV Desktop absolute bottom right*/}

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
