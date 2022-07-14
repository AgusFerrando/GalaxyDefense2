

function submitSignUp(){
    
    let form = document.forms["signUp"];
    let fd = new FormData(form);
    let data = {};
    for (let [key, prop] of fd) {
      data[key] = prop;
    }
    let VALUE = JSON.stringify(data, null, 2);
    console.log(VALUE);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default',
        body: VALUE
    })
    .then(data => data.json())
    .then(data =>  { console.log(data) }) 
    .catch((err) => {
        console.error(err);
    })
}