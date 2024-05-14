
export function Shape2({projectColor}) {
    return (
        <>
            <div className="shapeProject2" style={{backgroundColor: projectColor ? projectColor : "var(--primary-cyan)"}}></div>
        </>
    )
}