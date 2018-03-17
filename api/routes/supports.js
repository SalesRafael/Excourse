var express = require('express');

router = express.Router();

var SupportController  = require('../controllers/supportController');

/* GET all supports. */
router.get('/',SupportController.getSupports);

/* GET one support. */
router.get('/:id', SupportController.getSupport);

/* Create a support. */
router.post('/', SupportController.insertSupport);

module.exports = router;