const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/category');
const multer = require('multer');
const path = require('path');
const { storage2 } = require('./ firebaseConfig.js');
const {ref, uploadBytesResumable, getDownloadURL} = require( "firebase/storage");
const { readFileSync } =  require("node:fs");
const Post = require('./models/Post');



dotenv.config();
app.use(express.json());
app.use('/server/images', express.static(path.join(__dirname, '/images')));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
}).then(console.log("Connected successfully")).catch(err=>(console.log("Errorr", err)));

/* const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'images');
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name);
    },
}); */

const storage = multer.memoryStorage();

const upload = multer({storage: storage}); 



app.post('/server/upload', upload.single('file'), async (req, res) => {
    const newPost = new Post(req.body);
    try {
        console.log('--------------------', req.body)
        const downloadUrl = await uploadFileToFirebase(req.file);
        newPost.photo = downloadUrl;
        /* res.status(200).json({ downloadUrl }); */
    } 
    catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload file" });
    }
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
        console.log("goodjob")
    }
    catch (err){
        console.log(err)
        res.status(500).json(err);
    }
});

const uploadFileToFirebase = async (file) => {
    const { filename } = file;
    const metadata = {
        contentType: 'image/jpeg'
    };
    const storageRef = ref(storage2, `/files/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file.buffer, metadata);

    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;
                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        async () => {
            // Upload completed successfully, now we can get the download URL
            
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            console.log('File available at', downloadURL);
            resolve(downloadURL);
            }
        );
    });
}



app.use('/server/auth', authRoute);
app.use('/server/users', userRoute);
app.use('/server/posts', postRoute);
app.use('/server/category', categoryRoute);

app.listen("5010", () => {
    console.log("Server is online")
});