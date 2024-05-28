import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faPhp, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



export function Skills() {

    return (

        <div className="skills-div">

            <FontAwesomeIcon icon={faHtml5} className="skill-Fa-Icon" style={{color: "#ef6a32"}} />

            <FontAwesomeIcon icon={faCss3} className="skill-Fa-Icon" style={{color: "#3bacdd"}} />

            <FontAwesomeIcon icon={faJs} className="skill-Fa-Icon" style={{color: "#f7e02a"}} />

            <FontAwesomeIcon icon={faReact} className="skill-Fa-Icon" style={{color: "#21ddff"}}/>

            <FontAwesomeIcon icon={faPhp} className="skill-Fa-Icon" style={{color: "#7b7fb6"}} />

            <FontAwesomeIcon icon={faSymfony} className="skill-Fa-Icon" style={{color: "#ffffff"}} />

        </div>
    )
}