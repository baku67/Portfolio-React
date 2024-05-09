
export function IframeProject({ actualProject }) {

    return (

        <div>
            <iframe src={actualProject.site_link}></iframe>
        </div>
        
    )
}