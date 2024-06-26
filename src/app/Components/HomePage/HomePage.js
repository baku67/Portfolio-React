"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faMagnifyingGlass, faPersonRunning, faLightbulb, faCamera, faEnvelope, faEnvelopeOpenText, faBatteryThreeQuarters, faSignal, faBackward, faPlay, faPause, faForward, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useRouter } from 'next/navigation';

import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });

import FontFaceObserver from 'fontfaceobserver';

import Image from 'next/image'
import Link from 'next/link';

import { useState, useEffect, useRef } from "react";





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


    // Smartphone/portable hover:
    const [isPhoneHovered, setIsPhoneHovered] = useState(false);
    const handlePhoneEnter = () => {
        setIsPhoneHovered(true);
    }
    const handlePhoneLeave = () => {
        setIsPhoneHovered(false);
    }

    // Headphone/Casque hover: 
    const [isHeadphonesHovered, setIsHeadphonesHovered] = useState(false);
    const handleHeadphonesEnter = () => {
        setIsHeadphonesHovered(true);
    }
    const handleHeadphonesLeave = () => {
        setIsHeadphonesHovered(false);
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




    // Hover boutons nav:
    const [isParcoursLinkHovered, setIsParoursLinkHovered] = useState(false);
    const handleParcoursLinkEnter = () => {
        setIsParoursLinkHovered(true);
    }
    const handleParcoursLinkLeave = () => {
        setIsParoursLinkHovered(false);
    }

    const [isProjetsLinkHovered, setIsProjetsLinkHovered] = useState(false);
    const handleProjetsLinkEnter = () => {
        setIsProjetsLinkHovered(true);
    }
    const handleProjetsLinkLeave = () => {
        setIsProjetsLinkHovered(false);
    }

    const [isLoisirsLinkHovered, setIsLoisirsLinkHovered] = useState(false);
    const handleLoisirsLinkEnter = () => {
        setIsLoisirsLinkHovered(true);
    }
    const handleLoisirsLinkLeave = () => {
        setIsLoisirsLinkHovered(false);
    }

    const [isContactLinkHovered, setIsContactLinkHovered] = useState(false);
    const handleContactLinkEnter = () => {
        setIsContactLinkHovered(true);
    }
    const handleContactLinkLeave = () => {
        setIsContactLinkHovered(false);
    }







    // Music smartphone WebGLRenderingContext;

    const audioRef = useRef(null);
    
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [currentMusicTrackIndex, setCurrentMusicTrackIndex] = useState(0);
    
    const musicTracks = [
        {
            index: 0,
            title: "Once In Paris",
            author: "Pumpupthemind",
            src: "/music/tracks/once-in-paris-168895.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/pumpupthemind-19969411/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895'>Ivan Ohanezov</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=168895'>Pixabay</a>",
        },
        {
            index: 1,
            title: "Coverless book",
            author: "AmbiantAUDIOVISION",
            src: "/music/tracks/coverless-book-lofi-186307.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307'>Amir Firouzfard</a> from <a href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307'>Pixabay</a>",
        },
        {
            index: 2,
            title: "LoFi Orchestra",
            author: "xethrocc",
            src: "/music/tracks/lofi-orchestra-162306.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306'>Pixabay</a>",
        },
        {
            index: 3,
            title: "Wraps (174,gm)",
            author: "tobylane",
            src: "/music/tracks/wraps-174gm-203739.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/tobylane-15168815/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=203739'>Toby Smith</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=203739'>Pixabay</a>",
        },
        {
            index: 4,
            title: "deep - lofi vibes",
            author: "xethrocc",
            src: "/music/tracks/deep-lofi-vibes-205062.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205062'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205062'>Pixabay</a>",
        },
        {
            index: 5,
            title: "Lofi Relax - Travel",
            author: "Lofium",
            src: "/music/tracks/lofi-relax-travel-by-lofium-123560.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/lofium-30660321/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123560'>Lofium</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=123560'>Pixabay</a>",
        },
        {
            index: 6,
            title: "Lofi Girl Dreams",
            author: "chillmore",
            src: "/music/tracks/lofi-girl-dreams-113883.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/chillmore-25283030/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113883'>Chillmore</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113883'>Pixabay</a>",
        },
        {
            index: 7,
            title: "Lofi Study",
            author: "FASSounds",
            src: "/music/tracks/lofi-study-112191.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191'>FASSounds</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191'>Pixabay</a>",
        },
        {
            index: 8,
            title: "Good Night",
            author: "FASSounds",
            src: "/music/tracks/good-night-160166.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166'>FASSounds</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166'>Pixabay</a>",
        },
        {
            index: 9,
            title: "Lofi Vibes",
            author: "chillmore",
            src: "/music/tracks/lofi-vibes-113884.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/chillmore-25283030/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113884'>Chillmore</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=113884'>Pixabay</a>",
        },
        {
            index: 10,
            title: "Avenue",
            author: "xethrocc",
            src: "/music/tracks/avenue-lofi-154343.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154343'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154343'>Pixabay</a>",
        },
        {
            index: 11,
            title: "Spirit Blossom",
            author: "RomanBelov",
            src: "/music/tracks/spirit-blossom-15285.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/romanbelov-25347333/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15285'>Roman Belov</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=15285'>Pixabay</a>",
        },
        {
            index: 12,
            title: "drive - lofi vibes",
            author: "xethrocc",
            src: "/music/tracks/drive-lofi-vibes-205061.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205061'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=205061'>Pixabay</a>",
        },
        {
            index: 13,
            title: "Lofi Chill",
            author: "FASSounds",
            src: "/music/tracks/lofi-chill-140858.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140858'>FASSounds</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=140858'>Pixabay</a>",
        },
        {
            index: 14,
            title: "Summer Sunset LoFi - slow mix",
            author: "xethrocc",
            src: "/music/tracks/summer-sunset-lofi-slow-mix-154447.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Pixabay</a>",
        },
        {
            index: 15,
            title: "Lofi Type Beat - Evening Stroll",
            author: "Nikoo1",
            src: "/music/tracks/free-lofi-type-beat-evening-stroll-209514.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=154447'>Pixabay</a>",
        },
        {
            index: 16,
            title: "Chill LoFi",
            author: "SoulProdMusic",
            src: "/music/tracks/chill-lofi-160893.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/soulprodmusic-30064790/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160893'>Oleg Fedak</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160893'>Pixabay</a>",
        },
        {
            index: 17,
            title: "Playa del Sol - latin lofi",
            author: "xethrocc",
            src: "/music/tracks/playa-del-sol-latin-lofi-160149.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160149'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160149'>Pixabay</a>",
        },
        {
            index: 18,
            title: "Lost Ambiant Lofi 60s",
            author: "Lesfm",
            src: "/music/tracks/lost-ambient-lofi-60s-10821.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/lesfm-22579021/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821'>Oleksii Kaplunskyi</a> from <a target='_blank' href='https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=10821'>Pixabay</a>",
        },
        {
            index: 19,
            title: "Garden Vibes lofi",
            author: "xethrocc",
            src: "/music/tracks/garden-vibes-lofi-160144.mp3",
            credits: "Music by <a class='trackAuthorLink' target='_blank' href='https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160144'>Patrick A.</a> from <a target='_blank' href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160144'>Pixabay</a>",
        },
    ]

    const handlePlayPauseClick = () => {
        // by checking if (audioRef.current) before calling play() or pause(), you're ensuring that these methods are only called when the <audio> element is available and has been successfully mounted in the DOM. This helps prevent runtime errors and ensures that your code behaves as expected.
        if (audioRef.current) {
            if (isMusicPlaying) {
                audioRef.current.pause(); 
            } else {
                audioRef.current.play(); 
            }
            setIsMusicPlaying(!isMusicPlaying); // Toggle state
        }
    }

    useEffect(() => {
        if (isMusicPlaying) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }, [currentMusicTrackIndex]); // Exécuter cet effet chaque fois que currentMusicTrackIndex change

    // Prev track
    const handlePrevMusicClick = () => {
        const prevIndex = currentMusicTrackIndex === 0 ? musicTracks.length - 1 : currentMusicTrackIndex - 1;
        setCurrentMusicTrackIndex(prevIndex);
    };

    // Next track
    const handleNextMusicClick = () => {
        const nextIndex = currentMusicTrackIndex === musicTracks.length - 1 ? 0 : currentMusicTrackIndex + 1;
        setCurrentMusicTrackIndex(nextIndex);
    };


    // toggle Infos track onClick Titre/Author "Notif":
    const [isTrackInfoActive, setIsMusicInfoActive] = useState(false);
    const handleClickTrackInfos = () => {
        setIsMusicInfoActive(!isTrackInfoActive);
    }





    // *** Ref SVG path cable
    const pathRef = useRef(null);


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

        // Dessin drawing du cable
        if (pathRef.current) {
            const pathElement = pathRef.current;
            const length = pathElement.getTotalLength();
            pathElement.style.transition = pathElement.style.WebkitTransition = 'none';
            pathElement.style.strokeDasharray = `${length} ${length}`;
            pathElement.style.strokeDashoffset = length;
            pathElement.getBoundingClientRect();
            pathElement.style.transition = pathElement.style.WebkitTransition =
                'stroke-dashoffset 1.5s 0.5s ease';
            pathElement.style.strokeDashoffset = '0';
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

                <div className="postIt1">

                    <Image 
                        src="/post-it-1-cropped.png"
                        width={ isMobile ? 195 : 210 }
                        height={ isMobile ? 195 : 210 }
                        className="post-it-img"
                        style={{
                            transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)",
                            filter: isPostItHovered ? "drop-shadow(6px 5px 5px black)" : "drop-shadow(6px 5px 5px black)",
                        }}
                        alt={"post-it"}
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


                
                <div className="postIt2">

                    <Image 
                        src="/post-it-1-cropped.png"
                        width={ isMobile ? 195 : 210 }
                        height={ isMobile ? 195 : 210 }
                        className="post-it-img"
                        style={{
                            transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)",
                            filter: isPostItHovered ? "drop-shadow(6px 5px 5px black)" : "drop-shadow(6px 5px 5px black)",
                        }}
                        alt={"post-it"}
                    />

                    <div className="post-it-textDiv"
                        style={{
                            transform: isPostItHovered ? "translate(-2px, 5px) rotate(1deg)" : "translate(0px, 0px)"
                        }}
                    >
                        <FontAwesomeIcon icon={faLocationDot} className="post-it-textIcon" />
                        <span className="post-it-textSpan">Strasbourg <br />&ldquo;Concepteur Développeur d&apos;Applications&ldquo;</span>
                    </div>

                </div>


            </div>






            {/* Plante */}
            <div 
                className={`plantAccueil-div`} 
                style={{width:"fit-content"}}
                onMouseEnter={handleMockupDeskEnter}
                onMouseLeave={handleMockupDeskLeave}
                onClick={handleMockupDeskClick}
            >

                <Image 
                    src="/plant-1-min.png" 
                    width={isMobile ? 450 : 520} 
                    height={isMobile ? 450 : 520} 
                    className={`plantAccueil ${isFadingOut ? "fadeOut" : ""}`} 
                    alt={"decoration plant"} 
                />

                <div className={`bocal-exterieur ${isFadingOut ? "fadeOut" : ""}`}>
                    <div className="bocal-ouverture"></div>
                    <div className="bocal-landscape"></div>
                </div>

            </div>




            {/* fish bowl */}
            <div className={`fishBowl-div`}>

                {/* Bocal vide */}
                <Image 
                    // src="/fishBowl-rounded2.png" 
                    src="/fishBowl-rounded2-withoutFish.png"
                    width={320} 
                    height={320} 
                    style={{transform: "rotate(182deg)", filter:"hue-rotate(334deg)"}}
                    className={`fishBowl-img ${isFadingOut ? "fadeOut" : ""}`}
                    alt={"fish bowl decoration"}
                />

                {/* Poisson 1 */}
                <div className="fish1">
                    <Image 
                        src={"/fish1_v2.png"}
                        width={90}
                        height={90}
                        className={`fish1-img ${isFadingOut ? "fadeOut" : ""}`}
                        alt="poisson"
                    />
                </div>

                {/* Poisson 2 */}
                <div className="fish2">
                    <Image 
                        src={"/fish2.png"}
                        width={90}
                        height={90}
                        className={`fish2-img ${isFadingOut ? "fadeOut" : ""}`}
                        alt="poisson"
                    />
                </div>
                        
            </div>





            {/* Tasse café CSS */}
            <div className={`tasseCafe`} style={{transform: isCafeHovered ? "translate(-8px, 11px)" : "translate(0px, 0px)"}}>


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



            {/* Smartphone (desktop) */}
            <div 
                className={`portable`}
                onMouseEnter={handlePhoneEnter}
                onMouseLeave={handlePhoneLeave}
                style={{ 
                    transform: isPhoneHovered ? "translate(-20px, 0px) rotate(11deg) scale(1.05)" : "rotate(13deg)"
                }}
            >
                
                {/* portable */}
                <div className={`portable-div ${isFadingOut ? "fadeOut" : ""}`}  style={{boxShadow: isPhoneHovered || isHeadphonesHovered ? "0px 0px 50px -23px white" : "0px 0px 0px 0px white"}}>

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

                        <div className="portable-contentWrapper" >

                            <div className="portable-lockedScreen">
                                <span className="portable-time">
                                    <LiveClock format={'HH:mm'} ticking style={{fontFamily: 'Karla', lineHeight: "0.8em"}}/>
                                    <span className="portable-time-date">{formattedDate}</span>
                                </span>


                                <div 
                                    className="youtubeWidget-div"
                                    style={{filter: isPhoneHovered || isHeadphonesHovered ? "drop-shadow(0px 0px 9px var(--primary-cyan))" : ""}}
                                >

                                    {/* <audio/> HTML elem caché */}
                                    <audio ref={audioRef} src={musicTracks[currentMusicTrackIndex].src} />

                                    {/* Webp lofiGirl */}
                                    <div className="youtubeWidget-top">
                                        <div className="youtubeWidget-imgWrapper">
                                            <Image 
                                                src={"/lofiGirl.gif"}
                                                width={55}
                                                height={55}
                                                className="youtubeWidget-img"
                                                unoptimized
                                                alt={"music player thumbnail lofiGirl"}
                                            />
                                        </div>

                                        {/* infos (titre deroulant, logo widget) TODO: scroll overflow*/}
                                        <div className="youtubeWidget-titleWrapper" onClick={handleClickTrackInfos} >
                                            <span className="youtubeWidget-title">{musicTracks[currentMusicTrackIndex].title}</span>
                                            <span className="youtubeWidget-author">{musicTracks[currentMusicTrackIndex].author}</span>
                                        </div>

                                    </div>

                                    {/* Bottom controls */}
                                    <div className="youtubeWidget-bottom">

                                        <div className="youtubeWidget-bottomControls">
                                            <span>
                                                <FontAwesomeIcon icon={faBackward} className="youtubeWidget-bottomControls-btn" onClick={handlePrevMusicClick} />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon 
                                                    icon={isMusicPlaying ? faPause : faPlay} 
                                                    className="youtubeWidget-bottomControls-btn" 
                                                    onClick={handlePlayPauseClick}
                                                    style={{
                                                        width: "17px", /* Parce que taille differente play/pause Icone */
                                                        transform: isHeadphonesHovered ? "scale(1.5)" : "", 
                                                    }} 
                                                />
                                            </span>
                                            <span>
                                                <FontAwesomeIcon icon={faForward} className="youtubeWidget-bottomControls-btn" onClick={handleNextMusicClick} />
                                            </span>
                                        </div>

                                    
                                    </div>


                                    {/* Barre d'avancement */}
                                    {/* <div>Progression : {progress.toFixed(2)}%</div> */}


                                </div>

                                {/* Notifs infos track */}
                                <div className={`musicTrack-infoNotif ${isTrackInfoActive ? "musicTrack-infoNotif-active" : ""}`}>
                                    <span dangerouslySetInnerHTML={{__html: musicTracks[currentMusicTrackIndex].credits}}></span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>


                {/* Cable portable desktop */}
                {/* <svg className="cablePortableSvg" >
                    <g>
                        <path d="M 33 261 C 49.5 114.75 94.5 92.25 94 12"/>
                    </g>
                </svg> */}
    
            </div>






            {/* Headphones casque (desktop) */}
            {!isMobile && (
                <Image 
                    src={"/headphones.png"}
                    width={450}
                    height={450}
                    className={`homePageHeadphones ${isFadingOut ? "fadeOutHeadPhones" : ""}`} 
                    onMouseEnter={handleHeadphonesEnter}
                    onMouseLeave={handleHeadphonesLeave}
                />

            )}







            {/* laptop */}
            <div className={`accueil-mockup ${isFadingOut ? "fadeOut" : ""}`} 
                onMouseEnter={handleMockupDeskEnter}
                onMouseLeave={handleMockupDeskLeave}
                onClick={handleMockupDeskClick}
            >

                {/* perspective écran */}
                <div className="accueil-mockup-top-wrapper">
                    <div 
                        className={`accueil-mockup-top`}
                    >


                        {/* Icone FA On/Off onHover laptop (desktop) */}
                        {!isMobile && (
                            <div 
                            className="laptopHoverIconPower"
                            style={{
                                opacity: isMockupDeskHovered ? "1" : "0",
                            }}
                            >
                                <FontAwesomeIcon icon={faPowerOff} />
                            </div>
                        )}




                        {/* screen */}
                        <div 
                            className="amt-imgWrapper"
                            style={{
                                // opacity: isMockupDeskHovered ? "0.2" : "1",
                                opacity: isMockupDeskHovered ? (!isMobile ? "0.4" : "1") : (isMobile ? "1" : "1"),
                            }}
                        >

                            {/* Reflet */}
                            <div className="laptop-reflect"></div>

                            <Image 
                                src={"/demo_short.gif"}
                                fill={true} 
                                alt="Portfolio demo" 
                                onLoadingComplete={handleVideoLoaded}
                                className={`${isMockupDeskClicked ? "amt-imgWrapperImg-fadeOut" : "amt-imgWrapperImg-fadeIn"}`}
                                // className={`${isMobile ? (isMockupDeskClicked ? "" : "") : (isMockupDeskClicked ? "amt-imgWrapperImg-fadeOut" : "amt-imgWrapperImg-fadeIn")}`}
                                unoptimized
                            />

                        </div>
                    </div>
                </div>


                {/* Pas de perspective sur le clavier comme il est à plat  */}
                <div className="accueil-mockup-bottom-wrapper">

                    {/* Câble laptop */}
                    <svg className="cableSvg" >
                        <g>
                            <path 
                                ref={pathRef} 
                                d="M 155 6 C 128 39 116 63 124 122 C 134 188 234 240 359 166 C 451 101 454 150 560 104" 
                            />
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
                    <div className={`homeMain-header`} >

                    

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

                        <Link onClick={(event) => handleClickLink(event, "/parcours")} href={"/parcours"} onMouseEnter={handleParcoursLinkEnter} onMouseLeave={handleParcoursLinkLeave} >
                            {/* Hover css li */}
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faPersonRunning} className="homePageNavIcons" style={{transform: isParcoursLinkHovered ? "scale(1.2) rotate(8deg)" : ""}} />
                                <h2>Parcours</h2>
                            </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/projets")} href={"/projets"} onMouseEnter={handleProjetsLinkEnter} onMouseLeave={handleProjetsLinkLeave} >
                            {/* Hover css li */}
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={faLightbulb} className="homePageNavIcons" style={{transform: isProjetsLinkHovered ? "scale(1.2) rotate(8deg)" : ""}} />
                                <h2>Projets</h2>
                            </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/loisirs")} href={"/loisirs"} onMouseEnter={handleLoisirsLinkEnter} onMouseLeave={handleLoisirsLinkLeave} >
                            {/* Hover css li */}
                            <li className="homeLinksLi">
                                <div className={`flashLoisirsIcon ${isLoisirsLinkHovered ? "flashLoisirsIconProc" : ""}`}></div>
                                <FontAwesomeIcon icon={faCamera} className="homePageNavIcons" style={{transform: isLoisirsLinkHovered ? "scale(1.2) rotate(8deg)" : ""}} />
                                <h2>Loisirs</h2>
                            </li>
                        </Link>

                        <Link onClick={(event) => handleClickLink(event, "/contact")} href={"/contact"} onMouseEnter={handleContactLinkEnter} onMouseLeave={handleContactLinkLeave} >
                            {/* Hover css li */}
                            <li className="homeLinksLi">
                                <FontAwesomeIcon icon={isContactLinkHovered ? faEnvelopeOpenText : faEnvelope} className="homePageNavIcons" style={{transform: isContactLinkHovered ? "scale(1.2) rotate(8deg)" : ""}} />
                                <h2>Contact</h2>
                            </li>
                        </Link>

                    </ul>
                </div>

            </div>


        </>
    )
}