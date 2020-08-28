
const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/get-series', controller.series.getSeries);
router.get('/get-movies', controller.movies.getMovies);

module.exports = router;