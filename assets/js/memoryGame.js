let cardGroup = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('cardBack');
let gameBox = document.getElementById('gameBox');
let flippedCard = 0;
let memory1;
let memory2;
let class1;
let class2;
let end = 0;
let timeBox = document.getElementById('timer');
let interval;
let oneMinute = 60 * 1;
let finalTime;
let score = 180;
let timer;
let restartNumber = 0;

document.getElementById("puntuacion").innerText = score

addEventsLiseners();

function addEventsLiseners(){
    for (let i = 0; i < cardGroup.length; i++) {
        cardGroup[i].addEventListener('click', e => {
            e.preventDefault()
            flipCard(e.target.firstChild.id)
        })
    }
}


function flipCard(id){
    let cardIm = document.getElementById(id)
    cardIm.style.display = 'block';
    
    
    if (flippedCard == 0){
        memory1 = id;
        class1 = cardIm.className;
        flippedCard++;
        return;
    }
    
    if (flippedCard == 1){
        memory2 = id;
        class2= cardIm.className;
        flippedCard = 0;
        
        if (class1 == class2){      
            console.log('son iguales');
        } else {
            setTimeout(resetDisplay, 500, memory1, memory2);
        }  
    }
    memory1= "";
    memory2= "";
    class1= "";
    class2= "";
    
    end = 0;
    for (let i=0; i<12; i++){
        let cardsArray = document.getElementsByClassName('cardBack')
        if (cardsArray[i].style.display == 'block'){
            end++;
        } 
        
    }
    if (end == 12){
        let congrats =document.getElementById('congrats');
        congrats.style.display= 'block';
        stopTimer();
        let timeLeft = document.getElementById("timer").innerText.slice(2,4);
        setScore(timeLeft);
    }
}

function resetDisplay(id1,id2){
    document.getElementById(id1).style.display = 'none'; 
    document.getElementById(id2).style.display = 'none';
}



function startAgain(){
    for (let i=0; i<cardBack.length; i++){
        cardBack[i].style.display = "none";
    }
    document.getElementById('congrats').style.display= "none";
    flippedCard = 0;
    end = 0;
    memory1 = "";
    memory2 = "";
    class1 = "";
    class2 = "";
    gameOverStartAgain();

    if ( restartNumber == 0){
        roundTwo();
        restartNumber++;
      
    } else {

        roundThree();
        console.log('hola');
        restartNumber= 0;
    }
    console.log(cardGroup)
    let cardGroupHTML = Array.from(cardGroup).map(el => el.outerHTML)
    let sortedCards = sort(cardGroupHTML);
    sortedCards_to_html(sortedCards) 
    addEventsLiseners();
    startTimer(oneMinute, timeBox);
    return;
}

/******************************************************************* */

function startAgainLooser(){
    for (let i=0; i < cardBack.length; i++){
        cardBack[i].style.display = "none";
    }
    document.getElementById('congrats').style.display= "none";
    flippedCard = 0;
    end = 0;
    memory1 = "";
    memory2 = "";
    class1 = "";
    class2 = "";
    gameOverStartAgain();

    if ( restartNumber == 2){
        roundTwo();
        restartNumber--;
      
    } /* else {

        roundThree();
        console.log('hola');
        restartNumber= 0;
    } */
    console.log(cardGroup)
    let cardGroupHTML = Array.from(cardGroup).map(el => el.outerHTML)
    let sortedCards = sort(cardGroupHTML);
    sortedCards_to_html(sortedCards) 
    addEventsLiseners();
    startTimer(oneMinute, timeBox);
    return;
}

function sort(arr) {
    let num = arr.length;
    let temp;
    let index;

 {
        index = Math.floor(Math.random() * num);          
        num--;
        temp = arr[num];
        arr[num] = arr[index];
        arr[index] = temp;
    }           
    
    return arr;
}

function sortedCards_to_html(arr){
    gameBox.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
       gameBox.innerHTML += arr[i];       
    }
}


function startTimer(duration, timeBox){
    let timer = duration, minutes, seconds;
    console.log(timer)
    interval = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt (timer % 60, 10);

        timeBox.textContent = minutes + ":" + seconds;
        
        if (--timer < 0) {
            timer = duration;
            stopTimer();
            gameOver();
            
            
        }
        
    }, 1000);

    document.getElementById('gameBox').removeAttribute('onclick');
    return timer;
}

 function stopTimer(){
    clearInterval(interval);
    finalTime= parseInt(timer);
}


function setScore(timeLeft){
    
    scoreRestar = 60 - parseInt(timeLeft);
    
    score = score - scoreRestar;

    document.getElementById("puntuacion").innerText = score
}

function gameOver(){
    let endGame = document.getElementById("gameOver2")
        endGame.style.display = "flex";
}

function gameOverStartAgain(){
    let endGame = document.getElementById("gameOver2")
        endGame.style.display = "none";
}

function roundTwo(){
    gameBox.innerHTML+= `<div class='card' id='card13'><div id='cardBack13' class='par7 cardBack'></div></div>
                        <div class='card' id='card14'><div id='cardBack14' class='par7 cardBack'></div></div>`
    
}

function roundThree(){
    console.log("pase por aqui")
    gameBox.innerHTML+= `<div class="card" id="card15"><div id="cardBack15" class="par8 cardBack"></div></div>
                        <div class="card" id="card16"><div id="cardBack16" class="par8 cardBack"></div></div>`
}