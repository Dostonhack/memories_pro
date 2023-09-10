import express from  'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routers/posts.js'
const app = express();


app.use('/post',postRoutes)

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb",extended:true }));
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://javascriptmaster:javascriptmaster123@cluster0.osa90a4.mongodb.net/'

const PORT = 5000
// useNewUrlParser: true,useInifiedTopology: true
mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
.catch((err) =>  console.error(err));

// mongoose.set('useFindAndModify',false)
