import { useState, useEffect } from 'react';
import Axios from 'axios';

const UseAPI = () => {

    const defaultSend = {
        "client": {
            "ip": "",
            "userAgent": "",
            "timeZone": 0,
            "personalTime": "",
            "utcTime": "",
            "date": "",
        },
        "type": "",
        "content": {}
    };

    const packageSend = (type, content) => {
        const now = new Date();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        var toSend = structuredClone(defaultSend);

        toSend.client.date = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;
        toSend.client.userAgent = navigator.userAgent;
        toSend.client.timeZone = -(new Date().getTimezoneOffset() / 60),
            toSend.client.personalTime = `${hours}:${minutes}`,
            toSend.client.utcTime = `${hours + toSend.client.timeZone}:${minutes}`,
            toSend.type = type;
        toSend.content = content;

        Axios.post('http://localhost:5000/toServer', toSend);
    };

    const sendContact = (name, email, text) => {
        if (name != "" && text != "") {
            try {
                packageSend("CONTACT_FORM_SUBMISSION", { "name": name, "email": email, "message": text });
                return 1;
            } catch (e) {
                return "Submission returned code 0 with an error: " + e;
            }
        }
    };

    return {
        sendContact
    };

};

export default UseAPI;