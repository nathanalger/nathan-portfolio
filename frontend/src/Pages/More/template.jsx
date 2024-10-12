import COM from "../Components.jsx";
import { useState, useEffect } from 'react';
import AnimationFrame from '../Components/animationFrame.jsx';

export default function Page({ children }) {

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event) }, []);

    return (
        <AnimationFrame>

        </AnimationFrame>
    );
}