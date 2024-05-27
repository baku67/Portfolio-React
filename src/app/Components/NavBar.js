import Link from 'next/link';


export function NavBar({isNavActive, toggleNav, currentActive}) {


    return (
        <>
            <div 
                className={`navBar ${isNavActive ? 'activeNav' : ''}`}
            >

                <div className="navBar-topLine">
                    <span className="navBar-topLine-exitBtn" onClick={toggleNav}>&#x2716;</span>
                </div>

                <div className="navBar-list-wrapper">
                    <ul className="navBar-list-ul">

                    <Link href="/">
                        <li className={currentActive === '' ? "navBar-li-active" : ""}>Accueil</li>
                    </Link>

                    <Link href="/parcours">
                        <li className={currentActive === 'parcours' ? "navBar-li-active" : ""}>Parcours</li>
                    </Link>
                    
                    <Link href="/projets">
                        <li className={currentActive === 'projets' ? "navBar-li-active" : ""}>Projets</li>
                    </Link>

                    <Link href="/loisirs">
                        <li className={currentActive === 'loisirs' ? "navBar-li-active" : ""}>Loisirs</li>
                    </Link>
                    
                    <Link href="/contact">
                        <li className={currentActive === 'contact' ? "navBar-li-active" : ""}>Contact</li>
                    </Link>

                    </ul>
                </div>

            </div>

        </>
    )
}