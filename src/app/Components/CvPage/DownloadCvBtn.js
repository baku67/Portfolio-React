import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";



export function DownloadCvBtn({isMobile}) {

    return (

        <div>

            <a href={"./CV_BasileKuntz.pdf"} dowload={"CV_BasileKuntz.pdf"} target="_blank" rel="noopener noreferrer">

                <div className="IconAndText" >

                    <FontAwesomeIcon icon={faFileArrowDown} />
                    <span>{isMobile ? ".pdf" : "Version .pdf"}</span>

                </div>

            </a>

        </div>
    )
}