const mongoose = require('mongoose')

const animeSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, auto: true},
    name: {
        fr: String,
        en: String
        },
    popularity: Number,
    seasons: [{
            num: Number,
            episodes: Number,
            episodeDuration: Number,
            cover: String
             }],
    finished: Boolean,
    trailer: String,
    description: {
        fr: String,
        en: String
    },
    covers: [String],
    plateforms: [String],
    startYear: Number,
    type: String
})

const anime = mongoose.model('Anime', animeSchema)

module.exports = anime
