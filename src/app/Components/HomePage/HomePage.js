"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPersonRunning, faLightbulb, faCamera, faEnvelopeOpenText, faBatteryThreeQuarters, faSignal, faBackward, faPlay, faPause, faForward } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import ReactCurvedText from 'react-curved-text';
import Draggable from 'react-draggable';
import { useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });

import FontFaceObserver from 'fontfaceobserver';

import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect } from "react";





export function HomePage({isMobile}) {


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


    // Phone (skills) hover:
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);
    const handlePhoneEnter = () => {
        setIsPhoneHovered(true);
    }
    const handlePhoneLeave = () => {
        setIsPhoneHovered(false);
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







    // Music smartphone WebGLRenderingContext;
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [currentMusicTrackIndex, setCurrentMusicTrackIndex] = useState(0);
    
    const musicTracks = [
        {
            index: 0,
            title: "Once In Paris",
            author: "Pumpupthemind",
            src: "/music/tracks/once-in-paris-168895.mp3",
            credits: "Music by <a href='https://pixabay.com/users/pumpupthemind-19969411/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895'>Ivan Ohanezov</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895'>Pixabay</a>",
        },
        {
            index: 1,
            title: "Coverless book",
            author: "AmbiantAUDIOVISION",
            src: "/music/tracks/coverless-book-lofi-186307",
            credits: "Music by <a href='https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307'>Amir Firouzfard</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307'>Pixabay</a>",
        },
        {
            index: 2,
            title: "LoFi Orchestra",
            author: "xethrocc",
            src: "/music/tracks/lofi-orchestra-162306",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306'>Patrick A.</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306'>Pixabay</a>",
        },
        {
            index: 3,
            title: "Wraps (174,gm)",
            author: "tobylane",
            src: "/music/tracks/wraps-174gm-203739",
            credits: "Music by <a href='https://pixabay.com/users/tobylane-15168815/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=203739'>Toby Smith</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=203739'>Pixabay</a>",
        },
        {
            index: 4,
            title: "deep - lofi vibes",
            author: "xethrocc",
            src: "/music/tracks/deep-lofi-vibes-205062",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205062'>Patrick A.</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205062'>Pixabay</a>",
        },
        {
            index: 5,
            title: "Lofi Relax - Travel",
            author: "Lofium",
            src: "/music/tracks/lofi-relax-travel-by-lofium-123560",
            credits: "Music by <a href='https://pixabay.com/users/lofium-30660321/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123560'>Lofium</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123560'>Pixabay</a>",
        },
        {
            index: 6,
            title: "Lofi Girl Dreams",
            author: "chillmore",
            src: "/music/tracks/lofi-girl-dreams-113883",
            credits: "Music by <a href='https://pixabay.com/users/chillmore-25283030/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113883'>Chillmore</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113883'>Pixabay</a>",
        },
        {
            index: 7,
            title: "Lofi Study",
            author: "FASSounds",
            src: "/music/tracks/lofi-study-112191",
            credits: "Music by <a href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191'>FASSounds</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191'>Pixabay</a>",
        },
        {
            index: 8,
            title: "Good Night",
            author: "FASSounds",
            src: "/music/tracks/good-night-160166",
            credits: "Music by <a href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166'>FASSounds</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166'>Pixabay</a>",
        },
        {
            index: 9,
            title: "Lofi Vibes",
            author: "chillmore",
            src: "/music/tracks/lofi-vibes-113884",
            credits: "Music by <a href='https://pixabay.com/users/chillmore-25283030/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113884'>Chillmore</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113884'>Pixabay</a>",
        },
        {
            index: 10,
            title: "Avenue",
            author: "xethrocc",
            src: "/music/tracks/avenue-lofi-154343",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154343'>Patrick A.</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154343'>Pixabay</a>",
        },
        {
            index: 11,
            title: "Spirit Blossom",
            author: "RomanBelov",
            src: "/music/tracks/spirit-blossom-15285",
            credits: "Music by <a href='https://pixabay.com/users/romanbelov-25347333/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15285'>Roman Belov</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15285'>Pixabay</a>",
        },
        {
            index: 12,
            title: "drive - lofi vibes",
            author: "xethrocc",
            src: "/music/tracks/drive-lofi-vibes-205061",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205061'>Patrick A.</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205061'>Pixabay</a>",
        },
        {
            index: 13,
            title: "Lofi Chill",
            author: "FASSounds",
            src: "/music/tracks/lofi-chill-140858",
            credits: "Music by <a href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140858'>FASSounds</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140858'>Pixabay</a>",
        },
        {
            index: 14,
            title: "Summer Sunset LoFi - slow mix",
            author: "xethrocc",
            src: "/music/tracks/summer-sunset-lofi-slow-mix-154447",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Patrick A.</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Pixabay</a>",
        },
        {
            index: 15,
            title: "Lofi Type Beat - Evening Stroll",
            author: "Nikoo1",
            src: "/music/tracks/free-lofi-type-beat-evening-stroll-209514",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Patrick A.</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Pixabay</a>",
        },
        {
            index: 16,
            title: "Chill LoFi",
            author: "SoulProdMusic",
            src: "/music/tracks/chill-lofi-160893",
            credits: "Music by <a href='https://pixabay.com/users/soulprodmusic-30064790/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160893'>Oleg Fedak</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160893'>Pixabay</a>",
        },
        {
            index: 17,
            title: "Playa del Sol - latin lofi",
            author: "xethrocc",
            src: "/music/tracks/playa-del-sol-latin-lofi-160149",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160149'>Patrick A.</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160149'>Pixabay</a>",
        },
        {
            index: 18,
            title: "Lost Ambiant Lofi 60s",
            author: "Lesfm",
            src: "/music/tracks/lost-ambient-lofi-60s-10821",
            credits: "Music by <a href='https://pixabay.com/users/lesfm-22579021/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821'>Oleksii Kaplunskyi</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821'>Pixabay</a>",
        },
        {
            index: 19,
            title: "Garden Vibes lofi",
            author: "xethrocc",
            src: "/music/tracks/garden-vibes-lofi-160144",
            credits: "Music by <a href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160144'>Patrick A.</a> from <a href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160144'>Pixabay</a>",
        },
    ]

    const handlePlayPauseClick = () => {

        setIsMusicPlaying(!isMusicPlaying);

    }








    // ** Loading {isMobile} (pour bug affichage desktop du laptop sur mobile) et video-laptop et font-postIt
    const [loading, setLoading] = useState(true);

    const [videoLoading, setVideoLoading] = useState(true);
    const handleVideoLoaded = () => {
        setVideoLoading(false);
    };
    const [fontLoading, setFontLoading] = useState(true);

    useEffect(() => {
        const font = new FontFaceObserver('Kalam'); // Remplacez par le nom de votre police
        font.load().then(() => {
            setFontLoading(false);
        }).catch(() => {
            console.error('La police de caractères n\'a pas pu être chargée.');
            setFontLoading(false);
        });
    }, []);

    useEffect(() => {
        if ((typeof isMobile !== 'undefined') || (!videoLoading) || (!fontLoading) ) {
            setLoading(false);
        }
    }, [isMobile, videoLoading, fontLoading]);

    if (loading) {
        return <></>;
    }






    // Date portable (desktop)
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('fr-FR', options);








    return(
        <>

            {/* Shapes */}
            <div className={`shapeProject1-accueil ${isFadingOut ? "shapeProject1-accueil-fadeOut" : ""}`}></div>
            <div 
                className={`shapeProject2-accueil ${isFadingOut ? "shapeProject2-accueil-fadeOut" : ""}`}
                style={{
                    boxShadow: isCafeHovered ? "0px 0px 50px -10px black" : "0px 0px 0px 0px white",
                    transform: isCafeHovered ? "rotate(301deg) translate(-5px, -5px)" : "rotate(301deg) translate(0px, 0px)",
                }}
            ></div>



            {/* Post-it "alternance" */}
            
                <div 
                    className={`post-it-container ${isFadingOut ? "fadeOut" : ""}`} 
                    onMouseEnter={handlePostItEnter}
                    onMouseLeave={handlePostItLeave}
                >

                    <Draggable>
                    <div  className="draggable-transition">

                        <Image 
                            src="/post-it-1-cropped.png"
                            width={ isMobile ? 195 : 210 }
                            height={ isMobile ? 195 : 210 }
                            className="post-it-img"
                            style={{
                                transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)",
                                filter: isPostItHovered ? "drop-shadow(6px 5px 5px black)" : "drop-shadow(6px 5px 5px black)",
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
                    </Draggable>

                </div>




            {/* Plante + fishBowl */}
            <Link href="/loisirs">

                {/* Plante */}
                <div 
                    className={`plantAccueil-div`} 
                    style={{width:"fit-content"}}
                >

                    {/* <Image src="/plant-2.png" width={450} height={450} /> */}
                    <Image src="/plant-1-min.png" width={isMobile ? 450 : 520} height={isMobile ? 450 : 520} className={`plantAccueil ${isFadingOut ? "fadeOut" : ""}`} />

                    <div className={`bocal-exterieur ${isFadingOut ? "fadeOut" : ""}`}>
                        <div className="bocal-ouverture"></div>
                        <div className="bocal-landscape"></div>
                    </div>

                </div>


                {/* Test fish bowl (loisirs) */}
                <div className={`fishBowl-div`}>
                    <Image 
                        src="/fishBowl-rounded2.png" 
                        width={320} 
                        height={320} 
                        style={{transform: "rotate(182deg)", filter:"hue-rotate(334deg)"}}
                        className={`fishBowl-img ${isFadingOut ? "fadeOut" : ""}`}
                    />
                </div>

            </Link>




            {/* Tasse café CSS */}
            <Link href="/contact">
                <div className={`tasseCafe`} style={{transform: isCafeHovered ? "translate(-8px, 11px)" : "translate(0px, 0px)"}}>

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


                    <div className={`cup ${isFadingOut ? "fadeOut" : ""}`}>
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
            {/* <Link href="/parcours"> */}
                <div 
                    className={`portable`}
                    onMouseEnter={handlePhoneEnter}
                    onMouseLeave={handlePhoneLeave}
                    style={{ 
                        transform: isPhoneHovered ? "translate(-20px, 0px) rotate(11deg) scale(1.05)" : "rotate(13deg)"
                    }}
                >

                    {/* <span className="portable-text" style={{letterSpacing: isPhoneHovered ? "4px" : "1px"}}>Compétences</span> */}
                    
                    <div className={`portable-div ${isFadingOut ? "fadeOut" : ""}`}  style={{boxShadow: isPhoneHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white"}}>

                        {/* Bouton mockup */}
                        <div className="portable-btnMockup1"></div>
                        <div className="portable-btnMockup2"></div>

                        <div className="portable-screen" style={{backgroundColor: isPhoneHovered ? "#154d68" : "var(--secondary-cyan)"}}>

                            {/* Reflection */}
                            <div className="phoneReflection"></div>

                            <div className="portable-header">

                                <span>
                                    {/* <LiveClock format={'HH:mm'} ticking={true} /> */}
                                </span>

                                <span><FontAwesomeIcon icon={faSignal} /> 82% <FontAwesomeIcon icon={faBatteryThreeQuarters} /></span>

                            </div>

                            <div 
                                className="portable-contentWrapper" 
                                // style={{transform: isPhoneHovered ? "translateX(-50%)" : "translateX(0)"}}
                            >


                                <div className="portable-lockedScreen">
                                    <span className="portable-time">
                                        <LiveClock format={'HH:mm'} style={{fontFamily: 'Karla', lineHeight: "0.8em"}}/>
                                        <span className="portable-time-date">{formattedDate}</span>
                                    </span>


                                    <div className="youtubeWidget-div">

                                        {/* <audio/> HTML elem caché */}
                                        <audio src={musicTracks[currentMusicTrackIndex].src} />

                                        {/* Webp lofiGirl */}
                                        <div className="youtubeWidget-top">
                                            <div className="youtubeWidget-imgWrapper">
                                                <Image 
                                                    src={"/lofiGirl.gif"}
                                                    width={55}
                                                    height={55}
                                                    className="youtubeWidget-img"
                                                    unoptimized
                                                />
                                            </div>

                                            {/* infos (titre deroulant, logo widget) TODO: scroll overflow*/}
                                            <div className="youtubeWidget-titleWrapper">
                                                <span className="youtubeWidget-title">azayaka - Sunshine</span>
                                            </div>

                                        </div>

                                        {/* Bottom controls */}
                                        <div className="youtubeWidget-bottom">

                                            <div className="youtubeWidget-bottomControls">
                                                <span><FontAwesomeIcon icon={faBackward} className="youtubeWidget-bottomControls-btn" /></span>
                                                <span>
                                                    <FontAwesomeIcon 
                                                        icon={isMusicPlaying ? faPause : faPlay} 
                                                        className="youtubeWidget-bottomControls-btn" 
                                                        onClick={handlePlayPauseClick}
                                                        style={{width: "17px"}} /* Parce que taille differente play/pause Icone */
                                                    />
                                                </span>
                                                <span><FontAwesomeIcon icon={faForward} className="youtubeWidget-bottomControls-btn" /></span>
                                            </div>

                                            {/* Barre d'avancement */}
                                        </div>

                                    </div>
                                </div>

                                {/* Div grid skills page 1 */}
                                {/* <div className="portable-skillGrid">
                                    <div><FontAwesomeIcon icon={faHtml5} className="portable-app app-html" /></div>
                                    <div><FontAwesomeIcon icon={faCss3Alt} className="portable-app app-css" /></div>
                                    <div><FontAwesomeIcon icon={faPhp} className="portable-app app-php" /></div>
                                    <div><FontAwesomeIcon icon={faSymfony} className="portable-app app-sf" /></div>
                                    <div><FontAwesomeIcon icon={faJs} className="portable-app app-js" /></div>
                                    <div><FontAwesomeIcon icon={faReact} className="portable-app app-react" /></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div className="portable-app-void"></div>
                                    <div>
                                        <svg fill="#f1b16b" width="36px" height="36px" viewBox="0 0 32 32">
                                            <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
                                        </svg>
                                    </div>
                                    <div><FontAwesomeIcon icon={faGithub} className="portable-app" /></div>
                                </div> */}

                                {/* Div Page 2 */}
                                {/* <div className="portable-skillGrid2">
                                    <Image 
                                        src="/CV_BasileKuntz.png" 
                                        fill={true}
                                        alt="CV de Basile Kuntz"
                                        className="smartphone-cv"
                                    />
                                </div> */}


                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            {/* </Link> */}



            {/* laptop (mobile) */}

                <div className={`accueil-mockup ${isFadingOut ? "fadeOut" : ""}`} 
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

                                {/* Reflet */}
                                <div className="laptop-reflect"></div>

                                <Image 
                                    src={"/demo_short.gif"}
                                    fill={true} 
                                    alt="Portfolio demo" 
                                    onLoadingComplete={handleVideoLoaded}
                                    unoptimized
                                />

                            </div>
                        </div>
                    </div>

                    {/* Pas de perspective sur le clavier comme il est à plat  */}
                    <div className="accueil-mockup-bottom-wrapper">

                        {/* cable mockup desktop */}
                        <svg className="cableSvg" >
                            <g>
                                {/* <path d="M 0 0 C 15 145 121 22 176 119 C 206 171 323 132 263 52 C 211 -9 114 39 124 122 C 132 187 234 240 359 166 C 451 101 454 150 560 104"/> */}
                                <path d="M 155 6 C 128 39 116 63 124 122 C 134 188 234 240 359 166 C 451 101 454 150 560 104"/>
                            </g>
                        </svg>


                        <div className="accueil-mockup-bottom">

                            {/* Ombre */}
                            <div className="ombreLaptop"></div>

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







            <div className={`homeMain`} >


                {/* Carte de visite accueil */}
                <div className={`${isFadingOut ? "fadeOut" : ""}`}>
                    <div className={`homeMain-header`} onClick={handleVisitCardFlip} >

                    

                        <div className="accueil-visitCard-shape"></div>

                        <div className="accueil-visitCard-content">

                            <div>
                                <h1 className="homeMain-title">Basile KUNTZ</h1>
                                <span className="homeMain-subtitle">Développeur web</span>
                            </div>

                            <div className="home-visitCard-linksDiv">
                                
                                <a href="www.linkedin.com/in/basile-kuntz-719278267" className="home-visitCard-reseauIconLink">
                                    <FontAwesomeIcon icon={faLinkedin} className="home-visitCard-reseauIcon" />
                                </a>
                                
                                <a href="https://github.com/baku67" className="home-visitCard-reseauIconLink">
                                    <FontAwesomeIcon icon={faGithub} className="home-visitCard-reseauIcon" />
                                </a>
                                
                            </div>

                    
                        </div>

                    </div>


                </div>




                {/* Laptop (desktop) */}





                {/* Liens internes */}
        
                <div>
                    <ul className={`homeLinksUl ${isFadingOut ? "fadeOut" : ""}`}>

                        <Link onClick={(event) => handleClickLink(event, "/parcours")} href={"/parcours"} >
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faPersonRunning} />
                                <h2>Parcours</h2>
                            </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/projets")} href={"/projets"} >
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faLightbulb} />
                                <h2>Projets</h2>
                            </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/loisirs")} href={"/loisirs"} >
                        <li className="homeLinksLi">
                            <FontAwesomeIcon icon={faCamera} />
                            <h2>Loisirs</h2>
                        </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/contact")} href={"/contact"} >
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                <h2>Contact</h2>
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>


        </>
    )
}