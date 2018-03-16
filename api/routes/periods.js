var express = require('express');

router = express.Router();

var PeriodController  = require('../controllers/periodController');

/* GET all periods. */
router.get('/',PeriodController.getPeriods);

/* GET one periods. */
router.get('/:id', PeriodController.getPeriod);

/* Create a period. */
router.post('/', PeriodController.insertPeriod);

module.exports = router;