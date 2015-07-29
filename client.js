var page = require('page')

var dual = require('./lib/dual')(page)
var api = require('./api')

var home = require('./home')
var item = require('./item')

home(dual)
item(dual, api)

page({click: false})
