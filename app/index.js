const express = require('express');
const app = express();
app.get('/', (req, res) => res.send( '<h1>Hello from waqas Secure Pipeline<h1> <h2> DevSecOps Workshop Working!<h2>   '));
app.listen(3000, () => console.log('Running on port 3000'));
