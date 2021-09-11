import { Injectable ,EventEmitter,Output} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {BehaviorSubject} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor(private http:HttpClient) {
    this.isDone=true;
   }

   createEmployee(employeeData){
     var headers=new HttpHeaders({'Content-Type':'application/json'});
     //headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3100/create',employeeData,{headers:headers});
    
   }

  readEmployee(){
     return this.http.get('http://localhost:3100/read');
   }

   updateEmployee(updateData)
   {
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put('http://localhost:3100/update',updateData,{headers:headers});
   }

   deleteEmployee(id)
   {
    var headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.delete('http://localhost:3100/delete/'+id,{headers:headers});
   }

   testApi(){
    return this.http.get('http://localhost:3100/test',{responseType: 'text'});
   }
   
   //getAllUsers(){
   // return this.http.get('https://localhost:3100/get');
   //}
   
   getAllUsers(){

    return[
      {
        _id:"",
    name:"",
 contactNumber:"",
 email:"",
 joiningReference:"",
 designation:"",
 reportingPerson:"",
 emergencyContact:"",
 aadharNumber:"",
 panNumber:"",
 licenceNumber:"",
 joiningDate:"",
 birthDate:"",
 qualf:"",
 bloodGroup:"",
 maritalstatus:"",
 employeeGender:"",
 employeeDepartment:"",
 employeePassport:"",
 temporaryAddress:"",
 permanentAddress:"",
 employeeRemark:"",
      }]} 
  
  employee=[];
  isDone=false;
   msg=new BehaviorSubject<any[]>([]);
  share =this.msg.asObservable();

  updateMessage=new BehaviorSubject<any[]>([]);
  share1=this.updateMessage.asObservable();

  updateIndex=new BehaviorSubject<any>('');
  share2=this.updateIndex.asObservable();

  setflag=new BehaviorSubject<any>('');
  flag=this.setflag.asObservable();

  setNewData=new BehaviorSubject<any>('');
  newData=this.setNewData.asObservable();

 /* flagDone=new BehaviorSubject<any>('');
  falseFlag=this.flagDone.asObservable();

  createNew=new BehaviorSubject<any>('');
  newRecord=this.createNew.asObservable();*/
 //@Output() clicked:EventEmitter<any> =new EventEmitter<any>();
  
  changeMsg(message:any){
   // this.employee.push(this.msg.getValue().concat([message]));
    //console.log(this.employee);
    
    this.msg.next(this.msg.getValue().concat([message]));
  
  }
  //getDetails(value:any){
  updateMsg(value:any){
    this.updateMessage.next(this.updateMessage.getValue().concat([value]));
  }

  sendIndex(index:any){
    this.updateIndex.next(index);
  }

  newflag(f:any){
    this.setflag.next(f);
  }  
  
  takeUpdatedData(upArray){
    this.setNewData.next(this.updateMessage.getValue().concat([upArray]));
  }
    
 /* editDone(flagFalse){
    this.flagDone.next(flagFalse);
  }*/

 /* newCreate(create){
    this.createNew.next(create);
  }*/
   // return value;
  //}
}
