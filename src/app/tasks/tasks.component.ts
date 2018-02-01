import { TasksService } from './tasks.service';
import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from './add-task/add-task.component';

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

  open() {
    const modalRef = this.modalService.open(AddTaskComponent);
    modalRef.componentInstance.title = '';
    modalRef.componentInstance.status = '';
    modalRef.result
    .then((result) => {
         result !== 'CANCEL'? this.tasks.push(result) : console.log(result) })
  }
  
}
