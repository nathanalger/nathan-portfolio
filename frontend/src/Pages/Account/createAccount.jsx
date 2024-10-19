import React, { useState } from 'react';
import COM from '../../../src/Components.jsx';
import Form, { Inputs } from '../../Components/formBasic.jsx';
import UseAPI from '../../API/API.jsx';
import bcrypt from 'bcryptjs';

const CreateAccount = () => {

    const [err, setErr] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitAccount = (  ) => {
        // ENCRYPT PASSWORD BEFORE SENDING

        // not all forms filled
        if(
            username == "" ||
            email == "" ||
            password == "" ||
            confPassword == "" ||
            firstName == ""
        ) {
            setErr("Not all inputs filled!");
        }

         // passwords don't match
        else if(confPassword !== password) {
            document.getElementById('pass').value = "";
            document.getElementById('conf').value = "";
            setErr("Passwords do not match!");
        }
        
        // If all is good, do this:
        else {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);
            UseAPI().sendNewAccount(username, firstName, lastName, email, hash)
        }
        
    };

    return (

        <>
            <Form onSubmit={() => { submitAccount() }} mobileOnly noClear>

                <COM.Text.Standard>Username</COM.Text.Standard>
                <Inputs.Text 
                    placeholder={'johndoe123'} 
                    onChange={(a)=>{ setUsername(a.target.value); }} 
                    name="Username" />
                <COM.Text.Break/>

                <COM.Text.Standard>First Name</COM.Text.Standard>
                <Inputs.Text
                    placeholder={'John'} 
                    name="FirstName"
                    required />
                <COM.Text.Break/>

                <COM.Text.Standard>Last Name</COM.Text.Standard>
                <Inputs.Text 
                onChange={(a)=>{ setLastName(a.target.value); }} 
                name="LastName" 
                placeholder={'Doe'}/>
                <COM.Text.Break/>

                <COM.Text.Standard>Email</COM.Text.Standard>
                <Inputs.Text 
                onChange={(a)=>{ setEmail(a.target.value); }} 
                name="Email"
                placeholder={'johndoe@mail.com'}/>
                <COM.Text.Break/>

                <COM.Text.Standard>Password</COM.Text.Standard>
                <Inputs.Password
                id="pass" 
                onChange={(a)=>{ setPassword(a.target.value); }} 
                name="Password"
                placeholder={'Enter a secure password...'} />
                <COM.Text.Break/>

                <COM.Text.Standard>Confirm Password</COM.Text.Standard>
                <Inputs.Password 
                id="conf"
                onChange={(a)=>{ setConfPassword(a.target.value); }} 
                name="confPassword"
                placeholder={'Repeat your password...'} />
                <COM.Text.Break/>

                <COM.Text.Standard style={{color: "red"}}>{err}</COM.Text.Standard>
                <Inputs.Submit text={"Create Account"} />

            </Form>
        </>

    );

}

export default CreateAccount;