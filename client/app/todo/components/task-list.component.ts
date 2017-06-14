import {Component} from "@angular/core";
import {Task} from "../models/task";
import {OnInit} from "@angular/core";
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
    tasks:Task[];


    constructor(private _taskService:TaskService) {
        console.log("starting TaskListComponent");
        this._taskService.getTasks()
          .subscribe(tasks => {
              console.log(tasks);
              this.tasks = tasks;

            });
          }

    ngOnInit() {
      console.log("2nd Todo component initialized ");
    }


}
