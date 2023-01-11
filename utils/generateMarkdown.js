
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (typeof license === "GPL" || license === "Apache" || license === "MIT") {
    return `![${license}:"Image is not available](https://img.shields.io/badge/licence-${license}-brightgreen)`;

  }
  return "_Unlicensed_"

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === 'Apache') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'GPL') {
    return 'https://choosealicense.com/licenses/agpl-3.0/';
  }
  return "unlicensed";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  if (license === 'MIT')
  {
    return "MIT";
  } else if (license === 'Apache') 
  {
    return 'Apache';
  } else if (license === 'GPL') 
  {
    return 'GPL';
  }
  return "unlicensed";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) 
{

  return `# Title
  ${data.title} 
   
## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

${data.description} \n


## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#Usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation} \n

## Usage 
${data.usage} \n

## License 

${renderLicenseSection(data.license)}

## Contributing
${data.contributing} \n

# Test
${data.test} \n

## Questions
###Contact Me
####Email ID: ${data.email} \n

${data.username} (https://github.com/${data.username})`

}

module.exports = generateMarkdown;
