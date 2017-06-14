import {Http, Response, Headers} from '@angular/http';
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

}
