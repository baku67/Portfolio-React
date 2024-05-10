
"use client";
import { useState, useEffect } from "react";

import WebFont from 'webfontloader';

import { CarrousselProject } from "./CarrousselProject";
import { IframeProject } from "./IframeProject";
import { ProjectsNav } from "./ProjectsNav";


export function ProjectPage() {

    // Fonts
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Julius Sans One', 'Chilanka']
          }
        });
       }, []);


    const projects = [
        {
            id: 1,
            name: "SquadForge",
            fontFamily: "Julius Sans One",
            primaryColor: "#ffa012",
            logo: "./projects/logoSquadForge.png",
            slogan: "",
            description: "Plateforme communautaire \"Gaming\"",
            skills: ["HTML/CSS", "Javascript", "PHP", "Symfony", "BDD", "Twig", "DQL"],
            primarySkill : ["PHP", "Symfony"],
            github_link : "https://github.com/baku67/ELAN_Projet_SquadForge",
            site_link: "https://squadforge.ovh",

            fonctionalities: [
                "Autentification et rôles",
                "Système de modération (validation des publications, censure, signalements, sanctions)",
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
        {},
        {},
        {},
    ];

    const [actualProjectIndex, setActualProjectIndex] = useState(0);


    return (

        <div style={{zIndex:5, height:"100%"}}>

            {/* Shapes */}
            <div className="shapeProject1" style={{backgroundColor: projects[actualProjectIndex].primaryColor}}></div>
            <div className="shapeProject2" style={{backgroundColor: projects[actualProjectIndex].primaryColor}}></div>


            {/* Logo haut-droite */}
            <img src={projects[actualProjectIndex].logo} className="projectLogo" />

            {/* Header ("Mes Projets" + nav) */}
            <div className="projectPageHeader">
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
                
                <div className="projectInfosDiv">

                    <span style={{opacity:0.7}}>Projet n°{actualProjectIndex +1}</span>

                    <h2 style={{fontFamily: projects[actualProjectIndex].fontFamily, color: projects[actualProjectIndex].primaryColor}} className="projectName">{projects[actualProjectIndex].name}</h2>

                    <p className="projectDescription">{projects[actualProjectIndex].description}</p>

                    <ul className="projectSkillList">
                        {projects[actualProjectIndex].skills.map( (skill) => (
                            <li 
                                key={skill} 
                                style={{
                                    backgroundColor: projects[actualProjectIndex].primaryColor,
                                    border: projects[actualProjectIndex].primarySkill.includes(skill) ? "2px solid #0cedc8" : "2px solid transparent",
                                    boxShadow: projects[actualProjectIndex].primarySkill.includes(skill) ? "0 0 30px -4px #0ff" : "0 0 30px -4px rgba(0,0,0,0)"
                                }}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>

                    <ul className="projectFuncList">
                        {projects[actualProjectIndex].fonctionalities.map( (func) => (
                            <li key={func} >{func}</li>
                        ))}
                    </ul>

                    <CarrousselProject actualProject={projects[actualProjectIndex]} />

                </div>

            </div>

        </div>

    )
}