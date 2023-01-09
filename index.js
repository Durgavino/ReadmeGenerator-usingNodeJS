// // TODO: Include packages needed for this application
// //get answers from the user 
const inquirer = require('inquirer');
const fs = require('fs/promises');
const path = require('path');
const markdown = require('./utils/generateMarkdown.js');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of the Project",
        name: "title"
    },
    {
        type: "list",
        message: "License",
        name: "license",
        choices:["MIT","Apache","GPL","Unlicensed"]
    }


];


// // TODO: Create a function to write README file
 function writeToFile(filename,data)
 {
    fs.writeFile('README.md', data, (err) =>
     {
        if (err) 
        {
            throw new Error(err);
        }
        console.log("File was written successfully");
    });

 }

 function readmeCliPrompt(){

    inquirer.prompt(  questions 
    )
 }

// // TODO: Create a function to initialize app
function init() { }

// // Function call to initialize app
init();



// const fs=require('fs');

// fs.writeFile('readme.txt','hi',(err) =>
// {
//     if(err){
//         throw new Error(err);
//     }
//     console.log("File was written");
// });

// fs.readFile('readme.txt','utf8',(err,data) => {
//     if(err){
//         throw new Error(err);
//     }
//     console.log(data);
// });