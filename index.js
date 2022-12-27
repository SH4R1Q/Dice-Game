function winner(name, num){
    document.querySelector(name+" img").setAttribute("src" , "/images/dice"+num+".png");
    document.querySelector(name+" p").textContent = "Winner!! 🚩";
}

function loser(name, num){
    document.querySelector(name+" img").setAttribute("src" , "/images/dice"+num+".png");
    document.querySelector(name+" p").textContent = "Lost 😶";
}
function draw(name1, num1, name2, num2){
    document.querySelector(name1+" img").setAttribute("src" , "/images/dice-roll.gif");
    document.querySelector(name2+" img").setAttribute("src" , "/images/dice-roll.gif");
    document.querySelector(name1+" img").setAttribute("src" , "/images/dice"+num1+".png");
    document.querySelector(name2+" img").setAttribute("src" , "/images/dice"+num2+".png");
    document.querySelector(name1+" p").textContent = "Draw 🙌";
    document.querySelector(name2+" p").textContent = "Draw 🙌";
}

function gen() {
    let n1 = Math.floor(Math.random()*6)+1;
    let n2 = Math.floor(Math.random()*6)+1;
    if(n1<n2) {
        winner("#player2", n2);
        loser("#player1" , n1);
    }
    if(n2<n1) {
        winner("#player1", n1);
        loser("#player2" , n2);
    }
    if(n1 === n2){
        draw("#player1", n1, "#player2", n2);
    }
}
document.getElementById("announce").addEventListener("click", gen);
