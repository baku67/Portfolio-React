import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faPhp, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";



export function Skills() {

    return (

            // *** FontAwesome (meilleur régularité)
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


        // *** Devicons-react (coloré mais pas régulié)

        // <div>

        //     <h3>Compétences</h3>

        //     <ul className="skills-list">
        //         <li className="skill-li">
        //             <Html5Original />
        //         </li>
        //         <li className="skill-li">
        //             <Css3Original />
        //         </li>
        //         <li className="skill-li">
        //             <JavascriptOriginal />
        //         </li>
        //         <li className="skill-li">
        //             <ReactOriginal />
        //         </li>
        //         <li className="skill-li">
        //             <PhpPlain />
        //         </li>
        //         <li className="skill-li">
        //             <SymfonyOriginal style={{filter:"brightness(10) contrast(2)"}} />
        //         </li>
        //         <li className="skill-li">
        //             <MysqlOriginal />
        //         </li>
        //     </ul>

        // </div>
    )
}