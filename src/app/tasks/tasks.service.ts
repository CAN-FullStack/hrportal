import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

  getAllTasks() {
    return this.http.get('http://localhost:3000/tasks');
  }

  addTask(task) {
    return this.http.post('http://localhost:3000/tasks', task);
  }

  updateTask(task) {
    return this.http.put('http://localhost:3000/tasks/' + task.id, task);
  }

}
