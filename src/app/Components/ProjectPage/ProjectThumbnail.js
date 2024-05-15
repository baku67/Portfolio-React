"use client";

export function ProjectThumbnail({project, isHovered, isMobile}) {


    const handleSrcImg = () => {
        if (isMobile) {
            return project.thumbnail_isDesktop; 
        } else {
            return project.thumbnail_isMobile; 
        }
    }


    return (
        <div style={{position:"relative", flex:0}}>

            <div style={{width:"fit-content", margin:"0 auto"}}>

                <div className="reflet"></div>
 
                <img 
                    src={handleSrcImg()}
                    className="projectCard_thumbnail" 
                    style={{
                        borderColor: project.primaryColor, 
                        transform: isHovered ? "scale(1.05)" : "scale(1)"
                    }} 
                />
            </div>

            <div className="projectCard_thumbnail_homeShape isDesktop" style={{borderColor: project.primaryColor}}></div>

        </div>

    )
}