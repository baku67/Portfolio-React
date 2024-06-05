"use client";
import { useEffect, useState } from "react";

import Image from "next/image";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning, faMagnifyingGlass, faGraduationCap, faEye } from "@fortawesome/free-solid-svg-icons";

import { faHtml5, faCss3, faJs, faReact, faPhp, faSymfony } from "@fortawesome/free-brands-svg-icons";


import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Skills } from "/src/app/Components/CvPage/Skills";
import PageTitleNav from "../Components/PageTitleNav";
import { NavBar } from "../Components/NavBar";

// import Draggable from 'react-draggable';


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};




// TODO: modifier pour lecteur pdf ou ouverture nouvel onglet 
const openPdf = () => {
  const link = document.createElement('a');
  link.href = '/CV_BasileKuntz_2.pdf'; 
  // link.download = 'CV_BasileKuntz_2.pdf'; 
  link.target = '_blank';

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


  // Anims fadeOut (du main pour l'instant) lors des clicks sur liens NavBar
  const [navClickFadeOut, setNavClickFadeOut] = useState(false);
  const toggleNavClickFadeOut = () => {
    setNavClickFadeOut(!navClickFadeOut);
  }




  // Hovers PDF desktop:
  const [isPdfHovered, setPdfHovered] = useState(false);
  const handlePdfEnter = () => {
    setPdfHovered(true);
  } 
  const handlePdfLeave = () => {
    setPdfHovered(false);
  }


  
  return (

    <>

      <NavBar isNavActive={isNavActive} toggleNav={toggleNav} currentActive={"parcours"} isMobile={isMobile} toggleNavClickFadeOut={toggleNavClickFadeOut} />

      <main 
        className={`main ${navClickFadeOut ? "fadeOut" : ""}`}
        style={{filter: isNavActive ? "brightness(0.5) blur(1px)" : ""}}
        onClick={handleClickOutsideNav}
      >




        {/* Cube html*/}
        <div class="containerCube containerCube-html">
          <div class="cube cube-html">
            <div class="face top"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon-cube" style={{color: "#ef6a32"}} /></div>
          </div>
        </div>

        {/* Cube CSS */}
        <div class="containerCube containerCube-css">
          <div class="cube cube-css">
            <div class="face top"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon-cube" style={{color: "#3bacdd"}} /></div>
          </div>
        </div>

        {/* Cube JS */}
        <div class="containerCube containerCube-js">
          <div class="cube cube-js">
            <div class="face top"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faJs} className="skill-Fa-Icon-cube" style={{color: "#f7e02a"}} /></div>
          </div>
        </div>

        {/* Cube React */}
        <div class="containerCube containerCube-react">
          <div class="cube cube-react">
            <div class="face top"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faReact} className="skill-Fa-Icon-cube" style={{color: "#21ddff"}} /></div>
          </div>
        </div>

        {/* Cube PHP */}
        <div class="containerCube containerCube-php">
          <div class="cube cube-php">
            <div class="face top"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon-cube" style={{color: "#7b7fb6"}} /></div>
          </div>
        </div>

        {/* Cube Symfony */}
        <div class="containerCube containerCube-sf">
          <div class="cube cube-sf">
            <div class="face top"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
            <div class="face bottom"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
            <div class="face left"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
            <div class="face right"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
            <div class="face front"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
            <div class="face back"><FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon-cube" style={{color: "#ffffff"}} /></div>
          </div>
        </div>




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


              {/* <LogoCube/> */}


              <div className="parcours-main">

                  <div className="parcours-chronologie">


                    <Image
                      src="/calepin-arceaux.png"
                      fill={true}
                      className="calepin-decoImg"
                      alt="calepin decoration"
                    />

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

                        <div 
                          className="cv-pdf-wrapper" 
                          onMouseEnter={handlePdfEnter} 
                          onMouseLeave={handlePdfLeave} 
                          style={{transform: isPdfHovered ? "rotate(13deg)" : "rotate(11deg)"}}
                        >

                          <Image
                            src="/bulle-photoCv.png"
                            width={100}
                            height={100}
                            className="bullePhotoCv"
                            alt="bulle photo CV"
                          />

                          <Image 
                            src="/CV_BasileKuntz_noPhoto.png" 
                            fill={true}
                            alt="CV de Basile Kuntz"
                            onClick={openPdf} 
                            className="cv-pdf"
                          />
                          
                          {/* Icone: */}
                          <FontAwesomeIcon icon={faEye} className="cv-pdf-dlIcon" onClick={openPdf} />

                        </div>

                    )}



                  </div>

                      
                  {/* <Skills /> */}

              </div>




              {/* CV (desktop) */}
              {!isMobile && (

                <div 
                  className="cv-pdf-wrapper" 
                  onMouseEnter={handlePdfEnter} 
                  onMouseLeave={handlePdfLeave} 
                  style={{transform: isPdfHovered ? "rotate(12deg)" : "rotate(11deg)"}} 
                >

                  <Image
                    src="/bulle-photoCv.png"
                    width={100}
                    height={100}
                    className="bullePhotoCv"
                    alt="bulle photo CV"
                  />

                  <Image 
                    src="/CV_BasileKuntz_noPhoto.png" 
                    fill={true}
                    alt="CV de Basile Kuntz"
                    onClick={openPdf} 
                    className="cv-pdf"
                    style={{opacity: isPdfHovered ? "0.6" : "1"}}
                  />


                  {/* Icone hover: */}
                  <FontAwesomeIcon icon={faEye} className="cv-pdf-dlIcon-desktop" onClick={openPdf} style={{opacity: isPdfHovered ? "1" : "0"}} />

                </div>
              )}



            </div>        

        </section>

      </main>
    

    </>

  );
}
