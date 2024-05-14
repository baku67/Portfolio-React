"use client";
import { useState } from "react"

import Tooltip from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faChevronLeft, faChevronRight, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { ProjectThumbnail } from "./ProjectThumbnail";
import GitHubCalendar from 'react-github-calendar';
import { ProjectCardInfos } from "./ProjectCardInfos";


export function LandingPageProjects({projects, selectProject}) {

    // API github
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    const [githubCardHovered, setGithubCardHovered] = useState(false);

    const githubCardEnter = () => {
        setGithubCardHovered(true);
    }
    const githubCardLeave = () => {
        setGithubCardHovered(false);
    }


    // Hover Card:
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnterLi = (index) => {
      setHoveredIndex(index);
    };
    const handleMouseLeaveLi = () => {
      setHoveredIndex(null);
    };


    // Click sur une Card:
    const handleClickProject = (index) => {
        console.log("index: " + index);
        selectProject(index);
    }


    // Custom Colors of githubCalendar:
    const explicitTheme = {
        light: ['#1d1d24', 'rgba(28,142,198,0.4)', 'rgba(28,142,198,0.6)', 'rgba(28,142,198,0.8)', 'rgba(28,142,198,1)'],
        dark: ['#1d1d24', 'rgba(28,142,198,0.4)', 'rgba(28,142,198,0.6)', 'rgba(28,142,198,0.8)', 'rgba(28,142,198,1)'],
      };



    return (
        <div>

            {/* Icone Page (top-right) */}
            <FontAwesomeIcon icon={faLightbulb} className="contactPage-icon" />

            {/* Shapes */}
            <div className="shapeProject1" style={{backgroundColor: "var(--primary-cyan)"}}></div>
            <div className="shapeProject2" style={{backgroundColor: "var(--primary-cyan)"}}></div>


            {/* Header */}
            <div className="projectPageHeader">
                <h2 className="titleSection" style={{marginBottom:"0.4em"}}>
                    <FontAwesomeIcon icon={faChevronLeft} className="faIcon-chevron" /> 
                    <span style={{margin:"0px 15px"}}>Mes Projets</span>
                    <span className="slash">/</span>
                    <FontAwesomeIcon icon={faChevronRight} className="faIcon-chevron" /> 
                </h2>
                <div className="headerSubTitle">
                    <FontAwesomeIcon icon={faCircleInfo} className="faIcon" />
                    <span> Cliquez sur un projet pour voir sa démo, sa description, etc...</span>
                </div>
            </div>


            {/* CARDS projets */}
            <ul className="projectCardsList">
                {projects.map( (project, index) => (
                    <li 
                        key={index}
                        className="projectCard"
                        onMouseEnter={() => handleMouseEnterLi(index)}
                        onMouseLeave={handleMouseLeaveLi}
                        style={{ 
                            transform: hoveredIndex === index ? "translateY(-10px)" : "translateY(0px)",
                            boxShadow: hoveredIndex === index ? "0px 6px 10px #00000070" : "0px 0px 0px #00000000",
                            backgroundColor: hoveredIndex === index ? "#10394d" : "var(--secondary-cyan)",
                            animationDelay: `${1 + index * 0.15}s`, // Global delay + individual delay
                            // borderColor: project.primaryColor,
                        }}
                        onClick={() => handleClickProject(project.id)}
                    >


                    {/* WIP projectCardHeader au dessus */}
                    
                    {/* <div 
                        className="projectCard_infos"
                        //   style={{transform: isHovered ? "translateY(7px)" : "translateY(0px)"}}
                    >
                        <h2 className="projectCard_title" style={{fontFamily: project.fontFamily, color: project.primaryColor}}>{project.name}</h2>
                        <p className="projectCard_description">{project.description}</p> 
                    </div> */}


                        <ProjectThumbnail project={project} isHovered={hoveredIndex === index ? true : false} />

                        <ProjectCardInfos project={project} isHovered={hoveredIndex === index ? true : false} token={token} owner="baku67" repo={project.repo_name} />
                    </li>
                ))}
            </ul>


            {/* GithubCalendar */}
            <a 
                href="https://github.com/baku67" 
                className="githubCalendarLink" 
                target="_blank"
            >
                <div 
                    className="githubCalendarDiv"
                    onMouseEnter={githubCardEnter}
                    onMouseLeave={githubCardLeave}
                    style={{
                        backgroundColor: githubCardHovered ? "var(--secondary-cyan)" : "transparent",
                        borderColor: githubCardHovered ? "transparent" : "transparent",
                    }}
                >
                    <div className="iconAndText" style={{marginBottom: "0.5em"}}>
                        <FontAwesomeIcon icon={faChartLine} className="faIcon" />
                        <h3 className="githubCalendarTitle">Activité :</h3>
                    </div>
                    {/* Props light/dark par exemple: https://grubersjoe.github.io/react-github-calendar/#/?user=baku67 */}
                    <GitHubCalendar username="baku67" theme={explicitTheme} />
                </div>
            </a>
            

        </div>
    )
}