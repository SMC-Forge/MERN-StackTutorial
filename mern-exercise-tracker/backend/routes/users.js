// these server the crud operations for the frontend
// typical for all backends (in web programming anyhoo)

const router = require('express').Router(); 
let User = require('../models/user.model')

// route number one

// this is a get endpoint which serves the
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// route number two

// this is a post endpoint which deals with the 
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error:' + err));
    
});

module.exports = router;