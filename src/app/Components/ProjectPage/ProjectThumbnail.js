"use client";

export function ProjectThumbnail({project, isHovered, isMobile, videoState}) {


    const handleSrcImg = () => {

        if (isMobile) {

            return project.gif_demo_desktop;

        } else {

            if (isHovered) {

                return project.gif_demo_mobile;

            }
            else {

                return project.thumbnail_isMobile; 

            }
        }
    }


    return (
        <div className="projectCard-thumbnail">

            <div style={{width:"fit-content", margin:"0 auto"}}>

                <div className="reflet"></div>
 
                <img 
                    src={handleSrcImg()}
                    className="projectCard_thumbnail" 
                    style={{
                        borderColor: project.primaryColor, 
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                        boxShadow: isHovered ? `0px 0px 55px ${project.primaryColor}` : "",
                    }} 
                />
            </div>

            <div className="projectCard_thumbnail_homeShape isDesktop" style={{borderColor: project.primaryColor}}></div>

        </div>

    )
}