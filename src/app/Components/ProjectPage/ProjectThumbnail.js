"use client";

export function ProjectThumbnail({project, isHovered, isMobile}) {




    return (
        <div style={{position:"relative"}}>

            <img 
                src={ isMobile ? project.thumbnail_isDesktop : project.thumbnail_isMobile } 
                className="projectCard_thumbnail" 
                style={{
                    borderColor: project.primaryColor, 
                    transform: isHovered ? "scale(1.03)" : "scale(1)"
                }} 
            />

            <div className="projectCard_thumbnail_homeShape isDesktop" style={{borderColor: project.primaryColor}}></div>

        </div>

    )
}