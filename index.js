const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

function init() {
    createManager();
}
const employeeArr = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your manager's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber"
        }
    ]).then(function (response) {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        employeeArr.push(manager);
        addmoreEmployees();
    });
}

function addmoreEmployees() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another employee?",
            name: "addmore",
            choices: ["New Engineer", "New Intern", "No more employees"]
        }
    ]).then(function (response) {
        if (response.addmore === "New Engineer") {
            createEngineer();
        } else if (response.addmore === "New Intern") {
            createIntern();
        } else {
            createHTML();
        }
    });
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your engineer's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's github?",
            name: "github"
        }
    ]).then(function (response) {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        employeeArr.push(engineer);
        addmoreEmployees();
    });
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your intern's id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school"
        }
    ]).then(function (response) {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employeeArr.push(intern);
        addmoreEmployees();
    });
}

init();