const express = require('express');
const router = express.Router();
const viewsController = require('./viewsController');

router.route('/').get(viewsController.getFilmData);
router.route('/form').get(viewsController.getFilmForm);

module.exports = router;