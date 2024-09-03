// these server the crud operations for the frontend
// typical for all backends (in web programming anyhoo)

const router = require('express').Router(); 
let Exercise = require('../models/exercise.model')

// route number one

// this is a get endpoint which serves the
router.route('/').get((req,res) => {
    Exercise.find()
    .then(users => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route number two

// this is a post endpoint which deals with the 
router.route('/add').post((req,res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });  

    newExercise.save()
    .then(() => {
    res.json('Exercise added!')})
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;