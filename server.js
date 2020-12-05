'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World, This is myfirst nodejs application with docker');
});

app.listen(PORT, HOST);
console.log('Hello World, This is myfirst nodejs application with docker');