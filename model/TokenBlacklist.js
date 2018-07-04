var mongoose = require('mongoose');  
var TokenBlacklistSchema = new mongoose.Schema({  
  token: String
});
mongoose.model('TokenBlacklist', TokenBlacklistSchema);

module.exports = mongoose.model('TokenBlacklist');