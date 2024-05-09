
export function IframeProject({ actualProject }) {

    return (

        <div>

            <iframe src={actualProject.site_link} className="iframe"></iframe>

        </div>

    )
}