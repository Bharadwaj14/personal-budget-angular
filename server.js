const express = require('express');
const app = express();
const port = 3000;
const budget = require('./budget.json'); 

app.use('/', express.static('public'));
 
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, ()=>{
    console.log(`example app at : ${port}`)
});