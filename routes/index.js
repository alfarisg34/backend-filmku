const express = require('express');
const router = express.Router();
const filmsController = require('../controllers/FilmController');

router.get('/filmku',filmsController.getFilms);
router.get('/filmku/:id', filmsController.getFilms);
router.get('/genres', getGenreFilm)
router.get('/filmsByGenre/:genre', getFilmByGenre)

module.exports = router;