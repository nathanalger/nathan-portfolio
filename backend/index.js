const { Handle } = require('./functions.js');
const { db } = require('./Database/tables.js');

const express = require('express');
const app = express();
const port = 5000;

const encryptionKey = process.env.ENC;
console.log("Current encryption key: " + encryptionKey);

var cors = require('cors');
var bodyParser = require('body-parser');

db.loadTable("contactSubmissions");
db.loadTable("users");
app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/apiKey', (req, res) => {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if(ip = "::1") {
    res.send(encryptionKey);
  } else {
    res.send("Access Denied");
  };
});

app.post('/toServer', (req, res) => {
  const data = req.body;
  data.client.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log('Received request type ' + data.type + ' from ' + data.client.ip);

  let result = Handle(data);

  console.log(result);
});

app.post('/login', (req, res) => {
  let data = req.body;
  console.log("AAAAA");
  let response = Handle(data);
  console.log(response);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});