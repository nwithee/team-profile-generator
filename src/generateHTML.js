//Create Manager Card
const createManager = function (manager){
    return `
    <section class = "col-3 mt-3">
        <div class = "card bg-light text-dark">
            <div class ="card-header">
                <h4>${manager.name}</h4>
            </div>
            <div class="card-body">
                <h5 class = "card-title text-center">Manager</h5>
                <ul class = "list-group list-group-flush"></ul>
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office: ${manager.officeNumber}</li>
            </div>
        </div>
    </section>
    `;
}

//Create Engineer Card
const createEngineer = function (engineer){
    return `
    <section class = "col-3 mt-3">
        <div class = "card bg-light text-dark">
            <div class ="card-header">
                <h4>${engineer.name}</h4>
            </div>
            <div class="card-body">
                <h5 class = "card-title text-center">Engineer</h5>
                <ul class = "list-group list-group-flush"></ul>
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </div>
        </div>
    </section>
    `;
}

//Create Intern Card
const createIntern = function (intern){
    return `
    <section class = "col-3 mt-3">
        <div class = "card bg-light text-dark">
            <div class ="card-header">
                <h4>${intern.name}</h4>
            </div>
            <div class="card-body">
                <h5 class = "card-title text-center">Intern</h5>
                <ul class = "list-group list-group-flush"></ul>
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
            </div>
        </div>
    </section>
    `;
}


//code to create all of the cards and add them to the page

generateHTML = (data) => {

    //create an array to store all of the cards
    cardArray = [];

    for (var i = 0; i <data.length; i ++){
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);
            cardArray.push(managerCard);
        }
        else if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            cardArray.push(engineerCard);
        }
        else if (role === 'Intern') {
            const internCard = createIntern(employee);
            cardArray.push(internCard);
        }
    }

    //Remove comma from card array
    const cards = cardArray.join('');
    const createTeam = generateTeamPage(cards);
    return createTeam;
}

//code to create final page

const generateTeamPage = function (cards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Page</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
                <span class = "navbar-brand h2 mb-0 w-100 text-center">Your Team</span>
            </nav>
        </header>
        <main>
            <div class ="container">
                <div class ="row justify-content-center" id="team-cards">
                    ${cards}
                </div>
            </div>
        </main>
    </body>
    `;
}


module.exports = generateHTML;

