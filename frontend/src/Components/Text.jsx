import './CSS/Text.css';
import React, { useRef, useEffect, useState } from 'react';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';

const BigTitle = ({ children }) => {

    var desktop = "" + useIsDesktop().type;

    return (
        <h1 className={ "big-title " + desktop }>
            { children }
        </h1>
    );

}

const MediumTitle = ({ children }) => {

    var desktop = "" + useIsDesktop().type;

    return (
        <h1 className={"medium-title " + desktop}>
            {children}
        </h1>
    );

}

const Title = ({ children }) => {

    var desktop = "" + useIsDesktop().type;
    return (
        <h1 className={"title " + desktop}>
            {children}
        </h1>
    );

}

const Subtitle = ({ children }) => {

    var desktop = "" + useIsDesktop().type;
    return (
        <h2 className={"subtitle " + desktop}>
            {children}
        </h2>
    );

}

const Standard = ({ style, children }) => {
    if (!style) style = {};
    var desktop = "" + useIsDesktop().type;

    return (
        <p className={"std " + desktop} style={ style }>{children}</p>
    );
}

const Break = ({ size }) => {
    var desktop = "" + useIsDesktop().type;
    if (!size) size = '25px';

    return (<div style={{ width: '100%', display: 'block', height: size }}></div>);
}

const InlineIcon = ({ src, size }) => {

    var desktop = "" + useIsDesktop().type;
    if (!size) size = "15px";

    return (<img src={src} style={{ height: size }} className="inline-icon"></img>);
}

export default {
    "BigTitle": BigTitle,
    "MediumTitle": MediumTitle,
    "Title": Title,
    "Subtitle": Subtitle,
    "Break": Break,
    "InlineIcon": InlineIcon,
    "Standard": Standard
};