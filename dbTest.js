const db = require('./models')

db.poster.create({
    picture: 'https://images.dog.ceo/breeds/dhole/n02115913_1213.jpg',
    quote: 'It soon became obvious that we were but on the threshold of the discovery.',
    author: 'Howard Carter'
})
.then(poster => {
    console.log(poster.get())
})