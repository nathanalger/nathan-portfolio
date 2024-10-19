import COM from "../../Components.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimationFrame from '../../Components/animationFrame.jsx';
import CreateAccount from './createAccount.jsx';
import Login from './login.jsx';

export default function Account({ children, open }) {

    const event = new Event("pagechange");
    useEffect(() => { dispatchEvent(event) }, []);

    return (
        <AnimationFrame>
            <COM.BigHeader>
                    <div>
                        <COM.Text.Break />
                        <COM.Text.BigTitle>Account Center</COM.Text.BigTitle>
                        <COM.Text.Break />
                    </div>
            </COM.BigHeader>

            <COM.Article.Basic>
                <COM.Text.Title>Come back later!</COM.Text.Title>
                <COM.Text.Standard>Sorry, you stumbled upon a page that is still yet to be completed. Please come back later!</COM.Text.Standard>
                <COM.Button onClick={() => {
                    open('CREATE AN ACCOUNT', () => { return (<CreateAccount />); } )
                }}>Create an Account</COM.Button>

                <COM.Button onClick={() => {
                    open('LOGIN', () => { return (<Login />); } )
                }}>Login</COM.Button>
            </COM.Article.Basic>

        </AnimationFrame>
    );
}