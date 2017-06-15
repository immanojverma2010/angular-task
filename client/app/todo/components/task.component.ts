import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Task} from "../models/task";
import {TaskService} from "../services/task-service";

import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'task',
    templateUrl: './app/todo/components/task.html',
    styleUrls: ['./app/todo/components/task.css'],
})
export class TaskComponent {
    @Input() task:Task;
    @Output() statusChanged:any = new EventEmitter<any>();
    taskName:Task;

    constructor(private _taskService:TaskService) {

    }

    toggleDone(value :any) {
      value === 'on' ? value = 'true' : value = 'false';

      //call to service to make an update in db
        this.task.done = value ;

      this._taskService.updateTask(this.task)
        .subscribe(task => {

            this.taskName = task ;
        });

        this.task.toggleDone(); // This would work if Task type values are saved in Task[]
        //<see task.forEach under constructor of task-list.component>

        /*
        If not assigning Task type values in tasks i.e Task[] then factory function or method
        named this.task.toggleDone() (data model i.e Task) wouldn't  work.
        that time you can create the same functionality here by this line
        this.task.done = this.task.done === "false" ? "true" : "false";
        */
        this.statusChanged.emit(null);
    }
}
