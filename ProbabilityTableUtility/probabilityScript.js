function addRow() {
	var table = document.getElementById("diceTable0");
	var row = document.getElementById("inputRow");
	var clone = row.cloneNode(true);
	clone.id = "inputRow"+table.getElementsByTagName("tr").length;
	table.appendChild(clone);
}


function calculateTotals() {
	var table = document.getElementById("diceTable0");
	
}

function rollDice(number, sides) {
	int total = 0;
	for (int i = 0; i < number; i++) {
		total += rollDie(sides);
	}
	return total;
}

function rollDie(sides) {
	
}