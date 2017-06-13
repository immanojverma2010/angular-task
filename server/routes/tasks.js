var express = require('express');
var router = express.Router();
var TaskModel= require('../models/taskModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Get is responding--no data attatched');
});





router.route("/viewTasks")
.get(function (req,res) {
  TaskModel.find({},function(err,tasks){
    if(err)
    {
      res.send(err);
    }
    else{
      console.log("Tasks Found");
      res.send(tasks);
    }
  })

});


router.route("/addTask")
.post(function (req,res) {
  if(req.body){
    console.log(req.body);
    var task =new TaskModel(req.body);
  task.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else{
      console.log("Tasks Inserted");
      res.send("Tasks Inserted");
    }
  });
}

});





module.exports = router;
