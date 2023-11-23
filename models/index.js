require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')

const db = mongoose.connection;



//This code below is not from homwork.  

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});


if (mongoose.connection.readyState === 1) {   // Check if Mongoose is connected
  console.log('Mongoose is running.');
} else {
  console.log('Mongoose is not running.');
}

module.exports.Place = require('./places');