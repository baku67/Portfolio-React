
"use client";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Anim flip card
import { useSpring, animated } from '@react-spring/web';

import { Shape1 } from "../Shapes/Shape1";
import { Shape2 } from "../Shapes/Shape2";
import { IframeProject } from "./IframeProject";
import { ProjectsNav } from "./ProjectsNav";
import { ProjectInfos } from "./ProjectInfos";
import { LandingPageProjects } from "./LandingPageProjects";



export function ProjectPage({isMobile}) {


    // Bouton retour vers landingPage projets:
    const [isBackBtnHovered, setIsBackBtnHovered] = useState(false);
    const backBtnEnter = () => {
        setIsBackBtnHovered(true);
    }
    const backBtnLeave = () => {
        setIsBackBtnHovered(false);
    }
    const handleBackBtn = () => {
        setActualProjectIndex(null);
    }


    // Projets DATA:
    const projects = [
        {
            id: 0,
            name: "SquadForge",
            // Nom en minuscule pour API
            repo_name: "ELAN_Projet_SquadForge",
            fontFamily: "Julius Sans One",
            primaryColor: "#ffa012",
            logo: "./projects/projects_logos/logoSquadForge_dark.png",
            shadowLogo: true,
            thumbnail_isMobile: "./projects/cards_thumbnails/squadforge.png",
            thumbnail_isDesktop: "./projects/cards_thumbnails/desktop/squadforge-min.png",
            slogan: "",
            description: "Plateforme communautaire \"Gaming\"",
            skills: ["HTML / CSS", "Javascript", "PHP", "Symfony", "BDD", "Twig", "DQL"],
            primarySkill : ["PHP", "Symfony"],
            github_link : "https://github.com/baku67/ELAN_Projet_SquadForge",
            site_link: "https://squadforge.ovh",

            fonctionalities: [
                "Authentification et rôles",
                "Système de modération \n (validation des publications, censure, signalements, sanctions)",
                "Signalements à la modération",
                "Publication de Topics, Médias, Commentaires",
                "Upvotes et likes/dislikes",
                "Création et candidatures de Teams",
                "Planifications de sessions de jeu",
                "Page d'accueil filtrée selon favoris",
                "Page de jeux personalisées \n",
            ],

            carroussel_imgs: [
                {
                    src: "./projects/squadforge1-min.png",
                    alt: "Slide 1",
                },
                {
                    src: "./projects/squadforge2-min.png",
                    alt: "Slide 2",
                },
                {
                    src: "./projects/squadforge3-min.png",
                    alt: "Slide 3",
                },
                {
                    src: "./projects/squadforge4-min.png",
                    alt: "Slide 4",
                },
                {
                    src: "./projects/squadforge5-min.png",
                    alt: "Slide 5",
                },
            ],
        },
        {
            id: 1,
            name: "BlackJack Jo'",
            // Nom en minuscule pour API
            repo_name: "blackjackjo-projet",
            fontFamily: "Kavoon",
            primaryColor: "#00ffea",
            logo: "./projects/projects_logos/logoBlackjackjo3_dark.png",
            shadowLogo: false,
            thumbnail_isMobile: "./projects/cards_thumbnails/blackjackjo.png",
            thumbnail_isDesktop: "./projects/cards_thumbnails/desktop/blackjackjo2-min.png",
            slogan: "",
            description: "Application web de Blackjack",
            skills: ["HTML / CSS", "Javascript", "PHP"],
            primarySkill : ["Javascript"],
            github_link : "https://github.com/baku67/BLACKJACKJO-projet",
            site_link: "https://www.blackjackjo.com",

            fonctionalities: [
                "Système de compte et sauvegarde",
                "Crédits quotidiens à la connexion",
                "Mode \"Invité\" sans compte",
                "Système de progression (expérience et niveaux)",
                "Système de \"Win-streak\"",
                "Classement et TOP3 sur l'accueil",
                "Historique des parties et stats personnelles",
                "Espace administrateur (logs, listes)",
                "Mode light/dark",
                "Mode \"turbo\" (distribution plus rapide)",
            ],

            carroussel_imgs: [
                {
                    src: "./projects/blackjackjo1-min.png",
                    alt: "Slide 1",
                },
                {
                    src: "./projects/blackjackjo2-min.png",
                    alt: "Slide 2",
                },
                {
                    src: "./projects/blackjackjo3-min.png",
                    alt: "Slide 3",
                },
                {
                    src: "./projects/blackjackjo4-min.png",
                    alt: "Slide 4",
                },

            ],
        },
        {
            id: 2,
            name: "Les 100 ciels",
            // Nom en minuscule pour API
            repo_name: "les100ciels-js-",
            fontFamily: "Montserrat Alternates",
            primaryColor: "#e8ca7d",
            logo: "./projects/projects_logos/logoLes100ciels_dark.png",
            shadowLogo: false,
            thumbnail_isMobile: "./projects/cards_thumbnails/les100ciels.png",
            thumbnail_isDesktop: "./projects/cards_thumbnails/desktop/les100ciels-min.png",
            slogan: "",
            description: "Site vitrine d'artiste",
            skills: ["HTML", "CSS", "Javascript", "PHP"],
            primarySkill : ["CSS", "Javascript"],
            github_link : "https://github.com/baku67/les100ciels-js-",
            site_link: "https://les100ciels.art",

            fonctionalities: [
                "Galleries, modals et navigation",
                "Librairie SplideJS",
                "Animations CSS",
                "Responsiv Design",
                "Formulaire de contact \n\n\n\n\n",
            ],

            carroussel_imgs: [
                {
                    src: "./projects/les100ciels1-min.png",
                    alt: "Slide 1",
                },
                {
                    src: "./projects/les100ciels2-min.png",
                    alt: "Slide 2",
                },
                {
                    src: "./projects/les100ciels3-min.png",
                    alt: "Slide 3",
                },
                {
                    src: "./projects/les100ciels4-min.png",
                    alt: "Slide 4",
                },
                {
                    src: "./projects/les100ciels5-min.png",
                    alt: "Slide 5",
                },
                {
                    src: "./projects/les100ciels6-min.png",
                    alt: "Slide 6",
                },
            ],
        },
        {
            id: 3,
            name: "Portfolio v1",
            // Nom en minuscule pour API
            repo_name: "Portfolio-v2",
            fontFamily: "Nunito",
            primaryColor: "#ef3b2d",
            logo: "./projects/projects_logos/portfolioV1.png",
            shadowLogo: false,
            thumbnail_isMobile: "./projects/cards_thumbnails/portfolioV2.png",
            thumbnail_isDesktop: "./projects/cards_thumbnails/desktop/portfolio1-min.png",
            slogan: "",
            description: "Portfolio \"from scratch\"",
            skills: ["HTML", "CSS", "Javascript"],
            primarySkill : ["CSS", "Javascript"],
            github_link : "https://github.com/baku67/Portfolio-v2",
            site_link: "https://bk-dev.fr/cv.html",

            fonctionalities: [
                "Multi-pages et navigation",
                "Animation CSS orchestrées avec Javascript",
                "Tracé de SVG \"fait-main\"",
                "Projets utilisables directement sur le site \n\n\n\n\n\n",
            ],

            carroussel_imgs: [
                {
                    src: "./projects/portfolio1-min.png",
                    alt: "Slide 1",
                },
                {
                    src: "./projects/portfolio2-min.png",
                    alt: "Slide 2",
                },
                {
                    src: "./projects/portfolio3-min.png",
                    alt: "Slide 3",
                },
                {
                    src: "./projects/portfolio4-min.png",
                    alt: "Slide 4",
                },
            ],
        },
        {
            id: 4,
            name: "Terrine",
            // Nom en minuscule pour API
            repo_name: "ELAN_MVC_cinema",
            fontFamily: "Righteous",
            primaryColor: "#fecc02",
            logo: "./projects/projects_logos/terrine4.png",
            shadowLogo: false,
            thumbnail_isMobile: "./projects/cards_thumbnails/terrine.png",
            thumbnail_isDesktop: "./projects/cards_thumbnails/desktop/terrine.png",
            slogan: "",
            description: "Plateforme cinématographique",
            skills: ["HTML : CSS", "Javascript", "PHP", "MVC"],
            primarySkill : ["MVC"],
            github_link : "https://github.com/baku67/ELAN_MVC_cinema",
            site_link: "https://eneffet.basilek.ovh",

            fonctionalities: [
                "Pages de listings \n (Acteurs, Réalisateurs, Films)",
                "Casting des films",
                "Pages détaillées et liens/connections",
                "Formulaire d'ajout \n\n\n\n\n",
            ],

            carroussel_imgs: [
                {
                    src: "./projects/terrine1-min.png",
                    alt: "Slide 1",
                },
                {
                    src: "./projects/terrine2-min.png",
                    alt: "Slide 2",
                },
                {
                    src: "./projects/terrine3-min.png",
                    alt: "Slide 3",
                },
                {
                    src: "./projects/terrine4-min.png",
                    alt: "Slide 4",
                },
                {
                    src: "./projects/terrine5-min.png",
                    alt: "Slide 5",
                },
            ],
        },

    ];


    // flip card (mobile)
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80, duration: 500 },
    });

    const handleFlip = () => {
        setFlipped(!flipped);
    };


    // null ? landingPage : projet n°X
    const [actualProjectIndex, setActualProjectIndex] = useState(null);


    



    return (

        <>

            {actualProjectIndex !== null ? (
                
                <div style={{zIndex:5, height:"100%"}}>


                    {/* Shapes adaptées*/}
                    <Shape1 projectColor={projects[actualProjectIndex].primaryColor} />
                    <Shape2 projectColor={projects[actualProjectIndex].primaryColor} />

                    {/* Logo haut-droite */}
                    <img 
                        src={projects[actualProjectIndex].logo} 
                        style={{filter: projects[actualProjectIndex].shadowLogo ? "drop-shadow(0px 0px 1px rgba(0,0,0,0.7))" : "none"}}
                        className="projectLogo" 
                    />

                    {/* Header ("Mes Projets" + nav) */}
                    <div className="projectPageHeader pPH-resp">

                        <div className="porjectPageHeaderTitle">
                            <FontAwesomeIcon 
                                icon={faArrowLeft} 
                                className="backToProjectsBtn" 
                                onMouseEnter={backBtnEnter}
                                onMouseLeave={backBtnLeave}
                                onClick={handleBackBtn}
                                style={{opacity: isBackBtnHovered ? 0.5 : 1}}
                            />

                            <h2 className="titleSection">Mes Projets</h2>
                        </div>

                        <ProjectsNav 
                            nbrProjects={projects.length} 
                            actualProjectIndex={actualProjectIndex} 
                            actualProjectColor={projects[actualProjectIndex].primaryColor}
                            changeActualProject={setActualProjectIndex} 
                        />

                    </div>



                    {/* TODO sorti le conditional rendering de la classe (et sur mobile le scale concerne que le iframeProjec pas le title etc) */}
                    {/* Structure HTML différente mobile/desktop */}
                    <div className="projectPageWrapper">

                        {isMobile ? (

                            // <div onClick={() => setFlipped(!flipped)}>
                            <div>

                                {/* FRONT CARD (mobile) */}
                                <animated.div
                                    style={{
                                        opacity: opacity.interpolate(o => 1 - o),
                                        transform,
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    {/* Titre + bouton toggle cardInfos + les 2 btn Github et linkedin */}
                                    <div className="projectPageInfoHeader" style={{borderColor: projects[actualProjectIndex].primaryColor}}>
                                        <h2 style={{fontFamily: projects[actualProjectIndex].fontFamily, color: projects[actualProjectIndex].primaryColor}} className="projectName">{projects[actualProjectIndex].name}</h2>
                                        <p className="projectDescription">{projects[actualProjectIndex].description}</p>
                                    </div>

                                    <IframeProject 
                                        actualProject={projects[actualProjectIndex]} 
                                        isMobile={isMobile}
                                        flipped={flipped} 
                                        handleFlip={handleFlip} 
                                    />


                                    {/* Flip card */}
                                    <div className="toggleFlipCard" onClick={handleFlip}>
                                        <svg fill={projects[actualProjectIndex].primaryColor}>
                                            <style type="text/css"></style>
                                            <g>
                                                <path class="st0" d="M32.2,7.9v20.2c0,2.1-1.7,3.8-3.8,3.8h-13c-2.1,0-3.8-1.7-3.8-3.8v-3.3l2.8,0.6V28c0,0.6,0.5,1.1,1.1,1.1h12.8   c0.6,0,1.1-0.5,1.1-1.1V8.1c0-0.6-0.5-1.1-1.1-1.1H15.5c-0.6,0-1.1,0.5-1.1,1.1v7.5l-2.8-0.2v-2.5c-5.6,2.6-4.3,3.9-1.2,4.6   c0.4,0.1,0.8,0.2,1.2,0.2c0.9,0.1,1.9,0.2,2.8,0.3c0.6,0.1,1.2,0.1,1.8,0.1c2,0.1,3.5,0.1,3.5,0.1v-3.1c0-0.5,0.6-0.4,0.8-0.2   l5.8,4l2.3,1.6c0.2,0.2,0.2,0.5,0,0.8l-2.3,1.6l-2.8,2l-2.9,2c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.4,0-0.4-0.3v-2.5   c-1.5-0.3-2.9-0.5-4.2-0.8c-0.4-0.1-0.7-0.2-1.1-0.2c-1-0.2-2-0.5-2.8-0.7c-0.7-0.2-1.3-0.4-1.9-0.6c-14.4-5.1,1.9-11.1,1.9-11.1   V7.9c0-2.1,1.7-3.8,3.8-3.8h13C30.5,4.1,32.2,5.8,32.2,7.9z"/>
                                            </g>
                                        </svg>
                                    </div>

                                </animated.div>


                                {/* BACK CARD (mobile) */}     
                                <animated.div
                                    style={{
                                        opacity,
                                        transform: transform.interpolate(t => `${t} rotateY(180deg)`),
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >

                                        <span>BLALKE Z EF ZEF ZEF ZEF ZE</span>

                                        {/* Bouton flip card (Mobile) */}
                                        {isMobile && (
                                            <div className="toggleFlipCard" onClick={handleFlip}>
                                                {/* Btn FLIP */}
                                                <svg fill={projects[actualProjectIndex].primaryColor}>
                                                    <style type="text/css"></style>
                                                    <g>
                                                        <path class="st0" d="M32.2,7.9v20.2c0,2.1-1.7,3.8-3.8,3.8h-13c-2.1,0-3.8-1.7-3.8-3.8v-3.3l2.8,0.6V28c0,0.6,0.5,1.1,1.1,1.1h12.8   c0.6,0,1.1-0.5,1.1-1.1V8.1c0-0.6-0.5-1.1-1.1-1.1H15.5c-0.6,0-1.1,0.5-1.1,1.1v7.5l-2.8-0.2v-2.5c-5.6,2.6-4.3,3.9-1.2,4.6   c0.4,0.1,0.8,0.2,1.2,0.2c0.9,0.1,1.9,0.2,2.8,0.3c0.6,0.1,1.2,0.1,1.8,0.1c2,0.1,3.5,0.1,3.5,0.1v-3.1c0-0.5,0.6-0.4,0.8-0.2   l5.8,4l2.3,1.6c0.2,0.2,0.2,0.5,0,0.8l-2.3,1.6l-2.8,2l-2.9,2c-0.1,0.1-0.3,0.2-0.4,0.2c-0.1,0-0.4,0-0.4-0.3v-2.5   c-1.5-0.3-2.9-0.5-4.2-0.8c-0.4-0.1-0.7-0.2-1.1-0.2c-1-0.2-2-0.5-2.8-0.7c-0.7-0.2-1.3-0.4-1.9-0.6c-14.4-5.1,1.9-11.1,1.9-11.1   V7.9c0-2.1,1.7-3.8,3.8-3.8h13C30.5,4.1,32.2,5.8,32.2,7.9z"/>
                                                    </g>
                                                </svg>
                                            </div>
                                        )}
                                </animated.div>
                                    
                                    {/* Card infos retournée : toggleBtn */}
                                    {/* <ProjectInfos actualProject={projects[actualProjectIndex]} actualProjectIndex={actualProjectIndex} /> */}

                            </div>

                        ) : (

                            <>
                                <IframeProject actualProject={projects[actualProjectIndex]} />
                            
                                <ProjectInfos actualProject={projects[actualProjectIndex]} actualProjectIndex={actualProjectIndex} />
                            </>
                        )}
                        

                    </div>

                </div>

            ) : (

                <LandingPageProjects projects={projects} selectProject={setActualProjectIndex} isMobile={isMobile} />

            )}

        </>

    )
}