import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse, faPersonRunning, faLightbulb, faOtter, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';



export function NavBar({isNavActive, toggleNav, currentActive}) {


    return (
        <>
            <div 
                className={`navBar ${isNavActive ? 'activeNav' : ''}`}
            >

                <div className="navBar-topLine">

                    <Link href="/">
                        <FontAwesomeIcon icon={faHouse} className="navBar-homeIcon" />
                    </Link>

                    <span className="navBar-topLine-exitBtn" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                </div>



                <div className="navBar-list-wrapper">

                    <ul className="navBar-list-ul">

                        <Link href="/parcours">
                            <li className={currentActive === 'parcours' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faPersonRunning} className="navBar-li-fa" />
                                <span className="navBar-li-span">Parcours</span>
                            </li>
                        </Link>
                        
                        <Link href="/projets">
                            <li className={currentActive === 'projets' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faLightbulb} className="navBar-li-fa" />
                                <span className="navBar-li-span">Projets</span>
                            </li>
                        </Link>

                        <Link href="/loisirs">
                            <li className={currentActive === 'loisirs' ? "navBar-li-active" : ""}>
                                <FontAwesomeIcon icon={faOtter} className="navBar-li-fa" />
                                <span className="navBar-li-span">Loisirs</span>
                            </li>
                        </Link>
                        
                        <Link href="/contact">
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