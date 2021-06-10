require('dotenv').config()
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

let db = require('./models')
const poster = require('./models/poster')
const app = express()
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
app.use(methodOverride('_method'))
const PORT = process.env.PORT

//GET / - main index of site
app.get('/', async (req, res) => {
    const quoteUrl = 'https://api.fisenko.net/quotes'
    const dogUrl = 'https://dog.ceo/api/breeds/image/random'
    
    try {
        const displayQuote = await axios.get(quoteUrl)
        const displayDog = await axios.get(dogUrl)

        res.render('index', {
            quote: displayQuote.data.text,
            dogPic: displayDog.data.message,
            quoteAuth: displayQuote.data.author
        })
    } catch (error) {
        console.log(error)
    }
})

//POST /saved  receive the photo, quote and author and add to database
app.post('/', async (req, res) => {
    try{
        savedPoster = await db.poster.create({
            picture: req.body.dogPic,
            quote: req.body.quote,
            author: req.body.quoteAuth
        })
       res.redirect('saved') 
    } catch (error) {
        console.log(error)
    }
})

//GET /saved retrieve saved posters from database
app.get('/saved', async (req, res) => {
    try{
       const posters = await db.poster.findAll()
       
       res.render('saved', {
           posters: posters
       })
    } catch (error) {
        console.log(error)
    }
})



//DELETE /saved/:id delete a saved poster
app.delete('/saved/:id', async (req, res) => {
    console.log(req.params.id)
    try{
        const poster = await db.poster.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('back')
    } catch (error) {
        console.log(error)
    }
})



app.listen(PORT, () => {
    console.log('...listening, recalculating, listening, recalculating...')
})