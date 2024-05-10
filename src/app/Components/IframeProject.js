import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

export function IframeProject({ actualProject }) {

    const [iframeKey, setIframeKey] = useState(0);

    const [homeBtnHovered, setHomeBtnHovered] = useState(false);
    const [shutDownBtnHovered, setShutDownBtnHovered] = useState(false);

    const [iframeState, setIframeState] = useState(true);

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

    const toggleOnOff = () => {
        setIframeState(!iframeState);
    }

    return (

        <div className="iframeContainer" style={{borderColor: actualProject.primaryColor}}>

            {/* Boutons déco mockup */}
            <div className="btnMockup0" style={{backgroundColor: actualProject.primaryColor}}></div>
            <div className="btnMockup1" style={{backgroundColor: actualProject.primaryColor}}></div>

            {/* Bouton on/off */}
            <div 
                className="btnShutDown" 
                onClick={toggleOnOff} 
                onMouseEnter={shutDownEnter}
                onMouseLeave={shutDownLeave}
                style={{backgroundColor: actualProject.primaryColor, width: shutDownBtnHovered ? "25px" : "4px", right: shutDownBtnHovered ? "-27px" : "-5px", borderTopRightRadius: shutDownBtnHovered ? "5px" : "0px", borderBottomRightRadius: shutDownBtnHovered ? "5px" : "0px" }}
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
                style={{backgroundColor: homeBtnHovered ? actualProject.primaryColor : "black", borderColor: actualProject.primaryColor}}>
            </div>

            <div className="refreshInfoBtn" style={{backgroundColor: actualProject.primaryColor, opacity: homeBtnHovered ? 1 : 0}}>Refresh</div>


            <iframe key={iframeKey} src={iframeState && actualProject.site_link} className="iframe"></iframe>

        </div>

    )
}