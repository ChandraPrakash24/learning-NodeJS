const commandLineArguments = process.argv;

//[0] The path to the Node.js executable.
//[1] The path to the JavaScript file being executed.

console.log(commandLineArguments);
// console.log(commandLineArguments[0]);
// console.log(commandLineArguments[1]);

// OUTPUT:

// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\BACKEND\\NODEJS\\learning-nodejs-coderdost\\commandLineArgv.js'
// ]

const arg1 = commandLineArguments[2];
const arg2 = commandLineArguments[3];

// on CLI : $ node commmandLineArgv.js 1 2


console.log(parseInt(arg1) + parseInt(arg2));  // 3
console.log(arg1 + arg2); // 12