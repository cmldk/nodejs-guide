const path = require('path');

const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: "Home",
        path: '/'
    });
});

router.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.name });
    res.redirect('/');
});

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: "Users", path: '/users', users: users })
});

exports.routes = router;
exports.users = users;
