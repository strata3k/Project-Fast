let player = {
    name : "Player", //name of player
    choices : [] //choices that will happen
}

//area object
let area = {
    intro: {
        text: "Let's start from the beginning " + player.name, //textArea
        mod: [
            []
        ],
        options: [
            ["Okay, tell me about boot camp", "area.area1"]
        ]
    },

    area1: {
        text: player.name + "hey!",
        mod: [
            []
        ],
        choices: [
            ["Continue", "area.area2"]
        ]
    }

};

//variables
let nextArea = area.area;
let buttonPick = document.getElementById("buttonPick");
let nameGate = false;

function swithchArea(place) {
    nextArea = place;
}

//areas
function construct(place) {
    let message = '<p name="nameInput"> </p><p>' + place.text + '</p>'
    for (i = 0; i < place.options.length; i++) {
        message += '<button type="submit" onclick="swithchArea(' + place.options[i][1] + ')">' + place.options[i][0] + '</button>'
    }
    for (i=0; i < message.length-6; i++) {
        if(message.substring(i, i+6) == "Player"){
            message = message.replace("Player", player.name);
    }
  }
return message;
}


//allows site to run
let gameSite = document.getElementById('game'),
    gameOutput = gameSite.elements;

console.log(gameOutput);

//output
function gameOutput(event) {

//gives name 
if (nameGate == false) {
    let textName = gameData['nameInput'].value;
    let output = document.getElementById('output');
    player.name = textName;
    nameGate = true;
}

output.innerHTML = `${construction(nextArea)}`;
console.log(player);
event.preventDefault();
}

//run
gamePage.addEventListener(`submit`, gameOutput);
