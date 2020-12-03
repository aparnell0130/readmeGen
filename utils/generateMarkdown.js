const licenses = require('./objects.js')

// function to generate markdown for README
const generateMarkdown = (data) => {
  let licName
  let licKey
  for (let i = 0; i < licenses.length; i++) {
    licName = licenses[i].licenseName;

    if (data.license == licName) {
      licKey = licenses[i].licenseKey
    }
  }
  return `# ${data.title}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  [${data.license}](https://opensource.org/licenses/${licKey})
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  Github: ${data.github}  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
