"use client";
import { CarrousselProject } from "./CarrousselProject";



export function ProjectInfos({actualProject, actualProjectIndex, isMobile, isFlipped}) {

    return (

        <div className="projectInfosDiv">

            <div>
                <span className="projectPageNumber">Projet n°{actualProjectIndex +1}</span>

                <div className={`projectPageInfoHeader ${isFlipped ? 'ppih-resp' : ''}`} style={{borderColor: actualProject.primaryColor}}>
                    <h2 style={{fontFamily: actualProject.fontFamily, color: actualProject.primaryColor}} className="projectName">{actualProject.name}</h2>
                    {!isMobile && (
                        <p className="projectDescription">{actualProject.description}</p>
                    )}
                    
                </div>

                <ul className="projectSkillList">
                    {actualProject.skills.map( (skill) => (
                        <li 
                            key={skill} 
                            style={{
                                backgroundColor: actualProject.primaryColor,
                                border: actualProject.primarySkill.includes(skill) ? "2px solid var(--primary-cyan)" : "2px solid transparent",
                                boxShadow: actualProject.primarySkill.includes(skill) ? "0 0 19px -4px var(--primary-cyan)" : "0 0 30px -4px rgba(0,0,0,0)"
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

            </div>

            <CarrousselProject actualProject={actualProject} />

           
        </div>
    )
}