const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',(req,res,next) => {
    res.render('employee/addOrEdit',{
        viewTitle: "Insert Employee"
    });
});

router.post('/',(request,response,next) => {
    insertEmployeeRecords(request,response);
});

function insertEmployeeRecords(req,res){
    let employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,doc) => {
        if(!err){
            res.redirect('employee/list');
        } else {
            console.log(`Error inserting employee: ${err}`);
        }
    });
}

router.get('/list', (req,res,next) => {
    Employee.find((err,docs) => {
        if(!err){
            res.render('employee/list',{
                list:docs
            });
        }
    });
});

module.exports = router;