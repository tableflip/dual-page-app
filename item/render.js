module.exports = function (ctx, api, tpl, cb) {
  var itemId = ctx.params.itemId

  api.getItem(itemId, function (err, item) {
    if (err) return cb(err)
    cb(null, tpl({item: item}))
  })
}
