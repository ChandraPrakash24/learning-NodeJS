const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRouts.js');
const userRouter = require('./routes/user.js');
const path = require('path');

app.use(express.static('build'));

// mongo
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database conneceted');
}  

app.use(express.json());  //body-parser
app.use('/products',productRouter.routes);
app.use('/users',userRouter.routes);
app.use('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

app.listen(8080, () => { console.log('server started'); });