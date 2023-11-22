const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middleware')
})

app.use((req, res, next) => {
    console.log('Second middleware')
})

app.use('/', (req, res, next) => {
   res.send('<h1>Hello world</h1>')
});

app.listen(3000)