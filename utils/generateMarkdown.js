// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Coffeeware") {
    return `![License: Coffeeware](https://raw.githubusercontent.com/Sonic853/coffeeware-license/master/coffeeware-logo.png)`
  } else if (license === "Apache License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    return ""
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Coffeeware") {
    return `[Coffeeware](https://github.com/Sonic853/coffeeware-license)`
  } else if (license === "Apache License") {
    return `[Apache](http://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === "MIT") {
    return`[MIT](https://mit-license.org/)`
  } else {
    return ""
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Title
  ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributers](#Contributers)
  - [Email](#Email)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseLink(answers)} License
  ${renderLicenseBadge(answers)}

  ## Contributers
  ${answers.contributers}

  ## Email
  ${answers.email}

  ## GitHub Accounts
  ${answers.username}

`;
}

module.exports = generateMarkdown;
