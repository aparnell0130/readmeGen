const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
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
        choices: [
            'Academic Free License v3.0	afl-3.0',
            'Apache license 2.0	apache-2.0',
            'Artistic license 2.0	artistic-2.0',
            'Boost Software License 1.0	bsl-1.0',
            'BSD 2-clause "Simplified" license	bsd-2-clause',
            'BSD 3-clause "New" or "Revised" license	bsd-3-clause',
            'BSD 3-clause Clear license	bsd-3-clause-clear',
            'Creative Commons license family	cc',
            'Creative Commons Zero v1.0 Universal	cc0-1.0',
            'Creative Commons Attribution 4.0	cc-by-4.0',
            'Creative Commons Attribution Share Alike 4.0	cc-by-sa-4.0',
            'Do What The F*ck You Want To Public License	wtfpl',
            'Educational Community License v2.0	ecl-2.0',
            'Eclipse Public License 1.0	epl-1.0',
            'Eclipse Public License 2.0	epl-2.0',
            'European Union Public License 1.1	eupl-1.1',
            'GNU Affero General Public License v3.0	agpl-3.0',
            'GNU General Public License family	gpl',
            'GNU General Public License v2.0	gpl-2.0',
            'GNU General Public License v3.0	gpl-3.0',
            'GNU Lesser General Public License family	lgpl',
            'GNU Lesser General Public License v2.1	lgpl-2.1',
            'GNU Lesser General Public License v3.0	lgpl-3.0',
            'ISC	isc',
            'LaTeX Project Public License v1.3c	lppl-1.3c',
            'Microsoft Public License	ms-pl',
            'MIT	mit',
            'Mozilla Public License 2.0	mpl-2.0',
            'Open Software License 3.0	osl-3.0',
            'PostgreSQL License	postgresql',
            'SIL Open Font License 1.1	ofl-1.1',
            'University of Illinois/NCSA Open Source License	ncsa',
            'The Unlicense	unlicense',
            'zLib License	zlib'
        ],
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
// function to initialize program
function init() {

}

// function call to initialize program
init();
