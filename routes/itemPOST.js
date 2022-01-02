const express = require('express');
const router = express.Router();
const Post = require('../models//itemPost');
const upload = require('../middleware//upload');


//routes

//pobieranie wszystkich postów
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message:err});
    }
});
//dodawanie
router.post('/', upload.single('ItemImage'), async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    try{
   const savedPost = await post.save()
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});
//pobieranie konkretnego postu
router.get('/:postId', async (req,res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//usuwanie postu
router.delete('/:postId', async (req,res) => {
    try{
    const removePost = await Post.remove({_id: req.params.postId})
    res.json(removePost);
    }catch(err){
        res.json({message:err});
    };
});
//aktualizacja postu
router.patch('/:postId', async (req,res) => {
    try {
       const updatedPost = await Post.updateOne(
           {_id: req.params.postId}, 
           {$set: {title: req.body.title}}
           );
           res.json(updatedPost);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = router;