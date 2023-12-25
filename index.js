let menu = document.querySelector('.menu');
let links = document.querySelector('.links');

menu.onclick = function () {
  links.classList.toggle('change');
};

function home(){
    window.location.href = '../index.html'
}

function hub1(){
    window.location.href = 'https://qinx99.github.io/hub'
}

function hub2(){
    window.location.href = 'https://qinx99.github.io/hub3'
}

function featuredgames(){
    window.location.href = 'featuredgames.html'
}

function events(){
    window.location.href = 'events.html'
}

function updates(){
    window.location.href = 'updates.html'
}