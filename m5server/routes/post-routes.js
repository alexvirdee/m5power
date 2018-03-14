const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const postRoutes = express.Router();

const Post = require('../models/post-model');

// Multer to use for post images
const postUploader = multer({
	dest: __dirname + '/../public/uploads/'
});

// create a new post under car 
postRoutes.post('/api/mcars/:id/post', postUploader.single('postPhoto'), (req, res, next) => {
	if (!req.user) {
		res.status(401).json({ message: "Login to create a new post"});
		return;
	}
	const newPost = new Post({
		title: req.body.title,
		owner: req.user._id,
		text: req.body.text,
		date: req.body.date,
        discussions: Schema.ObjectId
	});
	 if(req.file){
        newPost.image = '/uploads' + req.file.filename;
    }
    newPost.save((err) => {
    	console.log(newPost);
        if(err){
            res.status(500).json({message: `Error occurred from the database: ${err}`});
            return;
        }
        // validation errors
        if (err && newPost.errors){
            res.status(400).json({
                titleError: newPost.errors.title,
            });
            return;
        }
        req.user.encryptedPassword = undefined;
        newPost.user = req.user;

        res.status(200).json(newPost);
    });
});


module.exports = postRoutes;