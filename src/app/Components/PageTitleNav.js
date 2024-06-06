"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function PageTitleNav({title, onClickNav}) {


    const [isPageTitleHovered, setPageTitleHovered] = useState(false);
    const handleMouseEnter = () => {
        setPageTitleHovered(true);
    }
    const handleMouseLeave = () => {
        setPageTitleHovered(false);
    }





    return (

        <>
        
            <div 
                className="projectPageHeader"
                onClick={onClickNav}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >

                <h2 className="titleSection">

                    {/* <FontAwesomeIcon icon={faBars} className="burgerIcon" /> */}
                    <div className="navBarsContainer">
                        <div className="navBars"></div>
                        <div className="navBars" style={{left: isPageTitleHovered ? "5px" : "0px"}}></div>
                        <div className="navBars" style={{left: isPageTitleHovered ? "10px" : "0px"}}></div>
                    </div>

                    <span className="pageHeader-title" style={{margin: isPageTitleHovered ? "0px 25px" : "0px 15px", letterSpacing: isPageTitleHovered ? "1px" : "0px"}}>{title}</span>

                </h2>

            </div>

        
        </>

    )

}