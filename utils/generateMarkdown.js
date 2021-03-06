// get license module
const licenses = require('./licenses.js')

// function to generate markdown for README
const generateMarkdown = (data) => {
  let licName
  let licKey
  let licBadge
  let licDesc
  // loop through license names
  for (let i = 0; i < licenses.length; i++) {
    licName = licenses[i].licenseName;
    // compare license names to license chosen by user
    // if user choice matches 
    if (data.license === licName) {
      // then set these values
      licKey = licenses[i].licenseKey
      licBadge = licenses[i].licenseBadge
      licDesc = licenses[i].licenseDesc
    }
  }

  // readme structure
  // taking in user inputs and displaying them on the readme
  return `
  # ${data.title}

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
// export generateMarkdown
module.exports = generateMarkdown;
