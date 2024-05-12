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
                    style={{
                        backgroundColor: index === actualProjectIndex ? actualProjectColor : "var(--secondary-cyan)", 
                        color: index === actualProjectIndex ? "black" : "white",
                        fontWeight: index === actualProjectIndex ? "bold" : "normal",
                    }}
                    onClick={() => handleClick(index)}
                >
                    {index + 1}
                </li>

            ))}
        </ul>

    )
}