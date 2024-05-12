"use client";
import { useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { Socials } from "./Components/Socials";
import { ContactForm } from './Components/ContactForm';
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { ProjectPage } from "./Components/ProjectPage";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  
  useEffect(() => {

    // Fonts:
    // Dynamic import for webfontloader (fix pb SSR)
    import('webfontloader').then((WebFontLoader) => {
      WebFontLoader.load({
        google: {
          families: ['Julius Sans One', 'Nunito']
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

        {/* Photo, intro + Langages (FA couleurs ?), navigation, alerte recherche d'alternance */}
        {/* Poissons que ici ? juste raie ? */}

        {/* Header (Photo + HeaderText) */}
        <Header />
        
      </section>





      {/* Page 2: Parcours */}
      <section className="section page2">

        {/* Composant dl CV (FA) */}

        {/* Composant Expériences (gros bloc) */}
        {/* Composant Formations (gros bloc) */}

        {/* Composant Loisirs et Outils (petits blocs) */}
        
      </section>





      {/* Page 3: Projets */}
      <section className="section page3">

        <ProjectPage />

      </section>





      {/* Page 4: Photographie, animations */}
      <section className="section page4">

      
      </section>





      {/* Page 5: Contact */}
      <section className="section page5">

        {/* Shapes */}
        <div className="shapeProject1" style={{backgroundColor: "var(--primary-cyan)"}}></div>
        <div className="shapeProject2" style={{backgroundColor: "var(--primary-cyan)"}}></div>

        {/* Icone Page (top-right) */}
        <FontAwesomeIcon icon={faEnvelope} className="contactPage-icon" />

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
          <Socials />
        </div>

        <Footer />
      
      </section>

    </main>
  );
}
