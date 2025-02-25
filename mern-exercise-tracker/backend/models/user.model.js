// not sure if this code will run given that the mongodb version seems to have changed and we're not connecting using moongoose. 
// might have to find out how to incorporate schemas separately from this, but will give this a shot for now

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required:true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;