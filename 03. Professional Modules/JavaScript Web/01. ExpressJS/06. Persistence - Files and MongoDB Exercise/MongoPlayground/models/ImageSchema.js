const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: { type: mongoose.SchemaTypes.String, required: true },
    creationDate: { type: mongoose.SchemaTypes.Date, required: true, default: Date.now },
    title: {type: mongoose.SchemaTypes.String, required: true},
    description: { type: mongoose.SchemaTypes.String, required: true},
    tags: [{ type: mongoose.SchemaTypes.ObjectId}]
})

module.exports = mongoose.model('Image', imageSchema)