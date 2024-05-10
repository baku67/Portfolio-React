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