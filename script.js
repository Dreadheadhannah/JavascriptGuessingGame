let points = 0
let Range = 2
const username = prompt("What is your username?");

function game(range = Range){
    const randNum = Math.floor(Math.random() * range) + 1
    const guess = prompt(`Hello, ${username}, 
    Can you guess the right generated number?`)
    if(!guess || !username){
        alert(`You ended the game with ${points} points.`);
        points=0;
        Range=2;
        return false;
    }
    if( Number(guess) === randNum ){
        points+=1;
        Range+=1;
        alert(`Your guess is correct,
         you have ${points} points`);
    }else if( Number(guess) !== randNum ){
        alert(`Your guess is incorrect, 
        you have ${points} points. Try again?`);
    }
    game()
}
game()