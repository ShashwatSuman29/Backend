import moongose, {Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new moongose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index:true
    },

    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim:true,
        index:true
    },

    fullname:{
        type: String,
        required: true,
        trim:true,
        index:true
      
    },

    avatar:{
        type: String,//cloudinary url
        required: true,

    },

    coverImage:{
        type: String,//cloudinary url
      
    },

    watchHistory:[
        {
        type: Schema.Types.ObjectId,
        ref: "video"
        }
    ],

    pssword:{
        type: String,
        required: [true, "Password is required"],
  
    },

    refreshToken:{
        type: String,
    }

}, {timestamps:true});

//password encryption logic 
userSchema.pre("save", async function (next) {
    //we dont want to encrypt password everytime user made a change, so to avoid this we are writing a if block. which says only encrypt the password if user has modified it.
    if(this.isModified('password')) return next ();

  
    this.password = bcrypt.hash(this.password, 10);
    next();
})


userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}



userSchema.methods.generateAccessToken = function () {
   return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
         
        },

        process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }

    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname,
         
        },

        process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }

    )
}


export const User = moongose.model('User', userSchema);