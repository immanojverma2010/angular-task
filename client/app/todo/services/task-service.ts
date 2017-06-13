import {Http, Headers} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';



@Injectable()
export class TaskService {
        constructor(private http :Http){
            console.log('Task Service Initialized...');
        }
        getTasks(){
            return this.http.get('/tasks/viewTasks')
                .map(res => res.json());
        }

}
