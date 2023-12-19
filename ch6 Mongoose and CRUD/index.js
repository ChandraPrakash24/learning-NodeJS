const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRouts.js');
const userRouter = require('./routes/user.js');
const path = require('path');

app.use(express.static('build'));

// mongo
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database conneceted');
}  

app.use(express.json());  //body-parser
app.use('/products',productRouter.routes);
app.use('/users',userRouter.routes);
app.use('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

app.listen(8080, () => { console.log('server started'); });