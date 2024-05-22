"use client"
import { useEffect, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPersonRunning, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Shape1 } from "/src/app/Components/Shapes/Shape1";
import { Shape2 } from "/src/app/Components/Shapes/Shape2";
import { Socials } from "/src/app/Components/ContactPage/Socials";
import { ContactForm } from '/src/app/Components/ContactPage/ContactForm';
import { Footer } from "/src/app/Components/ContactPage/Footer";


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






  return (

    <main className="main">


      {/* Page 5: Contact */}
      <section className="section page5" id="home-scroll-contact">

        {/* Image fond */}
        <Image 
            // src="/plant-bg-min.png"
            src="/wood-bg.jpeg"
            fill={true}
            style={{opacity: "0.7", zIndex:"0"}}
        />

        {/* Icone Page (top-right) */}
        <FontAwesomeIcon icon={faEnvelope} className="pageIcon" />

        {/* Shapes neutres(cyan) */}
        <Shape1 />
        <Shape2 />

        {/* Header */}
        <div className="projectPageHeader">
            <h2 className="titleSection" style={{marginBottom:"0.4em"}}>
                <FontAwesomeIcon icon={faChevronLeft} className="faIcon-chevron" /> 
                <span style={{margin:"0px 15px"}}>Contact</span>
                <span className="slash">/</span>
                <FontAwesomeIcon icon={faChevronRight} className="faIcon-chevron" /> 
            </h2>
        </div>

        <div className="contactMain">
          <ContactForm />
          <Socials isMobile={isMobile} />
        </div>

        <Footer />
      
      </section>


    </main>
  );
}
