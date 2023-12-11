const http = require("http");
const fs = require("fs");

const htmlPage = fs.readFileSync("./htmlPage.html", "utf-8");
const jsonData = fs.readFileSync("./jsonData.json", "utf-8");

// dynamic content

const jsonDataDynamic = JSON.parse(fs.readFileSync("./jsonData.json", "utf-8"));
const Product = jsonDataDynamic.carts[1].products[0];
console.log(Product);

// dynamic content


const server = http.createServer((req, res) => {
    console.log(req.url);

    switch (req.url) {
        case "/":
            res.setHeader("Conten-Type", "text/html");
            res.end(htmlPage);
            break;
        case "/api":
            res.setHeader("Conten-Type", "application/json");
            res.end(jsonData);
            break;
        case "/dynamic":
            res.setHeader("Conten-Type", "text/html");
            let modifiedHtmlPage = htmlPage
                .replace('Awesome Product',Product.title)
                .replace('$99.99',Product.price)
                .replace('https://placekitten.com/300/200',Product.thumbnail);
            res.end(modifiedHtmlPage);
            break;
        default:
            //   res.writeHead(404);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            break;
    }
});

server.listen(3000);