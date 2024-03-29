const express = require('express');
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const app = express();
const errorController = require('./controllers/error')
const db = require('./util/database')
app.set('view engine', 'ejs');
app.set('views', 'views');
const path = require('path')

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000);