import { useState } from "react";



export function BoutonSocials({href, iconSrcNormal, iconSrcHovered, btnTxt}) {


    const [btnHovered, setBtnHovered] = useState(false);
    const handleMouseHover = () => {
        setBtnHovered(true);
    }
    const handleMouseOut = () => {
        setBtnHovered(false);
    }


    return (
        <>
            <a href={href} target='_blank'>
                <div 
                    className="btnSocial-wrapper"
                    onMouseEnter={handleMouseHover}
                    onMouseLeave={handleMouseOut}
                >
                    <div 
                        className="btnSocial"
                        style={{backgroundColor: btnHovered ? "var(--primary-cyan)" : "transparent"}}
                    >
                        <img src={btnHovered ? iconSrcHovered : iconSrcNormal} className="btnSocial-icon" />
                        <span className="btnSocial-txt">{btnTxt}</span>
                    </div>
                </div>
            </a>
        </>
    )
}