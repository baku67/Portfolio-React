"use client";
import { useEffect, useState } from "react";

import Image from "next/image";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faMagnifyingGlass, faFileArrowDown, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Skills } from "/src/app/Components/CvPage/Skills";
import PageTitleNav from "../Components/PageTitleNav";
import { NavBar } from "../Components/NavBar";

import Draggable from 'react-draggable';


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




  // Click toggle Nav (isNavActive) croix et oustsideNav
  const [isNavActive, setNavActive] = useState(false);
  const toggleNav = () => setNavActive(prevState => !prevState);

  // Outside click Nav
  const handleClickOutsideNav = () => {
      if(isNavActive) {
        setNavActive(prevState => !prevState);
      }
  }



  
  return (

    <>

      <NavBar isNavActive={isNavActive} toggleNav={toggleNav} currentActive={"parcours"} isMobile={isMobile}  />

      <main 
        className="main"
        style={{filter: isNavActive ? "brightness(0.5) blur(1px)" : ""}}
        onClick={handleClickOutsideNav}
      >

        {/* Page 2: Parcours */}
        <section className="section page2" id="home-scroll-skills">


            <div className="scrollMobile">


              {/* Icone Page (top-right) */}
              <FontAwesomeIcon icon={faPersonRunning} className="pageIcon" />

              {/* Shapes neutres(cyan) */}
              <Shape1 />
              <Shape2 />


              <PageTitleNav 
                title={"Parcours"} 
                onClickNav={toggleNav}
              />



              <div className="parcours-main">

                  <div className="parcours-chronologie">

                    <ul className="parcours-chronologie-ul">

                      <li className="parcours-chronologie-li">

                        <div className="parcours-chronologie-li-header">

                          <FontAwesomeIcon icon={faMagnifyingGlass} className="parcours-chrono-titleIcon" />
                          <div>
                            <span className="parcours-chrono-date">2024</span>
                            <span className="parcours-chrono-title">Alternance &quot;Concepteur Développeur d&apos;Application&quot;</span>
                          </div>

                        </div>

                        <div>
                          <p className="parcours-chronologie-li-descriptionAlternance">Contrat d’apprentissage - Rythme : 3 semaines en entreprise / 1 semaine en école<br />
                            Formation éligible à l’Aide Exceptionnelle de 6000€
                          </p>
                        </div>

                        {/* <span className="parcours-chrono-exp">Départ 24 Juin</span> */}

                      </li>

                      <div className="parcours-list-trait"></div>

                      <li className="parcours-chronologie-li">

                          <div className="parcours-chronologie-li-header">

                            <FontAwesomeIcon icon={faGraduationCap} className="parcours-chrono-titleIcon" />
                            <div>
                              <span className="parcours-chrono-date">2023</span>
                              <span className="parcours-chrono-title">Titre RNCP &quot;Développeur web et web mobile&quot;</span>
                            </div>

                          </div>

                          <div>
                            <p className="parcours-chronologie-li-description">
                                Symfony, Design Pattern MCV, POO, Responsiv Design, SEO, UX
                            </p>
                          </div>

                        <span className="parcours-chrono-exp">
                          <span className="parcours-chrono-exp-strong">Stage</span> chez Hoplunch (Migration PHP vers Symfony)
                        </span>

                      </li>

                      <div className="parcours-list-trait"></div>

                      <li className="parcours-chronologie-li li-widthMobile-prevLast">

                          <div className="parcours-chronologie-li-header">

                            <FontAwesomeIcon icon={faGraduationCap} className="parcours-chrono-titleIcon" />
                            <div>
                              <span className="parcours-chrono-date">2020-2022</span>
                              <span className="parcours-chrono-title">BTS SIO option SLAM</span>
                            </div>

                          </div>

                          <div>
                            <p className="parcours-chronologie-li-description">
                                MCD, PHP, Javascript
                            </p>
                          </div>


                        <span className="parcours-chrono-exp">
                          <span className="parcours-chrono-exp-strong">Alternance</span> chez Europe Tech Group (Hotline, Migration ERP Microsoft Navision)
                        </span>

                      </li>


                      {/* Service civique (Desktop) */}
                      {!isMobile && (
                          <>
                          
                            <div className="parcours-list-trait"></div>

                            <li className="parcours-chronologie-li li-widthMobile-last">
                              <div className="parcours-chronologie-li-header">
                                <span>
                                  <span className="parcours-chrono-date">2019</span>
                                  <span className="parcours-chrono-title">Service Civique &quot;Médiateur numérique&quot;</span>
                                </span>
                              </div>
                              <span className="parcours-chrono-exp">Centre social & culturel l&apos;Éscale</span>

                            </li>
                      
                          </>
                      )}


                    </ul >


                    {/* CV incrusté (mobile) */}
                    {isMobile && (

                      <Draggable>

                        <div className="draggable-transition">

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
                            <FontAwesomeIcon icon={faFileArrowDown} className="cv-pdf-dlIcon" />

                          </div>

                          </div>
                      </Draggable>

                    )}



                  </div>

                      
                  <Skills />

              </div>




              {/* CV (desktop) */}
              {!isMobile && (

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
                  <FontAwesomeIcon icon={faFileArrowDown} className="cv-pdf-dlIcon" />

                </div>
              )}



            </div>        

        </section>

      </main>
    

    </>

  );
}
