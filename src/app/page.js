"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPersonRunning, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Shape1 } from "./Components/Shapes/Shape1";
import { Shape2 } from "./Components/Shapes/Shape2";
import { DownloadCvBtn } from "./Components/CvPage/DownloadCvBtn";
import { Experiences } from "./Components/CvPage/Experiences";
import { Formations } from "./Components/CvPage/Formations";
import { Skills } from "./Components/CvPage/Skills";
import { Tools } from "./Components/CvPage/Tools";
import { Hobbies } from "./Components/CvPage/Hobbies";
import { Socials } from "./Components/ContactPage/Socials";
import { ContactForm } from './Components/ContactPage/ContactForm';
import { Footer } from "./Components/ContactPage/Footer";
import { Wip } from "./Components/HomePage/Wip";
import { Header } from "./Components/HomePage/Header";
import { ProjectPage } from "./Components/ProjectPage/ProjectPage";
import AOS from 'aos';
import 'aos/dist/aos.css';


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




    // Scroll sections smooth AOS (check no SSR)
    if (typeof window !== 'undefined') {

      AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
      });

      // Intersection Observer
      const sections = document.querySelectorAll('.section');
      const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  sections.forEach((section) => {
                      section.classList.remove('active');
                  });
                  entry.target.classList.add('active');
              }
          });
      }, options);

      sections.forEach((section) => {
          observer.observe(section);
      });

      // Custom scrolling behavior
      const handleWheel = (e) => {
          e.preventDefault();
          const delta = e.wheelDelta || -e.deltaY || -e.detail;
          const activeSection = document.querySelector('.section.active');
          let targetSection;

          if (activeSection) {
              if (delta < 0) {
                  targetSection = activeSection.nextElementSibling;
              } else {
                  targetSection = activeSection.previousElementSibling;
              }

              if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
              }
          }
      };

      document.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
          document.removeEventListener('wheel', handleWheel);
          observer.disconnect();
      };

    }

  }, []); 






  return (

    <main className="main">
      

      {/* Page 1: Présentation */}
      <section className="section page1">

        <Wip isMobile={isMobile} />
        
      </section>



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


        {/* GRIIIIIIIIIIIID */}
        <Experiences />
        <Formations />

        <Skills />
        <Tools />

        {/* Symboles plutot que text? */}
        <Hobbies />
        {/* FIN GRIIIIIIID */}


        <DownloadCvBtn isMobile={isMobile} />
        
      </section>




      {/* Page 3: Projets */}
      <section className="section page3" id="home-scroll-project">

        <ProjectPage isMobile={isMobile} />

      </section>



      {/* Page 4: Photographie, animations */}
      <section className="section page4" id="home-scroll-hobbies">

      </section>



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
