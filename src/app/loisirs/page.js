"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOtter } from "@fortawesome/free-solid-svg-icons";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Image from "next/image";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Shape1 } from "../Components/Shapes/Shape1";
import { Shape2 } from "../Components/Shapes/Shape2";
import PageTitleNav from "../Components/PageTitleNav";
import { NavBar } from "../Components/NavBar";

import { faFishFins, faPencil, faGamepad, faCamera } from "@fortawesome/free-solid-svg-icons";



// Define isMobileDevice function outside of the component
const isMobileDevice = () => {
  return window.matchMedia("(max-width: 767px)").matches;
};



const imagesPhotos = [
  {
    original: "/gallery/1.jpg",
    thumbnail: "/gallery/previews/1_preview.jpg",
    originalAlt: "photo 1",
    thumbnailAlt: "photo 1",
  },
  {
    original: "/gallery/2.jpg",
    thumbnail: "/gallery/previews/2_preview.jpg",
    originalAlt: "photo 2",
    thumbnailAlt: "photo 2",
  },
  {
    original: "/gallery/3.jpg",
    thumbnail: "/gallery/previews/3_preview.jpg",
    originalAlt: "photo 3",
    thumbnailAlt: "photo 3",
  },
  {
    original: "/gallery/4.jpg",
    thumbnail: "/gallery/previews/4_preview.jpg",
    originalAlt: "photo 4",
    thumbnailAlt: "photo 4",
  },
  {
    original: "/gallery/5.jpg",
    thumbnail: "/gallery/previews/5_preview.jpg",
    originalAlt: "photo 5",
    thumbnailAlt: "photo 5",
  },
  {
    original: "/gallery/6.jpg",
    thumbnail: "/gallery/previews/6_preview.jpg",
    originalAlt: "photo 6",
    thumbnailAlt: "photo 6",
  },
  {
    original: "/gallery/7.jpg",
    thumbnail: "/gallery/previews/7_preview.jpg",
    originalAlt: "photo 7",
    thumbnailAlt: "photo 7",
  },
  {
    original: "/gallery/8.jpg",
    thumbnail: "/gallery/previews/8_preview.jpg",
    originalAlt: "photo 8",
    thumbnailAlt: "photo 8",
  },
  {
    original: "/gallery/9.jpg",
    thumbnail: "/gallery/previews/9_preview.jpg",
    originalAlt: "photo 9",
    thumbnailAlt: "photo 9",
  },
  {
    original: "/gallery/10.jpg",
    thumbnail: "/gallery/previews/10_preview.jpg",
    originalAlt: "photo 10",
    thumbnailAlt: "photo 10",
  },
  {
    original: "/gallery/11.jpg",
    thumbnail: "/gallery/previews/11_preview.jpg",
    originalAlt: "photo 11",
    thumbnailAlt: "photo 11",
  },
  {
    original: "/gallery/12.jpg",
    thumbnail: "/gallery/previews/12_preview.jpg",
    originalAlt: "photo 12",
    thumbnailAlt: "photo 12",
  },
  {
    original: "/gallery/13.jpg",
    thumbnail: "/gallery/previews/13_preview.jpg",
    originalAlt: "photo 13",
    thumbnailAlt: "photo 13",
  },
  {
    original: "/gallery/14.jpg",
    thumbnail: "/gallery/previews/14_preview.jpg",
    originalAlt: "photo 14",
    thumbnailAlt: "photo 14",
  },
  {
    original: "/gallery/15.jpg",
    thumbnail: "/gallery/previews/15_preview.jpg",
    originalAlt: "photo 15",
    thumbnailAlt: "photo 15",
  },
  {
    original: "/gallery/16.jpg",
    thumbnail: "/gallery/previews/16_preview.jpg",
    originalAlt: "photo 16",
    thumbnailAlt: "photo 16",
  },
  {
    original: "/gallery/17.jpg",
    thumbnail: "/gallery/previews/17_preview.jpg",
    originalAlt: "photo 17",
    thumbnailAlt: "photo 17",
  },
  {
    original: "/gallery/18.jpg",
    thumbnail: "/gallery/previews/18_preview.jpg",
    originalAlt: "photo 18",
    thumbnailAlt: "photo 18",
  },
  {
    original: "/gallery/19.jpg",
    thumbnail: "/gallery/previews/19_preview.jpg",
    originalAlt: "photo 19",
    thumbnailAlt: "photo 19",
  },
  {
    original: "/gallery/20.jpg",
    thumbnail: "/gallery/previews/20_preview.jpg",
    originalAlt: "photo 20",
    thumbnailAlt: "photo 20",
  },
  {
    original: "/gallery/21.jpg",
    thumbnail: "/gallery/previews/21_preview.jpg",
    originalAlt: "photo 21",
    thumbnailAlt: "photo 21",
  },
  {
    original: "/gallery/22.jpg",
    thumbnail: "/gallery/previews/22_preview.jpg",
    originalAlt: "photo 22",
    thumbnailAlt: "photo 22",
  },
  {
    original: "/gallery/23.jpg",
    thumbnail: "/gallery/previews/23_preview.jpg",
    originalAlt: "photo 23",
    thumbnailAlt: "photo 23",
  },
  {
    original: "/gallery/24.jpg",
    thumbnail: "/gallery/previews/24_preview.jpg",
    originalAlt: "photo 24",
    thumbnailAlt: "photo 24",
  },
  {
    original: "/gallery/25.jpg",
    thumbnail: "/gallery/previews/25_preview.jpg",
    originalAlt: "photo 25",
    thumbnailAlt: "photo 25",
  },
  {
    original: "/gallery/26.jpg",
    thumbnail: "/gallery/previews/26_preview.jpg",
    originalAlt: "photo 26",
    thumbnailAlt: "photo 26",
  },
  {
    original: "/gallery/27.jpg",
    thumbnail: "/gallery/previews/27_preview.jpg",
    originalAlt: "photo 27",
    thumbnailAlt: "photo 27",
  },
  {
    original: "/gallery/28.jpg",
    thumbnail: "/gallery/previews/28_preview.jpg",
    originalAlt: "photo 28",
    thumbnailAlt: "photo 28",
  },
  {
    original: "/gallery/29.jpg",
    thumbnail: "/gallery/previews/29_preview.jpg",
    originalAlt: "photo 29",
    thumbnailAlt: "photo 29",
  },
  {
    original: "/gallery/30.jpg",
    thumbnail: "/gallery/previews/30_preview.jpg",
    originalAlt: "photo 30",
    thumbnailAlt: "photo 30",
  },
  {
    original: "/gallery/31.jpg",
    thumbnail: "/gallery/previews/31_preview.jpg",
    originalAlt: "photo 31",
    thumbnailAlt: "photo 31",
  },
  {
    original: "/gallery/32.jpg",
    thumbnail: "/gallery/previews/32_preview.jpg",
    originalAlt: "photo 32",
    thumbnailAlt: "photo 32",
  },
  {
    original: "/gallery/33.jpg",
    thumbnail: "/gallery/previews/33_preview.jpg",
    originalAlt: "photo 33",
    thumbnailAlt: "photo 33",
  },
  {
    original: "/gallery/34.jpg",
    thumbnail: "/gallery/previews/34_preview.jpg",
    originalAlt: "photo 34",
    thumbnailAlt: "photo 34",
  },
  {
    original: "/gallery/35.jpg",
    thumbnail: "/gallery/previews/35_preview.jpg",
    originalAlt: "photo 35",
    thumbnailAlt: "photo 35",
  },
  {
    original: "/gallery/36.jpg",
    thumbnail: "/gallery/previews/36_preview.jpg",
    originalAlt: "photo 36",
    thumbnailAlt: "photo 36",
  },
  {
    original: "/gallery/37.jpg",
    thumbnail: "/gallery/previews/37_preview.jpg",
    originalAlt: "photo 37",
    thumbnailAlt: "photo 37",
  },
  {
    original: "/gallery/38.jpg",
    thumbnail: "/gallery/previews/38_preview.jpg",
    originalAlt: "photo 38",
    thumbnailAlt: "photo 38",
  },
  {
    original: "/gallery/39.jpg",
    thumbnail: "/gallery/previews/39_preview.jpg",
    originalAlt: "photo 39",
    thumbnailAlt: "photo 39",
  },
  {
    original: "/gallery/40.jpg",
    thumbnail: "/gallery/previews/40_preview.jpg",
    originalAlt: "photo 40",
    thumbnailAlt: "photo 40",
  },
  {
    original: "/gallery/41.jpg",
    thumbnail: "/gallery/previews/41_preview.jpg",
    originalAlt: "photo 41",
    thumbnailAlt: "photo 41",
  },
  {
    original: "/gallery/42.jpg",
    thumbnail: "/gallery/previews/42_preview.jpg",
    originalAlt: "photo 42",
    thumbnailAlt: "photo 42",
  },
  {
    original: "/gallery/43.jpg",
    thumbnail: "/gallery/previews/43_preview.jpg",
    originalAlt: "photo 43",
    thumbnailAlt: "photo 43",
  },
  {
    original: "/gallery/44.jpg",
    thumbnail: "/gallery/previews/44_preview.jpg",
    originalAlt: "photo 44",
    thumbnailAlt: "photo 44",
  },
  {
    original: "/gallery/45.jpg",
    thumbnail: "/gallery/previews/45_preview.jpg",
    originalAlt: "photo 45",
    thumbnailAlt: "photo 45",
  },
  {
    original: "/gallery/46.jpg",
    thumbnail: "/gallery/previews/46_preview.jpg",
    originalAlt: "photo 46",
    thumbnailAlt: "photo 46",
  },
  {
    original: "/gallery/47.jpg",
    thumbnail: "/gallery/previews/47_preview.jpg",
    originalAlt: "photo 47",
    thumbnailAlt: "photo 47",
  },
  {
    original: "/gallery/48.jpg",
    thumbnail: "/gallery/previews/48_preview.jpg",
    originalAlt: "photo 48",
    thumbnailAlt: "photo 48",
  },
  {
    original: "/gallery/49.jpg",
    thumbnail: "/gallery/previews/49_preview.jpg",
    originalAlt: "photo 49",
    thumbnailAlt: "photo 49",
  },
  {
    original: "/gallery/50.jpg",
    thumbnail: "/gallery/previews/50_preview.jpg",
    originalAlt: "photo 50",
    thumbnailAlt: "photo 50",
  },
  {
    original: "/gallery/51.jpg",
    thumbnail: "/gallery/previews/51_preview.jpg",
    originalAlt: "photo 51",
    thumbnailAlt: "photo 51",
  },
  {
    original: "/gallery/52.jpg",
    thumbnail: "/gallery/previews/52_preview.jpg",
    originalAlt: "photo 52",
    thumbnailAlt: "photo 52",
  },
  {
    original: "/gallery/53.jpg",
    thumbnail: "/gallery/previews/53_preview.jpg",
    originalAlt: "photo 53",
    thumbnailAlt: "photo 53",
  },
  {
    original: "/gallery/54.jpg",
    thumbnail: "/gallery/previews/54_preview.jpg",
    originalAlt: "photo 54",
    thumbnailAlt: "photo 54",
  },
  {
    original: "/gallery/55.jpg",
    thumbnail: "/gallery/previews/55_preview.jpg",
    originalAlt: "photo 55",
    thumbnailAlt: "photo 55",
  },
  {
    original: "/gallery/56.jpg",
    thumbnail: "/gallery/previews/56_preview.jpg",
    originalAlt: "photo 56",
    thumbnailAlt: "photo 56",
  },
  {
    original: "/gallery/57.jpg",
    thumbnail: "/gallery/previews/57_preview.jpg",
    originalAlt: "photo 57",
    thumbnailAlt: "photo 57",
  },


];


