const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeesDB',{ useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('Connection Successful');
    } else {
        console.log(`Error occurred: ${err}`);
    }
});

require('./employee.model');