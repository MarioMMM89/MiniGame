var score = {
    userScore : 0,
    cpuScore : 0
}

var userPick;
var cpuPick;

var allOptions = [
    {
        name: "sasso",
        image: "assets/sasso.png"
    },
    {
        name: "carta",
        image: "assets/carta.png"
    },
    {
        name: "forbice",
        image: "assets/forbice.png"
    }
]

var possibleUserPicks = document.getElementsByClassName("user-choice");

for (var i= 0; i<possibleUserPicks.length; i++){
    possibleUserPicks[i].addEventListener('click', onUserPick)
}

function onUserPick() {
    if(score.userScore > 4){
        score.userScore = 0;
        score.cpuScore = 0;
        return alert("HAI VINTO TU!!!\nLa partita è finita\nFai la tua scelta per iniziare nuova partita!")
    }
    if(score.cpuScore > 4) {
        score.userScore = 0;
        score.cpuScore = 0;
        return alert("HA VINTO IL COMPUTER!!!\nLa partita è finita\nFai la tua scelta per iniziare nuova partita!")
    }
    var userPickImage = "<img src='"+ this.src + "'/>";
    userPick = this.dataset.name;
    generateCpuPick();
    var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
    var cpuPickName = cpuPick.name;
    document.getElementById("user-choice").innerHTML = "Hai scelto "+userPick.toUpperCase() + userPickImage ;
    document.getElementById("computer-choice").innerHTML = "Il computer ha scelto " + cpuPickName.toUpperCase() + cpuPickImage;
    document.getElementById("result").innerHTML = chiVince();
    document.getElementById("player-score").innerHTML = score.userScore;
    document.getElementById("cpu-score").innerHTML = score.cpuScore;
}

function generateCpuPick(){
   cpuPick = allOptions[Math.floor(Math.random()* allOptions.length)];
}

function chiVince() {
    if (userPick == cpuPick.name) {
        return "HAI PAREGGIATO!";
    } else {
        if(userPick == "sasso"){
            if(cpuPick.name == "forbice"){
                score.userScore++;
                return "HAI VINTO!";
            } else {
            score.cpuScore++;
            return "HAI PERSO!";
            }
        }
        if(userPick == "carta"){
            if(cpuPick.name == "sasso"){
            score.userScore++;
            return "HAI VINTO!";
            } else {
            score.cpuScore++;
            return "HAI PERSO!";
        }
    }
        if(userPick == "forbice"){
            if(cpuPick.name == "carta"){
            score.userScore++;
            return "HAI VINTO!";
        } else {
        score.cpuScore++;
        return "HAI PERSO!";
}
}
}
};
