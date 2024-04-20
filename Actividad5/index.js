const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello, World, from port ${port}!`);
});

app.listen(3000, () => {
  console.log(`Server is listening in port ${port}`)
});

app.get('/myname/:name', (req, res) => {
  res.send(`Hello, World! My name is ${req.params.name}!`);
});