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

            <div 
                className="projectCard_infos"
                style={{transform: isHovered ? "translateY(7px)" : "translateY(0px)"}}
            >

                <h2 className="projectCard_title" style={{fontFamily: project.fontFamily, color: project.primaryColor}}>{project.name}</h2>

                <p className="projectCard_description">{project.description}</p> 

                <ul className="projectCard_primSkills">
                    {project.primarySkill.map( (skill, index) => (
                        <li key={index} style={{backgroundColor:project.primaryColor}}>{skill}</li>
                    ))}
                </ul>

            </div>
        </>

    )
}