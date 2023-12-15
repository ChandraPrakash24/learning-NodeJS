const express = require('express');
const app = express();
const productController = require('./controller/product.js');
const productRouter = require('./routes/productRouts.js');

app.use(express.json());  //body-parser
app.use('/products',productRouter.routes);

app.listen(3000, () => { console.log('server started'); });