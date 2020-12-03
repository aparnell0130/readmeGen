const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const licenses = require('./utils/objects.js')
const licVal = []
for (let i = 0; i < licenses.length; i++) {
    licVal.push(licenses[i].licenseName);

}
// console.log(licVal)
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
        name: 'email',
        message: 'Enter your email address',
    },

];

inquirer
    .prompt(questions).then((data) => {
        console.log(data)
        const readme = generateMarkdown(data)
        fs.writeFile('sampleread.md', readme, (err) => {
            err ?
                console.log('FAILED TO WRITE FILE') :
                console.log('THE FILE HAS BEEN WRITTEN')
        })
    });