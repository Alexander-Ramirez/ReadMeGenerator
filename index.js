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
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project? " 
     },
     {
        type: "list",
        name: "license",
        message: "Choose the license that you would like to attach.",
        choices: ["MIT License", "Apache License 2.0", "Coffeeware", ""]
    },
    {
        type: "input",
        name:"contributers",
        message:"Who contributed on this project?"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github UserName."
    },
];

// TODO: Create a function to initialize app and write README file
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("answers", answers);
        const fileName = 'README.md';

        fs.writeFile(fileName, generateMarkdown(answers), (err) => 
        err ? console.error(err) : console.log("Successfully Generated!"));
    });
};

// Function call to initialize app
init();
