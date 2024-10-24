
fetch('http://localhost:3000/')
    .then(async res => await res.json())
    .then(val => console.log(val));
