const path = require('path');
const express = require('express');

const DIST_DIR = path.resolve(__dirname, '..', '..', 'dist');

const app = express();

app.use(express.static(DIST_DIR));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.status(200);
  res.send({ message: "Hello from Node.js/Express Server!" });
});

app.get('/{*splat}', (req, res) => {
  res.sendFile('index.html', { root: DIST_DIR });
});

module.exports = app;