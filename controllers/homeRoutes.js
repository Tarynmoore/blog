const router = require('express').Router();
// const withAuth = require('../utils/auth');
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        console.log('there')
        res.render('homepage', {
            logged_in: req.session.logged_in
          });

    } catch (err) {
        res.status(500).json(err);
    }
})