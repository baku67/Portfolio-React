import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";



export function DownloadCvBtn() {

    return (

        <div>

            <div className="IconAndText" >

                <FontAwesomeIcon icon={faFileArrowDown} />
                <span>.pdf</span>

            </div>

        </div>
    )
}