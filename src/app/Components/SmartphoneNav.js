"use client"

import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import dynamic from 'next/dynamic';
const LiveClock = dynamic(() => import('react-live-clock'), { ssr: false });

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward, faSignal, faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";





export function SmartphoneNav({isMobile, isFadingOut}) {

        // Smartphone/portable hovers:
        const [isPhoneHovered, setIsPhoneHovered] = useState(false);
        const handlePhoneEnter = () => {
            setIsPhoneHovered(true);
        }
        const handlePhoneLeave = () => {
            setIsPhoneHovered(false);
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






        // Date portable
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        const formattedDate = date.toLocaleDateString('fr-FR', options);






    


    return(

        <>

            {/* Smartphone (desktop) */}
            <div 
                className={`portableNav`}
                onMouseEnter={handlePhoneEnter}
                onMouseLeave={handlePhoneLeave}
                style={{ 
                    // transform: isPhoneHovered ? "translate(-20px, 0px) rotate(11deg) scale(1.05)" : "rotate(13deg)"
                }}
            >
                
                {/* portable */}
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

                        <div className="portable-contentWrapper" >

                            <div className="portable-lockedScreen">
                                <span className="portable-time">
                                    <LiveClock format={'HH:mm'} ticking style={{fontFamily: 'Karla', lineHeight: "0.8em"}}/>
                                    <span className="portable-time-date">{formattedDate}</span>
                                </span>

                                <div 
                                    className="youtubeWidget-div"
                                    style={{filter: isPhoneHovered ? "drop-shadow(0px 0px 9px var(--primary-cyan))" : ""}}
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


        </>

    )
}