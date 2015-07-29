var express = require('express')
var ecstatic = require('ecstatic')

require('./lib/require-jade')

var app = express()
var dual = require('./lib/dual')(app)

var home = require('./home')
var item = require('./item')

var api = require('./api')

home(dual, api)
item(dual, api)

app.use(ecstatic({root: __dirname + '/public'}))

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
