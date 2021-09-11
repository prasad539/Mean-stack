import { Component, OnInit ,Input} from '@angular/core';
import { findReadVarNames, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute,Router } from '@angular/router';
import { DataShareService } from '../data-share.service';
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fid;
  constructor(private route:ActivatedRoute,private service:DataShareService,private router:Router) {
   // this.service.msg.subscribe();
   
   }

  ngOnInit() {
   
    //this.service.share.subscribe(message=>this.message=message);
   // this.service.share3.subscribe(changeIndex=>this.changeIndex=changeIndex);
   //console.log(this.message);
   this.service.readEmployee().subscribe(d=>{
     this.displayMessage=d;
   })
   //this.displayMessage=this.message;
   console.log(this.displayMessage);
   this.service.newData.subscribe(u=>this.updatedValues=u)
   //this.updateList();
   this.employeeData=this.service.getAllUsers();
  
  
  // this.service.falseFlag.subscribe(flagMessage=>this.editFalse=flagMessage);
   
  // this.editFalse=false;
   // this.service.newCreate(this.editFalse);
  }
 
  _id?:String;
  message:any;
  displayMessage:any;
  searchByName:any;
  changeIndex:any;
  employeeData:any[];
  updatedValues:any[];
  isEdit:Boolean=false;
  //editFalse:Boolean;

  delete(item)
  {
    this.service.deleteEmployee(item._id).subscribe(data=>{
      this.displayMessage.splice(this.displayMessage.indexOf(item),1);
      console.log(data);
    },
    err=>{
      console.log(err);
    }
    )
  }

  edit(item){
    this.router.navigate(['/update']);
    this.isEdit=true;
    this.service.newflag(this.isEdit);
    this.service.updateMsg(this.displayMessage[item]);
    this.service.sendIndex(item);
    this.displayMessage=this.updatedValues;
    
  //  this.clearFields();
  }

}








   /* this.name=this.displayMessage[item].ename;
    this.contactNumber=this.displayMessage[item].cnumber;
    this.email=this.displayMessage[item].mail;
    this.joiningReference=this.displayMessage[item].reference;
    this.designation=this.displayMessage[item].Designation;
    this.reportingPerson=this.displayMessage[item].reporting;
    this.emergencyContact=this.displayMessage[item].emergency;
    this.aadharNumber=this.displayMessage[item].aadhar;
    this.panNumber=this.displayMessage[item].pan;
    this.licenceNumber=this.displayMessage[item].licence;*/
 