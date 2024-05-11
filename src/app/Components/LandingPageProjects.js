import { useState } from "react"

import Tooltip from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import GitHubCalendar from 'react-github-calendar';


export function LandingPageProjects({projects, selectProject}) {

    const [githubCardHovered, setGithubCardHovered] = useState(false);

    const githubCardEnter = () => {
        setGithubCardHovered(true);
    }
    const githubCardLeave = () => {
        setGithubCardHovered(false);
    }

    const handleClickProject = (index) => {
        console.log("index: " + index);
        selectProject(index);
    }


    return (
        <div>

            {/* Header */}
            <div className="projectPageHeader">
                <h2 className="titleSection">Mes Projets</h2>
                <div className="headerSubTitle">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span> Cliquez sur un projet pour voir sa démo, sa description, etc...</span>
                </div>
            </div>


            {/* CARDS projets sous forme de mockup clicables (img pas iframes) ? */}
            <ul className="projectCardsList">
                {projects.map( (project, index) => (
                    <li 
                        key={index}
                        className="projectCard"
                        // onMouseEnter={}
                        // onMouseLeave={}
                        // style={{}}
                        onClick={() => handleClickProject(project.id)}
                    >
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <span>Commits: API</span>
                    </li>
                ))}
            </ul>


            {/* GithubCalendar */}
            <a 
                href="https://github.com/baku67" 
                className="githubCalendarLink" 
                target="_blank"
                onMouseEnter={githubCardEnter}
                onMouseLeave={githubCardLeave}
            >
                <div 
                    className="githubCalendarDiv"
                    style={{
                        backgroundColor: githubCardHovered ? "#434242" : "#363636",
                        borderColor: githubCardHovered ? "lightgrey" : "transparent",
                    }}
                >
                    <h2 className="githubCalendarTitle">Activité :</h2>
                    {/* Props light/dark par exemple: https://grubersjoe.github.io/react-github-calendar/#/?user=baku67 */}
                    <GitHubCalendar username="baku67" />
                </div>
            </a>
            

        </div>
    )
}