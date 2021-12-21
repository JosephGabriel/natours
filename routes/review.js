const express = require('express');

const reviewController = require('../controllers/review');
const authController = require('../controllers/auth');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restricTo('user'),
    reviewController.setTourUser,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restricTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restricTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
