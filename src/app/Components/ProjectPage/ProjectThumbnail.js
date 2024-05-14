"use client";

export function ProjectThumbnail({project, isHovered}) {

    return (
        <div style={{position:"relative"}}>

            <img 
                src={project.thumbnail} 
                className="projectCard_thumbnail" 
                style={{
                    borderColor: project.primaryColor, 
                    transform: isHovered ? "scale(1.03)" : "scale(1)"
                }} 
            />

            <div className="projectCard_thumbnail_homeShape" style={{borderColor: project.primaryColor}}></div>

        </div>

    )
}