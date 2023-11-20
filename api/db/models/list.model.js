const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: 1
    }
})

const List = mongoose.Model('List', ListSchema);

module.exports = { List }