const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is your manager\'s id?',
        name: 'managerId    ',
    },
    {
        type: 'input',
        message: 'what is your manager\'s email address?',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'What is your manager\'s office number?',
        name: 'installation',
    },])
