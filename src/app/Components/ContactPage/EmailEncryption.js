// Email encodé pour empêcher Bots scrapping

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from "@fortawesome/free-solid-svg-icons";


function encodeEmail(email) {
    let encoded = '';
    for (let i = 0; i < email.length; i++) {
        encoded += "&#" + email.charCodeAt(i) + ";";
    }
    return encoded;
}

function decodeEmail(encodedEmail) {
    let decoded = '';
    const matches = encodedEmail.match(/&#[0-9]+;/g);
    if (matches) {
        matches.forEach(match => {
            const code = match.match(/[0-9]+/)[0];
            decoded += String.fromCharCode(code);
        });
    }
    return decoded;
}

function EmailEncryption() {
    const email = "basile08@hotmail.fr";
    const encodedEmail = encodeEmail(email);
    const decodedEmail = decodeEmail(encodedEmail);

    const handleEmailClick = () => {
        // window.location.href = `mailto:${decodedEmail}`;
        window.open(`mailto:${decodedEmail}`, '_blank');
    };

    return (
        <p className="iconAndText">
            <FontAwesomeIcon icon={faAt} className='faIcon' />
            <span 
                onClick={handleEmailClick} 
                alt={"Email encodé"} 
                className="emailContact" 
                style={{ cursor: 'pointer' }} 
                dangerouslySetInnerHTML={{ __html: encodedEmail }} 
            />
        </p>
    );
}

export default EmailEncryption;