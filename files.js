const fs = require('fs');

const t1 = performance.now();
// const txt = fs.readFileSync('./demo.txt', 'utf-8');

fs.readFile('./demo.txt', 'utf-8', (err,txtData)=>{
    console.log(txtData);
})

const t2 = performance.now();

console.log(t2 - t1);

console.log(5 - 2);