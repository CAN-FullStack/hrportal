import { TrainingdetailsComponent } from './../../selfservice/trainingdetails/trainingdetails.component';
import { TasksService } from './../tasks.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() title: string;
  @Input() status: string;
  
  constructor(public activeModal: NgbActiveModal, private tasksService: TasksService) {}

  ngOnInit() {

  }

  add() {
    this.tasksService.addTask({title: this.title, status: this.status})
      .subscribe(response => this.activeModal.close(response.json()));
  }

}
