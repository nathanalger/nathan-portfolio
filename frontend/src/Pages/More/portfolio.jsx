import COM from "../../Components.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useIsDesktop from '../../Hooks/useIsDesktop.jsx';
import AnimationFrame from '../../Components/animationFrame.jsx';

export default function Portfolio({ children }) {

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event); }, []);

    return (
        <AnimationFrame>
            <COM.BigHeader>
                    <div>
                        <COM.Text.Break />
                        <COM.Text.Title>OOPS! SORRY, STILL</COM.Text.Title>
                        <COM.Text.BigTitle>Under Construction</COM.Text.BigTitle>
                        <COM.Text.Break />
                    </div>
            </COM.BigHeader>

            <COM.Article.Basic>
                <COM.Text.Title>Come back later!</COM.Text.Title>
                <COM.Text.Standard>Sorry, you stumbled upon a page that is still yet to be completed. Please come back later!</COM.Text.Standard>
            </COM.Article.Basic>


            <COM.Footer />
        </AnimationFrame>
    );
}