const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const Strategy = require('passport-local').Strategy;
const passwordHash = require('password-hash');

mongoose.connect('mongodb://localhost/library')

passport.use(new Strategy(
  function(username, password, cb) {
    let User = require('./models/users')
    User.findOne({username: username}, function(err, user) {
      if(err) {
        console.log(err);
      } else {
        if(passwordHash.verify(password, user.password)){
          cb(null, user)
        } else {
          cb("username or password not match")
        }
      }
    })
  }
))


const app = express()

app.use(require('body-parser').unloaded({ extended: true }))

app.use(passport.initialize())
app.use('/users', require('./routes/users'));
// app.use('/', passport.authenticate('local', { session: false }), function(req, res) {
//   res.send(req.user)
// })

app.listen(3000)
