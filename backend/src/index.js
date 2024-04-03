
import dotenv from "dotenv";

import connectDB from "./DB/index.js";

dotenv.config({
    path :'./env'
})

connectDB()
.then(()=> {
    AudioParamMap.listen(process.env.PORT || 8000,() =>{
        console.log(`Server is running at port : ${
            process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(` Server is running at port : ${process.env.PORT}`);
})


// Example Express route with multer for file upload
import express from "express"
import multer from "multer"
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.mp3');
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('audioFile'), (req, res) => {
  // req.file is the `audioFile` file
  // req.body will hold the text fields, if there were any
  console.log(req.file);
  res.send('File uploaded successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
