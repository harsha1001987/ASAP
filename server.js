// Import the necessary packages
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;


 const mongoURI = 'mongodb+srv://matlaharshavardhanaraju:root@cluster0.h8ykl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

let dbConnected = false;


mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    dbConnected = true; 
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    dbConnected = false; 
  });


app.get('/', (req, res) => {
  if (dbConnected) {
    res.send('MongoDB is connected successfully.');
  } else {
    res.status(500).send('MongoDB connection is failed.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});