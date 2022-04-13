//Create Manager Card
const createManager = function (manager){
    return `
    <section class = "col-3 mt-3">
        <div class = "card">
            <div class ="card header">
                <h2>${manager.name}</h2>
            </div>
            <div class="card-body">
                <h4>Role: Manager</h4>
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a><p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </section>
    `;
}

//Create Engineer Card
const createEngineer = function (engineer){
    return `
    <section class = "col-3 mt-3">
        <div class = "card">
            <div class ="card header">
                <h2>${engineer.name}</h2>
            </div>
            <div class="card-body">
                <h4>Role: Engineer</h4>
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a><p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </section>
    `;
}

//Create Intern Card
const createIntern = function (intern){
    return `
    <section class = "col-3 mt-3">
        <div class = "card">
            <div class ="card header">
                <h2>${intern.name}</h2>
            </div>
            <div class="card-body">
                <h4>Role: Intern</h4>
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a><p>
                <p class="school">school: ${intern.school}</p>
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

    const createTeam = generateTeamPage(cardArray);
    return createTeam;
}

//code to create final page

const generateTeamPage = function (cardArray) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
        />
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Team Page</title>
    </head>
    <body>
        <header>
            <nav class ="navbar" id = "navbar">
                <span class ="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team</span>
            </nav>
        </header>
        <main>
            <div class ="container">
                <div class ="row justify-content-center" id="team-cards">
                    ${cardArray}
                </div>
            </div>
        </main>
    
    
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
    </body>



    `;
}


module.exports = generateHTML;

