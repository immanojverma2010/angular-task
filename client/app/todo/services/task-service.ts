import {Http, Response, Headers} from '@angular/http';
import {Injectable} from "@angular/core";
import {Task} from "../models/task";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';



@Injectable()
export class TaskService {
        constructor(private http :Http){
            console.log('Task Service Initialized...');
        }
        getTasks() : Observable<Task[]>{
            return this.http.get('http://localhost:8080/tasks/viewTasks')
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        }

}
