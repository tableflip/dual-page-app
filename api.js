module.exports = {
  getItem: function (id, cb) {
    cb(null, {_id: id, foo: 1})
  }
}