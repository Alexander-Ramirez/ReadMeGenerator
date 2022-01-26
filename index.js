// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // title of my project and sections entitled Description, 
    // Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a breif description of the project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('README.md', generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Successfully Generated!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("answers", answers)

        writeToFile("README.md", generateMarkdown({...answers}) )
    })
}

// Function call to initialize app
init();
