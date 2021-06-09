require('dotenv').config()
const express = require('express')
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

const app = express()
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))
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

app.listen(PORT, () => {
    console.log('...listening, recalculating, listening, recalculating...')
})