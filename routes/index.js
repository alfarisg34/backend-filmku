const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/FilmController');

router.get('/filmku',filmsController.getFilms);
router.get('/filmku/:id', filmsController.getFilms);

module.exports = router;