const imagesAnims = [
  {
    original: "/gallery-anims/les100ciels-anim.webp",
    thumbnail: "/gallery-anims/les100ciels-anim.webp",
    originalAlt: "anim 1",
    thumbnailAlt: "anim 1",
  },
  {
    original: "/gallery-anims/portfolio-anim.webp",
    thumbnail: "/gallery-anims/portfolio-anim.webp",
    originalAlt: "anim 2",
    thumbnailAlt: "anim 2",
  },
  {
    original: "/gallery-anims/portfolio-anim-fish.webp",
    thumbnail: "/gallery-anims/portfolio-anim-fish.webp",
    originalAlt: "anim 3",
    thumbnailAlt: "anim 3",
  },
  {
    original: "/gallery-anims/portfolio-anim-lightbulb-2.webp",
    thumbnail: "/gallery-anims/portfolio-anim-lightbulb-2.webp",
    originalAlt: "anim 4",
    thumbnailAlt: "anim 4",
  },
  {
    original: "/gallery-anims/nuageDeMots-anim.webp",
    thumbnail: "/gallery-anims/nuageDeMots-anim.webp",
    originalAlt: "anim 5",
    thumbnailAlt: "anim 5",
  },
]




  // Preloads et isLoaded
  const preLoadImages = (images, callback) => {
    let loadedCount = 0;
    const totalImages = images.length;
  
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.original;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          callback();
        }
      };
      img.onerror = () => {
        loadedCount += 1;
        if (loadedCount === totalImages) {
          callback();
        }
      };
    });
  };







