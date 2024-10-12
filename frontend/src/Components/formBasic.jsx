import { useState, useEffect } from 'react';
import useIsDesktop from '../Hooks/useIsDesktop.jsx';
import './CSS/Forms.css';

const Form = ({ children, onSubmit }) => {
    var desktop = "" + useIsDesktop().type

    return (

        <form className={"formParent " + desktop} onSubmit={ onSubmit }>
            { children }
        </form>

    );
};

export default Form;

const Text = ({ onChange, required }) => {
    var desktop = "" + useIsDesktop().type
    var isreq = (required);
    return (
        <input type="text" className={"formText " + desktop} onChange={onChange} required={isreq} />
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
    "Submit": Submit
}
