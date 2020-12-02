// function to generate markdown for README
function generateMarkdown(data) {
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
  ${data.license}
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
