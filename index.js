const express = require('express')
const app = express()
const ejs = require('ejs')
const Anime = require('./models/Anime.js')
const connectDB = require('./serveurMongo/ConnectDB.js')

app.set('view engine','ejs')

app.use(express.urlencoded({extended: true}))

app.get("/animes/add/",async (req,res)=>{
    try {
        res.render('form')
    } 
    catch (error) {
        throw error
    }
})
app.post("/animes/add/",async (req,res) =>{
    console.log(req.body)
    if (req.body.finished === 'on') {req.body.finished = true}
    else {req.body.finished = false}
    try {
       let newAnime = new Anime(req.body)
       let savedAnime = await newAnime.save()
       res.redirect('/animes')
    } catch (error) {
        throw error
    }
})


connectDB()
app.listen(3000)