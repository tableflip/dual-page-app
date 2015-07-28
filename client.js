var page = require('page')
var api = require('./api')

var home = require('./home/client')
var item = require('./item/client')

home(page, api)
item(page, api)
page()
