
//{ fname: { mandatory}, lname: {mandatory},
// title: {mandatory, enum[Mr, Mrs, Miss]}, email: {mandatory, valid email, unique}, password: {mandatory} }



const mongoose = require('mongoose');


const autherSchema = new mongoose.Schema({

    fname: { type: String, required: true },

    lname: { type: String, required: true },

    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"] },

    email: { type: String, required: true, unique: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g },

    password: { type: String, required: true }

}, { timestamps: true });


module.exports = mongoose.model('author', autherSchema)