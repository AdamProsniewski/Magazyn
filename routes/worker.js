const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const Worker = require('../models/workerModel');


//routes

//pobieranie wszystkich workerów
router.get('/', async (req,res) => {
    try {
        const workers = await Worker.find();
        res.json(workers);
    } catch (err) {
        res.json({message:err});
    }
});
//dodawanie
router.post('/', async (req,res) => {
    const worker = new Worker({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        shiftStart: req.body.shiftStart,
        job: req.body.job,
    });
    try{
   const savedWorker = await worker.save()
    res.json(savedWorker);
    }catch(err){
        res.json({message: err});
    }
});
//pobieranie konkretnego workera
router.get('/:workerId', async (req,res) => {
    try{
    const worker = await Worker.findById(req.params.workerId);
    res.json(worker);
    }catch(err){
        res.json({message:err});
    }
});

//usuwanie workera
router.delete('/:workerId', async (req,res) => {
    try{
    const removeWorker = await Worker.remove({_id: req.params.workerId})
    res.json(removeWorker);
    }catch(err){
        res.json({message:err});
    };
});
//aktualizacja workera
router.patch('/:workerId', async (req,res) => {
    try {
       const updatedWorker = await Worker.updateOne(
           {_id: req.params.workerId}, 
           {
               $set: {
                    name: req.body.name,
                    surname: req.body.surname,
                    shiftStart: req.body.shiftStart,
                    job: req.body.job,
               }
           }
           );
           res.json(updatedWorker);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = router;