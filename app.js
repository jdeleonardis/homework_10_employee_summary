const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const getManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is the manager's id?",
                name: "managerID"
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is the office number?",
                name: "officeNumber",
                default: 1056
            }    
        ])
    .then(function(response) {
        //'push' manager into teamMembers array
        //teamMembers.push
        getTeam();
    });
}

const getTeam = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of team member would you like to enter next?",
                name: "enterTeamMember",
                choices: ["Engineer","Intern","I do not need to enter any more team members"]
            }
        ])
    .then(function(response) {
        switch(response.enterTeamMember) {
            case 'Engineer':
              getEngineer();
              break;
            case 'Intern':
              getIntern();
              break;
            default:
              writeFile();
          }
    });
}

const getEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineer's id?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's github id?",
                name: "engineerGitHubID"
            }    
        ])
    .then(function(response) {
        //'push' engineer into teamMembers array
        //teamMembers.push        
        getTeam();
    });
}

const getIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the intern's id?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What school does the intern attend?",
                name: "internSchool"
            }    
        ])
    .then(function(response) {
        //'push' intern into teamMembers array   
        //teamMembers.push             
        getTeam();
    });
}

const writeFile = () => {
//ADD CODE HERE TO WRITE THE FILE OUT!!!

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//only available in async function
//await writeFileAsync(outputPath, returnedFile);
//await writeFileAsync(outputPath, "test write data");

//console.log(OUTPUT_DIR);
try {
    fs.accessSync(OUTPUT_DIR);
} 
catch (e) {
    fs.mkdirSync(OUTPUT_DIR);
}

//returned data should go where "test write file" is
fs.writeFile(outputPath, "test write file", function(err) {
      if (err) {
        return console.log(err);
      } else
        console.log("Success!");
      });

}

getManager();