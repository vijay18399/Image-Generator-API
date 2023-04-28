const express = require('express');
const router = express.Router();

const imageController = require('../controllers/imageController');

router.get('/image', imageController.generateImage);
router.get('/avatar', imageController.generateAvatar);

module.exports = router;
