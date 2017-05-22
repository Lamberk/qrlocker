import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {User} from './auth.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Headers} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Task} from './task.model';

@Injectable()
export class TaskService {
  public tasks: any;
  private tasksUrl = 'http://localhost:8000/tasks/';

  constructor(private http: AuthHttp,
              // public tasks: Task[]
  ) {
  }

  public getTasks() {
    return this.http.get(this.tasksUrl);
  }
}
