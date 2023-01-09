// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (typeof license ==="string"&& license==="GPL" || license==="Apache"||license==="MIT") {
    `![${licence}:"Image is not available](https://img.shields.io/badge/licence-${license}-brightgreen)`
    
  }
  return "_Unlicensed_"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return
   `# ${data.title} \n
   
   #### Badge \n 

   ${renderLicenseBadge(data.licence)} \n


   
   
   
   
   
   
   `;



}

module.exports = generateMarkdown;
