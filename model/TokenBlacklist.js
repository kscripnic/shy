var mongoose = require('mongoose');  
var TokenBlacklistSchema = new mongoose.Schema({  
  token: {
    type: String,
    required: true
  }
});
mongoose.model('TokenBlacklist', TokenBlacklistSchema);

module.exports = mongoose.model('TokenBlacklist');