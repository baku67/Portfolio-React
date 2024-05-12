"use client";
import { useEffect } from "react";
import WebFont from "webfontloader";
import { Header } from "./Components/Header";
import { ProjectPage } from "./Components/ProjectPage";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  // Fonts:
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Julius Sans One', 'Nunito']
        }
    });
  }, []);



  // Scroll sections smooth
  useEffect(() => {

    if (typeof window !== 'undefined') {

      // AOS initialization
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

        {/* Photo, intro + compétences, navigation, alerte recherche d'alternance */}
        {/* Poissons que ici */}

        {/* Header (Photo + HeaderText) */}
        <Header />

        {/* Composant sideNav */}
        
      </section>


      {/* Page 2: Parcours */}
      <section className="section page2">


        {/* Composant sideNav */}
        
      </section>


      {/* Page 3: Projets */}
      <section className="section page3">

        {/* Composants iframes */}
        <ProjectPage />

        {/* Composant sideNav */}
      
      </section>


      {/* Page 4: Photographie, animations */}
      <section className="section page4">


        {/* Composant sideNav */}
      
      </section>

    </main>
  );
}
