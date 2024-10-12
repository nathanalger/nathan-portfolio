import './CSS/Navbar.css'
import { navPages } from "../Pages.jsx";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import COM from "../Components.jsx";
import useIsDesktop from '../Hooks/useIsDesktop.jsx';

const Navbar = ({ children }) => {

    var desktop = useIsDesktop().type;

    const [mode, setMode] = useState("closed");

    const toggleNav = () => {
        if (mode == "closed") {
            setMode("open");
        } else {
            setMode("closed");
        }
    }

    const thickText = "NATHAN";
    const thinText = "ALGER";

    if (desktop == 'desktop') {
        return (
            <>
                <nav className={"navbar"}>
                    <div className="navLogoSection">
                        <p id="thick">{thickText}&nbsp;</p>
                        <p id="thin">{thinText}</p>
                    </div>

                    <div className="navPagesSection">
                        <ul>
                            { navPages.map((item, index) => (
                                <li className="navPagesSection" key={index}>
                                    <Link to={ item.link } className={"navButton " + desktop}>
                                        { item.displayName.toUpperCase() }
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                </nav>
                <div className="navSpacer"></div>
            </>
        );
    } else {
        return (
            <>
                <nav className={"navbar " + mode + " mobile"} onClick={() => { toggleNav() } }>
                    <div className="icon-spacer-mobile" />
                    <div className="logo-container-mobile">
                        <p id="thick">{ thickText }&nbsp;</p>
                        <p id="thin">{ thinText }</p>
                    </div>
                    <div className="icon-container-mobile">
                        <img id="logo" src="/65x.svg"></img>
                    </div>
                </nav>
                <div className={"mobileNavLinks " + mode}>
                    <ul>
                        {navPages.map((item, index) => (
                            <Link to={item.link} onClick={() => { toggleNav() } } key={index}>
                                    <li className={"mobileNavLinks "} >
                                        <p className={"navButton " + desktop}>
                                            {item.displayName.toUpperCase()}
                                        </p>
                                        <COM.Text.InlineIcon size="20px" src="/arrow.svg" />
                                    </li>
                                    <hr className="mobileLinkSpacer" />
                                </Link>
                        ))}
                    </ul>
                </div>
                <div className="navSpacer"></div>
            </>
        );
    }

}

export default Navbar;