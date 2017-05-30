const express = require('express')
const db = require('./models/queries')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const app = express()


app.get('/', function(req, res) {
	res.send('hello')
})

const port = process.env.PORT || 3000
app.listen(port, function() {
	console.log(`On port ${port}!`)
})