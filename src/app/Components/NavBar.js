import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse, faPersonRunning, faLightbulb, faOtter, faEnvelope, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { SmartphoneNav } from './SmartphoneNav';



export function NavBar({isNavActive, toggleNav, currentActive, isMobile, toggleNavClickFadeOut}) {


    // Délai avant click redirection pour anims fadeOut
    const [isFadingOut, setIsFadingOut] = useState(false);
    const router = useRouter();
    const handleClickLink = (event, href) => {
        event.preventDefault();
        setIsFadingOut(true);

        // Lors du click Links on toggleNav false
        toggleNav();

        toggleNavClickFadeOut();

        setTimeout(() => {
            router.push(href);
        }, 500); 
    }



    // Hovers HomeIcon = plant mvmt (Desktop)
    const [isHomeIconHovered, setIsHomeIconHovered] = useState(false);
    const homeIconEnter = () => {
        if (!isMobile) {
            setIsHomeIconHovered(true);
        }
    }    
    const homeIconLeave = () => {
        if (!isMobile) {
            setIsHomeIconHovered(false);
        }
    }   





    // Hovers Nav links:
    const [isParcoursNavHovered, setIsParcoursNavHovered] = useState(false);
    const handleParcoursNavEnter = () => {
        setIsParcoursNavHovered(true)
    }
    const handleParcoursNavLeave = () => {
        setIsParcoursNavHovered(false)
    }

    const [isProjetsNavHovered, setIsProjetsNavHovered] = useState(false);
    const handleProjetsNavEnter = () => {
        setIsProjetsNavHovered(true)
    }
    const handleProjetsNavLeave = () => {
        setIsProjetsNavHovered(false)
    }

    const [isLoisirsNavHovered, setIsLoisirsNavHovered] = useState(false);
    const handleLoisirsNavEnter = () => {
        setIsLoisirsNavHovered(true)
    }
    const handleLoisirsNavLeave = () => {
        setIsLoisirsNavHovered(false)
    }

    const [isContactNavHovered, setIsContactNavHovered] = useState(false);
    const handleContactNavEnter = () => {
        setIsContactNavHovered(true)
    }
    const handleContactNavLeave = () => {
        setIsContactNavHovered(false)
    }


    const navIconStyleHover = () => {

    }


    useEffect(() => {
        import('webfontloader').then((WebFontLoader) => {
            WebFontLoader.load({
            google: {
                families: ['Karla:200']
            }
            });
        });
    });
  



    return (
        <>
            <div 
                className={`navBar ${isNavActive ? 'activeNav' : ''}`}
            >


                {/* Bg image */}
                <Image src={"/wood-bg.jpeg"} fill={true} className="navBar-bg" />



                
                {/* Smartphone (mobile?) */}

                



                {/* Shape top-left */}
                {/* <div className="navBar-shape-topLeft"></div> */}


                {/* Plant, Home, CloseBtn */}
                <div className="navBar-topLine">

                    <Link onClick={(event) => handleClickLink(event, "/")} href={"/"} onMouseEnter={homeIconEnter} onMouseLeave={homeIconLeave}>
                        <Image src={"/plant-1-min.png"} width={isMobile ? 130 : 160} height={isMobile ? 130 : 160} className="navBar-plant" style={{transform: isHomeIconHovered ? "scale(1.05)" :"" }} />
                        <FontAwesomeIcon icon={faHouse} className="navBar-homeIcon" />
                    </Link>

                    <span className="navBar-topLine-exitBtn" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>


                {/* Trait */}
                <div className="navBar-trait"></div>



                <div className="navBar-list-wrapper">

                    <ul className="navBar-list-ul">

                        {/* <div className="navBar-trait"></div> */}

                        <Link onClick={(event) => handleClickLink(event, "/parcours")} href={"/parcours"} onMouseEnter={handleParcoursNavEnter} onMouseLeave={handleParcoursNavLeave}>
                            <li className={currentActive === 'parcours' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon 
                                    icon={faPersonRunning} 
                                    className="navBar-li-fa" 
                                    style={{
                                        transform: isParcoursNavHovered 
                                        ? (currentActive === 'parcours' 
                                            // Hover si active
                                            ? "scale(1.9) rotate(348deg)" 
                                            : "scale(1.3) rotate(-8deg)"
                                            ) 
                                            : ""
                                    }} 
                                />
                                <span className="navBar-li-span">Parcours</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}
                        
                        <Link onClick={(event) => handleClickLink(event, "/projets")} href={"/projets"} onMouseEnter={handleProjetsNavEnter} onMouseLeave={handleProjetsNavLeave}>
                            <li className={currentActive === 'projets' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon 
                                    icon={faLightbulb} 
                                    className="navBar-li-fa" 
                                    style={{
                                        transform: isProjetsNavHovered 
                                        ? (currentActive === 'projets' 
                                            // Hover si active
                                            ? "scale(1.9) rotate(348deg)" 
                                            : "scale(1.3) rotate(-8deg)"
                                            ) 
                                            : ""
                                    }} 
                                />
                                <span className="navBar-li-span">Projets</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}

                        <Link onClick={(event) => handleClickLink(event, "/loisirs")} href={"/loisirs"} onMouseEnter={handleLoisirsNavEnter} onMouseLeave={handleLoisirsNavLeave}>
                            <li className={currentActive === 'loisirs' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon 
                                    icon={faOtter} 
                                    className="navBar-li-fa" 
                                    style={{
                                        transform: isLoisirsNavHovered 
                                        ? (currentActive === 'loisirs' 
                                            // Hover si active
                                            ? "scale(1.9) rotate(348deg)" 
                                            : "scale(1.3) rotate(-8deg)"
                                            ) 
                                            : ""
                                    }}                                 />
                                <span className="navBar-li-span">Loisirs</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}
                        
                        <Link onClick={(event) => handleClickLink(event, "/contact")} href={"/contact"} onMouseEnter={handleContactNavEnter} onMouseLeave={handleContactNavLeave}>
                            <li className={currentActive === 'contact' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon 
                                    icon={faEnvelopeOpenText} 
                                    className="navBar-li-fa" 
                                    style={{
                                        transform: isContactNavHovered 
                                        ? (currentActive === 'contact' 
                                            // Hover si active
                                            ? "scale(1.9) rotate(348deg)" 
                                            : "scale(1.3) rotate(-8deg)"
                                            ) 
                                            : ""
                                    }}                                  />
                                <span className="navBar-li-span">Contact</span>
                            </li>
                        </Link>

                    </ul>
                </div>



                <SmartphoneNav isMobile={isMobile} isFadingOut={isFadingOut} />




            </div>

        </>
    )
}