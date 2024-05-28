import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faPhp, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



export function Skills() {

    return (

            <div>

                <h3>Compétences</h3>

                <ul className="skills-list">
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faJs} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faReact} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon" />
                    </li>
                    <li className="skill-li">
                        <FontAwesomeIcon icon={faDatabase} className="skill-Fa-Icon" />
                    </li>
                </ul>

        </div>


    )
}