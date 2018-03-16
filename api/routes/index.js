var router = require('express').Router();

router.use('/users', require('./users'));
router.use('/disciplines', require('./disciplines'));
router.use('/teachers', require('./teachers'));
router.use('/courses', require('./courses'));
router.use('/enrollments', require('./enrollments'));
router.use('/periods', require('./periods'));

module.exports = router;  
