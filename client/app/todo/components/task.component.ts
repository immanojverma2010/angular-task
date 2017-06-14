import {Component} from "@angular/core";
import {Input} from "@angular/core";

import {Task} from "../models/task";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
    selector: 'task',
    templateUrl: './app/todo/components/task.html'
})
export class TaskComponent {
    @Input() task:Task;
    @Output() statusChanged:any = new EventEmitter<any>();

    toggleDone() {
      console.log("after html  before task toggle");

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
