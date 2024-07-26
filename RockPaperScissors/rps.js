const choices = ["rock", "paper", "scissors"];
const usersChoiceDisplay = document.getElementById("usersChoiceDisplay");
const computersChoiceDisplay = document.getElementById("computersChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const winCounterDisplay = document.getElementById("winCounterDisplay");
const lossCounterDisplay = document.getElementById("lossCounterDisplay");
const drawCounterDisplay = document.getElementById("drawCounterDisplay");
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

function game(usersChoice){
    const computersChoice = choices[Math.floor(Math.random() * 3)];
    // Math.random generates random number 0-2
    // Math.floor rounds it up
    // console.log(computersChoice)
    let result = "";

    if(usersChoice === computersChoice){
        result = "Draw"
    }else{
        // using switch case and ternary operators to not use nested if statements
        switch(usersChoice){
            case "rock":
                result = (computersChoice === "paper") ? "Lose" : "Win";
                break;
            case "paper":
                result = (computersChoice === "scissors") ? "Lose" : "Win";
                break;
            case "scissors":
                result = (computersChoice === "rock") ? "Lose" : "Win";
                break;
        }
    }

    usersChoiceDisplay.textContent = `User: ${usersChoice}`;
    computersChoiceDisplay.textContent = `Computer: ${computersChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("lose", "win", "draw");

    if(result === "Lose"){
        resultDisplay.classList.add("lose");
        lossCounter++;
        lossCounterDisplay.textContent = `Loss: ${lossCounter}`;
    }else if(result === "Win"){
        resultDisplay.classList.add("win");
        winCounter++;
        winCounterDisplay.textContent = `Win: ${winCounter}`;
    }else{
        resultDisplay.classList.add("draw");
        drawCounter++;
        drawCounterDisplay.textContent = `Draw: ${drawCounter}`;
    }

}