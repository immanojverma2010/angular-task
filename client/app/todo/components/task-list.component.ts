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

    tasks:Array<Task>= []; //task[]


    constructor(private _taskService:TaskService) {
        console.log("starting TaskListComponent");
        this._taskService.getTasks()
          .subscribe(tasks => {
                tasks.forEach(t => {
              let taskObj:Task = new Task(t.name, t.done);
              this.tasks.push(taskObj);
            });
              console.log(tasks);
              this.findInfo();
            });
          }


    ngOnInit() {
      console.log("Todo component initialized");
  }

  findInfo() {
    console.log("Total tasks" + this.tasks.length);
    this.calculateTodoCount();
  }
  calculateTodoCount() {
    this.todoCount = this.tasks.filter(t => t.done === "false").length;
  }


    select(task:Task) {
      console.log(task);
      this.selectedTask = task;
      console.log(this.selectedTask);
    }


}
