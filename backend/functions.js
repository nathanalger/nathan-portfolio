const { db } = require('./Database/tables.js');



const Handle = (recieved) => {
    if (recieved.type != "" && functions[recieved.type] != undefined) {
        try {
            functions[recieved.type](recieved);
        } catch (e) {
            console.log("Error " + recieved.type + ": " + e);
        }
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

    var submissions = db.fetchTable("contactSubmissions");
    submissions.rows.push({
        "id": submissions.rows.length,
        "name": recieved.content.name,
        "email": recieved.content.email,
        "message": recieved.content.message
    });
    db.replaceTable ("contactSubmissions", submissions);
}

const functions = {
    "CONTACT_FORM_SUBMISSION": CONTACT_FORM_SUBMISSION
}