export default function Loisirs() {


const [isMobile, setIsMobile] = useState(false); // Initialize state with false
  const [switchedGallery, setSwitchedGallery] = useState(false); // false = photos
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavActive, setNavActive] = useState(false);
  const [navClickFadeOut, setNavClickFadeOut] = useState(false);

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

    preLoadImages(imagesPhotos, () => {
      // Petite friction en plus avec le timeOut
      setTimeout(() => {
        setIsLoaded(true);
      }, 200)
      
    });
  }, []);

  const handleSwitchGallery = () => {
    setSwitchedGallery(!switchedGallery);
  };

  const toggleNav = () => setNavActive((prevState) => !prevState);
  const handleClickOutsideNav = () => {
    if (isNavActive) {
      setNavActive(false);
    }
  };
  const toggleNavClickFadeOut = () => {
    setNavClickFadeOut((prevState) => !prevState);
  };

  if (!isLoaded) {
    return (
      <div className="loadingSpinner">            
        <div className="fishLoader-wrapper">
          <Image 
              src={"/fish1_v2.png"}
              width={100}
              height={100}
              className="loisirs-fish1-img-loading"
              alt="poisson"
          />
        </div>
        <span>Loading...</span>
      </div>
    )
  }





  return (

    <>

      <NavBar isNavActive={isNavActive} toggleNav={toggleNav} currentActive={"loisirs"} isMobile={isMobile} toggleNavClickFadeOut={toggleNavClickFadeOut} />


      <main 
        className={`main ${navClickFadeOut ? "fadeOut" : ""}`} 
        style={{filter: isNavActive ? "brightness(0.5) blur(1px)" : ""}}
        onClick={handleClickOutsideNav}
      >



        {/* Page 4: Photographie, animations */}
        <section className="section page4" id="home-scroll-hobbies">

          <div className="loisirs-div scrollMobile">


            {/* Matos de plongée */}
            <Image 
              src={"/scuba-1.png"}
              width={isMobile ? 72 : 210}
              height={isMobile ? 72 : 210}
              className={`scuba-1`}
              alt={"matériel de plongée décoration"}
            />

            {/* Icone Page (top-right) */}
            <FontAwesomeIcon icon={faOtter} className="pageIcon" />

            {/* Shapes neutres(cyan) */}
            <Shape1 />
            <Shape2 />


            <PageTitleNav 
              title={"Loisirs"} 
              onClickNav={toggleNav}
              isMobile={isMobile}
            />
            


            {/* Diving mask */}
            <Image 
              src={"/diving-mask.png"}
              width={isMobile ? 72 : 210}
              height={isMobile ? 72 : 210}
              className="divingMask"
              alt={"masque de plongée"}
            />



            {/* Poisson 1 */}
            <div className="loisirs-fish1">
              <Image 
                  src={"/fish1_v2.png"}
                  width={isMobile ? 50: 100}
                  height={isMobile ? 50 : 100}
                  className="loisirs-fish1-img"
                  alt="poisson"
              />
            </div>


            

            <div className="hobbies-main">

              <div className="galleryDiv">

                <div className="galleryDiv-navDiv">

                  <span 
                    onClick={handleSwitchGallery} 
                    className={`galleryDiv-navSpan galleryDiv-navSpan1 ${switchedGallery ? "" : "galleryDiv-navDiv-active"}`}
                  >
                    Photographie
                  </span>

                  <span 
                    onClick={handleSwitchGallery} 
                    className={`galleryDiv-navSpan galleryDiv-navSpan2 ${switchedGallery ? "galleryDiv-navDiv-active" : ""}`}
                  >
                    Animations
                  </span>
                </div>

                <ImageGallery 
                  items={!switchedGallery ? imagesPhotos : imagesAnims} 
                  thumbnailPosition={"bottom"} 
                  autoPlay={"true"} 
                  slideDuration={500} 
                  slideInterval={4000} 
                />

              </div>

              <div className="hobbies-list">

                <ul>

                  <li>
                    <FontAwesomeIcon icon={faFishFins} className="hobbies-list-icon" />
                    <span>Plongée sous-marine</span>
                  </li>

                  <div className="hobbies-list-trait"></div>

                  <li>
                    <FontAwesomeIcon icon={faCamera} className="hobbies-list-icon" />
                    <span>Photographie macro</span>
                  </li>

                  <div className="hobbies-list-trait"></div>

                  <li>
                    <FontAwesomeIcon icon={faPencil} className="hobbies-list-icon" />
                    <span>Dessin</span>
                  </li>

                  <div className="hobbies-list-trait"></div>

                  <li>
                    <FontAwesomeIcon icon={faGamepad} className="hobbies-list-icon" />
                    <span>Découverte de jeux vidéo</span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}
