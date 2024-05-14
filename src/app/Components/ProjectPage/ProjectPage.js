
"use client";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { IframeProject } from "./IframeProject";
import { ProjectsNav } from "./ProjectsNav";
import { ProjectInfos } from "./ProjectInfos";
import { LandingPageProjects } from "./LandingPageProjects";



export function ProjectPage() {


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
            thumbnail: "./projects/cards_thumbnails/squadforge.png",
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
                "Page de jeux personalisées",
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
            thumbnail: "./projects/cards_thumbnails/blackjackjo.png",
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
            thumbnail: "./projects/cards_thumbnails/les100ciels.png",
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
                "Formulaire de contact",
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
            thumbnail: "./projects/cards_thumbnails/portfolioV2.png",
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
                "Projets utilisables directement sur le site",
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
        {
            id: 4,
            name: "Terrine",
            // Nom en minuscule pour API
            repo_name: "ELAN_MVC_cinema",
            fontFamily: "Righteous",
            primaryColor: "#fecc02",
            logo: "",
            shadowLogo: false,
            thumbnail: "./projects/cards_thumbnails/terrine.png",
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
                "Formulaire d'ajout",
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


    // null ? landingPage : projet n°X
    const [actualProjectIndex, setActualProjectIndex] = useState(null);

    



    return (

        <>

            {actualProjectIndex !== null ? (
                
                <div style={{zIndex:5, height:"100%"}}>

                    {/* Shapes */}
                    <div className="shapeProject1" style={{backgroundColor: projects[actualProjectIndex].primaryColor}}></div>
                    <div className="shapeProject2" style={{backgroundColor: projects[actualProjectIndex].primaryColor}}></div>


                    {/* Logo haut-droite */}
                    <img 
                        src={projects[actualProjectIndex].logo} 
                        style={{filter: projects[actualProjectIndex].shadowLogo ? "drop-shadow(0px 0px 1px rgba(0,0,0,0.7))" : "none"}}
                        className="projectLogo" 
                    />


                    {/* Header ("Mes Projets" + nav) */}
                    <div className="projectPageHeader">

                        <FontAwesomeIcon 
                            icon={faArrowLeft} 
                            className="backToProjectsBtn" 
                            onMouseEnter={backBtnEnter}
                            onMouseLeave={backBtnLeave}
                            onClick={handleBackBtn}
                            style={{opacity: isBackBtnHovered ? 0.5 : 1}}
                        />

                        <h2 className="titleSection">Mes Projets</h2>

                        <ProjectsNav 
                            nbrProjects={projects.length} 
                            actualProjectIndex={actualProjectIndex} 
                            actualProjectColor={projects[actualProjectIndex].primaryColor}
                            changeActualProject={setActualProjectIndex} 
                        />

                    </div>



                    <div className="projectPageWrapper">

                        <IframeProject actualProject={projects[actualProjectIndex]} />
                        
                        <ProjectInfos actualProject={projects[actualProjectIndex]} actualProjectIndex={actualProjectIndex} />

                    </div>

                </div>

            ) : (

                <LandingPageProjects projects={projects} selectProject={setActualProjectIndex} />

            )}

        </>

    )
}