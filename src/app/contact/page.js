"use client"
import { useEffect, useState } from "react";

import Image from "next/image";

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






  return (

    <main className="main">


      {/* Page 5: Contact */}
      <section className="section page5" id="home-scroll-contact">


        {/* Image fond */}
        <Image 
            src="/wood-bg.jpeg"
            fill={true}
            style={{opacity: "0.7", zIndex:"0"}}
        />


        {/* Icone Page (top-right) */}
        <FontAwesomeIcon icon={faEnvelope} className="pageIcon" />


        {/* Shapes neutres(cyan) */}
        <Shape1 />
        <Shape2 />



        <PageTitleNav title={"Contact"} />



        <div className="contactMain">
          <ContactForm />
          <Socials isMobile={isMobile} />
        </div>

        <Footer />
      
      </section>


    </main>
  );
}
