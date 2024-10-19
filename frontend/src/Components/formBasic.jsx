import { useState, useEffect } from 'react';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import './CSS/Forms.css';

const Form = ({ children, onSubmit, then, mobileOnly, noClear }) => {
    var desktop = "mobile";
    if(!mobileOnly) desktop = "" + useIsDesktop().type;

    const handle = (event) => {
        event.preventDefault();

        onSubmit();

        if(!noClear)
            document.getElementById('currentForm').reset();

        if(then != undefined)
            then();
    }

    return (

        <form method={'POST'} action={''} className={"formParent " + desktop} onSubmit={ handle } id={'currentForm'}>
            { children }
        </form>

    );
};

export default Form;

const Text = ({ onChange, allowed, required, placeholder }) => {
    var desktop = "" + useIsDesktop().type
    var isreq = (required);
    return (
        <input type="text" placeholder={placeholder} className={"formText " + desktop} onChange={onChange} required={isreq} pattern={ allowed } />
    );
};

const Password = ({ id, onChange, required, placeholder }) => {
    var desktop = "" + useIsDesktop().type
    var isreq = (required);
    return (
        <input id={id} type="password" placeholder={placeholder} className={"formText " + desktop} onChange={onChange} required={isreq} />
    );
};

const Textarea = ({ onChange, required }) => {
    var desktop = "" + useIsDesktop().type
    var isreq = (required);

    return (
        <textarea onChange={onChange} className={"formTextarea " + desktop} required={isreq} />
    );
}

const Submit = ({ text }) => {
    var desktop = "" + useIsDesktop().type;

    return (
        <button type="submit" className={"bottom " + desktop}><span>{text}</span></button>
    );
}

export const Inputs = {
    "Text": Text,
    "Textarea": Textarea,
    "Submit": Submit,
    "Password": Password
}
