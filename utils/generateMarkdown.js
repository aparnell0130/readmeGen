const licenses = require('./licenses.js')

// function to generate markdown for README
const generateMarkdown = (data) => {
  let licName
  let licKey
  let licBadge
  let licDesc
  for (let i = 0; i < licenses.length; i++) {
    licName = licenses[i].licenseName;

    if (data.license === licName) {
      licKey = licenses[i].licenseKey
      licBadge = licenses[i].licenseBadge
      licDesc = licenses[i].licenseDesc
    }
  }
  return `# ${data.title}

  ${licBadge}
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
  ${licDesc}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  Github: [${data.github}](${data.githubLink})  
  LinkedIn: [${data.linkedIn}](${data.linkedInLink})  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
