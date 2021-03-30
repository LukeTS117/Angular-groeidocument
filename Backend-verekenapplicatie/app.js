const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();


const postsRoute = require('./routes/api');
app.use(cors());
app.use(express.json());
app.use('/api', postsRoute);





//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB!');
});

//How do we start listening to the server
app.listen(3000);