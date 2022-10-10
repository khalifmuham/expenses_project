const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title has to be at least 2 characters long"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Must have a price"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description has to be at least 5 characters long"]
    }

}, {timestamps: true})

// creating Expense schema and calling it Expense
module.exports = mongoose.model('Expense', ExpenseSchema)