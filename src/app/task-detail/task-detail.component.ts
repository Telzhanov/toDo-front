import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  public id = 0;

  public task: any = {};

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), null);

    if (this.id) {
      this.provider.getTaskDetail(this.id).then(res => {
        this.task = res;
      });
    }
  }

  updateTask() {
    this.provider.updateTask(this.task).then(res => {
      this.location.back();
      this.task = res;
    });
  }

  deleteTask() {
    this.provider.deleteTask(this.task.id).then(() => {
      this.location.back();
    });
  }

  navigateBack() {
    this.location.back();
  }

}
