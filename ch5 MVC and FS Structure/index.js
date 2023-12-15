const express = require('express');
const app = express();
const productRouter = require('./routes/productRouts.js');
const userRouter = require('./routes/user.js');

app.use(express.json());  //body-parser
app.use('/products',productRouter.routes);
app.use('/users',userRouter.routes);

app.listen(3000, () => { console.log('server started'); });