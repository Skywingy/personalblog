const router = require("express").Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');
const { findById } = require("../models/User");
const  getObjectSignedUrl   = require('../s3');




//CREATE POST
router.post("/", async (req, res) => {
    console.log("1", req.body);

    const newPost = new Post(req.body);

    console.log('2', newPost);

    try{
        console.log("2a", newPost);
        const savedPost = await newPost.save();
        console.log('3',savedPost)
        res.status(200).json(savedPost);
        console.log("goodjob")

    }catch(err){
        console.log("4")
        res.status(500).json(err);
    }
})

//UPDATE POST

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, 
                    {
                    $set:req.body

                    }, 
                
                    { new: true }
                );

                res.status(200).json(updatedPost, updatedPosts);
                } catch(err){
                res.status(500).json(err);
                }
            } else {
                res.status(401).json("You can update only your post!");
                
            }   
        }   catch(err){
                res.status(500).json(err)
        }
    });

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
            } catch (err) {
            res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
        } catch (err) {
        res.status(500).json(err);
        }
    });

    //GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
        } catch (err) {
        res.status(500).json(err);
    }
});

  //GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;

    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
            

        } else if (catName) {
            posts = await Post.find({
            categories: {
                $in: [catName],
            },
            });
        } else {
            posts = await Post.find();
        }
        
        res.status(200).json(posts);
        } catch (err) {
        res.status(500).json(err);
        }
});


module.exports = router;