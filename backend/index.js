const { Handle } = require('./functions.js');
const { db } = require('./Database/tables.js');

const express = require('express');
const app = express();
const port = 5000;

var cors = require('cors')
var bodyParser = require('body-parser')

db.loadTable("contactSubmissions");
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/toServer', (req, res) => {
    const data = req.body;
    data.client.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    console.log('Received data type ' + data.type + ' from ' + data.client.ip);

    Handle(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});