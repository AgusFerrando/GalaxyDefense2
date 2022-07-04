let cardGroup = document.getElementsByClassName('card');
let cardBack = document.getElementsByClassName('cardBack');
let gameBox = document.getElementById('gameBox');
let cardQuantity = 4;
let flippedCard = 0;
let memory1;
let memory2;
let class1;
let class2;
let end = 0;
let timeBox = document.getElementById('timer');
let interval;
let oneMinute = 30 * 1;
let finalTime;
let score = 120;
let timer;
let restartNumber = 0;
let clickAudio = new Audio('./assets/sound/clcik.wav');
let findNice = new Audio('./assets/sound/findNice.wav');
let badCard = new Audio('./assets/sound/badCrd.wav');
let winGame = new Audio('./assets/sound/winSound.wav');
let looserGame = new Audio('./assets/sound/looser.wav');

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
    clickAudio.play();

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
            findNice.play();
            console.log('son iguales');
        } else {
            badCard.play();
            setTimeout(resetDisplay, 500, memory1, memory2);
        }  
    }
    memory1= "";
    memory2= "";
    class1= "";
    class2= "";
    
    end = 0;
    for (let i = 0; i < cardQuantity; i++) {
        let cardsArray = document.getElementsByClassName('cardBack')
        if (cardsArray[i].style.display == 'block'){
            end++;
        } 
        
    }
    if (end == cardQuantity){
        let congrats =document.getElementById('congrats');
        congrats.style.display= 'block';
        winGame.play();
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
    let cardBackOnGame = document.getElementsByClassName('cardBack');
    for (let i=0; i<cardBackOnGame.length; i++){
        cardBackOnGame[i].style.display = "none";
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
      
    } else if ( restartNumber == 1) {

        roundThree();
        console.log('hola');
        restartNumber++;

    } else if ( restartNumber == 2) {

        roundFour();
        console.log('hola');
    }
    let cardGroupOnGame = document.getElementsByClassName('card');
    let cardGroupHTML = Array.from(cardGroupOnGame).map(el => el.outerHTML)
    let sortedCards = sort(cardGroupHTML);
    sortedCards_to_html(sortedCards);
    addEventsLiseners();
    console.log(sortedCards);
    startTimer(oneMinute, timeBox);
    cardQuantity +=4;
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

    console.log(cardGroup)
    let cardGroupHTML = Array.from(cardGroup).map(el => el.outerHTML)
    let sortedCards = sort(cardGroupHTML);
    sortedCards_to_html(sortedCards);
    let timeLeft = document.getElementById("timer").innerText.slice(2,4); 
    setScore(timeLeft)
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
            looserGame.play();
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
    
    scoreRestar = 30 - parseInt(timeLeft);
    
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
    gameBox.innerHTML+= `<div class="card" id="card5"><div id="cardBack5" class="par3 cardBack"></div></div>
                        <div class="card" id="card6"><div id="cardBack6" class="par3 cardBack"></div></div>
                        <div class="card" id="card7"><div id="cardBack7" class="par4 cardBack"></div></div>
                        <div class="card" id="card8"><div id="cardBack8" class="par4 cardBack"></div></div>`
}

function roundThree(){
    gameBox.innerHTML+=`<div class="card" id="card9"><div id="cardBack9" class="par5 cardBack"></div></div>
                        <div class="card" id="card10"><div id="cardBack10" class="par5 cardBack"></div></div>
                        <div class="card" id="card11"><div id="cardBack11" class="par6 cardBack"></div></div>
                        <div class="card" id="card12"><div id="cardBack12" class="par6 cardBack"></div></div>`
}

function roundFour(){
    console.log("pase por aqui")
    gameBox.innerHTML+= `<div class="card" id="card15"><div id="cardBack15" class="par8 cardBack"></div></div>
                        <div class="card" id="card16"><div id="cardBack16" class="par8 cardBack"></div></div>
                        <div class='card' id='card13'><div id='cardBack13' class='par7 cardBack'></div></div>
                        <div class='card' id='card14'><div id='cardBack14' class='par7 cardBack'></div></div>`
}