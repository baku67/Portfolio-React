import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faPhp, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";


export function Skills() {

    return (
        <div>

            <div>

                <h3>Compétences</h3>

                <ul className="skills-list">
                    <li>
                        <FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon" />
                    </li>
                    &nbsp;
                    <li>
                        <FontAwesomeIcon icon={faJs} className="skill-Fa-Icon" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faReact} className="skill-Fa-Icon" />
                    </li>
                    &nbsp;
                    <li>
                        <FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon" />
                    </li>
                    &nbsp;
                    <li>
                        <FontAwesomeIcon icon={faDatabase} className="skill-Fa-Icon" />
                    </li>

                </ul>

            </div>

            {/* <div>

                <h3>Outils</h3>

                <ul>
                    <li>
                        <FontAwesomeIcon icon="fa-brands fa-figma" />
                    </li>
                    <li>Photoshop</li>
                    <li>Postman</li>
                    <li>VsCode</li>
                    <li>Git</li>
                    <li>SvgPathEditor</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div> */}

        </div>
    )
}