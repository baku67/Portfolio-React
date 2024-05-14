
import { FigmaOriginal, VscodePlain, PostmanOriginal, PhotoshopOriginal , GitOriginal } from 'devicons-react';


export function Tools() {

    return (

        <div>

            <h3>Outils</h3>

            <ul className="tools-list">

                <li className="tool-li">
                    <FigmaOriginal />
                </li>

                <li className="tool-li">
                    <PhotoshopOriginal />
                </li>

                <li className="tool-li">
                    <PostmanOriginal />
                </li>

                <li className="tool-li">
                    <VscodePlain />
                </li>
                
                <li className="tool-li">
                    <GitOriginal />
                </li>

            </ul>

        </div>

    )
}