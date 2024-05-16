"use client";

export function ProjectThumbnail({project, isHovered, isMobile, gifState}) {


    const handleSrcImg = () => {

        if (isMobile) {

            if(gifState) {
                return project.gif_demo_desktop;
            }
            else {
                return project.thumbnail_isDesktop; 
            }


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
        <div style={{position:"relative", flex:1, display:"inline-flex", alignItems:"end"}}>

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