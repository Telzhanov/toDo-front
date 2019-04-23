import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListsComponent } from './task-lists/task-lists.component';
import { ProviderService } from './shared/services/provider.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TaskListsTasksComponent } from './task-lists-tasks/task-lists-tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { BaseComponent } from './base/base.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListsComponent,
    TaskListsTasksComponent,
    TaskDetailComponent,
    TaskListDetailComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
