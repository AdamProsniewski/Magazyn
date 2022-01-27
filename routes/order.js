const express = require('express');
const router = express.Router();
const mongoose = require("mongoose")
const Order = require('../models/orderModel');


//routes

//pobieranie wszystkich orderów
router.get('/', async (req,res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.json({message:err});
    }
});
//dodawanie
router.post('/', async (req,res) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        itemsIds: req.body.itemsIds,
        date: req.body.date,
        description: req.body.description,
        ownerId: req.body.ownerId,
    });
    try{
   const savedOrder = await order.save()
    res.json(savedOrder);
    }catch(err){
        res.json({message: err});
    }
});
//pobieranie konkretnego ordera
router.get('/:orderId', async (req,res) => {
    try{
    const order = await Order.findById(req.params.orderId);
    res.json(order);
    }catch(err){
        res.json({message:err});
    }
});

//usuwanie ordera
router.delete('/:orderId', async (req,res) => {
    try{
    const removeOrder = await Order.remove({_id: req.params.orderId})
    res.json(removeOrder);
    }catch(err){
        res.json({message:err});
    };
});
//aktualizacja ordera
router.patch('/:orderId', async (req,res) => {
    try {
       const updatedOrder = await Order.updateOne(
           {_id: req.params.orderId}, 
           {
               $set: {
                itemsIds: req.body.itemsIds,
                date: req.body.date,
                description: req.body.description,
                ownerId: req.body.ownerId,
               }
           }
           );
           res.json(updatedOrder);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = router;