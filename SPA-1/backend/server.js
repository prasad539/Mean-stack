const express=require('express');
const app=express();
var path=require('path');
const cors=require('cors');
app.use(cors({origin:'*'}));
app.options('*', cors());
app.use( function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
  //  res.header({"cache-control": "no-cache"});
   // res.header({'Access-Control-Allow-Credentials': 'true'});
    res.header("Access-Control-Allow-Methods", 'GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
  });

  var port = process.env.PORT || 27017;
  var mongourl = process.env.MONGOURL || localhost
  
var mongoose=require('mongoose');

var bodyparser=require('body-parser');
var mongoOp=require('./Models/employeeModel');
app.use(bodyparser.urlencoded({extended:true}));

mongoose.set('useFindAndModify', false);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyparser.json());
//app.use('/',router);


app.use(express.static(path.join(__dirname,'dist')));

app.get('/',function(req,res){
    res.send('Hello');
});



app.get('/read',function(req,res){
    mongoOp.find(function(err,data){
         res.send(data);
    })
});

app.get('/test',function(req,res){
    res.send('Hello');
})

app.post('/create',function(req,res){
    let newEmployee=new mongoOp({
        
        ename:req.body.ename,
  Dept:req.body.Dept,
  Designation:req.body.Designation,
Gender: req.body.Gender,
PerAddress: req.body.PerAddress,
TempAddress:req.body.TempAddress,
aadhar: req.body.aadhar,
blood: req.body.blood,
cnumber: req.body.cnumber,
dob: req.body.dob,
doj: req.body.doj,
emergency: req.body.emergency,
licence: req.body.licence,
mail: req.body.mail,
option: req.body.option,
pan: req.body.pan,
passport: req.body.passport,
reference: req.body.reference,
remark: req.body.remark,
reporting: req.body.reporting,
status: req.body.status
    })

    newEmployee.save(function(err){
        if(err)
        {
            res.json({msg:'Failed to add details.'});
        }
        else
        {
            res.send({msg:'Successfully added'}); 
        }
    })
})

app.put('/update',function(req,res){
    
    //var task=req.body;
   /* mongoOp.findById(req.body._id,(err,emp)=>{
     //   console.log(req.body);console.log(emp);
      if(err)
        {
            res.status(500).send('Error in finding ID');
        }*/console.log(req.body);
        var emp={
        ename:req.body.ename,
        Dept:req.body.Dept,
        Designation:req.body.Designation,
        Gender:req.body.Gender,
        PerAddress:req.body.PerAddress,
        TempAddress:req.body.TempAddress,
        aadhar:req.body.aadhar,
        blood:req.body.blood,
        cnumber:req.body.cnumber,
        dob:req.body.dob,
        doj:req.body.doj,
        emergency:req.body.emergency,
        licence:req.body.licence,
        mail:req.body.mail,
        option:req.body.option,
        pan:req.body.pan,
        passport:req.body.passport,
        reference:req.body.reference,
        remark:req.body.remark,
        reporting:req.body.reporting,
        status:req.body.status} ; 
     /*   emp.ename=req.body.ename;
        emp.Dept=req.body.Dept;
        emp.Designation=req.body.Designation;
        emp.Gender=req.body.Gender;
        emp.PerAddress=req.body.PerAddress;
        emp.TempAddress=req.body.TempAddress;
        emp.aadhar=req.body.aadhar;
        emp.blood=req.body.blood;
        emp.cnumber= req.body.cnumber;
        emp.dob=req.body.dob;
        emp.doj=req.body.doj;
        emp.emergency=req.body.emergency;
        emp.licence=req.body.licence;
        emp.mail=req.body.mail,
        emp.option=req.body.option;
        emp.pan=req.body.pan;
        emp.passport=req.body.passport;
        emp.reference=req.body.reference;
        emp.remark=req.body.remark;
        emp.reporting=req.body.reporting;
        emp.status=req.body.status;*/
        mongoOp.findByIdAndUpdate(req.body._id,{$set:emp},{ new: true },(err,doc)=>{
            if(err) res.send('Error');
            res.send(doc);
        })
        console.log(emp);
   /* emp.save(function(err,emp){
        if(err)
        {
            res.json({msg:'Failed to update details.'});
        }
        else
        {
            res.send('Successfully updated the record'); 
        }
    })*/
        
//})

   /* mongoOp.findOneAndUpdate({_id:req.params.id},{
        $set:{
            ename:req.body.ename,
        Dept:req.body.Dept,
        Designation:req.body.Designation,
        Gender:req.body.Gender,
        PerAddress:req.body.PerAddress,
        TempAddress:req.body.TempAddress,
        aadhar:req.body.aadhar,
        blood:req.body.blood,
        cnumber:req.body.cnumber,
        dob:req.body.dob,
        doj:req.body.doj,
        emergency:req.body.emergency,
        licence:req.body.licence,
        mail:req.body.mail,
        option:req.body.option,
        pan:req.body.pan,
        passport:req.body.passport,
        reference:req.body.reference,
        remark:req.body.remark,
        reporting:req.body.reporting,
        status:req.body.status
        }
    },function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.send('Updated successfully');
        }
    }
    )*/
})

app.delete('/delete/:id',function(req,res){
    mongoOp.findOneAndRemove({_id:req.params.id},(err,emp)=>{
        if(err)
        {
            res.json({msg:'Failed to delete details.'});
        }
        else
        {
            res.send({msg:'Successfully deleted the record'}); 
        }
    })
})

mongoose.connect('mongodb://$mongourl:$port/demodb',{useNewUrlParser:true},(error)=>{
    if(!error)
    {
        console.log('Connected to database successfully!');
    }
    
    else
    {
        console.log('Error');
    }
    
})
app.listen(3100,function(){
    console.log('Connected to server!');
})

module.exports=app;