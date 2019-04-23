import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITaskLong, ITaskShort, ITaskList } from '../shared/models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-lists-tasks',
  templateUrl: './task-lists-tasks.component.html',
  styleUrls: ['./task-lists-tasks.component.css']
})

export class TaskListsTasksComponent implements OnInit {

  public tasks: ITaskLong[] = [];
  public taskList: any = {};
  public taskName: string;
  public taskDueOn: any = new Date().toISOString();
  public taskStatus: string;

  public id: number;

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), null);
    if (this.id) {
      this.provider.getTaskListTasks(this.id).then(res => {
        this.tasks = res;
      });
      this.provider.getTaskListDetail(this.id).then(res => {
        this.taskList = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

  createTask() {
    if (this.taskName !== '' && this.taskDueOn !== '' && this.taskStatus !== '') {
      this.provider.createTask(this.id, this.taskName, this.taskDueOn, this.taskStatus).then(res => {
        this.tasks.push(res);
      });
    }
  }

}
