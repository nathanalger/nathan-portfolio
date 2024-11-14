import { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import apiConn from "../API/connection";

const cookie = new Cookies();

/*
* Standard is returned by get() if account is 
* not defined
*/
const useAccount = (standard) => {

    /*
    * Fetch the account
    */
    const [found, setFound] = useState(false);
    const [account, setAccount] = useState({});

    const token = cookie.get("token");
    const id = cookie.get("account_id");

    useEffect(() => {
    axios.post(apiConn + '/account/'
         + id + '/' + token, "")
        .then((response) => {
            let reply = response.data;

            if(reply.found == false) {
                console.log("No account found, clearing cookies.")
                cookie.remove("token");
                cookie.remove("account_id");
            }

            setFound(true)
            setAccount(reply.account)
            
        }).catch((e) => {
            console.log("getAccount() error: " + e)
        });
    },[0]);

    /*
    * Functions for easier return values: 
    * "Standard" is returned if value isn't set
    * or acount doesnt exist
    */
    const get = (key) => {
        return (found || account[key] != null ) ? account[key] : standard 
    }

    return {
        found,
        account,
        get
    };

};

export default useAccount;