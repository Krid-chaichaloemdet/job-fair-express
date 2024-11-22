require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer');
const path = require('path');
const userRoute = require('./router/user-route')

const prisma = require('../src/models/prisma')
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())  

app.use('/test', (req,res)=>{ res.status(200).json({message: 'okay'}) })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`); // Customize filename
    },
  });

  const upload = multer({ storage });
  app.post('/upload', upload.single('photo'),async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
 const response =   await prisma.user.create({
      data:{
        profileImage: req.file.filename
      }
    })
    res.status(200).json({
      response,
      filePath: path.join(__dirname, 'uploads', req.file.filename),
    });

  });

app.use('/user', userRoute)


const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log("server is running on port " + PORT))
