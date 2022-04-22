let player = {
    name : "Player", //name of player
    choices : [] //choices that will happen
}

let area = {
    intro: {
        text: "Let's start from the beginning " + player.name, 
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


let nextArea = area.area;
let buttonPick = document.getElementById("buttonPick");
let nameGate = false;

function swithchArea(place) {
    nextArea = place;
}

function construct(place) {
    let message = '<p name="nameInput"> </p><p>' + place.text + '</p>'
    for (i = 0; i < message.length-6; i++) {
        message = message.replace("Player", player.name);
    }
  }
return message;
}


//allows site to run
let gameSite = document.getElementById('game'),
    gameOutput = gameSite.elements;
console.log(gameOutput);


function gameOutput(event) {
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
