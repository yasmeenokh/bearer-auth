'use strict';

// Start up DB Server
require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
// Start the web server
mongoose.connect(process.env.MONGOOSE_URI, options).then(()=>{
  server.startup(process.env.PORT || 5000);
}).catch((e)=>{
  console.log('connection error' , e.message);
});

