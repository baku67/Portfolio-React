import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging, faSquareCheck, faSquare, faBatteryThreeQuarters, faSignal, faSign } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs, faPhp, faSymfony, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";

import ReactCurvedText from 'react-curved-text';
// import Clock from 'react-live-clock';
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });

import Image from 'next/image'
import Link from 'next/link';

import { Shape1 } from "../Shapes/Shape1";
import { Shape2 } from "../Shapes/Shape2";
import { useState } from "react";


export function Wip() {


    const [isScrollHovered, setIsScrollHovered] = useState(false);
    const handleScrollEnter = () => {
        setIsScrollHovered(true);
    }
    const handleScrollLeave = () => {
        setIsScrollHovered(false);
    }


    // Phone (skills) hover:
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);
    const handlePhoneEnter = () => {
        setIsPhoneHovered(true);
    }
    const handlePhoneLeave = () => {
        setIsPhoneHovered(false);
    }


    // Projets (hover):
    const [isProjetHovered, setIsProjetHovered] = useState(false);
    const handleProjetEnter = () => {
        setIsProjetHovered(true);
    }
    const handleProjetLeave = () => {
        setIsProjetHovered(false);
    }


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



    return(
        <>

            {/* Shapes neutres(cyan) */}
            <div className="shapeProject1-accueil"></div>
            <div className="shapeProject2-accueil" style={{boxShadow: isCafeHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white"}}></div>


            {/* Image fond */}
            <Image 
                // src="/plant-bg-min.png"
                src="/wood-bg.jpeg"
                fill={true}
                style={{opacity: "0.7", zIndex:"0"}}
            />



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
                />
            </div>


            {/* Camera */}
            {/* https://codepen.io/cassidoo/pen/QMZmNV */}
            {/* <div className="camera-container">
                <div className="camera-top">
                    <div className="camera-zoom"></div>
                    <div className="camera-modeChanger"></div>
                    <div className="camera-sides"></div>
                    <div className="camera-rangeFinder"></div>
                    <div className="camera-focus"></div>
                    <div className="camera-red"></div>
                    <div className="camera-viewFinder"></div>
                    <div className="camera-flash">
                        <div className="camera-light"></div>
                    </div>
                </div>
                <div className="camera-mid">
                    <div className="camera-sensor"></div>
                    <div className="camera-lens"></div>
                </div>
                <div className="camera-bottom"></div>
            </div> */}



            {/* Shape Projets (TITRE ECRIT SVG pour faire bloc notes) */}
            <Link href="#home-scroll-project" passHref>
                <div 
                    className="shapeProjet"
                    onMouseEnter={handleProjetEnter}
                    onMouseLeave={handleProjetLeave}
                    style={{boxShadow: isProjetHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white", transform: isProjetHovered ? "rotate(16deg) translateX(-15px)" : "rotate(20deg) translateX(0px)"}}
                >

                    <h2 className="titleShapeProjet" style={{letterSpacing: isProjetHovered ? "2px" : "0px"}}>Projets</h2>

                    <ul className="shapeProjet-fakeUl">
                        <li className="shapeProjet-fakeLi">
                            <FontAwesomeIcon icon={faSquareCheck} className="shapeProjet-icon" />
                            <div></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <FontAwesomeIcon icon={faSquare} className="shapeProjet-icon" />
                            <div></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <FontAwesomeIcon icon={faSquareCheck} className="shapeProjet-icon" />
                            <div></div>
                        </li>
                        <li className="shapeProjet-fakeLi">
                            <FontAwesomeIcon icon={faSquare} className="shapeProjet-icon" />
                            <div></div>
                        </li>
                    </ul>

                </div>
            </Link>



            {/* Tasse café CSS */}
            <Link href="#home-scroll-contact" passHref>
                <div className="tasseCafe" style={{transform: isCafeHovered ? "scale(1.5) translate(-10px, 15px)" : "scale(1.5) translate(0px, 0px)"}}>

                    {/* https://www.npmjs.com/package/react-curved-text  */}
                    <div 
                        className="tasseCafe-text" 
                        onMouseEnter={handleCafeEnter} 
                        onMouseLeave={handleCafeLeave}
                        style={{}} 
                    >
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
                            textProps={{ style: { fontSize: 28 } }}
                            textPathProps={{style : { fill : /* "#dfdfdf" */ "var(--primary-cyan)"} }}
                            tspanProps={{"dy": isCafeHovered ? "22" : "20"}}
                            ellipseProps={null}
                            svgProps={null}
                        />
                    </div>


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



            {/* Portable */}
            <Link href="#home-scroll-skills" passHref>
                <div 
                    className="portable"
                    onMouseEnter={handlePhoneEnter}
                    onMouseLeave={handlePhoneLeave}
                    style={{ 
                        transform: isPhoneHovered ? "translate(20px, 0px) rotate(350deg) scale(1.05)" : "rotate(348deg)"
                    }}
                >

                    <span className="portable-text" style={{letterSpacing: isPhoneHovered ? "4px" : "1px"}}>Compétences</span>
                    
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
                                    <div><FontAwesomeIcon icon={faHtml5} className="portable-app" /></div>
                                    <div><FontAwesomeIcon icon={faCss3Alt} className="portable-app" /></div>
                                    <div><FontAwesomeIcon icon={faPhp} className="portable-app" /></div>
                                    <div><FontAwesomeIcon icon={faSymfony} className="portable-app" /></div>
                                    <div><FontAwesomeIcon icon={faJs} className="portable-app" /></div>
                                    <div><FontAwesomeIcon icon={faReact} className="portable-app" /></div>
                                    {/* Emplacements d'apps vides */}
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    {/* Vscode */}
                                    <div>
                                        <svg fill="#f1b16b" width="36px" height="36px" viewBox="0 0 32 32">
                                            <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
                                        </svg>
                                    </div>
                                    <div><FontAwesomeIcon icon={faGithub} className="portable-app" /></div>
                                </div>

                                <div className="portable-skillGrid2">
                                    <div>
                                        <h3 className="portable-skillGrid2-title">Formations</h3>
                                        <ul>
                                            <li className="portable-skillGrid2-li">Titre RNCP &quot;Développeur web et web mobile&quot;</li>
                                            <li className="portable-skillGrid2-li">BTS SIO option SLAM</li>
                                        </ul>
                                        <h3 className="portable-skillGrid2-title">Expériences</h3>
                                        <ul>
                                            <li className="portable-skillGrid2-li">Stage chez Hoplunch</li>
                                            <li className="portable-skillGrid2-li">Alternance BTS (2ans) </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </Link>



            {/* Plante vert/bleu */}
            {/* Bocal + Poisson animé ou Appareil Photo */}
            {/* Déco: Stylo? */}


            <div className="homeMain">

                <div className="homeMain-header">
                    <h1 className="homeMain-title">Basile KUNTZ</h1>
                    <span className="homeMain-subtitle">Développeur web</span>
                </div>



                {/* Demo mockup desktop (gif) */}
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
                                    src={"/test2.png"}
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
                            <div class="keyboard">
                                <div class="key">Esc</div>
                                <div class="key">1</div>
                                <div class="key">2</div>
                                <div class="key">3</div>
                                <div class="key">4</div>
                                <div class="key">5</div>
                                <div class="key">6</div>
                                <div class="key">9</div>
                                <div class="key">0</div>
                                {/* <div class="key">-</div>
                                <div class="key">=</div> */}
                                <div class="key backspace">Backspace</div>
                                
                                <div class="key tab">Tab</div>
                                <div class="key">Q</div>
                                <div class="key">W</div>
                                <div class="key">E</div>
                                <div class="key">R</div>
                                <div class="key">T</div>
                                <div class="key">Y</div>
                                <div class="key">U</div>
                                <div class="key">I</div>
                                <div class="key">O</div>
                                <div class="key">P</div>
                                <div class="key">[</div>
                                <div class="key">]</div>
                                <div class="key backslash">\</div>
                                
                                <div class="key capslock">Caps Lock</div>
                                <div class="key">A</div>
                                <div class="key">S</div>
                                <div class="key">D</div>
                                <div class="key">F</div>
                                <div class="key">G</div>
                                <div class="key">H</div>
                                <div class="key">J</div>
                                <div class="key">K</div>
                                <div class="key">L</div>
                                <div class="key semicolon">;</div>
                                <div class="key quote">&apos;</div>
                                <div class="key enter">Enter</div>
                                
                                <div class="key shift-left">Shift</div>
                                <div class="key">Z</div>
                                <div class="key">X</div>
                                <div class="key">C</div>
                                <div class="key">V</div>
                                <div class="key">B</div>
                                <div class="key">N</div>
                                <div class="key">M</div>
                                <div class="key">,</div>
                                <div class="key">.</div>
                                <div class="key">/</div>
                                <div class="key shift-right">Shift</div>
                                
                                <div class="key ctrl">Ctrl</div>
                                <div class="key">Win</div>
                                <div class="key">Alt</div>
                                <div class="key space">Space</div>
                                <div class="key">Alt</div>
                                <div class="key">Fn</div>
                                <div class="key">Ctrl</div>
                            </div>
                            {/* Pad */}
                            <div className="mockup-pad"></div>
                        </div>
                    </div>
                </div>



                {/* Main */}
                <div className="homeMain-wip">

                    <FontAwesomeIcon icon={faPersonDigging} style={{color:"var(--primary-cyan)", fontSize:"2em"}} />

                    <div className="homeMain-wip-text">
                        <span>Portfolio en construction</span>
                        <a href="https://bk-dev.fr" target="_blank">Ancienne version</a>
                    </div>

                </div>

            </div>



            {/* Scroll SVG */}
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

        </>
    )
}