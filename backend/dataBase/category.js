//import mongoose 

const mongoose = require('mongoose');

// Create Category Schema using Mongoose

const categorySchema = new mongoose.Schema({
    name: String,
});

// Create Category Model
const Category = mongoose.model('categories', categorySchema);

module.exports = Category; // Export the Category model for use in other files.  Note: This is a server-side model, not a client-side one.  This model will be used in the backend to interact with the MongoDB database.  The client-side model will be used in the frontend to handle user interactions.  The frontend will communicate with the backend via API endpoints.  The API endpoints will be defined in the backend using Express.js and the Mongoose library
