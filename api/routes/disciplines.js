var express = require('express');

router = express.Router();

var DisciplineController  = require('../controllers/disciplineController');

/* GET all disciplines. */
router.get('/',DisciplineController.getDisciplines);

/* GET one disciplines. */
router.get('/:id', DisciplineController.getDiscipline);

/* Create a discipline. */
router.post('/', DisciplineController.insertDiscipline);

module.exports = router;