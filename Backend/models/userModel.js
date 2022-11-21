const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        reuired: [true, 'name is required'],
        maxlength: [20, "name not exceed more than 20 character"]
    },
    email: {
        type: String,
        unique: true,
        required:[true, 'email is required']
    }
})

module.exports = mongoose.model('user', userSchema);