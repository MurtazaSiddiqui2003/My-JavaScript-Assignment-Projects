var body = document.getElementById("body");

function red() {
    body.style.backgroundColor = "red";
}

function green() {
    body.style.backgroundColor = "green";
}

function blue() {
    body.style.backgroundColor = "blue";
}

function random() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'aqua'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}