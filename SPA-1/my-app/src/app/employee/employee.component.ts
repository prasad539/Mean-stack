import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DataShareService } from '../data-share.service';
import {NgForm} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  empForm:NgForm
  constructor(private router: Router,private service:DataShareService,) { 
   // this.service.msg.subscribe(value)
  }
  demo:any;
  message:any;
  umessage:any[];
  employeeList:any[];
  uindex:any;
  flagValue:boolean=false;
  employeeData:any[];
  updatedData:any[];
  newEmployeeData:any;
  isUpdate:boolean=false;
  record:boolean;
  _id?:String;
  
  ngOnInit(): void {
    //this.employeeData=[{}];
    this.clearFields();
   // this.service.share.subscribe(message=>this.message=message);
    this.service.share1.subscribe(umessage=>this.umessage=umessage);
    this.employeeList=this.umessage;
    this.service.share2.subscribe(uindex=>this.uindex=uindex);
    this.service.flag.subscribe(uflag=>this.flagValue=uflag);
   // this.service.newRecord.subscribe(newRec=>this.record=newRec);
   // this.clearFields();
    
   this.updatedData=this.employeeData;
    
    if(this.flagValue==true){
   
   this.edit();
   
    }
   /*else if(this.record==false){
    this.clearFields();
      //this.router.navigate(['/create']);
     // this.flagValue=false;
     // this.service.editDone(this.flagValue);
      //this.clearFields();
      //this.empForm.resetForm();

    }*/
   
   }

   clearFields(){
    this.employeeData=this.service.getAllUsers();
      
   }
   
   edit()
   {
    //this.isEdit=true;
    this.employeeData=[
      {_id:this.employeeList[this.employeeList.length-1]._id,
      name:this.employeeList[this.employeeList.length-1].ename,
      joiningDate:this.employeeList[this.employeeList.length-1].doj,
      contactNumber:this.employeeList[this.employeeList.length-1].cnumber,
      email:this.employeeList[this.employeeList.length-1].mail,
      birthDate:this.employeeList[this.employeeList.length-1].dob,
      maritalStatus:this.employeeList[this.employeeList.length-1].status,
      qualf:this.employeeList[this.employeeList.length-1].option,
      employeeGender:this.employeeList[this.employeeList.length-1].Gender,
      joiningReference:this.employeeList[this.employeeList.length-1].reference,
      employeeDepartment:this.employeeList[this.employeeList.length-1].Dept,
      designation:this.employeeList[this.employeeList.length-1].Designation,
      reportingPerson:this.employeeList[this.employeeList.length-1].reporting,
      temporaryAddress:this.employeeList[this.employeeList.length-1].TempAddress,
      permanentAddress:this.employeeList[this.employeeList.length-1].PerAddress,
      emergencyContact:this.employeeList[this.employeeList.length-1].emergency,
      aadharNumber:this.employeeList[this.employeeList.length-1].aadhar,
      panNumber:this.employeeList[this.employeeList.length-1].pan,
      licenceNumber:this.employeeList[this.employeeList.length-1].licence,  
      employeePassport:this.employeeList[this.employeeList.length-1].passport,
      bloodGroup:this.employeeList[this.employeeList.length-1].blood,
      employeeRemark:this.employeeList[this.employeeList.length-1].remark
    },
    ];
    
    this.isUpdate=true;
    console.log(this.employeeData);
    this.flagValue=false;
    this.service.newflag(this.flagValue);
   }

   update()
   {
    this.employeeList[this.employeeList.length-1]._id=this.employeeData[0]._id,
    this.employeeList[this.employeeList.length-1].ename=this.employeeData[0].name,
    this.employeeList[this.employeeList.length-1].doj=this.employeeData[0].joiningDate,
    this.employeeList[this.employeeList.length-1].cnumber=this.employeeData[0].contactNumber,
    this.employeeList[this.employeeList.length-1].mail=this.employeeData[0].email
    this.employeeList[this.employeeList.length-1].dob=this.employeeData[0].birthDate,
    this.employeeList[this.employeeList.length-1].status=this.employeeData[0].maritalStatus,
    this.employeeList[this.employeeList.length-1].option=this.employeeData[0].qualf,
    this.employeeList[this.employeeList.length-1].Gender=this.employeeData[0].employeeGender
    this.employeeList[this.employeeList.length-1].reference=this.employeeData[0].joiningReference,
    this.employeeList[this.employeeList.length-1].Dept=this.employeeData[0].employeeDepartment,
    this.employeeList[this.employeeList.length-1].Designation=this.employeeData[0].designation,
    this.employeeList[this.employeeList.length-1].reporting=this.employeeData[0].reportingPerson,
    this.employeeList[this.employeeList.length-1].TempAddress=this.employeeData[0].temporaryAddress,
    this.employeeList[this.employeeList.length-1].PerAddress=this.employeeData[0].permanentAddress,
    this.employeeList[this.employeeList.length-1].emergency=this.employeeData[0].emergencyContact,
    this.employeeList[this.employeeList.length-1].aadhar=this.employeeData[0].aadharNumber,
    this.employeeList[this.employeeList.length-1].aadhar=this.employeeData[0].aadharNumber,
    this.employeeList[this.employeeList.length-1].pan=this.employeeData[0].panNumber,
    this.employeeList[this.employeeList.length-1].licence=this.employeeData[0].licenceNumber,
    this.employeeList[this.employeeList.length-1].passport=this.employeeData[0].employeePassport,
    this.employeeList[this.employeeList.length-1].blood=this.employeeData[0].bloodGroup,
    this.employeeList[this.employeeList.length-1].remark=this.employeeData[0].employeeRemark

    this.newEmployeeData=this.employeeList;
    this.service.takeUpdatedData(this.newEmployeeData[this.uindex]);
    this.router.navigate(['/list']);
    
    this.isUpdate=false;

    
    this.service.updateEmployee(this.newEmployeeData[this.newEmployeeData.length-1]).subscribe(upData=>{
      console.log(upData);
    },
    error=>
    {
      console.log(error);
    }
    )
    //this.employeeData=[{}];
    
   // this.clearFields();
   }
   
   

onSubmit(value:any){
 // console.log(value);
 // alert("The form was submitted");

 this.service.createEmployee(value).subscribe(emp=>{
    console.log(emp);
})
 this.router.navigate(['/list']);
 this.service.changeMsg(value);

this.service.testApi().subscribe(data=>{
  this.demo=data;
  console.log(this.demo);

})

this.service.readEmployee().subscribe(data=>{
  this.demo=data;
  console.log(this.demo);

})
}
}






//^[a-zA-Z ]{1,}(^[_.])$  ^[a-zA-Z0-9]+([_\s\-]?[a-zA-Z0-9])*$  ^((\\+91-?)|0)?[0-9]{10}$ 