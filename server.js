const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

// Allows to parse input (generally from user)
app.use(bodyParser.json())
app.use('/', routes)


// Error handler
app.use( (err, req, res, next) => {
  res.json(err)
})

module.exports = app
