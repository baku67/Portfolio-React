import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function PhoneNumberEncryption() {
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        // Obfuscate the phone number
        const obfuscatedNumber = '06' + '.' + '52' + '.' + '80' + '.' + '26' + '.' + '44';
        setPhoneNumber(obfuscatedNumber);
    }, []);

    return (
        <p className='iconAndText iconAndTextSocials'>
            <FontAwesomeIcon icon={faPhone} className="faIcon" style={{width:"28px", position:"relative", left:"3px", margin:"0px 16px"}} />
            <span className="localisationTxt">{phoneNumber}</span>
        </p>
    );
}