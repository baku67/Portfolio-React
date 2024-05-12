"use client";

export function ProjectsNav({ nbrProjects, actualProjectIndex, actualProjectColor, changeActualProject }) {

    const projectIndices = [...Array(nbrProjects).keys()];

    const handleClick = (index) => {
        changeActualProject(index); 
    };


    return (

        <ul className="projectsNav-list">
            {projectIndices.map((index) => (

                <li 
                    key={index + 1} 
                    style={{backgroundColor: index === actualProjectIndex ? actualProjectColor : "black", color: index === actualProjectIndex ? "black" : "white"}}
                    onClick={() => handleClick(index)}
                >
                    {index + 1}
                </li>

            ))}
        </ul>

    )
}