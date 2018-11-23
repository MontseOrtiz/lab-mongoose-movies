const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

const dbName = 'celebrity-app'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const celebrities = [{
  name: 'Carlos Rivera',
  occupation: 'Singer',
  catchPhrase: 'Todos conmigo'
},
{
  name: 'Monse Ortiz',
  occupation: 'Fitness Influencer',
  catchPhrase: 'Mestoy durmiendo'
},
{
  name: 'Mefit Hernández',
  occupation: 'Actor',
  catchPhrase: 'Soy el mejor, no sé'
},
]

Celebrity.create(celebrities)
    .then(result => {
        console.log(`${result.length} celebrities were added.`)
        mongoose.connection.close()
    }).catch(err => {
        console.log(err)
    })

    const movies = [
      {
          title: "A Wrinkle in Time",
          genre: 'Drama',
          plot: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      },
      {
          title: "The Strangers: Prey at Night",
          genre: 'Thriller',
          plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
      },
      {
          title: "The Hurricane Heist",
          genre: 'Comedy',
          plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
      },
  ];

  Movie.create(movies)
      .then(result => {
          console.log(`${result.length} movies were added.`)
          mongoose.connection.close()
      }).catch(err => {
          console.log(err)
      })
