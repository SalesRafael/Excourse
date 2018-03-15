var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeriodSchema   = new Schema({
    name: String,
    dateStart: Date,
    dateEnd: Date
});

module.exports = mongoose.model('Period', PeriodSchema);