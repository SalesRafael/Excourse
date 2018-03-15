var router = require('express').Router();

router.use('/users', require('./user'));
router.use('/disciplines', require('./discipline'));
router.use('/teachers', require('./teacher'));
router.use('/courses', require('./course'));
router.use('/enrollments', require('./enrollment'));
router.use('/periods', require('./period'));

module.exports = router;  
