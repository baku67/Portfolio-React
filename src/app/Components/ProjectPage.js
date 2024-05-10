
"use client";
import { useState } from "react";

import { CarrousselProject } from "./CarrousselProject";
import { IframeProject } from "./IframeProject";
import { ProjectsNav } from "./ProjectsNav";


export function ProjectPage() {

    const projects = [
        {
            id: 1,
            name: "SquadForge",
            primaryColor: "rgba(255,165,0,1)",
            slogan: "",
            description: "",
            skills: ["HTML/CSS", "Twig", "PHP", "Javascript", "Symfony", "BDD"],
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
        <>

            <h2 className="titleSection">Mes Projets</h2>

            <ProjectsNav nbrProjects={projects.length} actualProjectIndex={actualProjectIndex} changeActualProject={setActualProjectIndex} />



            <div className="projectPageWrapper">

                <IframeProject actualProject={projects[actualProjectIndex]} />
                
                <div>

                    <h2>{projects[actualProjectIndex].name}</h2>

                    <CarrousselProject actualProject={projects[actualProjectIndex]} />

                </div>
            </div>

        </>
    )
}