const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/GameController');

router.get('/filmku', gamesController.getFilms);
router.get('/filmku/:id', gamesController.getFilms);

module.exports = router;