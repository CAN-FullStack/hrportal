import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() designation: string;
  @Input() status: string;
  constructor(public activeModal: NgbActiveModal, private tasksService: TasksService) { }

  ngOnInit() {
  }

  update() {
    this.tasksService.updateTask({id: this.id, name: this.name, designation: this.designation, status: this.status})
      .subscribe(response => this.activeModal.close({id: this.id, name: this.name, designation: this.designation, status: this.status}));
  }

}
