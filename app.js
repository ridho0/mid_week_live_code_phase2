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
app.set('port', process.env.PORT || 3000)
app.use(require('morgan')('dev'))
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())

app.use(passport.initialize())
app.use('/', require('./routes'));
// app.use('/', passport.authenticate('local', { session: false }), function(req, res) {
//   res.send(req.user)
// })

app.listen(app.get('port'), function() {
  console.log('Listening on port' + app.get('port'));
})
