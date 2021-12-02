let player = {
    name: "Dayo",
    cash: 500
}
number = []
let isAlive = false
let hasBlackJack = false
let sum = 0
let sumEl = document.getElementById("sum-el")
let message =""
let messageEl = document.getElementById("message-el")
let card = document.getElementById("card-el")

let playerEl = document.getElementById("player")


playerEl.textContent = player.name +": N"+player.cash

function randomNumber(){
 let rand = Math.floor(Math.random()*13)+1
 if(rand ===1){return 11}
 else if (rand >10){return 10}
else{return rand}}




function startGame(){
		isAlive = true
		hasBlackJack = false
		let num1 = randomNumber()
		let num2 = randomNumber()
		number = [num1, num2]
		sum = num1+num2
		game()
		}


function game(){
	card.textContent = "Cards: "
	for(let i=0;i<number.length;i++){

		card.textContent+= " "+number[i]
	}


	sumEl.textContent = "Sums: " + sum
	if(sum <= 20){
	message = "You want to draw another card?"
}
if(sum === 21){
	message = "You WON!!! you have BLACKJACK"
hasBlackJack=true
}
if(sum > 21){
	 isAlive = false
	message = "LOSER!!!, kindly close the door behind you"
}
messageEl.textContent = message
}

function newCard() {
	if(isAlive === true && hasBlackJack===false){
	let num3 = randomNumber()
	sum+= num3
	number.push(num3)
	
game()}}