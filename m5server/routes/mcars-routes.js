const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const mcarRoutes = express.Router();

const MCar = require('../models/mcar-model');

// Add multer for image 
const mcarUploader = multer({
	dest: __dirname + '/../public/uploads/'
});

// create a new car 
mcarRoutes.post('/api/mcars/new', mcarUploader.single('mcarPhoto') (req, res, next) => {
	if (!req.user) {
		res.status(401).json({message: "Login to add a new M Car"});
		return;
	}

	const newCar = new MCar({
		modelM: req.body.modelM,
		year: req.body.year,
		posts: req.body.posts,
		specs: req.body.specs,
		image: req.body.image,
		owner: req.user._id
	});
	 if(req.file){
        newCar.image = '/uploads' + req.file.filename;
    }

    newCar.save((err) => {
    	if(err) {
    		res.status(500).json({message: "Error occurrec from database" });
    		return;
    	}
    	// validation errors
    	if(err & newCar.errors) {
    		res.status(400).json({
    			modelMError: newCar.errors.modelM,
    		})
    		return;
    	}
    	req.user.encryptedPassword = undefined;
    	newCar.user = req.user;

    	res.status(200).json(newCar);
    });
});