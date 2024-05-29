"use client";
import { useState } from "react"

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

import { Shape1 } from "../Shapes/Shape1";
import { Shape2 } from "../Shapes/Shape2";
import PageTitleNav from "../PageTitleNav";
import { ProjectThumbnail } from "./ProjectThumbnail";
import GitHubCalendar from 'react-github-calendar';
import { ProjectCardInfos } from "./ProjectCardInfos";
import { NavBar } from "../NavBar";

const ITEMS_PER_PAGE = 4; // Set the number of items per page


export function LandingPageProjects({projects, selectProject, isMobile}) {



    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    // Calculate the indices for slicing the projects array
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = projects.slice(startIndex, endIndex);
    // Calculate the total number of pages
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }




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



    // Click toggle Nav (isNavActive)
    const [isNavActive, setNavActive] = useState(false);
    const toggleNav = () => setNavActive(prevState => !prevState);

    // Outside click Nav
    const handleClickOutsideNav = () => {
        if(isNavActive) {
        setNavActive(prevState => !prevState);
        }
    }



    // Btn play/pause
    const [isPauseToggled, setIsPauseToggled] = useState(false);
    const handleTogglePlayPause = () => {
        setIsPauseToggled(!isPauseToggled);
    }



    return (

        <>
        
            <NavBar isNavActive={isNavActive} toggleNav={toggleNav} currentActive={"projets"} />

            <div 
                className="main scrollMobile" 
                style={{filter: isNavActive ? "brightness(0.5) blur(1px)" : ""}}
                onClick={handleClickOutsideNav}
            >

                {/* Icone Page (top-right) */}
                <FontAwesomeIcon icon={faLightbulb} className="pageIcon" />

                {/* Shapes neutres(cyan) */}
                <Shape1 />
                <Shape2 />


                <PageTitleNav 
                    title={"Projets"} 
                    onClickNav={toggleNav}
                />


                {/* CARDS projets */}
                <ul className="projectCardsList">

                    {currentProjects.map((project, index) => (

                    <li 
                        key={startIndex + index}
                        className="projectCard"
                        onMouseEnter={() => handleMouseEnterLi(startIndex + index)}
                        onMouseLeave={handleMouseLeaveLi}
                        style={{ 
                            transform: hoveredIndex === (startIndex + index) ? "translateY(-10px)" : "translateY(0px)",
                            boxShadow: hoveredIndex === (startIndex + index) ? "0px 6px 10px #00000070" : "0px 0px 0px #00000000",
                            background: hoveredIndex === (startIndex + index) ? "#10394d" : "linear-gradient(0deg, rgb(29, 29, 36) 70%, rgb(12, 46, 62) 100%)",
                            animationDelay: `${1 + (startIndex + index) * 0.15}s`, // Global delay + individual delay
                            borderColor: project.primaryColor, 
                        }} 
                        onClick={() => handleClickProject(project.id)}
                    >

                        <div className="projectCard_infos">

                            <h2 
                                className="projectCard_title" 
                                style={{
                                    fontFamily: project.fontFamily, 
                                    color: "var(--secondary-cyan)", 
                                    backgroundColor: project.primaryColor,
                                    fontWeight: project.title_bold ? "bold" : "normal"
                                }}
                            >
                                {project.name}
                            </h2>

                            <p className="projectCard_description">{project.description}</p> 

                        </div>

                        {/* <div className="projectCard_trait"></div> */}

                        <ProjectThumbnail project={project} isHovered={hoveredIndex === (startIndex + index) ? true : false} isMobile={isMobile} videoState={isPauseToggled} />
                        <ProjectCardInfos project={project} isHovered={hoveredIndex === (startIndex + index) ? true : false} token={token} owner="baku67" repo={project.repo_name} isMobile={isMobile} />

                    </li>

                    ))}
                </ul>

                {/* Pagination (ITEMS_PER_PAGE=4) */}
                <div className="paginationProject">

                    <div>
                        {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => handlePageChange(index + 1)} 
                            className={currentPage === index + 1 ? 'projectsPage-active' : 'projectsPage-NonActive'}
                        >
                            {index + 1}
                        </button>
                        ))}
                    </div>


                    <FontAwesomeIcon 
                        icon={isPauseToggled ? faCirclePlay : faCirclePause} 
                        onClick={handleTogglePlayPause}
                        className="faIcon-pausePlay"
                    />

                </div>



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
                        <div className="iconAndText githubCalendar-iconAndText" style={{marginBottom: "0.5em"}}>
                            {/* <FontAwesomeIcon icon={faChartLine} className="faIcon" />
                            <h3 className="githubCalendarTitle">Activité :</h3> */}
                            <FontAwesomeIcon icon={faGithub} className="faIcon faIcon-accueilGithub" />
                        </div>

                        {/* Props light/dark par exemple: https://grubersjoe.github.io/react-github-calendar/#/?user=baku67 */}
                        <GitHubCalendar 
                            username="baku67"
                            theme={explicitTheme} 
                            blockRadius="10"

                        />
                    </div>
                </a>


            </div>

        
        </>

    )
}