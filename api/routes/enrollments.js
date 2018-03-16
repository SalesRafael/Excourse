var express = require('express');

router = express.Router();

var EnrollmentController  = require('../controllers/enrollmentController');

/* GET all enrollments. */
router.get('/',EnrollmentController.getEnrollments);

/* GET one enrollments. */
router.get('/:id', EnrollmentController.getEnrollment);

/* Create a enrollment. */
router.post('/', EnrollmentController.insertEnrollment);

module.exports = router;