const
  express = require('express'),
  app = express()
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cheerio = require('cheerio'),
  request = require('request'),
  scrape = require('./data-scrape.js')

app.get('/', (req, res) => {
  scrape
  res.send('works')
})

app.listen(3000, () => {
  console.log('App is on port 3000');
})
