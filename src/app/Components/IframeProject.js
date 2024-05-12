"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export function IframeProject({ actualProject }) {

    const [iframeKey, setIframeKey] = useState(0);

    const [homeBtnHovered, setHomeBtnHovered] = useState(false);
    const [shutDownBtnHovered, setShutDownBtnHovered] = useState(false);

    const [iframeState, setIframeState] = useState(true);

    const projectColor = actualProject.primaryColor;

    const refreshIframe = () => {
        setIframeKey(iframeKey + 1);
    }

    const homeBtnEnter = () => {
        setHomeBtnHovered(true);
    }
    const homeBtnLeave = () => {
        setHomeBtnHovered(false);
    }

    const shutDownEnter = () => {
        setShutDownBtnHovered(true);
    }
    const shutDownLeave = () => {
        setShutDownBtnHovered(false);
    }

    const [gitBtnHovered, setGitBtnHovered] = useState(false);

    const projectGitHover = () => {
        setGitBtnHovered(true)
    }
    const projectGitLeave = () => {
        setGitBtnHovered(false)
    }

    const [siteBtnHovered, setSiteBtnHovered] = useState(false);

    const projectSiteHover = () => {
        setSiteBtnHovered(true)
    }
    const projectSiteLeave = () => {
        setSiteBtnHovered(false)
    }

    const toggleOnOff = () => {
        setIframeState(!iframeState);
    }





    return (

        <div className="iframeContainer" style={{borderColor: projectColor, boxShadow: "0 0 89px -11px " + projectColor}}>

            {/* "Testez-le" */}
            <div className="testezLe-div">
                <p>Testez-le</p>
                <svg fill={projectColor} >
                    <style type="text/css"></style>
                    <path className="st0" d="M17.7,19.8c2.7-0.8,5.7-0.8,8.6-0.4c3,0.4,5.9,1.3,8.7,2.4c5.3,2.1,10.2,5,14.6,8.6  c9.4,7.8,16.2,18.2,20.4,29.6c1.6,4.4,2.8,8.8,3.8,13.4C73,72.3,72,71.1,71,69.9c-3.1-3.7-6.5-7.3-10.1-10.6  c-0.7-0.6-1.8-0.5-2.6-0.2c-0.4,0.1-1.8,0.9-1.1,1.5c3.4,3.2,6.7,6.6,9.7,10.2c1.5,1.8,2.9,3.6,4.3,5.4c0.7,0.9,1.4,1.8,2,2.8  c0.4,0.5,0.7,1,1.1,1.5c0.2,0.4,0.7,0.8,0.5,1.2c-0.1,0.4,0.1,0.6,0.4,0.8c0.4,0.3,1.3,0.4,1.6,0.4c0.9-0.1,1.9-0.4,2.3-1.2  c3.7-7.2,5.7-15.2,5.8-23.3c0-0.3-0.5-0.5-0.7-0.6c-0.5-0.1-1-0.1-1.5,0C82.1,58,81,58.4,81,59.2c-0.1,5.3-1,10.5-2.7,15.5  c-2.1-11.4-6.1-22.5-12.6-32.1c-6.6-9.7-15.9-17.9-26.8-22.4c-7.2-2.9-15-4.3-22.6-2.1c-0.5,0.2-1.7,0.8-1.1,1.5  C15.7,20.4,17.1,20,17.7,19.8z"></path>
                </svg>
            </div>

            {/* Boutons déco mockup */}
            <div className="btnMockup0" style={{backgroundColor: projectColor}}></div>
            <div className="btnMockup1" style={{backgroundColor: projectColor}}></div>


            {/* Bouton on/off */}
            <div 
                className="btnShutDown" 
                onClick={toggleOnOff} 
                onMouseEnter={shutDownEnter}
                onMouseLeave={shutDownLeave}
                style={{backgroundColor: projectColor, width: shutDownBtnHovered ? "25px" : "4px", right: shutDownBtnHovered ? "-27px" : "-5px", borderTopRightRadius: shutDownBtnHovered ? "5px" : "0px", borderBottomRightRadius: shutDownBtnHovered ? "5px" : "0px" }}
            >
                {/* <i className="fa-solid fa-power-off"></i> */}
                <FontAwesomeIcon icon={faPowerOff} className="shutDownIcon" style={{ opacity: shutDownBtnHovered ? 1 : 0}}/>
            </div>


            {/* Bouton central refresh Iframe (en changeant la key) */}
            <div 
                className="btnRefresh" 
                onClick={refreshIframe} 
                onMouseEnter={homeBtnEnter}
                onMouseLeave={homeBtnLeave}
                style={{backgroundColor: homeBtnHovered ? projectColor : "black", borderColor: projectColor}}>
            </div>
            <div className="refreshInfoBtn" style={{backgroundColor: projectColor, opacity: homeBtnHovered ? 1 : 0}}>Refresh</div>


            {/* Boutons github et site */}
            <a href={actualProject.github_link}>
                <div className="projectGitBtn" style={{borderColor: projectColor, backgroundColor: gitBtnHovered ? projectColor : "rgb(37 37 38)"}} onMouseEnter={projectGitHover} onMouseLeave={projectGitLeave}>
                    <FontAwesomeIcon icon={faGithub} className="projectGitIcon" style={{color: projectColor, color: gitBtnHovered ? "rgb(37 37 38)" : projectColor}} />
                </div>
            </a>
            <a href={actualProject.site_link}>
                <div className="projectSiteBtn" style={{borderColor: projectColor, backgroundColor: siteBtnHovered ? projectColor : "rgb(37 37 38)"}} onMouseEnter={projectSiteHover} onMouseLeave={projectSiteLeave}>
                    <FontAwesomeIcon icon={faGlobe} className="projectSiteIcon" style={{color: projectColor, color: siteBtnHovered ? "rgb(37 37 38)" : projectColor}} />
                </div>
            </a>


            {/* Iframe */}
            <iframe key={iframeKey} src={iframeState && actualProject.site_link} className="iframe"></iframe>

        </div>

    )
}