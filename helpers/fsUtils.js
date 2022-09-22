const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// Function to write data to the JSON file given a destination and some content
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

// Function to read data from a given a file and append some content
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// Function to read data from a given a file and remove some content
const readAndRemove = (id, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      for (let i = 0; i < parsedData.length; i++) {
        if (id === parsedData[i].id){
          parsedData.splice(i, 1);
          writeToFile(file, parsedData);
        }
      }
    }
  });
};


module.exports = { readFromFile, writeToFile, readAndAppend, readAndRemove, writeFileAsync };