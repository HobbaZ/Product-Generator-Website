
var programmingLanguage = ['HTML', 'Python', 'JavaScript', 'COBOL', 'FORTRAN', 'Visual Basic', 'Excel'];

var project = ['procedurally generated', 'AI enabled', 'blockchain encrypted', 'cryptocurrency focused'];
var interest = ['shoe', 'car', 'real estate', 'drink', 'recipe', 'app', 'game', 'political opinion', 'government'];
var projectType = ['website', 'app', 'report generator', 'calculator'];
var action = ['scrolling really fast on your ', 'closing popups tailored to your ', 'watching ads about your ', 'injecting malicious Javascript into your ', 'investing in your ', 'destroying rival competitors to your ', 'spamming your '];
var task = [ ' can be difficult. ', ' can be a nerve racking venture. ', ' can be an exhausting experience. ', ' can be mundane. ', ' can be daunting. '];
var accuracy = ['terrible', 'mediocre', 'amazing', 'extraordinary', 'poor', 'surprising'];
var size = ['insignificant', 'small', 'medium', 'large', 'massive', 'blackhole-esque'];
var timeSpan = ['the next quantum leap', 'next week', 'yesterday', 'the forfront of tomorrow', 'the latest'];
var pace = ['break neck speed', 'snail\'s pace', 'spine snapping pace', 'lightspeed'];
var shareWith = ['the world', 'their parents', 'their friends', 'their collegues', 'the Internet'];
var secondWord = ['software', 'estate', 'rage', 'report', 'creations', 'stats', 'company','fast', 'rocket', 'velocity', 'arrow', 'express','solutions','ify', 'ly', 'nado', 'graph', 'kit', 'node', 'ooey', 'right', 'hub', 'gin', 'gen', 'en', 'ow', 'or', 'ent', 'ed'];
var com = ['.uk', '.au', '.hk', '.gov', ''];
var position = ['admin', 'support', 'mail', 'tech', 'boss'];

var greeting = ['Web Developer', 'Webtrepreneur', 'Hit me up with your cool web dev projects', 'Please hire me, I\'m desperate', 'Google Savant', 'Dream Creator', ''];

var aboutmeDesc = [
    "I'm a full stack web developer based in the Blue Mountains. I use " + GetRandom(programmingLanguage) +
    " for front end work and " + GetRandom(programmingLanguage)+" for back end work." + "<br>",

    "Building powerful applications with just " + GetRandom(programmingLanguage) + " and " + GetRandom(programmingLanguage) +
    " I create the future in the present",

    "Have a cool project idea but don't have the technical skills to get that idea into an app or website? That's where I come in. \
    My strong foundations in " + GetRandom(programmingLanguage) + " will make me the ideal programmer to tackle your project"
];

//var colour = ['Red', 'LightGreen', 'LightBlue', 'LightYellow', 'LightGrey'];

var arrayInput = [programmingLanguage, project, interest, projectType];

//General random function
function GetRandom(arrayInput) {
var randNumber = Math.floor(Math.random()*arrayInput.length);
return arrayInput[randNumber];
}

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
    var word = words.split(' ').join('').toLowerCase();
    return word;
}

