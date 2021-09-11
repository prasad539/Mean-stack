let mongoose=require('mongoose');
let employee=require('../Models/employeeModel');
let chai=require('chai');
let chaihttp=require('chai-http');
let server=require('../server');

let should=chai.should();

chai.use(chaihttp);

describe('Testing unit',function(){
   /* beforeEach((done)=>{
        employee.remove({},(err)=>{
            done();
        })
    })*/
    describe('GET data',function(){
    it('SHOULD GET ALL TASKS',function(done){
        chai.request(server)
        .get('/read')
        .end(function(err,response){
            response.should.have.status(200);
            response.body.should.have.a('array');
            done();
        })
    })
    })

    describe('POST data',function(){
        it('POST a new employee data',function(done){
            let emp={
                ename: 'ad',
                Dept: 'Engg',
                Designation: 't-y',
                Gender: 'Male',
                PerAddress: 'guguigiugui',
                TempAddress: 'ohiohiohioh',
                aadhar: 678678687678,
                blood: 'A+',
                cnumber: 7878787888,
                dob: '2020-08-01',
                doj: '2020-08-01',
                emergency: 7878787878,
                licence: 'MH1213234242343',
                mail: 'rr@gmail.com',
                option: 'BE',
                pan: 'AAAAA5656A',
                passport: 'Yes',
                reference: 'yu',
                remark: '',
                reporting: 't ty',
                status: 'Unmarried'
            }
            chai.request(server)
            .post('/create')
            .send(emp)
            .end(function(err,response){
                response.should.have.status(200);
                response.body.should.have.a('object');
                response.body.should.have.property('msg').eql('Successfully added');
                response.body.should.have.property('ename').which.is.an('object');
                response.body.should.have.property('Dept');
                response.body.should.have.property('Designation');
                response.body.should.have.property('Gender');
                response.body.should.have.property('PerAddress');
                response.body.should.have.property('TempAddress');
                response.body.should.have.property('aadhar');
                response.body.should.have.property('blood');
                response.body.should.have.property('cnumber');
                response.body.should.have.property('dob');
                response.body.should.have.property('doj');
                response.body.should.have.property('emergency');
                response.body.should.have.property('licence');
                response.body.should.have.property('mail');
                response.body.should.have.property('option');
                response.body.should.have.property('pan');
                response.body.should.have.property('passport');
                response.body.should.have.property('reference');
                response.body.should.have.property('reporting');
                response.body.should.have.property('status');
                response.body.should.have.property('remark');
                done();
            })
        })
    })

  /*  describe('UPDATE user',function(){
        it('should update a user given id',(done)=>{
            let emp=new employee({  ename: 'ad',
            Dept: 'Engg',
            Designation: 't-y',
            Gender: 'Male',
            PerAddress: 'guguigiugui',
            TempAddress: 'ohiohiohioh',
            aadhar: 678678687678,
            blood: 'A+',
            cnumber: 7878787888,
            dob: '2020-08-01',
            doj: '2020-08-01',
            emergency: 7878787878,
            licence: 'MH1213234242343',
            mail: 'rr@gmail.com',
            option: 'BE',
            pan: 'AAAAA5656A',
            passport: 'Yes',
            reference: 'yu',
            remark: '',
            reporting: 't ty',
            status: 'Unmarried'
        })
        emp.save((err,emp)=>{
            chai.request(server)
            .put('/update')
            .send({
            ename: 'ad',
            Dept: 'Engg',
            Designation: 't-y',
            Gender: 'Male',
            PerAddress: 'guguigiugui',
            TempAddress: 'ohiohiohioh',
            aadhar: 678678687678,
            blood: 'A+',
            cnumber: 7878787889,
            dob: '2020-08-01',
            doj: '2020-08-01',
            emergency: 7878787878,
            licence: 'MH1213234242343',
            mail: 'rr@gmail.com',
            option: 'BE',
            pan: 'AAAAA5656A',
            passport: 'Yes',
            reference: 'yu',
            remark: '',
            reporting: 't ty',
            status: 'Unmarried'
        })
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                //res.body.should.have.property('msg').eql('Successfully updated the record');
               // res.body.should.have.property('cnumber').eql('7878787889');
                done();
            })
        })
        })
    })*/


    describe('DELETE user',function(){
        it('should delete a user given id',(done)=>{
            let emp=new employee({  ename: 'ad',
            Dept: 'Engg',
            Designation: 't-y',
            Gender: 'Male',
            PerAddress: 'guguigiugui',
            TempAddress: 'ohiohiohioh',
            aadhar: 678678687678,
            blood: 'A+',
            cnumber: 7878787888,
            dob: '2020-08-01',
            doj: '2020-08-01',
            emergency: 7878787878,
            licence: 'MH1213234242343',
            mail: 'rr@gmail.com',
            option: 'BE',
            pan: 'AAAAA5656A',
            passport: 'Yes',
            reference: 'yu',
            remark: '',
            reporting: 't ty',
            status: 'Unmarried'
        })
        emp.save((err,emp)=>{
            chai.request(server)
            .delete('/delete/'+emp.id)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('msg').eql('Successfully deleted the record');
                done();
            })
        })})
    })
})