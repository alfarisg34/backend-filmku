const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/GameController');

router.get('/games', gamesController.getGames);
router.get('/games/:id', gamesController.getGames);

module.exports = router;