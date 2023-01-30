const mongoose = require('mongoose')

const characterSchema = mongoose.Schema({
    name:{ type: String },
    sign:{ type: String },
    personality:{
        discipline: { type: Number },
        curiosity: { type: Number },
        extroversion: { type: Number },
        sensitivity: { type: Number },
        gentleness: { type: Number },
        sincerity: { type: Number },
    },
    occupation:{
        name: { type: String },
        popularity: { type: Number },
        type: { type: String },
        alignment: { type: Number },
    },
    features:[
        {
            name: { type: String },
            popularity: { type: Number },
            type: { type: String },
            alignment: { type: Number },
        }
    ]
})

module.exports = mongoose.model('Character', characterSchema)