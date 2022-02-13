const express = require('express');
const router = express.Router();
const filmController = require('./filmController');

router.route('/').get(filmController.getAllFilms).patch(filmController.addUserChoices);

module.exports = router;