// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

//A set of questions that the user needs to answer in the terminal so that they can fill in the README file
inquirer
.prompt([
{
    type: 'input',
    name: "name",
    message: 'What is the name of your Project?',
},
{
    type: 'input',
    name: "Description",
    message: 'What is the description of the application?',
},
{
    type: 'input',
    name: "Installation",
    message: 'How was the installation process?',
},
{
    type: 'input',
    name: "Usage",
    message: 'What is the usage?',
},
{
    type: 'list',
    name: "License",
    message: 'License',
    choices: ['Apache', 'MIT License', 'ISC License', 'no license'],
},
{
    type: 'input',
    name: "Contributing",
    message: 'What are the contribution guidelines for this project?',
},
{
    type: 'input',
    name: "Tests",
    message: 'What are the test instructions?',
    },
{
    type: 'input',
    name: "Question",
    message: 'Enter your GitHub username:',
},
{
    type: 'input',
    name: "Question2",
    message: 'Enter your email:',
},
{
    type: 'input',
    name: "Question3",
    message: 'Enter your phone number:',
},


])

//it collects the data the user inputs
.then((data) => {
    //name of the file
    const filename = `README.md`;
    
    //gest the data of the objects and sets a name to it
    const {name, Description, Installation, Usage, License, Contributing, Tests, Question, Question2, Question3} = data;
    
    //this is an if stament that matches the users pick on a license and displays the badge, information and link in the README file
    if (License === 'Apache'){
        var url = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        var explain = "Apache License, Version 2.0, Submitted: February 8, 2004, Submitter: Kevin Coar, SPDX short identifier: Apache-2.0"
        var website = "[Go to Website here](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (License === "MIT License"){
        var url = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        var explain = "The MIT License, Version N/A, SPDX short identifier: MIT"
        var website = "[Go to Website here](https://opensource.org/licenses/MIT)"
    }
    else if (License === "ISC License"){
        var url = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
        var explain = "ISC License m, Submitter: Harlan Stenn, SPDX short identifier: ISC"
        var website = "[Go to Website here](https://opensource.org/licenses/ISC)"
    }
    else {
        var url = ""
        var explain= "No license was used."
        var website = ""
    }

//this is the README layout that will be sent to the filename "README.md"
//also the const with its name will be displayed depending on what the user write and will be added to the README file
const display = 
`${url}
# ${name}

## Description
${Description}

## Table of Contents
The following README includes (click to be sent to that section):
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${Installation}

## Usage
${Usage}

## License
${explain}
${website}

## Contributing
${Contributing}

## Tests
${Tests}

## Questions
My GitHub username : ${Question}\n
[My GitHub profile](https://github.com/${Question}) \n
Ways to contact me:\n
By email: ${Question2}\n
By phone: ${Question3}`

//this creates the file and it displays the information, and then it cosoles a "Success" if all the input were correctly filled
    fs.writeFile(filename, display, 
    (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    });



// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
