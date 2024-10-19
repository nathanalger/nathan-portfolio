import React, { useState } from 'react';
import COM from '../../Components.jsx';
import Form, { Inputs } from '../../Components/formBasic.jsx';
import UseAPI from '../../API/API.jsx';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const loginAttempt = ( ) => {
        const res = UseAPI().attemptLogin(email, password, (result) => {
                setErr("(" + result.code + ") " + result.err);
                console.log(result);
        });
    };

    return (

        <>
            <Form onSubmit={() => { loginAttempt() }} mobileOnly noClear>

                <COM.Text.Standard>Email</COM.Text.Standard>
                <Inputs.Text onChange={(a)=>{ setEmail(a.target.value); }} name="Email" />
                <COM.Text.Break/>

                <COM.Text.Standard>Password</COM.Text.Standard>
                <Inputs.Password onChange={(a)=>{ setPassword(a.target.value); }} name="Password" />
                <COM.Text.Break/>

                <COM.Text.Standard>{err}</COM.Text.Standard>
                <Inputs.Submit text={"Login"} />

            </Form>
        </>

    );

}

export default Login;