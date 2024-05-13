// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import EmailEncryption from './EmailEncryption';
import { useState } from 'react';


export function Socials() {

    const [linkedinHovered, setLinkedinHovered] = useState(false);
    const handleEnterLinkedin = () => {
        setLinkedinHovered(true);
    }
    const handleLeaveLinkedin = () => {
        setLinkedinHovered(false);
    }

    const [githubHovered, setGithubHovered] = useState(false);
    const handleEnterGithub = () => {
        setGithubHovered(true);
    }
    const handleLeaveGithub = () => {
        setGithubHovered(false);
    }


    return (

        <div className="contact-section2">

            {/* WIP style btn */}
            {/* => Component ? */}
            <a href="www.linkedin.com/in/basile-kuntz-719278267" target='_blank'>
                <div 
                    className="btnSocial-wrapper"
                    onMouseEnter={handleEnterLinkedin}
                    onMouseLeave={handleLeaveLinkedin}
                >
                    <div 
                        className="btnSocial"
                        style={{backgroundColor: linkedinHovered ? "var(--primary-cyan)" : "transparent"}}
                    >
                        <img src={linkedinHovered ? "./linkedin-tiny-dark.png" : "./linkedin-tiny.png"} className="btnSocial-icon" />
                        <span className="btnSocial-txt">Mon LinkedIn</span>
                    </div>
                </div>
            </a>

            {/* WIP style btn */}
            <a href="https://github.com/baku67" target='_blank'>
                <div 
                    className="btnSocial-wrapper"
                    onMouseEnter={handleEnterGithub}
                    onMouseLeave={handleLeaveGithub}
                >
                    <div 
                        className="btnSocial"
                        style={{backgroundColor: githubHovered ? "var(--primary-cyan)" : "transparent"}}
                    >
                        <img src={githubHovered ? "./github-mark-dark.png" : "./github-mark-white.png"} className="btnSocial-icon" />
                        <span className="btnSocial-txt">Mon Github</span>
                    </div>
                </div>
            </a>

            <div>
                <EmailEncryption />
            </div>

        </div>
    )
}