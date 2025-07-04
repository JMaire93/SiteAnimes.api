const mongoose = require('mongoose')

function connectDB (model, valeurs) {    
    mongoose.connect('mongodb+srv://maire94:unlimited94@siteanime.qo9ljj8.mongodb.net/SiteAnimes')
        .then(console.log('serveur mongodb connecté'))
        .catch(error=>console.log(error))
}

module.exports = connectDB