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
postRoutes.post('/api/mcars/new/post', postUploader.single('postPhoto'), (req, res, next) => {
	if (!req.user) {
		res.status(401).json({ message: "Login to create a new post"});
		return;
	}

	const newPost = new Post({
		title: req.body.title,
		owner: req.user._id,
		post: req.body.post,
		date: req.body.date,
		discussion: req.body.discussion
	});
})


module.exports = postRoutes;