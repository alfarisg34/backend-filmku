const express = require('express');
const router = express.Router();
const { getFilms, getGenreFilm, getFilmByGenre } = require('../controllers/FilmController');

router.get('/filmku',getFilms);
router.get('/filmku/:id', getFilms);
router.get('/genres', getGenreFilm)
router.get('/filmsByGenre/:genre', getFilmByGenre)

module.exports = router;