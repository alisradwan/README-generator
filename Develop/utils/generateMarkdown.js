// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `None`) {
    return "";
  }
  return `![${license} license] [![license](https://img.shields.io/github/license-${license}.svg?style=flat-square)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== "None" ? `* [license](license)` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== `None`) {
    return `# license
    This project is license under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  <h1 align="center">${data.projectTitle} 👋</h1>
  https://github.com/${data.username}/${data.projectTitle}
    
  ## Description
  🔍 ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  💾 ${data.installation}
  ## Usage
  💻 ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  👪 ${data.contributing}
  ## Tests
  ✏️ ${data.tests}
  ## Questions
  ✋ ${data.questions}<br />
  <br />
   Find me on GitHub: [${data.username}](https://github.com/${
    data.username
  })<br />
  <br />
  ✉️ Email me with any questions: ${data.email}<br /><br />
      `;
}

module.exports = generateMarkdown;
