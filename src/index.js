//require("dotenv").config({path:"./.env"});  - bad approach which messes with the consistency of the codebase .

import dotenv from 'dotenv';

import mongoose from 'mongoose';
import connectDB from './db/index.js';




dotenv.config({ 
    path: './.env'
 }); // Load environment variables from .env file (better approach)




connectDB()











/* All files are in index.js whixh is not a good approach to connect db.
import express from"express";

const app = express();


//iife (immediately invoked function expression ) is an idiom in which a javascript fucntion runs as soon as it is defined.
(async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}` ) 
        app.on("error", (error) => {
            console.log("Error connecting to MongoDB:", error);}
        );

        app.listen(process.env.PORT, () =>{
            console.log(`App is listeining at port ${process.env.PORT}`);
        })
    } catch (error) {
       console.error('Error connecting to MongoDB:', error);
       throw error;
    }
})()

*/