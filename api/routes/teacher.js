var express = require('express');

router = express.Router();

var TeacherController  = require('../controllers/teacherController');

/* GET all teachers. */
router.get('/',TeacherController.getTeachers);

/* GET one teachers. */
router.get('/:id', TeacherController.getTeacher);

/* Create a teacher. */
router.post('/', TeacherController.insertTeacher);

module.exports = router;