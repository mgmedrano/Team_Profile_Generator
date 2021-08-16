//requiring specific npm package inquirer 
const inquirer = require('inquirer');
//requiring node standard library for writing file
const fs = require('fs');

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter Project description:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions (use commas for numbered list):',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter Project usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter Project contribution guidelines:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter Project test information:',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
          type: "list",
          name: "license",
          choices: [
              "MIT License",
              "Attribution-NonCommercial 4.0 International",
              "Eclipse Public License 1.0",
              "IBM Public License Version 1.0",
              "Mozilla Public License 2.0"
          ]
      }
    ])
    .then((res) => {
        console.log("Generating README.md...");
        createREADMEFile(res);
        
    })
    .catch((err) => {
        console.log(err);
    })