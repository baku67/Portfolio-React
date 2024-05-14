// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneNumberEncryption from './PhoneNumberEncryption';
import EmailEncryption from './EmailEncryption';
import { BoutonSocials } from './BoutonSocials';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


export function Socials() {


    return (

        <div className="contact-section2">

            <BoutonSocials href={"www.linkedin.com/in/basile-kuntz-719278267"} iconSrcNormal={"./linkedin-tiny.png"} iconSrcHovered={"./linkedin-tiny-dark.png"} btnTxt={"Mon LinkedIn"} />

            <BoutonSocials href={"https://github.com/baku67"} iconSrcNormal={"./github-mark-white.png"} iconSrcHovered={"./github-mark-dark.png"} btnTxt={"Mon Github"} />


            <div className="socialsContactsDiv">

                <EmailEncryption />

                <PhoneNumberEncryption />

                <p className='iconAndText iconAndTextSocials' style={{marginBottom:"0px"}}>
                    <FontAwesomeIcon icon={faLocationDot} className="faIcon" style={{width:"34px"}} />
                    <span className="localisationTxt">Strasbourg</span>
                </p>

            </div>

        </div>
    )
}