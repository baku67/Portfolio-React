import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPersonRunning, faLightbulb, faCamera, faEnvelope, faCheck, faBatteryThreeQuarters, faSignal, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs, faPhp, faSymfony, faReact, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import ReactCurvedText from 'react-curved-text';
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });


import Image from 'next/image'
import Link from 'next/link';

import { useState } from "react";


export function HomePage({isMobile}) {

    // Scroll bouton (hover):
    // const [isScrollHovered, setIsScrollHovered] = useState(false);
    // const handleScrollEnter = () => {
    //     setIsScrollHovered(true);
    // }
    // const handleScrollLeave = () => {
    //     setIsScrollHovered(false);
    // }


    // Phone (skills) hover:
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);
    const handlePhoneEnter = () => {
        setIsPhoneHovered(true);
    }
    const handlePhoneLeave = () => {
        setIsPhoneHovered(false);
    }


    // Projets (hover):
    // const [isProjetHovered, setIsProjetHovered] = useState(false);
    // const handleProjetEnter = () => {
    //     setIsProjetHovered(true);
    // }
    // const handleProjetLeave = () => {
    //     setIsProjetHovered(false);
    // }


    // Cafe (hover) :
    const [isCafeHovered, setIsCafeHovered] = useState(false);
    const handleCafeEnter = () => {
        setIsCafeHovered(true);
    }
    const handleCafeLeave = () => {
        setIsCafeHovered(false);
    }


    // Desktop (hover) & (click):
    const [isMockupDeskHovered, setIsMockupDeskHovered] = useState(false);
    const handleMockupDeskEnter = () => {
        setIsMockupDeskHovered(true);
    }
    const handleMockupDeskLeave = () => {
        setIsMockupDeskHovered(false);
    }
    const [isMockupDeskClicked, setIsMockupDeskClicked] = useState(false);
    const handleMockupDeskClick = () => {
        setIsMockupDeskClicked(!isMockupDeskClicked);
    }


    // Post-it (hover):
    const [isPostItHovered, setIsPostItHovered] = useState(false);
    const handlePostItEnter = () => {
        setIsPostItHovered(true);
    };
    const handlePostItLeave = () => {
        setIsPostItHovered(false);
    };



    // flip Carte de visite: (mobile?)
    const [visitCardFlipped, setVisitCardFlipped] = useState(false);
    // const { transform, opacity } = useSpring({
    //     opacity: visitCardFlipped ? 1 : 0,
    //     transform: `perspective(600px) rotateY(${visitCardFlipped ? 180 : 0}deg)`,
    //     config: { mass: 5, tension: 500, friction: 80, duration: 500 },
    // });

    const handleVisitCardFlip = () => {
        setVisitCardFlipped(!visitCardFlipped);
    };



    return(
        <>

            {/* Shapes */}
            <div className="shapeProject1-accueil"></div>
            <div className="shapeProject2-accueil" style={{
                boxShadow: isCafeHovered ? "0px 0px 50px -10px black" : "0px 0px 0px 0px white",
                transform: isCafeHovered ? "rotate(301deg) translate(-5px, -5px)" : "rotate(301deg) translate(0px, 0px)",
            }}></div>


            {/* Background image wood */}
            <Image 
                // src="/plant-bg-min.png"
                src="/wood-bg.jpeg"
                fill={true}
                style={{opacity: "0.7", zIndex:"0"}}
            />



            {/* Post-it "alternance" */}
            <div 
                className="post-it-container"
                onMouseEnter={handlePostItEnter}
                onMouseLeave={handlePostItLeave}
            >

                {/* Post-it punaise pick (désactivé) */}
                {/* <div 
                    className="post-it-pick"
                    style={{transform: isPostItHovered ? "translateX(-50%) rotate(359deg) translateY(-10px)" : "translateX(-50%) rotate(351deg) translateY(-0px)"}}
                >
                    <div 
                        className="post-it-socle"
                        style={{filter: isPostItHovered ? "drop-shadow(6px 58px 15px black)" : "drop-shadow(6px 40px 10px black)"}}
                    ></div>
                    <div className="post-it-pickTrait"></div>
                </div> */}

                <Image 
                    src="/post-it-1-cropped.png"
                    width={ isMobile ? 195 : 210 }
                    height={ isMobile ? 195 : 210 }
                    className="post-it-img"
                    style={{
                        transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)",
                        filter: isPostItHovered ? "drop-shadow(8px 7px 4px black)" : "drop-shadow(8px 12px 6px black)",
                    }}
                />

                <div className="post-it-textDiv"
                    style={{
                        transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)"
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="post-it-textIcon" />
                    <span className="post-it-textSpan">Alternance <br />&ldquo;Concepteur Développeur d&apos;Applications&ldquo;</span>
                </div>

            </div>



            {/* Plante + fishBowl */}
            <Link href="/loisirs">

                {/* Plante */}
                <div className="plantAccueil-div" style={{width:"fit-content"}}>

                    {/* <Image src="/plant-2.png" width={450} height={450} /> */}
                    <Image src="/plant-1-min.png" width={450} height={450} className="plantAccueil" />

                    <div className="bocal-exterieur">
                        <div className="bocal-ouverture"></div>
                        <div className="bocal-landscape"></div>
                    </div>

                </div>


                {/* Test fish bowl (loisirs) */}
                <div className="fishBowl-div">
                    <Image 
                        src="/fishBowl-rounded2.png" 
                        width={320} 
                        height={320} 
                        style={{transform: "rotate(182deg)", filter:"hue-rotate(334deg)"}}
                        className="fishBowl-img"
                    />
                </div>

            </Link>



            {/* Block Projets (desktop) */}
            {/* <Link href="/projets">

                <div 
                    className="shapeProjet"
                    onMouseEnter={handleProjetEnter}
                    onMouseLeave={handleProjetLeave}
                    style={{boxShadow: isProjetHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white", transform: isProjetHovered ? "rotate(16deg) translateX(-15px)" : "rotate(20deg) translateX(0px)"}}
                >

                    <h2 className="titleShapeProjet" style={{letterSpacing: isProjetHovered ? "2px" : "0px"}}>
                        <FontAwesomeIcon icon={faLightbulb} className="titleShapeProjet-icon" />
                        <span>Projets</span>
                    </h2>

                    <ul className="shapeProjet-fakeUl">
                        <li className="shapeProjet-fakeLi">
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="shapeProjet-icon" />
                                <span className="home-projects home-projects-squadforgeTitle">Squadforge</span>
                            </div>
                            <div className="home-projectsLine"></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="shapeProjet-icon" />
                                <span className="home-projects home-projects-bjjTitle">Backjackjo</span>
                            </div>
                            <div className="home-projectsLine"></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="shapeProjet-icon" />
                                <span className="home-projects home-projects-les100cielsTitle">les100ciels</span>
                            </div>
                            <div className="home-projectsLine"></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <div>
                                <FontAwesomeIcon icon={faCheck} className="shapeProjet-icon" />
                                <span className="home-projects home-projects-terrineTitle">Terrine</span>
                            </div>
                            <div className="home-projectsLine"></div>
                        </li>
                    </ul>

                </div>
            </Link> */}



            {/* Tasse café CSS */}
            <Link href="/contact">
                <div className="tasseCafe" style={{transform: isCafeHovered ? "translate(-8px, 11px)" : "translate(0px, 0px)"}}>

                    {/* https://www.npmjs.com/package/react-curved-text  */}
                    {/* <div 
                        className="tasseCafe-text" 
                        onMouseEnter={handleCafeEnter} 
                        onMouseLeave={handleCafeLeave}
                        style={{}} 
                    >
                        {!isMobile && (
                            <ReactCurvedText
                                width={250}
                                height={115}
                                cx={150}
                                cy={0}
                                rx={100}
                                ry={100}
                                startOffset={30}
                                reversed={false}
                                text="Contact"
                                textProps={{ style: { fontSize: 32 } }}
                                textPathProps={{style : { fill : "white"} }}
                                tspanProps={{"dy": isCafeHovered ? "28" : "25"}}
                                ellipseProps={null}
                                svgProps={null}
                            />
                        )}
                    </div> */}


                    <div className="cup">
                        <div className="reflect" style={{background: isCafeHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.09)", top: isCafeHovered ? "14px" : "19px", left: isCafeHovered ? "15px" : "13px"}}></div>
                        <div 
                            className="handle" 
                            style={{
                                transform: isCafeHovered ? "rotate(266deg)" : "rotate(254deg)",
                                top: isCafeHovered ? "103%" : "100%",
                                left: isCafeHovered ? "50px" : "72px",
                            }}
                        ></div>
                        <div className="plate" style={{boxShadow: isCafeHovered ? "0px 0px 40px -20px white" : "0px 0px 0px 0px white"}}></div>
                    </div>
                </div>
            </Link>



            {/* Smartphone (desktop) */}
            <Link href="/parcours">
                <div 
                    className="portable"
                    onMouseEnter={handlePhoneEnter}
                    onMouseLeave={handlePhoneLeave}
                    style={{ 
                        transform: isPhoneHovered ? "translate(-20px, 0px) rotate(11deg) scale(1.05)" : "rotate(13deg)"
                    }}
                >

                    {/* <span className="portable-text" style={{letterSpacing: isPhoneHovered ? "4px" : "1px"}}>Compétences</span> */}
                    
                    <div className="portable-div" style={{boxShadow: isPhoneHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white"}}>

                        {/* Bouton mockup */}
                        <div className="portable-btnMockup1"></div>
                        <div className="portable-btnMockup2"></div>

                        <div className="portable-screen" style={{backgroundColor: isPhoneHovered ? "#154d68" : "var(--secondary-cyan)"}}>

                            <div className="portable-header">

                                {/* https://www.npmjs.com/package/react-live-clock?activeTab=readme */}
                                <span><LiveClock format={'h:mm'} ticking={true} /></span>

                                <span><FontAwesomeIcon icon={faSignal} /> 82% <FontAwesomeIcon icon={faBatteryThreeQuarters} /></span>

                            </div>

                            <div className="portable-contentWrapper" style={{transform: isPhoneHovered ? "translateX(-50%)" : "translateX(0)"}}>

                                {/* Div grid skills */}
                                <div className="portable-skillGrid">
                                    <div><FontAwesomeIcon icon={faHtml5} className="portable-app app-html" /></div>
                                    <div><FontAwesomeIcon icon={faCss3Alt} className="portable-app app-css" /></div>
                                    <div><FontAwesomeIcon icon={faPhp} className="portable-app app-php" /></div>
                                    <div><FontAwesomeIcon icon={faSymfony} className="portable-app app-sf" /></div>
                                    <div><FontAwesomeIcon icon={faJs} className="portable-app app-js" /></div>
                                    <div><FontAwesomeIcon icon={faReact} className="portable-app app-react" /></div>
                                    {/* Emplacements d'apps vides */}
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    {/* Vscode */}
                                    <div>
                                        <svg fill="#f1b16b" width="36px" height="36px" viewBox="0 0 32 32">
                                            <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
                                        </svg>
                                    </div>
                                    <div><FontAwesomeIcon icon={faGithub} className="portable-app" /></div>
                                </div>

                                <div className="portable-skillGrid2">


                                        {/* <h3 className="portable-skillGrid2-title">Formations</h3>
                                        <ul>
                                            <li className="portable-skillGrid2-li">Titre RNCP &quot;Développeur web et web mobile&quot;</li>
                                            <li className="portable-skillGrid2-li">BTS SIO option SLAM</li>
                                        </ul>
                                        <h3 className="portable-skillGrid2-title">Expériences</h3>
                                        <ul>
                                            <li className="portable-skillGrid2-li">Stage chez Hoplunch</li>
                                            <li className="portable-skillGrid2-li">Alternance BTS (2ans) </li>
                                        </ul> */}
                                        

                                        <Image 
                                            src="/CV_BasileKuntz.png" 
                                            fill={true}
                                            alt="CV de Basile Kuntz"
                                            className="smartphone-cv"
                                        />

                                </div>


                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </Link>



            {/* laptop (mobile) */}
            {isMobile && (

                <div className="accueil-mockup" 
                    onMouseEnter={handleMockupDeskEnter}
                    onMouseLeave={handleMockupDeskLeave}
                    onClick={handleMockupDeskClick}
                >

                    {/* perspective écran */}
                    <div className="accueil-mockup-top-wrapper">
                        <div 
                            className={`accueil-mockup-top ${isMockupDeskClicked ? "accueil-mockup-top-clicked" : ""}`}
                        >
                            {/* screen */}
                            <div className="amt-imgWrapper">
                                <Image 
                                    // src={"/test2.png"}
                                    src={"/demo_short.gif"}
                                    fill={true} 
                                    alt="Portfolio demo" 
                                />
                                {/* Gif demo home avec nav des projets */}
                            </div>
                        </div>
                    </div>

                    {/* Pas de perspective sur le clavier comme il est à plat  */}
                    <div className="accueil-mockup-bottom-wrapper">

                        {/* cable mockup desktop */}
                        {/* <svg className="cableSvg" >
                            <g>
                                <path d="M 0 0 C 15 145 121 22 176 119 C 206 171 323 132 263 52 C 211 -9 114 39 124 122 C 132 187 234 240 359 166 C 451 101 454 150 560 104"/>
                            </g>
                        </svg> */}


                        <div className="accueil-mockup-bottom">
                                {/* Clavier */}
                                <div className="keyboard">
                                    <div className="key">Esc</div>
                                    <div className="key">1</div>
                                    <div className="key">2</div>
                                    <div className="key">3</div>
                                    <div className="key">4</div>
                                    <div className="key">5</div>
                                    <div className="key">6</div>
                                    <div className="key">9</div>
                                    <div className="key">0</div>
                                    <div className="key">Tab</div>
                                    <div className="key">Q</div>
                                    <div className="key">W</div>
                                    <div className="key backspace">backspace</div>
                                    
                                    <div className="key">E</div>
                                    <div className="key">R</div>
                                    <div className="key">T</div>
                                    <div className="key">Y</div>
                                    <div className="key">U</div>
                                    <div className="key">I</div>
                                    <div className="key">O</div>
                                    <div className="key">P</div>
                                    <div className="key">[</div>
                                    <div className="key">]</div>
                                    <div className="key">\</div>
                                    
                                    <div className="key">Caps Lock</div>
                                    <div className="key">A</div>
                                    <div className="key">S</div>
                                    <div className="key">D</div>
                                    <div className="key">F</div>
                                    <div className="key">G</div>
                                    <div className="key">H</div>
                                    <div className="key">J</div>
                                    <div className="key">K</div>
                                    <div className="key">L</div>
                                    <div className="key">;</div>
                                    <div className="key">&apos;</div>
                                    <div className="key">Enter</div>
                                    
                                    <div className="key">Shift</div>
                                    <div className="key">Z</div>
                                    <div className="key">X</div>
                                    <div className="key">C</div>
                                    <div className="key">V</div>
                                    <div className="key">B</div>
                                    <div className="key">N</div>
                                    <div className="key">M</div>
                                    <div className="key">,</div>
                                    <div className="key">.</div>
                                    <div className="key">Shift</div>
                                    
                                    <div className="key space">Space</div>
                                    <div className="key">Alt</div>
                                    <div className="key">Fn</div>
                                    <div className="key">Ctrl</div>
                                </div>
                                {/* Pad */}
                                <div className="mockup-pad"></div>
                            </div>


                    </div>
                </div>

            )}






            <div className="homeMain">


                {/* Carte de visite accueil */}
                <div className="homeMain-header" onClick={handleVisitCardFlip} >

                    <div className="accueil-visitCard-shape"></div>

                    <div className="accueil-visitCard-content">

                        <div>
                            <h1 className="homeMain-title">Basile KUNTZ</h1>
                            <span className="homeMain-subtitle">Développeur web</span>
                        </div>

                        <div className="home-visitCard-linksDiv">
                            <FontAwesomeIcon icon={faLinkedin} className="home-visitCard-reseauIcon" />
                            <FontAwesomeIcon icon={faGithub} className="home-visitCard-reseauIcon" />
                        </div>

                    </div>


                </div>




                {/* Laptop (gif) */}
                {!isMobile && (
                    <div className="accueil-mockup" 
                        onMouseEnter={handleMockupDeskEnter}
                        onMouseLeave={handleMockupDeskLeave}
                        onClick={handleMockupDeskClick}
                    >

                        {/* perspective écran */}
                        <div className="accueil-mockup-top-wrapper">
                            <div 
                                className={`accueil-mockup-top ${isMockupDeskClicked ? "accueil-mockup-top-clicked" : ""}`}
                            >
                                {/* screen */}
                                <div className="amt-imgWrapper">
                                    <Image 
                                        // src={"/test2.png"}
                                        src={"/demo_short.gif"}
                                        fill={true} 
                                        alt="Portfolio demo" 
                                        unoptimized={true}
                                    />
                                    {/* Gif demo home avec nav des projets */}
                                </div>
                            </div>
                        </div>

                        {/* Pas de perspective sur le clavier comme il est à plat  */}
                        <div className="accueil-mockup-bottom-wrapper">

                            {/* cable mockup desktop */}
                            {/* <svg className="cableSvg" >
                                <g>
                                    <path d="M 0 0 C 15 145 121 22 176 119 C 206 171 323 132 263 52 C 211 -9 114 39 124 122 C 132 187 234 240 359 166 C 451 101 454 150 560 104"/>
                                </g>
                            </svg> */}

                            <div className="accueil-mockup-bottom">
                                {/* Clavier */}
                                <div className="keyboard">
                                    <div className="key">Esc</div>
                                    <div className="key">1</div>
                                    <div className="key">2</div>
                                    <div className="key">3</div>
                                    <div className="key">4</div>
                                    <div className="key">5</div>
                                    <div className="key">6</div>
                                    <div className="key">9</div>
                                    <div className="key">0</div>
                                    {/* <div className="key">-</div>
                                    <div className="key">=</div> */}
                                    <div className="key backspace">Backspace</div>
                                    
                                    <div className="key tab">Tab</div>
                                    <div className="key">Q</div>
                                    <div className="key">W</div>
                                    <div className="key">E</div>
                                    <div className="key">R</div>
                                    <div className="key">T</div>
                                    <div className="key">Y</div>
                                    <div className="key">U</div>
                                    <div className="key">I</div>
                                    <div className="key">O</div>
                                    <div className="key">P</div>
                                    <div className="key">[</div>
                                    <div className="key">]</div>
                                    <div className="key backslash">\</div>
                                    
                                    <div className="key capslock">Caps Lock</div>
                                    <div className="key">A</div>
                                    <div className="key">S</div>
                                    <div className="key">D</div>
                                    <div className="key">F</div>
                                    <div className="key">G</div>
                                    <div className="key">H</div>
                                    <div className="key">J</div>
                                    <div className="key">K</div>
                                    <div className="key">L</div>
                                    <div className="key semicolon">;</div>
                                    <div className="key quote">&apos;</div>
                                    <div className="key enter">Enter</div>
                                    
                                    <div className="key shift-left">Shift</div>
                                    <div className="key">Z</div>
                                    <div className="key">X</div>
                                    <div className="key">C</div>
                                    <div className="key">V</div>
                                    <div className="key">B</div>
                                    <div className="key">N</div>
                                    <div className="key">M</div>
                                    <div className="key">,</div>
                                    <div className="key">.</div>
                                    <div className="key">/</div>
                                    <div className="key shift-right">Shift</div>
                                    
                                    <div className="key ctrl">Ctrl</div>
                                    <div className="key">Win</div>
                                    <div className="key">Alt</div>
                                    <div className="key space">Space</div>
                                    <div className="key">Alt</div>
                                    <div className="key">Fn</div>
                                    <div className="key">Ctrl</div>
                                </div>
                                {/* Pad */}
                                <div className="mockup-pad"></div>
                            </div>
                        </div>

                    </div>

                )}



                {/* Main */}

                {/* WIP */}
                {/* <div className="homeMain-wip">

                    <FontAwesomeIcon icon={faPersonDigging} style={{color:"var(--primary-cyan)", fontSize:"2em"}} />

                    <div className="homeMain-wip-text">
                        <span>Portfolio en construction</span>
                        <a href="https://bk-dev.fr" target="_blank">Ancienne version</a>
                    </div>

                </div> */}



                {/* Liens internes (Mobile) */}
                {/* {isMobile && ( */}
                    
                    <div>
                        <ul className="homeLinksUl">

                            <Link href="/parcours">
                                <li className="homeLinksLi">
                                    <FontAwesomeIcon icon={faPersonRunning} />
                                    <h2>Parcours</h2>
                                </li>
                            </Link>

                            <Link href="/projets">
                                <li className="homeLinksLi">
                                    <FontAwesomeIcon icon={faLightbulb} />
                                    <h2>Projets</h2>
                                </li>
                            </Link>

                            <Link href="/loisirs">
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faCamera} />
                                <h2>Loisirs</h2>
                            </li>
                            </Link>

                            <Link href="/contact">
                                <li className="homeLinksLi">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <h2>Contact</h2>
                                </li>
                            </Link>

                        </ul>
                    </div>
                {/* )} */}


            </div>



            {/* Scroll SVG icon (Desktop) */}
            {/* {!isMobile && (

                <svg 
                className="scrollSvg"
                onMouseEnter={handleScrollEnter}
                onMouseLeave={handleScrollLeave}
                style={{
                    fill: isScrollHovered ? "white" : "grey",
                    transform: isScrollHovered ? "translateX(-50%) translateY(7px)" : "translateX(-50%) translateY(0px)",
                    paddingTop: "7px",
                }}
                >
                    <g>
                        <path d="M67.71,42.631c-0.001-9.565-7.753-17.317-17.318-17.318h-0.784c-9.565,0.001-17.317,7.753-17.318,17.318V57.35   c0.001,9.565,7.753,17.316,17.318,17.317h0.784c9.565-0.001,17.317-7.753,17.318-17.317V42.631z M64.806,57.35   c-0.001,3.985-1.611,7.579-4.222,10.192c-2.613,2.611-6.208,4.221-10.193,4.222h-0.784c-3.985-0.001-7.58-1.611-10.193-4.222   c-2.611-2.613-4.221-6.208-4.222-10.192V42.631c0.001-3.985,1.611-7.58,4.222-10.193c2.613-2.611,6.208-4.221,10.193-4.222h0.784   c3.985,0.001,7.579,1.611,10.193,4.222c2.611,2.613,4.221,6.208,4.222,10.193V57.35z"/><path d="M49.977,39.903c-0.802,0-1.452,0.65-1.452,1.452v4.258c0,0.802,0.65,1.452,1.452,1.452c0.802,0,1.452-0.65,1.452-1.452   v-4.258C51.429,40.553,50.779,39.903,49.977,39.903z"/><path d="M49.093,94.682c0.53,0.424,1.283,0.424,1.814,0l7.258-5.806c0.626-0.501,0.727-1.414,0.227-2.04   c-0.501-0.626-1.414-0.727-2.04-0.227l0,0L50,91.689l-6.351-5.081c-0.626-0.501-1.54-0.399-2.04,0.227   c-0.501,0.626-0.399,1.539,0.227,2.04L49.093,94.682z"/><path d="M56.351,13.392c0.626,0.501,1.539,0.399,2.04-0.227c0.501-0.626,0.399-1.539-0.227-2.04l-7.258-5.807   c-0.531-0.425-1.283-0.425-1.814,0l-7.258,5.806c-0.626,0.501-0.728,1.414-0.227,2.04c0.501,0.626,1.414,0.727,2.04,0.227l0,0   L50,8.311L56.351,13.392z"/>
                    </g>
                </svg>

            )}

            */}
        </>
    )
}