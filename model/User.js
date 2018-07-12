var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isEmailValid: {
    type: Boolean,
    default: false,
    required: true
  },
  questions: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question'
  }]
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');