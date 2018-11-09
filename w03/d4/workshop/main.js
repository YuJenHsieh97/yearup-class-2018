//This comes from data.js
let gifs = window.data.data;

console.log(gifs);

// let theGifs = gifs[0].images.original.url;

function playGifs(){
  let element = document.getElementById('container');
  let random = Math.floor(Math.random()*gifs.length);
  element.src = gifs[random].images.original.url;
}


let button = document.querySelector("button");
button.addEventListener('click', playGifs);

playGifs();
