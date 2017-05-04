const Restaurant = require('../models/restaurants')
const methods = {}

methods.createData = function(req, res){
  Restaurant.create(req.body, function(error, record){
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.getAllData = function(req, res){
  Restaurant.find({})
    .populate('booklist')
    .exec((error, records)=>{
    if(error){
      res.json({error})
    } else {
      res.json(records)
    }
  })
}

methods.getOneData = function(req, res) {
  Restaurant.findById( req.params.id, function(error, records) {
    if(error) {
      rea.json({ error })
    } else {
      res.json(records)
    }
  })
}

methods.updateData = function(req, res){
  Restaurant.findByIdAndUpdate(req.params.id, { $set:req.body }, {new: true})
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

methods.deleteData = function(req, res){
  Restaurant.findByIdAndRemove(req.params.id)
  .exec((error, record) => {
    if(error){
      res.json({error})
    } else {
      res.json(record)
    }
  })
}

module.exports = methods
