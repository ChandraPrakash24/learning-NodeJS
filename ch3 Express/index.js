const express = require('express');
// const fs = require('fs');

const app = express();

// const product = JSON.parse(fs.readFileSync('./dummyPost.json', 'utf-8'));

app.use(express.json());
// app.use(express.urlencoded()); //for formdata
app.use(express.static('public'));

// middleware
// global middleware
app.use('/', (req, res, next) => {
    console.log(req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next();
})

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