import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import  { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { AboutComponent } from './about/about.component';
import { RouterModule,Routes} from '@angular/router';
import { DataShareService } from './data-share.service';
import { EmployeeFilterPipe } from './employee-filter.pipe';

const routes:Routes=[
    {path:'',redirectTo:'create',pathMatch:'full'},
    {path:'about',component:EmployeeComponent},
    {path:'create',component:EmployeeComponent},
    {path:'list',component:FormComponent},
    {path:'update',component:EmployeeComponent},
    {path:'list/:id',component:FormComponent},
    {path:'**',redirectTo:'create'},
  ];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EmployeeComponent,
    AboutComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [ DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }