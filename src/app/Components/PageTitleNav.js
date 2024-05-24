"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function PageTitleNav({title}) {




    return (
        <div className="projectPageHeader">
            <h2 className="titleSection">
                <FontAwesomeIcon icon={faBars} className="burgerIcon" />
                <span style={{margin:"0px 15px"}}>{title}</span>
            </h2>
        </div>
    )

}