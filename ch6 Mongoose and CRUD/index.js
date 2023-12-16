const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRouts.js');
const userRouter = require('./routes/user.js');

// mongo
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('database conneceted');
}  

app.use(express.json());  //body-parser
app.use('/products',productRouter.routes);
app.use('/users',userRouter.routes);

app.listen(3000, () => { console.log('server started'); });