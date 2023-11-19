const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('First middleware')
})

app.use((req, res, next) => {
    console.log('Second middleware')
})

app.listen(3000)