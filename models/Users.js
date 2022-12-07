const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
   name:{
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   article: {
      type: String,
      required: true
   },
   category: {
      type: String,
      require:true
   }
},{
   timestamps: true,
   collection: 'users'
})
module.exports = mongoose.model('users', userSchema);