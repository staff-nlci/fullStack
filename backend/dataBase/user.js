//import mongoose 

const mongoose = require('mongoose');

// Create User Schema using Mongoose

const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    isAdmin:Boolean
});

// Create User Model
const User = mongoose.model('users', userSchema);

module.exports = User; // Export the User model for use in other files.  Note: This is a server-side model, not a client-side one.  This model will be used in the backend to interact with the MongoDB database.  The client-side model will be used in the frontend to handle user interactions.  The frontend will communicate with the backend via API endpoints.  The API endpoints will be defined in the backend using Express.js and the Mongoose library

