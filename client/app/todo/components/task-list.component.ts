import {Component} from "@angular/core";
import {Task} from "../models/task";
import {TaskComponent} from "./task.component";
import {OnInit, AfterContentInit, AfterContentChecked} from "@angular/core";
import {TaskService} from "../services/task-service";


@Component({
    selector: 'task-list',
    templateUrl: './app/todo/components/task-list.html',
    styleUrls: ['./app/todo/components/task-list.css'],
    providers: [TaskService]
})
export class TaskListComponent implements OnInit {

    todoCount:number;
    selectedTask:Task;
      task = new Task();
      addedTask:Task;
    tasks:Array<Task>; //task[]


    constructor(private _taskService:TaskService) {
        console.log("starting TaskListComponent");
            this.getAllTasks();
          }


    ngOnInit() {
      console.log("Todo component initialized");
  }



  getAllTasks() {
    this._taskService.getTasks()
      .subscribe(tasks => {
            this.tasks = [];
            tasks.forEach(t => {
          let taskObj:Task = new Task(t.name, t.done);
          this.tasks.push(taskObj);
        });
          console.log(tasks);
          this.findInfo();
        });
  }

  findInfo() {
    console.log("Total tasks" + this.tasks.length);
    this.todoCount = this.tasks.filter(t => t.done === "false").length;
  }
  addTask(value :any) {
    console.log(value);
    this.task.name = value;
    this.task.done = "false";
    console.log(this.task);
    this._taskService.addTask(this.task)
      .subscribe(task => {
        this.getAllTasks();
        this.reset();
        this.addedTask = task ;
      });
  }

private reset() {
    this.task.name = null;
    this.task.done = null;
}


    select(task:Task) {
      console.log(task);
      this.selectedTask = task;
      console.log(this.selectedTask);
    }


}
