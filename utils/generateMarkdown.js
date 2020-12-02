// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableContent}
  ## Installation
  ${data.install}
  ## usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
