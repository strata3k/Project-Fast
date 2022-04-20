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

}
let nextArea = area.area1;
let buttonPick = document.getElementById("buttonPick");