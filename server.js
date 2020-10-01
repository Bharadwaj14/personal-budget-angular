const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 375
        },
        {
            title: 'Groceries',
            budget: 110
        },
    ]
};
 
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, ()=>{
    console.log(`example app at : ${port}`)
});