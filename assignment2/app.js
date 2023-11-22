const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middleware');
    next();
})

app.use((req, res, next) => {
    console.log('Second middleware');
    next();
})

app.use('/users', (req, res, next) => {
    res.send('<h1>This is users page</h1>')
});

app.use('/', (req, res, next) => {
   res.send('<h1>Hello world</h1>')
});

app.listen(3000)