const mongoose  = require('mongoose');
const userSchema = mongoose.Schema({
    email : {
        type : String ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
    },
    username: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      profession : {
        type : String,
        required : true,
      },
      phone : {
        type : Number ,
        required : true ,
      },
      gender : {
        type: String,
        enum: ['male', 'female', 'other'],
        required : true ,
      },
});

module.export = mongoose.model('User' , userSchema);