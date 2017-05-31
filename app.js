const express = require('express')
const queries = require('./models/queries')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res, next) {
  queries.getAllArtists()
  .then(artists => {
    res.render('index', 
      {playlist: artists})
  })
  .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, function() {
  console.log(`On port ${port}!`)
})