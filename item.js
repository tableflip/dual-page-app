var tpl = require('./item.jade')

module.exports = function (dual, api) {
  dual('/item/:itemId', render)

  function render (ctx, cb) {
    var itemId = ctx.params.itemId

    console.log('Rendering /item/' + itemId)

    api.getItem(itemId, function (err, item) {
      if (err) return cb(err)
      cb(null, tpl({item: item}))
    })
  }
}
