"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Image from "next/image";

import { Shape1 } from "../Components/Shapes/Shape1";
import { Shape2 } from "../Components/Shapes/Shape2";
import PageTitleNav from "../Components/PageTitleNav";


// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};


const images = [
  {
    original: "/gallery/1.jpg",
    thumbnail: "/gallery/previews/1_preview.jpg",
  },
  {
    original: "/gallery/2.jpg",
    thumbnail: "/gallery/previews/2_preview.jpg",
  },
  {
    original: "/Gallery/3.jpg",
    thumbnail: "/gallery/previews/3_preview.jpg",
  },
  {
    original: "/gallery/4.jpg",
    thumbnail: "/gallery/previews/4_preview.jpg",
  },
  {
    original: "/gallery/5.jpg",
    thumbnail: "/gallery/previews/5_preview.jpg",
  },
  {
    original: "/Gallery/6.jpg",
    thumbnail: "/gallery/previews/6_preview.jpg",
  },
  {
    original: "/gallery/7.jpg",
    thumbnail: "/gallery/previews/7_preview.jpg",
  },
  {
    original: "/gallery/8.jpg",
    thumbnail: "/gallery/previews/8_preview.jpg",
  },
  {
    original: "/Gallery/9.jpg",
    thumbnail: "/gallery/previews/9_preview.jpg",
  },
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/previews/10_preview.jpg",
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/previews/11_preview.jpg",
  },
  {
    original: "/Gallery/12.jpg",
    thumbnail: "/gallery/previews/12_preview.jpg",
  },
  {
    original: "/gallery/13.jpg",
    thumbnail: "/gallery/previews/13_preview.jpg",
  },
  {
    original: "/gallery/14.jpg",
    thumbnail: "/gallery/previews/14_preview.jpg",
  },
  {
    original: "/Gallery/15.jpg",
    thumbnail: "/gallery/previews/15_preview.jpg",
  },
  {
    original: "/gallery/16.jpg",
    thumbnail: "/gallery/previews/16_preview.jpg",
  },
  {
    original: "/gallery/17.jpg",
    thumbnail: "/gallery/previews/17_preview.jpg",
  },
  {
    original: "/Gallery/18.jpg",
    thumbnail: "/gallery/previews/18_preview.jpg",
  },
  {
    original: "/gallery/19.jpg",
    thumbnail: "/gallery/previews/19_preview.jpg",
  },
  {
    original: "/gallery/20.jpg",
    thumbnail: "/gallery/previews/20_preview.jpg",
  },
  {
    original: "/Gallery/21.jpg",
    thumbnail: "/gallery/previews/21_preview.jpg",
  },
  {
    original: "/gallery/22.jpg",
    thumbnail: "/gallery/previews/22_preview.jpg",
  },
  {
    original: "/gallery/23.jpg",
    thumbnail: "/gallery/previews/23_preview.jpg",
  },
  {
    original: "/Gallery/24.jpg",
    thumbnail: "/gallery/previews/24_preview.jpg",
  },
  {
    original: "/gallery/25.jpg",
    thumbnail: "/gallery/previews/25_preview.jpg",
  },
  {
    original: "/gallery/26.jpg",
    thumbnail: "/gallery/previews/26_preview.jpg",
  },
  {
    original: "/Gallery/27.jpg",
    thumbnail: "/gallery/previews/27_preview.jpg",
  },
  {
    original: "/gallery/28.jpg",
    thumbnail: "/gallery/previews/28_preview.jpg",
  },
  {
    original: "/gallery/29.jpg",
    thumbnail: "/gallery/previews/29_preview.jpg",
  },
  {
    original: "/Gallery/30.jpg",
    thumbnail: "/gallery/previews/30_preview.jpg",
  },
  {
    original: "/gallery/31.jpg",
    thumbnail: "/gallery/previews/31_preview.jpg",
  },
  {
    original: "/gallery/32.jpg",
    thumbnail: "/gallery/previews/32_preview.jpg",
  },
  {
    original: "/Gallery/33.jpg",
    thumbnail: "/gallery/previews/33_preview.jpg",
  },
  {
    original: "/gallery/34.jpg",
    thumbnail: "/gallery/previews/34_preview.jpg",
  },
  {
    original: "/gallery/35.jpg",
    thumbnail: "/gallery/previews/35_preview.jpg",
  },
  {
    original: "/Gallery/36.jpg",
    thumbnail: "/gallery/previews/36_preview.jpg",
  },
  {
    original: "/gallery/37.jpg",
    thumbnail: "/gallery/previews/37_preview.jpg",
  },
  {
    original: "/gallery/38.jpg",
    thumbnail: "/gallery/previews/38_preview.jpg",
  },
  {
    original: "/Gallery/39.jpg",
    thumbnail: "/gallery/previews/39_preview.jpg",
  },
  {
    original: "/gallery/40.jpg",
    thumbnail: "/gallery/previews/40_preview.jpg",
  },
  {
    original: "/gallery/41.jpg",
    thumbnail: "/gallery/previews/41_preview.jpg",
  },
  {
    original: "/Gallery/42.jpg",
    thumbnail: "/gallery/previews/42_preview.jpg",
  },
  {
    original: "/gallery/43.jpg",
    thumbnail: "/gallery/previews/43_preview.jpg",
  },
  {
    original: "/Gallery/44.jpg",
    thumbnail: "/gallery/previews/44_preview.jpg",
  },
  {
    original: "/gallery/45.jpg",
    thumbnail: "/gallery/previews/45_preview.jpg",
  },
  {
    original: "/gallery/46.jpg",
    thumbnail: "/gallery/previews/46_preview.jpg",
  },
  {
    original: "/Gallery/47.jpg",
    thumbnail: "/gallery/previews/47_preview.jpg",
  },
  {
    original: "/gallery/48.jpg",
    thumbnail: "/gallery/previews/48_preview.jpg",
  },
  {
    original: "/gallery/49.jpg",
    thumbnail: "/gallery/previews/49_preview.jpg",
  },
  {
    original: "/Gallery/50.jpg",
    thumbnail: "/gallery/previews/50_preview.jpg",
  },
  {
    original: "/gallery/51.jpg",
    thumbnail: "/gallery/previews/51_preview.jpg",
  },
  {
    original: "/gallery/52.jpg",
    thumbnail: "/gallery/previews/52_preview.jpg",
  },
  {
    original: "/Gallery/53.jpg",
    thumbnail: "/gallery/previews/53_preview.jpg",
  },
  {
    original: "/gallery/54.jpg",
    thumbnail: "/gallery/previews/54_preview.jpg",
  },
  {
    original: "/gallery/55.jpg",
    thumbnail: "/gallery/previews/55_preview.jpg",
  },
  {
    original: "/Gallery/56.jpg",
    thumbnail: "/gallery/previews/56_preview.jpg",
  },
  {
    original: "/Gallery/57.jpg",
    thumbnail: "/gallery/previews/57_preview.jpg",
  },


];





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



          <div className="loisirs-div scrollMobile">


            {/* Background image wood */}
            <Image 
                src="/wood-bg.jpeg"
                fill={true}
                style={{opacity: "0.7", zIndex:"0"}}
            />


            {/* Icone Page (top-right) */}
            <FontAwesomeIcon icon={faOtter} className="pageIcon" />

            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />
            {/* <Image 
                  src={"/aquarium-animation.webp"}
                  width={isMobile ? 320 : 600}
                  height={isMobile ? 320 : 600}
                  className="aquarium-shape"
            /> */}



            <PageTitleNav title={"Loisirs"} />


            
            {!isMobile ? (

              <>
                {/* Aquarium + Masque (Desktop) */}
                <div className="aquariumWrapper">
                  <div className="aquariumDiv">
                    <Image 
                      src={"/aquarium-cropped.png"}
                      width={350}
                      height={350}
                      className="aquariumPng"
                    />
                  </div>

                  {/* Masque de plongée: */}
                  <Image 
                    src={"/diving-mask.png"}
                    width={230}
                    height={230}
                    className="divingMask"
                  />
                </div>
              </>

            ) : (

              <>
                  {/* Juste Masque (mobile) */}
                  <Image 
                    src={"/diving-mask.png"}
                    width={90}
                    height={90}
                    className="divingMask"
                  />
              </>

            )}
            





            <div className="hobbies-main">

              <div className="galleryDiv">
                <span>Photographie</span>
                <ImageGallery items={images} thumbnailPosition={"bottom"} autoPlay={"true"} slideDuration={500} slideInterval={4000} />
              </div>

              <div className="hobbies-list">
                <ul>
                  <li>Plongée sous-marine</li>
                  <li>Photographie macroscopique</li>
                  <li>Dessin</li>
                  <li>Découverte de jeux vidéo</li>
                </ul>
              </div>

            </div>


          </div>


            

        </section>


    </main>
  );
}
