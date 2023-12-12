const express = require('express');
const morgan = require('morgan');
// const fs = require('fs');

const app = express();

app.use(morgan('tiny'));

// const product = JSON.parse(fs.readFileSync('./dummyPost.json', 'utf-8'));

app.use(express.json());
// app.use(express.urlencoded()); //for formdata
// app.use(express.static('public')); // for static hosting 

// middleware
// global middleware
app.use('/', (req, res, next) => {
    console.log(req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next();
})

morgan('default');
// cusome middleware

// extract data from body or aka BodyParser
const auth = (req, res, next) => {
    console.log(req.query);
    if (req.body.password == 123) {
        next()
    } else {
        res.sendStatus(401);
    }
}

// extract data from query in url
// const auth = (req, res, next) => {
//     console.log(req.query);
//     if (req.query.password == 123) {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
// }

// app.use(auth); //for gloal use





// API - Route - Endpoint
// app.get('/product/:id',auth, (req, res) => { //params
app.get('/',auth, (req, res) => {
    res.json({ type: 'GET' });
})
app.post('/',auth, (req, res) => {
    res.json({ type: 'POST' });
})
app.put('/', (req, res) => {
    res.json({ type: 'PUT' });
})
app.delete('/', (req, res) => {
    res.json({ type: 'DELETE' });
})
app.patch('/', (req, res) => {
    res.json({ type: 'PATCH' });
})



app.get('/demo', (req, res) => {
    res.send('<h1>Jai Shree Ram</h1>');
    // res.status(200).sendFile('.../ch3 Express/index.html');
    // res.sendStatus(201);
    // res.json(product);
})


// END
app.listen(3000, () => { console.log('server started'); });
















// ASSIGNMENT 1


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/demo', (req, res) => {
    //     // Log all data in the request object
    //     console.log(req.query);
    
    //     // Send back the same data in the response object
    //     res.json(req.query);
    // });
    
    // app.listen(port, () => {
        //     console.log(`Server is running on http://localhost:${port}`);
        // });
        
        
        
        // ASSIGNMENT 2
        
        // app.get('/demo/:name/:subject', (req, res) => {
            //     // Log all parameters in the request object
            //     console.log(req.params);
            
            //     // Send back the same parameters in the response object
            //     res.json(req.params);
            // });
            
            
            
// ASSIGNMENT 3


// Middleware to parse JSON data in the request body
// app.use(express.json());

// app.post('/demo', (req, res) => {
//     // Log all data in the request body
//     console.log(req.body);

//     // Send back the same data in the response object
//     res.json(req.body);
// });
