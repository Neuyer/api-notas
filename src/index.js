const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_CONNECCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT,function(){
    console.log('Your node js server is running');});