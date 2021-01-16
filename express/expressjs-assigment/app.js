const express = require('express');
const path = require('path')
const router = express.Router();

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/user');

const app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRoutes);
app.use('/users', usersRoutes);

app.listen(3000);