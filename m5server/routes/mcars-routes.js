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
mcarRoutes.post('/api/mcars/new', mcarUploader.single('mcarPhoto'), (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: "Login to add a new M Car" });
        return;
    }

    const newCar = new MCar({
        modelM: req.body.modelM,
        year: req.body.year,
        posts: req.body.posts,
        specs: req.body.specs,
        image: req.body.image || '',
        owner: req.user._id
    });
    if (req.file) {
        newCar.image = '/uploads/' + req.file.filename;
    }

    newCar.save((err) => {
        if (err) {
            res.status(500).json({ message: "Error occurred from database" });
            return;
        }
        // validation errors
        if (err & newCar.errors) {
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


// View BMW M Cars
mcarRoutes.get('/api/mcars', (req, res, next) => {
    // if (!req.user) {
    //     res.status(401).json({ message: "Log in to see the cars." });
    //     return;
    // }
    MCar.find()

        // don't retrieve "encryptedPassword" 
        .populate('user', { encryptedPassword: 0 })
        .exec((err, MCars) => {
            if (err) {
                res.status(500).json({ message: "Finding M Cars went bad." });
                return;
            }
            res.status(200).json(MCars);
        });
});

// view specific M Car
mcarRoutes.get('/api/mcars/:id', (req, res, next) => {
	if (!req.user) {
		res.status(401).json({ message: "Log in to view the car"});
		return;
	}
	if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
		res.status(400).json({ message: "Specified id is not valid"});
		return;
	}
	MCar.findById(req.params.id, (err, theBMW) => {
    if (err) {
      //res.json(err);
      res.status(500).json({ message: "BMW find went bad." });
      return;
    }

    res.status(200).json(theBMW);
  });
})

// update the M Car
mcarRoutes.put('/api/mcars/:id', (req, res, next) => {
    if (!req.user) {
      res.status(401).json({ message: "Log in to update the car." });
      return;
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: "That ID is not valid" });
        return; 
    }

    const updates = {
        modelM: req.body.modelM,
        year: req.body.year,
        posts: req.body.posts,
        specs: req.body.specs,
        image: req.body.image,   
    };

  MCar.findByIdAndUpdate(req.params.id, updates, err => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: "BMW M Model has been updated successfully."
    });
  });
});



// delete the car from the database
mcarRoutes.delete("/api/mcars/:id", (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ message: "Log in to delete the car." });
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "That ID is not valid." });
    return;
  }

  MCar.remove({ _id: req.params.id }, err => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: "BMW M model has been removed."
    });
  });
});



module.exports = mcarRoutes;