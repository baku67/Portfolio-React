

export function ProjectThumbnail({project, isHovered}) {

    console.log("isHoevered: " + isHovered)

    return (
        <>
            <img src={project.thumbnail} className="projectCard_thumbnail" style={{borderColor: project.primaryColor, transform: isHovered ? "scale(1.05)" : "scale(1)"}} />

            <div className="projectCard_infos">

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