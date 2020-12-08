// get modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const licenses = require('./utils/licenses.js')
// empty array for license names
const licVal = []
// loop through license names for user choices
for (let i = 0; i < licenses.length; i++) {
    licVal.push(licenses[i].licenseName);

}

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your application',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage instructions',
    },
    {
        type: 'list',
        choices: licVal,
        name: 'license',
        message: 'Choose a repo license',

    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter link to your GitHub profile',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'Enter your first and last name',
    },
    {
        type: 'input',
        name: 'linkedInLink',
        message: 'Enter link to your LinkedIn profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },

];

// use inquirer to prompt questions for user
inquirer
    .prompt(questions).then((data) => {
        // get information back from user
        const readme = generateMarkdown(data)
        // create readme file using information from user
        fs.writeFile('sampleread.md', readme, (err) => {
            // check for error
            err ?
                // if failed console log 
                console.log('FAILED TO WRITE FILE') :
                // if success console log
                console.log('THE FILE HAS BEEN WRITTEN')
        })
    });