const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Import routes
const postsRoute = require('./routes/posts');


require('dotenv/config');

//middlwares
app.use(bodyParser.json());
app.use('/api/user', postsRoute);


app.use(express.json());


const mongoUri="mongodb+srv://sulthana:sulthana@crud.xngbi.mongodb.net/sulthana?retryWrites=true&w=majority"
//cnnct to db
mongoose.connect(
 mongoUri,
{useNewUrlParser: true },
() => console.log('connect to DB!')
);



//hw to strt listening to server
app.listen(3000);