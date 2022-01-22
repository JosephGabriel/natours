const express = require('express');
const router = express.Router();

const viewController = require('../controllers/view');
const authController = require('../controllers/auth');

router.get('/', authController.isLoggedIn, viewController.getOverview);

router.get('/me', authController.protect, viewController.getAccount);

router.get('/login', authController.isLoggedIn, viewController.getLogin);

router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);

module.exports = router;
