
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (typeof license === "string" && license === "GPL" || license === "Apache" || license === "MIT") {
    `![${licence}:"Image is not available](https://img.shields.io/badge/licence-${license}-brightgreen)`

  }
  return "_Unlicensed_"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return
  `# ${data.title} \n
   
  
## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

${data.description} \n;


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

${data.installation} \n;


## Usage 

Provide instructions and examples for use. Include screenshots as needed.

${data.usage} \n;

   #### Badge \n 

   ${renderLicenseBadge(data.licence)} \n
   
   `;



}

module.exports = generateMarkdown;
