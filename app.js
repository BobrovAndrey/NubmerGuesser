//Game values
let min = 1,
    max = 10,
    winingNum = getRandomNum(min,max)//Random
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assingn UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
    window.location.reload();
    }
}); 

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    
   //Validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if(guess === winingNum){

    //Game over(Won)
    gameOver(true, `${winingNum} is correct, YOU WIN!`);

    }else{
    //Wrong number
    guessesLeft -=1;

    if (guessesLeft === 0){
        //Game over(Lost)
         
        gameOver(false, `Game over, YOU LOST. The correct number is ${winingNum}`);
    }else{
        //Game continues(answer wrong)
        //Border color
        guessInput.style.borderColor = 'red';

        //Clear input
        guessInput.value = '';

        //Wrong number message
        setMessage(`Guess is not correct, ${guessesLeft} guesses left`);
    }
    }
});

//Game over
function gameOver(won, msg ){
    let color;
    won === true ? color = 'green' : color = 'red';

//Disable input
guessInput.disabled = true;

//Border color
guessInput.style.borderColor = color;

//Text color
message.style.color = color;

//Won message
setMessage(msg);

//Play again?
guessBtn.value = 'Play Again?';
guessBtn.className += 'play-again'; 
}

//Get Wining Number
function getRandomNum(min,max){
 return(Math.floor(Math.random()*(max-min+1)+min));
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}