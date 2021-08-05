const path = require('path');
const { createServer } = require('http');
const express = require('express');
const { getIO, initIO } = require('./socket');

const app = express();

app.use('/', express.static(path.join(__dirname, '/public')));

const httpServer = createServer(app);
const cors = require("cors");

let port = process.env.PORT || 8000;

initIO(httpServer);

app.use(cors());

httpServer.listen(port)
console.log("Server started on ", port);

getIO();
