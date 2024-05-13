"use client";

export function ProjectThumbnail({project, isHovered}) {

    return (
        <>
            <img 
                src={project.thumbnail} 
                className="projectCard_thumbnail" 
                style={{
                    borderColor: project.primaryColor, 
                    transform: isHovered ? "scale(1.03)" : "scale(1)"
                }} 
            />

        </>

    )
}