//requiring specific npm package inquirer 
const inquirer = require('inquirer');
//requiring node standard library for writing file
const fs = require('fs');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager of this Team?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Manager's name is required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Managers ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Manger's ID is required")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email address?',
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'What is the Managers Office Number?',
        },

