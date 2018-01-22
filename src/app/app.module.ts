import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DocumentComponent } from './document/document.component';
import { PersonaldetailsComponent } from './selfservice/personaldetails/personaldetails.component';
import { TrainingdetailsComponent } from './selfservice/trainingdetails/trainingdetails.component';
import { DependentdetailsComponent } from './selfservice/dependentdetails/dependentdetails.component';
import { JobdetailsComponent } from './selfservice/jobdetails/jobdetails.component';
import { WorkexperienceComponent } from './selfservice/workexperience/workexperience.component';
import { AcademicdetailsComponent } from './selfservice/academicdetails/academicdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LeaveComponent,
    AttendanceComponent,
    DocumentComponent,
    PersonaldetailsComponent,
    TrainingdetailsComponent,
    DependentdetailsComponent,
    JobdetailsComponent,
    WorkexperienceComponent,
    AcademicdetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'attendance', component:AttendanceComponent },
      { path:'leave', component:LeaveComponent },
      { path:'document',component:DocumentComponent },
      { path:'selfservice/personaldetails',component:PersonaldetailsComponent },
      { path:'selfservice/dependentdetails',component:DependentdetailsComponent },
      { path:'selfservice/trainingdetails', component:TrainingdetailsComponent },
      { path:'selfservice/workexperience', component:WorkexperienceComponent },
      { path:'selfservice/jobdetails', component:JobdetailsComponent },
      { path:'selfservice/academicdetails',component: AcademicdetailsComponent },
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
