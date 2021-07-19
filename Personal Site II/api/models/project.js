const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    forks: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    githubID: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
