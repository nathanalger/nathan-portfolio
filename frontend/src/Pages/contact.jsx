import COM from "../Components.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import Form, { Inputs } from '../Components/formBasic.jsx'
import AnimationFrame from '../Components/animationFrame.jsx';
import UseAPI from '../API/API.jsx';

const Contact = ({ children }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event) }, []);

    return (
        <AnimationFrame>
            <COM.BigHeader>
                <div>
                    <COM.Text.Break />
                    <COM.Text.Title>WANT TO KNOW MORE?</COM.Text.Title>
                    <COM.Text.BigTitle>Contact me today!</COM.Text.BigTitle>
                    <COM.Text.Break />
                </div>
            </COM.BigHeader>

            <COM.Article.Basic>

                <Form onSubmit={() => { console.log(UseAPI().sendContact(name, email, message)) }}>
                    <COM.Text.Standard><i>Please provide your full name and email so I can respond to you in an appropriate manner and time frame. Thank you!</i></COM.Text.Standard>
                    <COM.Text.Break />

                    <COM.Text.Standard>Full Name:</COM.Text.Standard>
                    <Inputs.Text onChange={(e) => { setName(e.target.value); }} required />
                    <COM.Text.Break />

                    <COM.Text.Standard>Email:</COM.Text.Standard>
                    <Inputs.Text onChange={(e) => { setEmail(e.target.value); }} />
                    <COM.Text.Break />

                    <COM.Text.Standard>Message:</COM.Text.Standard>
                    <Inputs.Textarea onChange={(e) => { setMessage(e.target.value); }} required />
                    <COM.Text.Break />

                    <Inputs.Submit text="Send Message" />
                    <COM.Text.Break />
                </Form>
                
            </COM.Article.Basic>

            <COM.Footer />
        </AnimationFrame>
    );
}

export default Contact;