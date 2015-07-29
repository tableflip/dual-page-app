var express = require('express')
var ecstatic = require('ecstatic')
var home = require('./home/server')
var item = require('./item/server')

var app = express()
var api = require('./api')

home(app, api)
item(app, api)

app.use(ecstatic({root: __dirname + '/public'}))

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
