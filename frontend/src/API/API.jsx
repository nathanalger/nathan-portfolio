import Axios from 'axios';
import { Cookies } from "react-cookie";
import apiConn from "./connection.jsx";

const cookie = new Cookies();

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

        Axios.post(apiConn + '/toServer', toSend);
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

    const sendNewAccount = (username, firstName, lastName, email, password) => {
        if(username != "" &&
            firstName != "" &&
            lastName != "" &&
            email != "" &&
            password != "" ) {
            
            try {
                let encrypted = password;
                packageSend("NEW_ACCOUNT_CREATION", { "username": username, "email": email, "firstName": firstName, "lastName": lastName, "password": encrypted });
                return 1;
            }catch (e) {
                return "Attempt returned code 0 with an error: " + e;
            }

        }
    }

    const attemptLogin = async (email, password, then) => {

        // Build send package
        const now = new Date();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        var toSend = structuredClone(defaultSend);

        toSend.client.date = `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`;
        toSend.client.userAgent = navigator.userAgent;
        toSend.client.timeZone = -(new Date().getTimezoneOffset() / 60),
            toSend.client.personalTime = `${hours}:${minutes}`,
            toSend.client.utcTime = `${hours + toSend.client.timeZone}:${minutes}`,
            toSend.type = "LOGIN_ATTEMPT";

            toSend.content = {
                "email": email,
                "password": password
            };

            Axios.post(apiConn + '/login', toSend).then((response) => {

                if(response.data.code == 0) {

                    // LOGIN SUCCESSFUL 
                    let d = new Date();
                    d.setTime(d.getTime() + (60*60*1000));
                    cookie.remove("token");
                    cookie.remove("account_id");
                    cookie.set("token", response.data.token, {path: "/", expires: d});
                    cookie.set("account_id", response.data.id, {path: "/", expires: d});

                    then({
                        "code": response.data.code, 
                        "err": "Login Successful!"
                    });


                } else {

                    then({
                        "code": response.data.code, 
                        "err": "Login Failed: " + response.data.message
                    });
                    
                }
                //callback(loginSuccess);
            }).catch((e) => {
                then({
                    "code": 2,
                    "err": "Error fetching account: " + e

                });
                //callback(false);
            });
            
    }

    return {
        sendContact,
        sendNewAccount,
        attemptLogin
    };

};

export default UseAPI;