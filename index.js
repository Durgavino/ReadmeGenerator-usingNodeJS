// // TODO: Include packages needed for this application
// //get answers from the user 
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile, writeFileSync } = require('fs');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of the Project",
        name: "title"
    },
    {
        type: "input",
        message: "Description",
        name: "description"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage"
    },
    {
        type: "list",
        message: "License",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "Unlicensed"]
    }


];


// // TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            throw new Error(err);
        }
        console.log("File was written successfully");
    });

}

function readmeCliPrompt() {

    inquirer.prompt(questions)
        .then(data => {
            
console.log(data);

//  fs.writeFile('generateMarkdown',JSON.stringify(data))
       
       
      
    // writeToFile(`${data.title}.md`,JSON.stringify(data));

      
     writeToFile('README.md',JSON.stringify(data));

        })

}


// // TODO: Create a function to initialize app
function init() { }

// // Function call to initialize app
init();

readmeCliPrompt();

