//points 
let points = 0
//range
let Range = 2
//username
const username = prompt("What is your username?");

function game(range = Range){
    //generate random number
    const randNum = Math.floor(Math.random() * range) + 1
    //prompt user to generate the number
    const guess = prompt(`Hello ${username}, can you predict the generated number?`)
    //check if user cancelled the game
    if(!guess || !username){
        //message
        alert(`You ended the game with ${points} points.`);
        //reset points
        points=0;
        //reset range
        Range=2;
        //stop the recursion
        return false;
    }
    //check if user prediction is correct
    if( Number(guess) === randNum ){
        //award a point to the user
        points+=1;
        //increase range limit value
        Range+=1;
        alert(`Your guess is correct, you have ${points} points`);
    }else if( Number(guess) !== randNum ){
        alert(`Your guess is incorrect, you have ${points} points. Try again?`);
    }
    //call function again
    game()
}
game()