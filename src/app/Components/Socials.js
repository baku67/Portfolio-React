// Bootstrap Components & CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export function Socials() {

    return (

        <div>

            {/* WIP style btn */}
            <a href="www.linkedin.com/in/basile-kuntz-719278267" target='_blank'>
                <Button variant="dark" className="btnLinkedIn">
                    <img src={"./linkedin-tiny.png"} /><span>&nbsp;Connectons-nous</span>
                </Button>
            </a>

            {/* WIP style btn */}
            <a href="https://github.com/baku67" target='_blank'>
                <Button variant="dark" className="btnLinkedIn">
                    <img src={"./github-mark-white.png"} /><span>&nbsp;Visitez mon Github</span>
                </Button>
            </a>

        </div>
    )
}