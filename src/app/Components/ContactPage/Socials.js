// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneNumberEncryption from './PhoneNumberEncryption';
import EmailEncryption from './EmailEncryption';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export function Socials({isMobile}) {


    const [linkedinIconHovered, setLinkedinIconHovered] = useState(false);
    const handleLinkedinEnter = () => {
        setLinkedinIconHovered(true);
    };
    const handleLinkedinLeave = () => {
        setLinkedinIconHovered(false);
    };

    
    const [githubIconHovered, setGithubIconHovered] = useState(false);
    const handleGithubEnter = () => {
        setGithubIconHovered(true);
    };
    const handleGithubLeave = () => {
        setGithubIconHovered(false);
    };



    return (

        <div className="contact-section2">

            <div className="contact-section2-wrap">

                <div className="contactBoutons-wrapper">

                    <a 
                        href="www.linkedin.com/in/basile-kuntz-719278267" 
                        onMouseEnter={handleLinkedinEnter} 
                        onMouseLeave={handleLinkedinLeave} 
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="contact-reseauIcon" style={{color: linkedinIconHovered ? "var(--primary-cyan)" : "white"}} />
                    </a>


                    <a href="https://github.com/baku67"
                        onMouseEnter={handleGithubEnter} 
                        onMouseLeave={handleGithubLeave}    
                    >
                        <FontAwesomeIcon icon={faGithub} className="contact-reseauIcon" style={{color: githubIconHovered ? "var(--primary-cyan)" : "white"}} />
                    </a>

                </div>


                <div className="socialsContactsDiv">

                    <EmailEncryption />

                    <PhoneNumberEncryption />

                    <span className='iconAndText iconAndTextSocials' style={{marginBottom:"0px"}}>
                        <FontAwesomeIcon icon={faLocationDot} className="faIcon faIcon-localisation" />
                        <span className="localisationTxt">Strasbourg</span>
                    </span>

                </div>

            </div>

        </div>
    )
}