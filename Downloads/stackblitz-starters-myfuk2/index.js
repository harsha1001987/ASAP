const express = require('express');
const { resolve } = require('path');
const mong = require('mongoose')
const app = express();
const port = 3010;

const db = async () => {
  try{
  await mong.connect('mongodb+srv://harsha:root@cluster0.hlcdd.mongodb.net/db?retryWrites=true&w=majority&appName=Cluster0')
  console.log("connected")
}
  catch(e){
    console.log("error")
  }
}
db()
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
