const mongoose = require('mongoose');
const ListSchema = new mongoose.Schema({
    title: String,
    location: String
});

module.exports = ListSchema;