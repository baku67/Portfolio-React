"use client"
import { useEffect, useState } from "react";

import Image from "next/image";

import { NavBar } from "../Components/NavBar";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Socials } from "/src/app/Components/ContactPage/Socials";
import { ContactForm } from '/src/app/Components/ContactPage/ContactForm';
import { Footer } from "/src/app/Components/ContactPage/Footer";
import PageTitleNav from "../Components/PageTitleNav";


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};






export default function Contact() {

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





  
  // Click toggle Nav (isNavActive)
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



  return (

    <>

      <NavBar isNavActive={isNavActive} toggleNav={toggleNav} currentActive={"contact"} isMobile={isMobile} toggleNavClickFadeOut={toggleNavClickFadeOut} />

    
      <main 
        className={`main ${navClickFadeOut ? "fadeOut" : ""}`}
        style={{filter: isNavActive ? "brightness(0.5) blur(1px)" : ""}}
        onClick={handleClickOutsideNav}
      >

        {/* Page 5: Contact */}
        <section className="section page5" id="home-scroll-contact">


          {/* <div className="scrollMobile"> */}

            {/* Icone Page (top-right) */}
            <FontAwesomeIcon icon={faEnvelope} className="pageIcon" />


            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />


            <PageTitleNav 
              title={"Contact"} 
              onClickNav={toggleNav}
            />


            <div className="contactMain">
              <ContactForm />
              <Socials isMobile={isMobile} />
            </div>



            <Footer />


            {/* </div> */}

        </section>




      </main>

    
    </>

  );
}
