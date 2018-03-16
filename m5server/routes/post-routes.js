const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const postRoutes = express.Router();

// models
const Post = require('../models/post-model');
const MCar = require('../models/mcar-model');

// Multer to use for post images
const postUploader = multer({
	dest: __dirname + '/../public/uploads/'
});

// create a new post for specific M car 
postRoutes.post('/api/mcars/:id/post/new', postUploader.single('postPhoto'), (req, res, next) => {
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

// view all posts for a specific M car 
postRoutes.get('/api/mcars/:id/posts', (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: "Login to see posts"});
        return
    }
    Post.find()
    // retrieve info of the owners 
    .populate('user', { encryptedPassword: 0 })
      .exec((err, allThePhones) => {
        if (err) {
          res.status(500).json({ message: "Phones find went bad." });
          return;
        }
        res.status(200).json(allThePhones);
      });
});


// View a single post thread for an M car 
postRoutes.get('/api/mcars/:id/post', (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: "Login to view this post"});
        return
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
   Post.findById(req.params.id, (err, thePost) => {
    if (err) {
      //res.json(err);
      res.status(500).json({ message: "There has been an error finding that thread" });
      return;
    }

    res.status(200).json(thePost);
  });
});

// update a post that a user makes 
postRoutes.put('/api/mcars/:id/post/edit', (req, res, next) => {
     if (!req.user) {
      res.status(401).json({ message: "Login to update your post" });
      return;
    }
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    const updates = {
        title: req.body.mcarTitle,
        text: req.body.mcarText,
        createdAt: Date.now(),
        image: req.body.image 
    };
});


module.exports = postRoutes;