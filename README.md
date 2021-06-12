# Project2-Motivational-Puppy
Motivational Puppy

wireframe:
https://miro.com/app/board/o9J_lAUyDjE=/

Create your own motivational posters using randomly generated quotes and dog pictures

First click get quote, click as many times as necessary to get the quote that suits your needs. 
https://github.com/fisenkodv/dictum

EX API call
https://api.fisenko.net/quotes
Response:
{
  uuid: 'v5JGZbANgu',
  text: 'It was hard to find a board my size. I was tiny.',
  author: 'Shaun White'
}

Next choose your motivational photo. Again, click the photo until you feel the photo is a good fit for your quote. 
https://dog.ceo/dog-api/

Ex API call:
https://dog.ceo/api/breeds/image/random
Response:
{
"message": "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_603.jpg",
"status": "success"
}

MVP Goals:
Create a website with two disctinct pages

One is "Create a Poster" where you can click through the randomly generated quotes and pictures until you create what you want. This also has a button to save these two data points 

The other Page is Your Saved Posters

can go into your saved posters and Write a personal

need comments or something similar to reach technical requirements. need a second model. the 1st is the saved file with the portrait and the quote. need an additional 

Stretch Goals:
ability to export the poster?
ability to customize your saved posters

Roadblocks:
Learning how to save two pieces of information? Its just saving to a database. Still, everything is harder than it seems.
ANY KIND OF EXPORT