"use client";
import { useEffect, useState } from "react";



// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};





export default function Loisirs() {

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
      


        {/* Page 4: Photographie, animations */}
        <section className="section page4" id="home-scroll-hobbies">

        </section>


    </main>
  );
}