function projectGenerator() {
   // var projectsToGen = 5;
        var chosenProject = GetRandom(project);
        var chosenInterest = GetRandom(interest);
        var chosenProjectType = GetRandom(projectType);

        //description of tech use
        if (chosenProject === project[0]) {
            var techDescription = "The latest advances in " + chosenProject + " technology allows users to view and collate generated " + chosenInterest + "s on the fly, allowing the user to share their new found " + chosenInterest + " with " + GetRandom(shareWith) + ", or keep it a secret.";
        } 

        if (chosenProject === project[1]) {
            var techDescription = chosenProject + " technology collects users previous " + chosenInterest + " related data and pulls from various behavioural algorithms and datasets in order to predict the users needs and interests relating to " + chosenInterest +"s, resulting in a " + chosenProjectType + " that can predict users needs with " + GetRandom(accuracy) + " accuracy.";
        }

        if (chosenProject === project[2]) {
            var techDescription = "The use of " + chosenProject + " technology propels users at " + GetRandom(pace) + " to " + GetRandom(timeSpan) + " in " + chosenInterest + " based " + chosenProject + " security, productivity and usability. ";
        }

        if (chosenProject === project[3]) {
            var techDescription = "My " + chosenProject + " " + chosenInterest + " " + chosenProjectType +" is punching a " + GetRandom(size) + " " + chosenInterest + " shaped hole in the traditional computerised passive income generated industry. Generate money by " + GetRandom(action) + chosenInterest + " today. ";
        }

        //method of interest

        if ((chosenInterest === interest[1]) || (chosenInterest === interest[2])) {
            var interestDescription =  "The new and used market for " + chosenInterest + "s" + GetRandom(task);
        }

        if ((chosenInterest === interest[3]) || (chosenInterest === interest[0])  || (chosenInterest === interest[4]) || (chosenInterest === interest[5]) || (chosenInterest === interest[6])) {
            var interestDescription =  "Discovering and creating the next hit " + chosenInterest + GetRandom(task);
        }

        if ((chosenInterest === interest[7]) || (chosenInterest === interest[8])) {
            var interestDescription =  "Shifting through all the noise around " + chosenInterest + "s and finding the right " + chosenInterest + " for you" + GetRandom(task);
        }

        //method of project type
        if (chosenProjectType === projectType[0]) {
            var projectTypeDescription =  "View the latest info all in one place with my newly developed " + chosenProjectType + " utilising "+ chosenProject + " technology. "; 
        }

        if (chosenProjectType === projectType[1]) {
            var projectTypeDescription =  "Have access to " + chosenInterest + "s in the palm of your hand with my newly developed " + chosenProjectType + " utilising "+ chosenProject + " technology. ";
        }

        if (chosenProjectType === projectType[2]) {
            var projectTypeDescription =  "Get the stats and engagement you depend upon with my newly developed " + chosenInterest + " " + chosenProject + " " + chosenProjectType + ". Track and customise the report with only the stats you care about, allowing easy to digest information and excluding the information you don't care about. "; 
        }

        if (chosenProjectType === projectType[3]) {
            var projectTypeDescription =  "Calculate the everyday costings, efficiency, performance and interactivity among other analytics of your " + chosenInterest + "s with my newly developed " + chosenProject + " " + chosenProjectType + ". ";
        }

        //Generate product description
        var description = interestDescription + projectTypeDescription + techDescription;

        //Generate project name
        var nameGen = [chosenProject, chosenInterest, chosenProjectType];
        var randSlice = GetRandom(secondWord).length;
        //Chooses random name and slices a random amount depending on randSlice number (usually 3 to 6), 
        //then removes any spaces with replace keyword, then adds a random second word to it
        var brandName = GetRandom(nameGen).slice(0,randSlice).replace(" ","") + GetRandom(secondWord);

        //Gets random name from nameGen, slices it to about half the word plus another random end word, 
        var projectName = "Name: " + Capitaliser(brandName);
        var projectEmail = "Email: " + GetRandom(position) + "@" + emailer(brandName) + ".com" + GetRandom(com);

        var title = chosenProject + " " + chosenInterest + " " + chosenProjectType;

        var projectTitle = "<h1>"+ Capitaliser(chosenProjectType) + "</h1>" + "<br>" + Capitaliser(title) + "<br>"
        + description  + "<br>" + projectName + "<br>" + projectEmail;
        return projectTitle;
    
}
//First loading of page

//portfolio greeting
document.getElementById("portfolioHeader").innerHTML='Zac Hobba' + '<br>' + GetRandom(greeting);

//about me section


document.getElementById("aboutme").innerHTML= GetRandom(aboutmeDesc);

document.getElementById("projects").innerHTML= projectGenerator();

//function to generate new product when clicked
function generate() {
    var projects = 5;
    for (let index = 0; index < projects.length; index++) {
        projectGenerator();
    }

    //generate new about me
    document.getElementById("aboutme").innerHTML= GetRandom(aboutmeDesc);

    //Generate header greeting
    document.getElementById("portfolioHeader").innerHTML='Zac Hobba' + '<br>' + GetRandom(greeting);

    //generate new product
    document.getElementById("projects").innerHTML= projectGenerator();

    
}
