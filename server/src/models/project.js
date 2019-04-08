const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
    },
    link: String
});

module.exports = mongoose.model('Project', projectSchema)