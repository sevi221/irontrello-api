const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');
const secureMiddleware = require('../middleware/secure.middleware');
const checkId = require('../middleware/validateId.middleware');


router.get('/', secureMiddleware.isAuthenticated, cardsController.index);
router.get('/:id', secureMiddleware.isAuthenticated, checkId.checkId, cardsController.show);
router.post('/', secureMiddleware.isAuthenticated, cardsController.create);
router.put('/:id', secureMiddleware.isAuthenticated, checkId.checkId, cardsController.update);
router.delete('/:id', secureMiddleware.isAuthenticated, checkId.checkId, cardsController.destroy);

module.exports = router;
