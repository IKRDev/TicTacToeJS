let player = "X" // current player
let gameRunning = true // is there a game currently running?
let clicked

let pos

// grid as an array
let cells = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

let wins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// Check win conditions
function checkWin() {
    
}

// Get element that was clicked
// FROM: https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document (asked by User1145216, answered by bhv)
window.onclick = e => {
    clicked = e.target
    if (clicked.className == "tictacbtn" && clicked.innerHTML == "") {
        clicked.innerHTML = player
        
        // get pos of button
        pos = parseInt(clicked.id.charAt(6))
        cells[pos] = player
        console.log(cells)

        //swap player
        if (player == "X") {
            player = "O"
        } else {
            player = "X"
        }
    }
} 