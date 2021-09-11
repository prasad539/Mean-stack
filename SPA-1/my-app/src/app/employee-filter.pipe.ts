import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(displayMessage: any[], searchByName:string):any[] {

    if(!displayMessage || !searchByName){
    return displayMessage;
  }

  return displayMessage.filter(d=>
    d.ename.toLowerCase().indexOf(searchByName.toLowerCase()) !==-1);
}
}