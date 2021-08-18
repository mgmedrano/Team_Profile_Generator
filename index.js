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
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the Managers ID',
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
      ])
    ])
}
    .then(ManagerInput => {
        const { name, id, email, OfficeNumber } = ManagerInput;
        const manager = new Manager (name, id, email, OfficeNumber);
        //TO DO LATER: push ManagerInput somewhere
        console.log(manager);
    })
    