const fs = require ('fs');
const inquirer = require('inquirer');

//Generate an html page from the user's inputs
const generateHTML = require('./src/generateHTML');

//Employee lib files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const addEmployee = () => {
    console.log(`
    Please enter your employee's information
    ----------------------------------------
    `
    );
    
    return inquirer.prompt ([

        //Code for all employee roles
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the employee's name");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the id of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the employee's ID");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the email address of the employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the employee's email address");
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the role of the employee?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        
        //Code to capture Manager's Office
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the managers office number',
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the manager's office");
                }
            }
        },
        
        //Code to capture engineer's github
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the engineers github username',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the engineers github username");
                }
            }
        },

        //code to capture intern's school
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log ("Please enter the interns school");
                }
            }
        },

        //confirm whether you want to add more employeees
        {
            type: 'confirm',
            name: 'addAnotherEmployee',
            message: 'Would you like to add more employees?',
            default: false
        },
    ])
    .then(employeeData => {
        var {name, id, email, role, office, github, school, addAnotherEmployee} = employeeData;
        var employee;

        if (role === "Manager"){
            employee = new Manager (name, id, email, role, office);
        }
        else if (role === "Engineer"){
            employee = new Engineer (name, id, email, role, github);
        }
        else if (role === "Intern"){
            employee = new Intern (name, id, email, role, school);
        }

        console.log(employee);
        team.push(employee);

        if (addAnotherEmployee) {
            return addEmployee(team);
        }
        else {
            return team;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log (err);
            return;
        }
        else {
            console.log("Your team has been created");
        }
    })
};

addEmployee()
    .then(team => {
        return generateHTML(team);
    })
    .then(page => {
        return writeFile(page);
    });

