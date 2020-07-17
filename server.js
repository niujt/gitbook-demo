/* eslint-disable */
const path = require('path');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

const port = process.env.PORT || 8888;


app.use(express.static(path.join(__dirname, '_book')));

// Redirect all uncatched uri to `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '_book', 'index.html'));
});

app.listen(port, '0.0.0.0', () => console.log('proxy server is runing and listening on port', port));