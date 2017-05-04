const Food = require('../models/foods')
const methods = {}

methods.createData = function( req, res ) {
  Food.create(req.body, function(error, record) {
    if(error) {
      res.json({ error })
    } else {
      res.json(record)
    }
  })
}

methods.getAllData = function(req, res) {
  Food.find({}, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.getOneData = function(req, res) {
  Food.findById( req.params.id, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.updateData = function(req, res) {
  Food.findByIdAndUpdate( req.params.id, { $set: req.body },{ new : true } )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

methods.deleteData = function(req, res) {
  Food.findByIdAndRemove( req.params.id )
      .exec((error, record) => {
        if(error) {
          rea.json({ error })
        } else {
          res.json(record)
        }
      })
}

module.exports = methods
