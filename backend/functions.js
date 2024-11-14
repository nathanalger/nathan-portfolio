const { db } = require('./Database/tables.js');
const { v4: uuidv4 } = require('uuid');
const { parse: uuidParse } = require('uuid');
const { stringify: uuidStringify } = require('uuid');
const bcryptjs = require('bcryptjs');
const crypto = require('crypto-js');

const Handle = (recieved) => {
    if (recieved.type != "" && functions[recieved.type] != undefined) {
        let response = false;
        try {
            response = functions[recieved.type](recieved);
        } catch (e) {
            console.log("Error " + recieved.type + ": " + e);
        }

        return response;
    }
}

module.exports = { Handle };

const CONTACT_FORM_SUBMISSION = (recieved) => {
    console.log(recieved.content.message);

    if (recieved.content.name == "" ||
        recieved.content.message == "") {
        console.log("Recieved blank contact submission. Ignoring.")
        return 0;
        }

    let submissions = db.fetchTable("contactSubmissions");
    submissions.rows.push({
        "id": submissions.rows.length,
        "name": recieved.content.name,
        "email": recieved.content.email,
        "message": recieved.content.message
    });
    db.replaceTable ("contactSubmissions", submissions);

    return true;
}

const FETCH_ACCOUNT = ( recieved ) => {
    let token = recieved.token;
    let id = recieved.id;

    console.log("Fetching account " + id + ".")

    let users = db.fetchTable("users");
    let acc = users.rows.filter(obj => obj.id == recieved.id)[0];
    if(acc != undefined) {
        
        return {
            "found": true,
            "account": acc
        };
    } else {
        return {"found":false, "account":{}};
    }
}

const LOGIN_ATTEMPT = (recieved) => {
    console.log(recieved.type + " for " + recieved.content.email);
    
    let users = db.fetchTable("users");
    let user = {};

    let response = {
        "foundUser": false,
        "code": 0,
        "token": "",
        "id": 0,
        "message": ""
    }

    user = users.rows.filter(obj => obj.email == recieved.content.email)[0];

    if(user == undefined || user == {}) {
        console.log("Failed to find user!" + e);
        response.code = 1;
        response.foundUser = false;
        response.token = "";
        response.id = 0;
        response.message = "Failed to find user " +  + "!";
        return response;
    } else {

        // ACCOUNT EXISTS, CHECK PASSWORD
        let correct = bcryptjs.compareSync(recieved.content.password, user.hash);
        
        if(correct != undefined && correct) {
            response.code = 0;
            response.foundUser = true;
            response.token = user.token;
            response.id = user.id;
            response.message = "Login success!";

            return response;
        } else {
            response.code = 2;
            response.foundUser = true;
            response.token = "";
            response.id = 0;
            response.message = "Incorrect username or password!";
            return response;
        }

    }
}

const NEW_ACCOUNT_CREATION = (recieved) => {
    let users = db.fetchTable("users");
    let obj = {
        "id": "",
        "token": "",
        "username": recieved.content.username,
        "email": recieved.content.email,
        "firstName": recieved.content.firstName,
        "lastName": recieved.content.lastName,
        "hash": recieved.content.password,
        "ip_list": [
            recieved.client.ip
        ],
        "verifications": 
        {
            "email": false
        },
        "dateCreatedLocal": recieved.client.date
    };

    // Set User Token
    obj.token = uuidv4();

    // Set User ID
    const idChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    let res = "";
    for (let i = 0; i < 9; i++) {
        let x = Math.floor(Math.random() * idChars.length)
        res += idChars.charAt(x);
    }

    obj.id = res;
    
    console.log(res);

    users.rows.push(obj);
    db.replaceTable ("users", users);
}

const functions = {
    "CONTACT_FORM_SUBMISSION": CONTACT_FORM_SUBMISSION,
    "NEW_ACCOUNT_CREATION": NEW_ACCOUNT_CREATION,
    "LOGIN_ATTEMPT": LOGIN_ATTEMPT,
    "FETCH_ACCOUNT": FETCH_ACCOUNT
}

