const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/homepage', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;


