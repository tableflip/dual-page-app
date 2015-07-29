module.exports = function (api, tpl, ctx, cb) {
  var itemId = ctx.params.itemId

  console.log('Rendering /item/' + itemId)

  api.getItem(itemId, function (err, item) {
    if (err) return cb(err)
    cb(null, tpl({item: item}))
  })
}
