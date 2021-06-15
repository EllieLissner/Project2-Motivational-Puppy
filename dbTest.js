const db = require('./models')
const template = require('./models/template')

// db.poster.create({
//     picture: 'https://images.dog.ceo/breeds/dhole/n02115913_1213.jpg',
//     quote: 'It soon became obvious that we were but on the threshold of the discovery.',
//     author: 'Howard Carter'
// })
// .then(poster => {
//     console.log(poster.get())
// })

db.template.create({
    name: 'quotePositionOmega',
    text_postition:'top',
    font_color: 'white',
    font: 'monospace'
})
.then(template => {
    console.log(template.get)
}) 