const { exec } = require('child_process');
const fs = require('fs');

// Replace 'ls' with 'dir' on Windows
const command = 'dir'; // or 'dir' on Windows

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  // Store the output in a text file
  const outputFilePath = './output.txt';

  fs.writeFile(outputFilePath, stdout, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return;
    }

    console.log(`Command output has been written to ${outputFilePath}`);
  });
});
