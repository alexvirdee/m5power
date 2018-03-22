const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const postRoutes = express.Router();

// models
const Post = require('../models/post-model');
const MCar = require('../models/mcar-model');
const Discussion = require('../models/discussion-model');

// Multer to use for post images
const postUploader = multer({
	dest: __dirname + '/../public/uploads/'
});



// update a post that a user makes 
postRoutes.put('/api/mcars/:id/post/:postId/edit', (req, res, next) => {
    const postId = req.params.postId;
console.log(" =================== post id: ", postId)
     if (!req.user) {
      res.status(401).json({ message: "Login to update your post" });
      return;
    }
     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }
 
    
  Post.findById(postId, function (err, thePost) {
    console.log("the post is: ", thePost)

    // console.log("req user:=====" , req.user._id)
    // console.log("req body discuss:=====" , req.body.content)
    
    var theUpdate = {_author: req.user._id , content: req.body.content  }

    // console.log("This is the update: ", theUpdate);


      thePost.discussion.push(theUpdate);
      // console.log("this is the post", thePost);
      thePost.save(function (err) { 
    // console.log("this is the post", thePost);

        if (err) {
            console.log("err: ", err)
            // res.json(err);
            return;
        }

        res.json({
            message: "Your post has been updated successfully"
        });

   })
})

});


// create a new post for specific M car 
postRoutes.post('/api/mcars/:id/post/new', postUploader.single('postPhoto'), (req, res, next) => {
	const mcarId = req.params.id;
    if (!req.user) {
		res.status(401).json({ message: "Login to create a new post"});
		return;
	}
    MCar.findById(mcarId, (err, foundCar) => {

        if(err){
            console.log(err);
            return;
        }
        const newPost = new Post({
        title: req.body.title,
        owner: req.user.username,
        text: req.body.text,
        date: Date.now(),
        mcar: mcarId
        // discussions: Schema.ObjectId
    });
        
    if(req.file){
            newPost.image = '/uploads/' + req.file.filename;
        }
        foundCar.posts.push(newPost);
        // console.log("foundCar", foundCar)
        foundCar.save(err => {
            if(err){
                    res.status(500).json({message: `Error occurred from the database: ${err}`});
                    return;
                }
            newPost.save((err) => {
                    // console.log(newPost);
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
        })
    })
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
      .exec((err, allThePosts) => {
        if (err) {
          res.status(500).json({ message: "Phones find went bad." });
          return;
        }
        res.status(200).json(allThePosts);
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



// No posts should be deleted but making a route just in case 
postRoutes.delete('/api/mcars/:id', (req, res, next) => {
     if (!req.user) {
    res.status(401).json({ message: "Log in to delete your post." });
    return;
    }
   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid." });
    return;
  }
  Post.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: "The post has been successfully removed."
    });
  });
});


// create discussion to the M car post
postRoutes.post('/api/mcars/:mcarId/post/:postId/discussion/new', (req, res, next) => {
    const mcarId = req.params.mcarId;
    const postId = req.params.postId;

    if (!req.user) {
        res.status(401).json({ message: "Log in to delete your post." });
    return;
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.mcarId)) {
        res.status(400).json({ message: "Specified id is not valid." });
    return;
    }
        MCar.findById(mcarId, (err, foundCar) => {
        if(err){
            res.status(500).json({message: `Error occurred from the database: ${err}`});
            return;
          }
        console.log("Car:", foundCar)
        Post.findById(postId, (err, foundPost) => {
            if(err){
                res.status(500).json({message: `Error occurred from the database: ${err}`});
                return;
            }
            console.log("found post",foundPost)
            const newDiscussion = new Discussion({
                _author: req.user._id,
                content: req.body.content
            })

            foundPost.discussion.push(newDiscussion);
            foundPost.save(err => {
                if(err){
                    res.status(500).json({message: `Error occurred from the database: ${err}`});
                    return;
                }
            })
            foundCar.posts.push(foundPost);
            foundCar.save(err => {
                console.log("err while saving car", err)
            })
            res.status(200).json(foundCar);
        });
    });
});



module.exports = postRoutes;