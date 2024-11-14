import './CSS/Navbar.css'
import { navPages } from "../Pages.jsx";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import COM from "../Components.jsx";
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import useAccount from '../Hooks/useAccount.jsx';

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

    const acc = useAccount("Account").get("username").toUpperCase();

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
                                    <NavLink to={ item.link } className={"navButton " + desktop}>
                                        { item.displayName.toUpperCase() }
                                    </NavLink>
                                </li>
                            )) }
                            <li className="navPagesSection" key={navPages.length-1}>
                                <NavLink to={ "/account" } className={"navButton " + desktop}>
                                    { acc }
                                </NavLink>
                            </li>
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
                            <NavLink to={item.link} onClick={() => { toggleNav() } } key={index}>
                                    <li className={"mobileNavLinks "} >
                                        <p className={"navButton " + desktop}>
                                            {item.displayName.toUpperCase()}
                                        </p>
                                        <COM.Text.InlineIcon size="20px" src="/arrow.svg" />
                                    </li>
                                    <hr className="mobileLinkSpacer" />
                                </NavLink>
                        ))}
                        <NavLink to={"/account"} onClick={() => { toggleNav() } } key={navPages.length-1}>
                                    <li className={"mobileNavLinks "} >
                                        <p className={"navButton " + desktop}>
                                            {acc}
                                        </p>
                                        <COM.Text.InlineIcon size="20px" src="/arrow.svg" />
                                    </li>
                                    <hr className="mobileLinkSpacer" />
                                </NavLink>
                    </ul>
                </div>
                <div className="navSpacer"></div>
            </>
        );
    }

}

export default Navbar;