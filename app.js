let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //PlayerX/PlayerO
let btnCount = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
const resetGame = () => {
    turnO = true;
    btnCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //If player O turn
            box.innerText = "O";
            turnO = false; //Then here set the turn to false
        }
        else { //Here is Player X turn
            box.innerText = "X";
            turnO = true; //Then set the turn to true for next round
        }
        btnCount++;
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
};
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();
                showWinner(pos1Val);
            }
        }

    }
    if (btnCount === 9) {
        msg.innerText = `Oops ! Match Is Draw`;
        msgContainer.classList.remove("hide");
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// 2D Arrays
// let arr2 = [["Apple", "Banana"], ["Litchi", "Strawberry"], ["Cucumber", "Guava"]];


