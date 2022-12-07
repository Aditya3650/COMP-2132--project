
let dice = document.querySelectorAll("img");

let rollBtn = document.getElementById("roll");
let newBtn = document.getElementById("newGame");

let myTotal = 0;
let yourTotal = 0;
let counter = 0;

const popupDelay = 1000;
const popupWin = document.getElementById("win");
const popupLose = document.getElementById("lose");
const popupTie = document.getElementById("tie");
const closePopupWin = document.getElementById("close-pop-up-win");
const closePopupLose = document.getElementById("close-pop-up-lose");
const closePopupTie = document.getElementById("close-pop-up-tie");


function roll() {

    if (checkCounter()) {

        dice.forEach(function(die){
            die.classList.add("shake");
        });
    
        setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake");
            });
            let myDieOneValue = Math.floor(Math.random()*6) + 1;
            let myDieTwoValue = Math.floor(Math.random()*6) + 1;
            let yourDieOneValue = Math.floor(Math.random()*6) + 1;
            let yourDieTwoValue = Math.floor(Math.random()*6) + 1;
            // console.log(dieOneValue,dieTwoValue);
            document.querySelector("#die-1").setAttribute("src", `images/dice${myDieOneValue}.jpg`);
            document.querySelector("#die-2").setAttribute("src", `images/dice${myDieTwoValue}.jpg`);
            document.querySelector("#die-3").setAttribute("src", `images/dice${yourDieOneValue}.jpg`);
            document.querySelector("#die-4").setAttribute("src", `images/dice${yourDieTwoValue}.jpg`);
    
            let myScore = diceValue(myDieOneValue, myDieTwoValue);
            let yourScore = diceValue (yourDieOneValue, yourDieTwoValue);
            
            document.querySelector("#myScore").innerHTML = "Your roll is " + myScore;
            document.querySelector("#yourScore").innerHTML = "Computer's roll is " + yourScore;
    
            myTotal = myTotal + myScore;
            yourTotal = yourTotal + yourScore;
    
            document.querySelector("#myTotal").innerHTML = "Your total is " + myTotal;
            document.querySelector("#yourTotal").innerHTML = "Computer's total is " + yourTotal;

            if (counter == 3) {
                result();
            }
    
        },
        1000
        );

    }

}


function result() {
    if ((myTotal) > (yourTotal)) {
        popupAnimation = setTimeout( function(){
            $("#win").fadeIn(1000);
            // popup.style.display = "block";
        }, popupDelay);

    }

    else if ((myTotal) < (yourTotal)) {
        popupAnimation = setTimeout( function(){
            $("#lose").fadeIn(1000);
            // popup.style.display = "block";
        }, popupDelay);
    }

    else if ((myTotal) == (yourTotal)) {
        popupAnimation = setTimeout( function(){
            $("#tie").fadeIn(1000);
            // popup.style.display = "block";
        }, popupDelay);
    }

}


function checkCounter() {
    
    counter++;
    document.getElementById("round").innerText = `Round: ${counter}`;

    if (counter > 2) {
        rollBtn.disabled = true;
        rollBtn.classList.add("disabled");

        newBtn.disabled = false;
        newBtn.classList.remove("disabled");
    }

    return true;
}


function diceValue(valueOne, valueTwo) {
    if ((valueOne === 1) || (valueTwo === 1)) {
        return 0;
    }

    else if (valueOne == valueTwo) {
        return (valueOne + valueTwo) * 2;
    }

    else {
        return (valueOne + valueTwo);
    }
}


function newGame() {
    document.querySelector("#die-1").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-2").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-3").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-4").setAttribute("src", `images/dice1.jpg`);

    document.querySelector("#myScore").innerHTML = "Your roll is ";
    document.querySelector("#yourScore").innerHTML = "Computer's roll is ";

    document.querySelector("#myTotal").innerHTML = "Your total is ";
    document.querySelector("#yourTotal").innerHTML = "Computer's total is ";

    document.getElementById("round").innerText = `Round: `;


    rollBtn.disabled = false;
    rollBtn.classList.remove("disabled");

    newBtn.disabled = true;
    newBtn.classList.add("disabled");

    myTotal = 0;
    yourTotal = 0;

    counter = 0;

    clearTimeout(popupAnimation);
}




function staticPage() {
    document.querySelector("#die-1").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-2").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-3").setAttribute("src", `images/dice1.jpg`);
    document.querySelector("#die-4").setAttribute("src", `images/dice1.jpg`);

    document.querySelector("#myScore").innerHTML = "Your roll is ";
    document.querySelector("#yourScore").innerHTML = "Computer's roll is ";

    document.querySelector("#myTotal").innerHTML = "Your total is ";
    document.querySelector("#yourTotal").innerHTML = "Computer's total is ";
}



let popupAnimation;

popupWin.style.display = "none"; 
popupLose.style.display = "none";
popupTie.style.display = "none";


closePopupWin.addEventListener("click", function(){
    $("#win").fadeOut(popupDelay); 
});

closePopupLose.addEventListener("click", function(){  
    $("#lose").fadeOut(popupDelay);  
});

closePopupTie.addEventListener("click", function(){  
    $("#tie").fadeOut(popupDelay);  
});


staticPage();