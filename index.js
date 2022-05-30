const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
            fs.writeFileSync(`dist/index.html`,createHTML());
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
            message: "What is your engineer's github name?",
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

function createCard(employee) {
    if (employee.getRole() === "Manager") {
        return `
        <div class="card" style="width: 20rem; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
            <div class="card-body">
                <h5 class="card-title" style="border-bottom: solid;background-color: lavender;">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: <a href = "mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
            </div>
        </div>
        `;
    } else if (employee.getRole() === "Engineer") {
        return `
        <div class="card" style="width: 20rem; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
            <div class="card-body">
                <h5 class="card-title" style="border-bottom: solid;background-color: lightskyblue;">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: <a href = "mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="card-text">Github: <a href = "https//github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
            </div>
        </div>
        `;
    } else if (employee.getRole() === "Intern") {
        return `
        <div class="card" style="width: 20rem; box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
            <div class="card-body">
                <h5 class="card-title" style="border-bottom: solid;background-color: lightgreen
                ;">${employee.getName()}</h5>
                <h5 class="card-title" >${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: <a href = "mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                <p class="card-text">School: ${employee.getSchool()}</p>
            </div>
        </div>
        `;
    }
}

function createHTML() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title> Our Team Profile</title>
    </head>
    <body style="background-image: ./assets/team.avif">
        <div class="container">
            <div class="row" style="margin-bottom: 4%;">
                <div class="col-12" style="background-color: lightcoral;">
                    <h1 class="text-center"> Our Team Profile</h1>
                </div>
            </div>
            <div class="row" style="justify-content: space-evenly;">
                ${employeeArr.map(employee => createCard(employee)).join("")}
            </div>
        </div>
    </body>
    </html>
    `;
    // console.log(html);
    return html;
}


init();