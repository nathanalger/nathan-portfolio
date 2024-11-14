const { Handle } = require('./functions.js');
const { db } = require('./Database/tables.js');

const express = require('express');
const app = express();
const port = 5000;

const encryptionKey = process.env.ENC;
console.log("Current encryption key: " + encryptionKey);

var cors = require('cors');
var bodyParser = require('body-parser');
const allowedOrigins = ['https://nathanalger.com']; 

db.loadTable("contactSubmissions");
db.loadTable("users");
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);  // Allow the request
    } else {
      callback(new Error('Not allowed by CORS'), false);  // Reject the request
    }
  }
}));
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

// Fetch Account
app.post('/account/:id/:token', (req, res) => {
  let id = req.params.id;
  let token = req.params.token;

  let reply = Handle({
    type: "FETCH_ACCOUNT",
    token: token,
    id: id
  }) 

  res.send(reply);
})

app.post('/toServer', (req, res) => {
  const data = req.body;
  data.client.ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log('Received request type ' + data.type + ' from ' + data.client.ip);

  let result = Handle(data);

  console.log(result);
});

app.post('/login', (req, res) => {
  let data = req.body;
  let response = Handle(data);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});