import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable} from "@angular/core";
import {Task} from "../models/task";
import 'rxjs/add/operator/map';





@Injectable()
export class TaskService {
        constructor(private http :Http){
            console.log('Task Service Initialized...');
        }
        getTasks() {
            return this.http.get('/tasks/viewTasks')
                .map((res:Response) => res.json());
        }

        addTask(task :Task) {
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          let url = '/tasks/addTask';
          //  var bodyObj = { name: task.name, done: task.done };
            return this.http.post(url, task, options )
                .map((res:Response) => res.json());
        }

        updateTask(task :Task) {
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
            //console.log("Service part- calling put method");
            //console.log(task);
          let url = '/tasks/taskUpdate';
              var bodyObj = { taskName: task.name, taskStatus: task.done };
            return this.http.put(url, bodyObj, options )
                .map((res:Response) => res.json());
        }

        deleteTask(name :string) {
          //console.log(name);

    return this.http.delete('/tasks/deleteTask/' + name)
                    .map((res:Response) => res.json());
  }

}
