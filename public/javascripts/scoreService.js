let buttonRanking= document.getElementById('goToRanking');
if(buttonRanking) { 
    buttonRanking.addEventListener('click', e => {
        e.preventDefault()
        updateScore();
    })
}

function updateScore(){
    let score = document.getElementById("puntuacion").innerText; 
    let scoreNuber = parseInt(score);
    let data = {
        "score" : scoreNuber 
    };
    console.log(data)
    let VALUE = JSON.stringify(data, null, 2);
    console.log(VALUE);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/users/updatescore', {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: VALUE
    })
    .then(data => data.json())
    .then(data =>  { console.log(data) }) 
    .catch((err) => {
        console.log(err);
    })
}