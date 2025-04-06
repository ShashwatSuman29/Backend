import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/apiError.js'
import {user} from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty, valid email, password length, etc.
  //check if user already exists , check username and email
  //check for imgaes, check for avatar
  //upload images to cloudinary, check avatar
  //create user object - creat entry in db
  //remove password and refresh token field from response
  // check for user creation 
  // return response

    const {fullName, email, username , password} = res.body 
        console.log("email:", email);

        if([fullName , email ,username , password].some((field) => 

        field?.trim() === ""))
        {
          throw new ApiError("All fields are required", 400)
        }

        User.findOne({
          $or: [{username}, {email}]
        })

        if (existedUser) {
          throw new ApiError(409, "User already exists")
        }

       const avatarLocalPath = req.files?.avatar[0]?.path;
       req.files?.coverImage[0]?.path;

       if(!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required")
       }

      const avatar = await uploadOnCloudinary(avatarLocalPath) 
      const coverImage = await uploadOnCloudinary(coverImageLocalPath)

      if(!avatar) {
        throw new ApiError(400, "Avatar is required")
      }
      
      const user = await user.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        usernam: username.tolowerCase(),
      })
        
      const createdUser = await user.findById(user._id).select(
        "-password -refreshToken"
      )

      if(!createdUser) {
        throw new ApiError(500, "User not created")
      }

      return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
      )

})


export {registerUser}