var mongoose = require('mongoose');  

var QuestionSchema = new mongoose.Schema({  
  title: {
      type: String,
      required: true
  },
  content: {
      type: String,
      required: true
  },
  user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
  },
  language: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Question', QuestionSchema);