
export function ProjectsNav({ nbrProjects, actualProjectIndex, changeActualProject }) {

    const projectIndices = [...Array(nbrProjects).keys()];

    const handleClick = (index) => {
        changeActualProject(index); 
    };


    return (

        <ul className="projectsNav-list">
            {projectIndices.map((index) => (

                <li 
                    key={index + 1} 
                    className={index === actualProjectIndex ? 'projectsNavActive' : ''} 
                    onClick={() => handleClick(index)}
                >
                    {index + 1}
                </li>

            ))}
        </ul>

    )
}