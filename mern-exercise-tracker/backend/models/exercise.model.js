// not sure if this code will run given that the mongodb version seems to have changed and we're not connecting using moongoose. 
// might have to find out how to incorporate schemas separately from this, but will give this a shot for now
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type: String,required:true},
    description: {type: String,required:true},
    duration: {type: Number,required:true},
    date: {type: Date,required:true},
}, {
    timestamps: true,
});
// Exercise is a mongoose model, so it has a bunch of methods taken from the Mongoose library.
// The methods are used in some of the routes in exercises.js and users.js
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;