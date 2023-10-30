import mongoose from "mongoose"
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

const User = mongoose.model('UserModel' , userSchema);
export default User;