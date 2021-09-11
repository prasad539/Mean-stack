var mongoose=require('mongoose');

var EmployeeSchema=new mongoose.Schema({

Dept: String,
Designation:String,
Gender: String,
PerAddress: String,
TempAddress:String,
aadhar: Number,
blood: String,
cnumber: Number,
dob: Date,
doj: Date,
emergency: Number,
ename: String,
licence: String,
mail: String,
option: String,
pan: String,
passport: String,
reference: String,
remark: String,
reporting: String,
status: String
  
  //qualification:
});

var employeeModel=mongoose.model("empList",EmployeeSchema);
module.exports=employeeModel;

/*name1:"",
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

qualification:[
  {id:1,name:"BE"},
  {id:1,name:"BTech"},
  {id:1,name:"ME"},
  {id:1,name:"MCA"},
  {id:1,name:"MTech"},
  {id:1,name:"BCS"},
  {id:1,name:"MCS"},
],

employeeNamePattern:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",
emailPattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
contactPattern:"^[7-9][0-9]{9}$",
aadharPattern:"^[0-9]{12}$",
panPattern:"^[A-Z]{5}[0-9]{4}[A-Z]{1}$",
licencePattern:"^[A-Z]{2}[0-9]{13}$",
     }
   ];
  }*/