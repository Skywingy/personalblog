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

dotenv.config();
app.use(express.json());
app.use('/server/images', express.static(path.join(__dirname, '/images')));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
}).then(console.log("Connected successfully")).catch(err=>(console.log("Errorr", err)));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'images');
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage});


app.post('/server/upload', upload.single('file'),(req,res)=>{
    res.status(200).json("File uploaded");
})

app.use('/server/auth', authRoute);
app.use('/server/users', userRoute);
app.use('/server/posts', postRoute);
app.use('/server/category', categoryRoute);

app.listen("5010", () => {
    console.log("Server is online");
});