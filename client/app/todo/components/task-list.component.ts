import {Component} from "@angular/core";
import {Task} from "../models/task";
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
    tasks:Array<Task>; //task[]


    constructor(private _taskService:TaskService) {
        console.log("starting TaskListComponent");
        this._taskService.getTasks()
          .subscribe(tasks => {
              console.log(tasks);
              this.tasks = tasks;
                  this.findInfo();
            });
          }


    ngOnInit() {

  }

  findInfo() {
    console.log("Todo component initialized with " + this.tasks.length + " tasks.");
    this.todoCount = this.tasks.filter(t => t.done === "false").length;
  }


    select(task:Task) {
      this.selectedTask = task;
    }


}
