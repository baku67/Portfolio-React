import { CarrousselProject } from "./CarrousselProject";



export function ProjectInfos({actualProject, actualProjectIndex}) {

    return (

        <div className="projectInfosDiv">

            <span style={{opacity:0.7}}>Projet n°{actualProjectIndex +1}</span>

            <h2 style={{fontFamily: actualProject.fontFamily, color: actualProject.primaryColor}} className="projectName">{actualProject.name}</h2>

            <p className="projectDescription">{actualProject.description}</p>

            <ul className="projectSkillList">
                {actualProject.skills.map( (skill) => (
                    <li 
                        key={skill} 
                        style={{
                            backgroundColor: actualProject.primaryColor,
                            border: actualProject.primarySkill.includes(skill) ? "2px solid #0cedc8" : "2px solid transparent",
                            boxShadow: actualProject.primarySkill.includes(skill) ? "0 0 30px -4px #0ff" : "0 0 30px -4px rgba(0,0,0,0)"
                        }}
                    >
                        {skill}
                    </li>
                ))}
            </ul>

            <ul className="projectFuncList">
                {actualProject.fonctionalities.map( (func) => (
                    <li key={func} >{func}</li>
                ))}
            </ul>

            <CarrousselProject actualProject={actualProject} />

        </div>
    )
}