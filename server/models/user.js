const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    order: [Order.schema],
    /*
    boughtGame1: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame2: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame3: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame4: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame5: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame6: {
        type: Boolean,
        required: true,
        trim: true,
    },
    */
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};  

const User = mongoose.model('User', userSchema);

module.exports = User;