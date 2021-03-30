const express = require('express');
const Student = require('../models/Student');
const Payment = require('../models/Payment');
const router = express.Router();


router.get('/GET/Students', async (req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/POST/Student', async (req,res) => {
    const student = new Student({
        name: req.body.name,
        amount: req.body.amount
    });
    
    try{
    const savedStudent = await student.save();
    res.json(savedStudent);
    } catch(err){
        res.json({message: err});
        console.log(err);
    }
});

router.post('/POST/Payment',(req,res) => {
    const payment = new Payment({
        payer: req.body.payer,
        reciever: req.body.reciever,
        amount: req.body.amount
    });

    payment.save().then(data => {
        res.json(data);
    });
});


module.exports = router;