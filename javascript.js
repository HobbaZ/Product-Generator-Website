
let programmingLanguage = ['HTML', 'Python', 'JavaScript', 'COBOL', 'FORTRAN', 'Visual Basic', 'Excel', 'Pearl', 'CSS'];
let secondWord = ['software', 'estate', 'rage', 'report', 'creations', 'stats', 'company','fast', 'rocket', 'velocity', 'arrow', 'express','solutions','ify', 'ly', 'nado', 'graph', 'kit', 'node', 'ooey', 'right', 'hub', 'gin', 'gen', 'en', 'ow', 'or', 'ent', 'ed'];
let com = ['.uk', '.au', '.gov', ''];
let position = ['admin', 'support', 'mail', 'tech', 'boss'];

let projects = document.getElementById('projects');

//General random function
function GetRandom(arrayInput) {
    let randNumber = Math.floor(Math.random()*arrayInput.length);
    return arrayInput[randNumber];
    }

let aboutmeDesc = [
    "I'm a full stack web developer based in the Blue Mountains. I use a combination of " + GetRandom(programmingLanguage) +
    "  and " + GetRandom(programmingLanguage)+" to make ideas reality." + "<br>",

    "Building powerful applications with just " + GetRandom(programmingLanguage) + " and " + GetRandom(programmingLanguage) +
    " I create the future in the present",

    "Have a cool project idea but don't have the technical skills to make that idea into an app or website? My strong foundations in " 
    + GetRandom(programmingLanguage) + " and " + GetRandom(programmingLanguage) + " will make me the ideal programmer to tackle your project"
];

// Capitalizes first letter of each word
function Capitaliser(input) {
    const eachWord = input.split(" ");
    for (let index = 0; index < eachWord.length; index++) {
        eachWord[index] = eachWord[index][0].toUpperCase() + eachWord[index].substr(1);
    }
    return eachWord.join(" ");
}

//strips whitespace from email and converts any uppercase to lowercase
function emailer(words) {
    let word = words.split(' ').join('').toLowerCase();
    return word;
}

function projectGenerator() {

    let project = ['procedurally generated', 'AI enabled', 'blockchain encrypted', 'cryptocurrency focused', 'community created software'];
    let interest = ['shoe', 'car', 'real estate', 'drink', 'recipe', 'app', 'game', 'political opinion', 'government', 'business', 'plant', 'coffee', 'book'];
    let projectType = ['website', 'app', 'report generator', 'calculator', "tracker", "finder", "encyclopeadia"];
    let data = ['collecting', 'milage', 'tracker', 'budgeter', 'renter', 'resale advisor'];
    let individual = ['busy individual', 'investor', 'driven minimum wage earner', 'CEO', 'entrepreneur', 'retiree'];
    let descriptor = ['amazing', 'spaghetti coded', 'innovative', 'time-consuming', 'time-saving', 'mundane', 'myriad', 'forgettable']
    let compSystem = ["Amiga 64", "GameStation", "Orange Operating Systems", "phone only", 'Compubox Computers', 'Partsbox PC', 'überteuert Systems'];
    let engagement = ['engage', 'bore', 'distract', 'annoy', 'capture']

    projects.textContent = "";

    for (let index = 0; index < 5; index++) {

    let chosenProject = GetRandom(project);
    let chosenInterest = GetRandom(interest);
    let chosenProjectType = GetRandom(projectType);
    let chosenData = GetRandom(data);

    //Generate project name
    let nameGen = [chosenProject, chosenInterest, chosenProjectType];
    let randSlice = GetRandom(secondWord).length;
    //Chooses random name and slices a random amount depending on randSlice number (usually 3 to 6), 
    //then removes any spaces with replace keyword, then adds a random second word to it
    let brandName = chosenInterest.slice(0, randSlice).replace(" ","") + GetRandom(secondWord);

    //Gets random name from nameGen, slices it to about half the word plus another random end word, 
    let projectEmail = "Email: " + GetRandom(position) + "@" + emailer(brandName) + ".com" + GetRandom(com);

    let startDescription = [
        'The latest advances in ' + chosenProject + ' technology',
        chosenProject + ' technology',
        'Dumbing down ' + chosenProject + ' technology',
        'Combining ' + GetRandom(project) + ' technology with trace elements of ' + chosenProject + " algorithms",
    ];
    
    let midDescription = [
        " has enabled us to create " + Capitaliser(brandName) + ", a " + chosenProject + " " + chosenInterest + " " + chosenProjectType + ' that will change the world as we know it. ',
        " lead us to form " + Capitaliser(brandName) + ', a ' + chosenInterest + " " + chosenData + ' ' + chosenProjectType + ' for the ' + GetRandom(individual)+". ",
        " created an opportunity in the market for a " + chosenInterest + "  focused " + chosenProjectType + " to fill a much overlooked niche market. "
    ]

    let endDescription = [
        Capitaliser(brandName) + " does what other " + chosenProjectType + "'s do, but better, boasting " + GetRandom(descriptor) + " features such as:",
        "Enhancing users lives with " + GetRandom(descriptor) + " features such as:",
        Capitaliser(brandName) + " will " + GetRandom(engagement) + " users with such " + GetRandom(descriptor) + " features as:"
    ]

    let features = [
    "Easy to navigate features",
    'Large font for easy reading',
    'Social media plugins',
    'A panic button when you make a mistake',
    'Night mode/day mode',
    'VR support',
    'Acheivments to be earned (with money)',
    'Lootbox mechanics',
    'Monitor ' + chosenInterest + "'s various personal economic factors with in depth data metrics behind a paywall", 
    ]

    let list = document.createElement("ul");
    for (let index = 0; index < 3; index++) {
        let feature = document.createElement('li');
        feature.textContent = GetRandom(features);      
        list.appendChild(feature);
}

    //Generate product description
    let projectHeading = document.createElement("h2");
    projectHeading.textContent = Capitaliser(brandName)

    let description = document.createElement("p");
    description.textContent = GetRandom(startDescription) + GetRandom(midDescription) + GetRandom(endDescription);

    let subheading = document.createElement("h5");
    subheading.textContent = 'Software for ' +GetRandom(compSystem);

    let email = document.createElement("p");
    email.textContent = projectEmail;

    projects.appendChild(projectHeading);
    projects.appendChild(subheading);
    projects.appendChild(description);
    projects.appendChild(list);
    projects.appendChild(email);
}
}

//function to generate new product when clicked
function generate() {
    document.getElementById("aboutme").innerHTML= GetRandom(aboutmeDesc);
    projectGenerator();
}

document.getElementById("portfolioHeader").innerHTML='Zac Hobba' + '<br>';
generate();
