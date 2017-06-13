var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var taskDetailsSchema = new Schema({
  name: String,
  done: String,

});

module.exports = mongoose.model('TaskDetails',taskDetailsSchema,'tasks');
