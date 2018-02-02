import { TasksService } from './tasks.service';
import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  closeResult: string;
  constructor(private tasksService: TasksService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tasksService.getAllTasks().subscribe(response => this.tasks = response.json());
  }

  addTask() {
    const modalRef = this.modalService.open(AddTaskComponent);
    modalRef.componentInstance.name = '';
    modalRef.componentInstance.designation = '';
    modalRef.componentInstance.status = '';
    modalRef.result
    .then((result) => {
         result !== 'CANCEL'? this.tasks.push(result) : console.log(result) })
  }

  editTask(task) {
    const modalRef = this.modalService.open(EditTaskComponent);
    modalRef.componentInstance.id = task.id;
    modalRef.componentInstance.name = task.name;
    modalRef.componentInstance.designation = task.designation;
    modalRef.componentInstance.status = task.status;
    modalRef.result
    .then((result) => {
        if(result !== 'CANCEL') {
          this.tasks.forEach(function(task) {
            if(task.id == result.id) {
              task.name = result.name;
              task.designation = result.designation;
              task.status = result.status;
            }
          });
        }
    })
  }
  
}
