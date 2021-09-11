import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  empForm:NgForm
  constructor(private service:DataShareService) { }

  ngOnInit(): void {
    this.clearFields();
   // this.empForm.resetForm();
  }

  employeeData:any;
  clearFields(){
    this.employeeData=this.service.getAllUsers();
   }

}