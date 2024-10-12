import COM from "../../Components.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useIsDesktop from '../../Hooks/useIsDesktop.jsx';
import AnimationFrame from '../../Components/animationFrame.jsx';

export default function Page({ children }) {

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event) }, []);

    return (
        <AnimationFrame>

        </AnimationFrame>
    );
}