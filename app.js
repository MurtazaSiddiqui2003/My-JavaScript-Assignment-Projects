var img = document.getElementById("dice")
var btn = document.getElementById("btn")
var bidamt = document.getElementById("bidamt")
var bidnum = document.getElementById("bidnum")
var inAmt = document.getElementById("coins")
const initialCoins = 1000
var coins = initialCoins
inAmt.innerHTML = coins


function rollDice() {
    var randomNumber = Math.ceil(Math.random() * 6);
    if (randomNumber === 1) {
        img.src = "1.png"
    }

    else if (randomNumber === 2) {
        img.src = "2.png"
    }
    
    else if (randomNumber === 3) {
        img.src = "3.png"
    }

    else if (randomNumber === 4) {
        img.src = "4.png"
    }
    
    else if (randomNumber === 5) {
        img.src = "5.png"
    }
    
    else if (randomNumber === 6) {
        img.src = "6.png"
    }
    
    var bid = parseInt(bidamt.value);
    var guess = parseInt(bidnum.value);

    if (bid < 1 || guess <  1 || isNaN(bid) || isNaN(guess)){
        alert("Please enter a valid bid amount and guess.");
        return;
    }

    if (bid > coins) {
        alert("You don't have enough coins to place this bet!");
        return;
    }
    
    if (guess < 1 || guess > 6) {
        alert("Please enter a valid guess between 1 and 6.");
        return;
    }
    
    if (randomNumber == guess) {
        alert("Congratulations! You guessed correctly!");
        coins += bid;
    }

    else {
        alert("Sorry, you guessed wrong. The correct number was " + randomNumber + ".");
        coins -= bid;
    }

    inAmt.innerHTML = coins;

}