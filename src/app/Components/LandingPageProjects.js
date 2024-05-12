"use client";
import { useState } from "react"

import Tooltip from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faChevronLeft, faChevronRight, faChartLine } from "@fortawesome/free-solid-svg-icons";

import { ProjectThumbnail } from "./ProjectThumbnail";
import GitHubCalendar from 'react-github-calendar';
import { GithubRepoStats } from "./GithubRepoStats";


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


    return (
        <div>

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
                            backgroundColor: hoveredIndex === index ? "#434242" : "#363636",
                            animationDelay: `${1 + index * 0.15}s`, // Global delay + individual delay
                        }}
                        onClick={() => handleClickProject(project.id)}
                    >
                        <ProjectThumbnail project={project} isHovered={hoveredIndex === index ? true : false} />

                        <GithubRepoStats token={token} owner="baku67" repo={project.repo_name} />
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
                        backgroundColor: githubCardHovered ? "#434242" : "transparent",
                        borderColor: githubCardHovered ? "transparent" : "transparent",
                    }}
                >
                    <div className="iconAndText" style={{marginBottom: "0.5em"}}>
                        <FontAwesomeIcon icon={faChartLine} className="faIcon" />
                        <h3 className="githubCalendarTitle">Activité :</h3>
                    </div>
                    {/* Props light/dark par exemple: https://grubersjoe.github.io/react-github-calendar/#/?user=baku67 */}
                    <GitHubCalendar username="baku67" />
                </div>
            </a>
            

        </div>
    )
}