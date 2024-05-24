"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import { Shape1 } from "../Components/Shapes/Shape1";
import { Shape2 } from "../Components/Shapes/Shape2";
import PageTitleNav from "../Components/PageTitleNav";


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


            {/* Background image wood */}
            <Image 
                src="/wood-bg.jpeg"
                fill={true}
                style={{opacity: "0.7", zIndex:"0"}}
            />



            {/* Icone Page (top-right) */}
            {/* <FontAwesomeIcon icon={faPersonRunning} className="pageIcon" /> */}
            <FontAwesomeIcon icon={faOtter} className="pageIcon" />

            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />


            <PageTitleNav title={"Loisirs"} />

        </section>


    </main>
  );
}
