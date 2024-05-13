"use client";
import { useState } from "react";


export function ProjectsNav({ nbrProjects, actualProjectIndex, actualProjectColor, changeActualProject }) {

    const projectIndices = [...Array(nbrProjects).keys()];

    const handleClick = (index) => {
        changeActualProject(index); 
    };

    // Hover des boutons de pagination projets
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleMouseEnterLi = (index) => {
      setHoveredIndex(index);
    };
    const handleMouseLeaveLi = () => {
      setHoveredIndex(null);
    };


    function backgroundLi(index) {

    }


    return (

        <ul className="projectsNav-list">
            {projectIndices.map((index) => (

                <li 
                    key={index + 1} 
                    onMouseEnter={() => handleMouseEnterLi(index)}
                    onMouseLeave={handleMouseLeaveLi}
                    style={{
                        // backgroundColor: index === actualProjectIndex ? actualProjectColor : "var(--secondary-cyan)", 
                        backgroundColor: index === actualProjectIndex 
                            ? actualProjectColor 
                            : (index === hoveredIndex ? "var(--primary-cyan)" : "var(--secondary-cyan"), 
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