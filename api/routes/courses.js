var express = require('express');

router = express.Router();

var CourseController  = require('../controllers/courseController');

/* GET all courses. */
router.get('/',CourseController.getCourses);

/* GET one courses. */
router.get('/:id', CourseController.getCourse);

/* Create a course. */
router.post('/', CourseController.insertCourse);

module.exports = router;