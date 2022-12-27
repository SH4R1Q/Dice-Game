function winner(name, num){
    document.querySelector(name+" img").setAttribute("src" , "images/dice"+num+".png");
    let st = name.substr(1) ;
    document.querySelector(name+" p").textContent = st+" : Won!! 🚩";
}

function loser(name, num){
    document.querySelector(name+" img").setAttribute("src" , "images/dice"+num+".png");
    let st = name.substr(1) ;
    document.querySelector(name+" p").textContent = st+" : Lost 😶";
}
function draw(name1, num1, name2, num2){
    // document.querySelector(name1+" img").setAttribute("src" , "images/dice-roll.gif");
    // document.querySelector(name2+" img").setAttribute("src" , "images/dice-roll.gif");
    document.querySelector(name1+" img").setAttribute("src" , "images/dice"+num1+".png");
    document.querySelector(name2+" img").setAttribute("src" , "images/dice"+num2+".png");
    document.querySelector(name1+" p").textContent = "Draw 🙌";
    document.querySelector(name2+" p").textContent = "Draw 🙌";
}

function gen() {
    document.querySelector("#player1 p").textContent = "Player 1";
    document.querySelector("#player2 p").textContent = "Player 2";
    document.querySelector("#player1 img").setAttribute("src" , "images/dice-roll.gif");
    document.querySelector("#player2 img").setAttribute("src" , "images/dice-roll.gif");
    let n1 = Math.floor(Math.random()*6)+1;
    let n2 = Math.floor(Math.random()*6)+1;
    if(n1<n2) {
        setTimeout(winner,1500,"#player2", n2);
        setTimeout(loser,1500,"#player1", n1);
    }
    if(n2<n1) {
        setTimeout(winner,1500,"#player1", n1);
        setTimeout(loser,1500,"#player2", n2);
    }
    if(n1 === n2){
        setTimeout(draw,1500,"#player1", n1, "#player2", n2);
    }
}
document.getElementById("announce").addEventListener("click", gen);
