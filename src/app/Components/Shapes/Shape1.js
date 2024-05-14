

export function Shape1({projectColor}) {
    return (
        <>
            <div className="shapeProject1" style={{backgroundColor: projectColor ? projectColor : "var(--primary-cyan)"}}></div>
        </>
    )
}