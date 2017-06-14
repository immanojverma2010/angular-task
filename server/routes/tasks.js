var express = require('express');
var router = express.Router();
var TaskModel= require('../models/taskModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Get is responding--no data attatched');
});

router.route("/viewTasks")
.get(function (req,res) {
  TaskModel.find({},{'name':1,'done':1,'_id':0},function(err,tasks){
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

router.route("/deleteTask")
.delete(function (req,res) {
    var name=req.body.name;

      TaskModel.remove({'name':name},function(err){
        if(err)
        {
          res.send(err);
        }
        else{
          console.log("Task Deleted from mongo");
          res.send("Task Deleted from mongo");
        }
      })
});



router.route("/taskUpdate")
.put(function(req, res){
  console.log("put req called " +req.body.taskName+"    "+req.body.taskStatus);
  if(req.body){

    TaskModel.update({ name: req.body.taskName }, { done: req.body.taskStatus },function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("Updated the news")
        res.send("Updated news");
      }
    })
  }
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
