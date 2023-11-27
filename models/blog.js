const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema defines structure of our documents
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

// model is thing that surrounds schema and provides us with interface by which to communicate with database collection for that document type.

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
