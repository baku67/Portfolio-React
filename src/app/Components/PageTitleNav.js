"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function PageTitleNav({title, isMobile, onMouseEnterNav, onMouseLeaveNav, onClickNav}) {


    return (

        <>
        

            {isMobile ? (


                <div 
                    className="projectPageHeader"
                    onClick={onClickNav}
                >

                    <h2 className="titleSection">
                        <FontAwesomeIcon icon={faBars} className="burgerIcon" />
                        <span style={{margin:"0px 15px"}}>{title}</span>
                    </h2>

                </div>

            ) : (


                <div 
                    className="projectPageHeader"
                    onMouseEnter={onMouseEnterNav}
                    onMouseLeave={onMouseLeaveNav}
                >

                    <h2 className="titleSection">
                        <FontAwesomeIcon icon={faBars} className="burgerIcon" />
                        <span style={{margin:"0px 15px"}}>{title}</span>
                    </h2>

                </div>  

                
            )}

            




        
        </>

    )

}