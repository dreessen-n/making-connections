// function to change user's name

function changeName() {
    var x = document.querySelector('#user-name')
    x.innerText = 'Melisa Hidalgo';
}

// function to remove request

function acceptRequest(id) {
    // remove reqeust when accepted
    var x = document.getElementById(id);
    x.remove();

    // decreae connection request number by 1
    var a = document.querySelector('.connection-request-card_numContainer');
    var b = a.innerText;
    b--;
    a.innerHTML = b;

    // increace your connections number by 1
    var y = document.getElementById('num_your-connections')
    var z = y.innerText;
    z++;
    y.innerText = z;
}

function removeRequest(id) {
    // remove request after rejecting
    var x = document.getElementById(id);
    x.remove();

    // decreae connection request number by 1
    var a = document.querySelector('.connection-request-card_numContainer');
    var b = a.innerText;
    b--;
    a.innerHTML = b;

    // decrease your connections number by 1
    var y = document.getElementById('num_your-connections')
    var z = y.innerText;
    z--;
    y.innerText = z;
}