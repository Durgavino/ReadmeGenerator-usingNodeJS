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
        message: "Installation",
        name: "installation"
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
    },
    {
        type: "input",
        message: "Test",
        name: "test"
    },
    {
        type: "input",
        message: "Contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter Your GitHub Username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter Your Email Address:",
        name: "email"
    }


];


// // TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), (err) => {
        if (err) {
            throw new Error(err);
        }
        console.log("File was written successfully");
    });

}


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {

            console.log(data);

            //  fs.writeFile('generateMarkdown',JSON.stringify(data))



            // writeToFile(`${data.title}.md`,JSON.stringify(data));


            writeToFile('README.md', data);

        })
}

// // Function call to initialize app
init();



