"use client";
import { useEffect, useState } from "react";

import { ProjectPage } from "/src/app/Components/ProjectPage/ProjectPage";


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};






export default function Projets() {

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
      

        {/* Page 3: Projets */}
        <section className="section page3" id="home-scroll-project">

          <ProjectPage isMobile={isMobile} />

        </section>


    </main>
  );
}
