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
    const quoteUrl = 'https://inspiration.goprogram.ai'
    const dogUrl = 'https://dog.ceo/api/breeds/image/random'
    try {
        const dogResponse = await axios.get(dogUrl)
        const quoteResponse = await axios.get(quoteUrl)
        let displayDog = dogResponse.data.message
        let displayQuote = quoteResponse.data.quote
        let displayAuth = quoteResponse.data.author
    
        if (req.query.dogPic) {
            displayDog = req.query.dogPic
        } 
        
        if (req.query.quote) {
            displayQuote = req.query.quote
            displayAuth = req.query.quoteAuth

        }

        res.render('index', {
            quote: displayQuote,
            dogPic: displayDog,
            quoteAuth: displayAuth
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
            author: req.body.quoteAuth,
            templateId: 1
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

//GET /saved/edit/:id Show form to edit one poster
app.get('/edit/:id', async (req,res) => {
    try{
        const poster = await db.poster.findOne({
            where: {
                id: req.params.id
            }
        })
        const templates = await db.template.findAll()
        const template = await db.template.findOne({
            where: {
                id: poster.templateId
            }
        })
        
        res.render('edit', {
            poster: poster,
            templates: templates,
            template: template
        })
    } catch(error) {
        console.log(error)
    }
})

//DELETE /saved/:id delete a saved poster
app.delete('/saved/:id', async (req, res) => {
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

//PUT //saved/:id UPDATE one poster
app.put('/saved/:id', async (req, res) => {
    try{
        const poster = await db.poster.findOne({
            where: {
                id: req.params.id
            }
        })
        poster.quote = req.body.quote
        poster.author = req.body.author
        poster.templateId = req.body.templateId
        await poster.save({
            where: {
                id: req.params.id,
            }
        })
        res.redirect('/saved')
    } catch(error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('...listening, recalculating, listening, recalculating...')
})