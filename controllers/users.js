const User = require('../models/users')
const methods = {}

methods.signup = function( req, res ) {
  User.create(req.body, function(error, record) {
    if(error) {
      res.json({ error })
    } else {
      res.json(record)
    }
  })
}

methods.updateById = function(req, res) {
  User.findByIdAndUpdate( req.params.id, { $set: req.body },{ new : true } )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

methods.deleteById = function(req, res) {
  User.findByIdAndRemove( req.params.id )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

module.exports = methods
