const express = require('express');
const router = express.Router();
const viewsController = require('./viewsController');

router.route('/').get(viewsController.getFilmNames);

module.exports = router;