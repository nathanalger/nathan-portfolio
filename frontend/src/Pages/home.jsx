import COM from "../Components.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import AnimationFrame from '../Components/animationFrame.jsx';

export default function Home({ children }) {

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event) }, []);

    return (
        <AnimationFrame>
            <COM.BigHeader>
                <div>
                    <COM.Text.Break />
                    <COM.Text.Title>HELLO, I'M</COM.Text.Title>
                    <COM.Text.BigTitle>Nathan Alger</COM.Text.BigTitle>
                    <COM.Text.Break />
                    <COM.Text.Subtitle><COM.Text.InlineIcon size="14px" src="/location.svg" />  Linden, MI</COM.Text.Subtitle>
                    <COM.Text.Break size="50px" />
                    <COM.Button>Learn More</COM.Button>
                    <COM.Text.Break />
                </div>
            </COM.BigHeader>

            <COM.Article.Basic>

                <COM.Text.MediumTitle>ABOUT ME</COM.Text.MediumTitle>
                <hr />
                <COM.Text.Standard>
                    My full name is Nathaniel Alger (but most people call me Nathan) and I am a computer engineering student at Michigan Technological University. I was born in the small town of Linden, Michigan in 2005. My passion for technology started early - I've been working with computers since I was about 7 or 8 years old. I learned my first programming language around 12 years old, and I built my first computer at 14. At 16, I landed a job in computer repair at Affordable Computer Services in Fenton, where I refined my skills and developed my love for helping people and working with technology.
                </COM.Text.Standard>

                <COM.Text.Break />

                <COM.Text.Standard>
                    Since then, I have helped worked with many individuals and small businesses in the community to provide them cheap but effective services. I enjoy helping to provide effective solutions at low costs to companies, and letting them decide how it should be done. Additionally, I help to diagnose and repair computers for those who need it, as well as educating them on what happened, how I plan to fix it, and how it can be prevented in the future.
                </COM.Text.Standard>

            </COM.Article.Basic>

            <COM.Footer />
        </AnimationFrame>
    );
}