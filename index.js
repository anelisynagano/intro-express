const express = require('express');
const app = express();
const students = require('./students');

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from backend :)')
});

app.get('/students', (req, res) => {
    res.json(students)
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});
