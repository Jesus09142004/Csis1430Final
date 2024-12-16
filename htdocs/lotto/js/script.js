var inputHolder;
function generateLotto(){
var input = parseInt(prompt("how many numbers do you want to pick?"));
inputHolder = input;
while(input > 8 || input < 1){
	alert("Please enter a number between one and eight")
	input = parseInt(prompt("how many numbers do you want to pick?"));
}
var choice = new Array(input);
var lottonum = "";


for(let i = 0; i < choice.length; i++){
	var random = Math.ceil((Math.random() * 98) + 1);
	choice[i] = random;
	if (random < 1 || random > 100 ){ 
		alert( random + " out of range");
	}
}
for (var i = 0; i < choice.length; i++){
	if( i == choice.length - 1){
 		lottonum += choice[i];
	}
	else{
		lottonum += choice[i] + "-"
		}
	}

	document.getElementById("lottoNum").innerHTML = lottonum;
}

function reroll() {
	var choice = new Array(inputHolder);
	var lottonum = "";

	for(let i = 0; i < choice.length; i++){
		var random = Math.ceil((Math.random() * 98) + 1);
		choice[i] = random;
		if (random < 1 || random > 100 ){ 
		alert( random + " out of range");
		}
	}

	for (var i = 0; i < choice.length; i++){
	if( i == choice.length - 1){
 		lottonum += choice[i];
	}
	else{
		lottonum += choice[i] + "-"
		}
	}
	document.getElementById("lottoNum").innerHTML = lottonum;
	
}

