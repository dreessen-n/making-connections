// function to change user's name

function changeName() {
    var x = document.querySelector('#user-name')
    console.log(x);
    x.innerText = 'Melisa Hidalgo';
}

// function to remove request

function acceptRequest(id) {
    console.log(id);
    var x = document.getElementById(id);
    console.log(x);
    x.remove();
}

function removeRequest(id) {
    var x = document.getElementById(id);
    console.log(x);
    x.remove();
}