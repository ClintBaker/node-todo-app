var mongoose = require('mongoose')

var User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {User};

// var newUser = new User({
//   email: 'surferbro69@yahoo.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(`Docs served son`, doc);
// }, (e) => {
//   console.log(e);
// });
