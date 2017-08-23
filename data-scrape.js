const
  express = require('express'),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cheerio = require('cheerio'),
  request = require('request')

scrape = request('http://shop.nordstrom.com/c/booties', function(err, res, body) {
  // console.log(body);
  const $ = cheerio.load(body)
  // var test = $('#npr-product-results-page > div > div.npr-1rJbt.npr-gS72H > div > main > div > div:nth-child(2) > div > section > div > div:nth-child(1) > div')
  // var arr = []
  // console.log(test.length);
  // arr.push(test)
  // console.log(arr);
  var row = $('#npr-product-results-page > div > div.npr-1rJbt.npr-gS72H > div > main > div > div:nth-child(2) > div > section > div > div')
  // console.log(row);
  // for key in row row.children[1]
  // for(key in row) {
  //   console.log(key);
  // }
  // $('')
  // for (var i = 0; i < row.length; i++) {
  //   console.log(row[i].children.children.attr('href'));
  // }
  var url = 'http://shop.nordstrom.com'
  var shoeref = $('.npr-16j9q div a')
  shoeref.each(function(i, a) {
    console.log($(a).attr('href'));
  })
  console.log(shoeref.length);

})

module.exports = scrape
