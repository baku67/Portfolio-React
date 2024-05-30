import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse, faPersonRunning, faLightbulb, faOtter, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';



export function NavBar({isNavActive, toggleNav, currentActive, isMobile}) {


    // Délai avant click redirection pour anims fadeOut
    const [isFadingOut, setIsFadingOut] = useState(false);
    const router = useRouter();
    const handleClickLink = (event, href) => {
        event.preventDefault();
        setIsFadingOut(true);
        setTimeout(() => {
            router.push(href);
        }, 500); 
    }


    return (
        <>
            <div 
                className={`navBar ${isNavActive ? 'activeNav' : ''}`}
            >


                {/* Bg image */}
                <Image src={"/wood-bg.jpeg"} fill={true} className="navBar-bg" />



                {/* Shape top-left */}
                {/* <div className="navBar-shape-topLeft"></div> */}


                {/* Plant, Home, CloseBtn */}
                <div className="navBar-topLine">

                    <Link href="/">
                        <Image src={"/plant-1-min.png"} width={isMobile ? 130 : 160} height={isMobile ? 130 : 160} className="navBar-plant" />
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

                        <Link onClick={(event) => handleClickLink(event, "/parcours")} href={"/parcours"} >
                            <li className={currentActive === 'parcours' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faPersonRunning} className="navBar-li-fa" />
                                <span className="navBar-li-span">Parcours</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}
                        
                        <Link onClick={(event) => handleClickLink(event, "/projets")} href={"/projets"} >
                            <li className={currentActive === 'projets' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faLightbulb} className="navBar-li-fa" />
                                <span className="navBar-li-span">Projets</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}

                        <Link onClick={(event) => handleClickLink(event, "/loisirs")} href={"/loisirs"} >
                            <li className={currentActive === 'loisirs' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faOtter} className="navBar-li-fa" />
                                <span className="navBar-li-span">Loisirs</span>
                            </li>
                        </Link>

                        {/* <div className="navBar-trait"></div> */}
                        
                        <Link onClick={(event) => handleClickLink(event, "/contact")} href={"/contact"} >
                            <li className={currentActive === 'contact' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faEnvelopeOpenText} className="navBar-li-fa" />
                                <span className="navBar-li-span">Contact</span>
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>

        </>
    )
}