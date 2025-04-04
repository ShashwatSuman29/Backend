 import {v2 as cloudinary} from 'cloudinary'; 
 import fs from 'fs';

 


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRRET  
    });

    const uploadOnCloudinary = async (LocalFilePath) =>{
            try {
                if(!LocalFilePath) return null
                //upload the file on cloudinary
                const response = await cloudinary.uploader.upload(LocalFilePath, {
                    resource_type: "auto"
                })
                //file has been uploaded succesfully.
                console.log("File uploaded on cloudinary successfully", response.url);
                return response

            } catch (error) {
                fs.unlinkSync(LocalFilePath) //remove the locally saved temporaary file when upload operation got failed.
            }
    }


    export {uploadOnCloudinary}

    // Upload an image
    /*const uploadResult = await cloudinary.uploader
    .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
            public_id: 'shoes',
        }
    )
    .catch((error) => {
        console.log(error);
    });
 
 console.log(uploadResult);
 */