
var isOn = false;
const h1 = document.getElementById('h1');
const textArea = document.getElementById('txt');

function show() {
    h1.style.fontWeight = 'normal'
    h1.textContent = textArea.value
}

function bold() {
    if (isOn) {
        isOn = false
        h1.style.fontWeight = 'normal'
    }
    else {
        isOn = true
        h1.style.fontWeight = 'bold';
    }
    h1.textContent = textArea.value;
}

function italic() {
    if (isOn) {
        isOn = false
        h1.style.fontStyle = 'normal'
    }
    else {
        isOn = true
        h1.style.fontStyle = 'italic';
    }
    
    
    h1.textContent = textArea.value;
}

function underline() {
    if (isOn) {
        isOn= false
        h1.style.textDecoration = 'none'
    }
    else { 
        isOn = true
        h1.style.textDecoration = 'underline';
    }
    h1.textContent = textArea.value;
}

function capitalize() {
    h1.style.textTransform = 'capitalize';
}

function uppercase() {
    h1.style.textTransform = 'uppercase'
}

function lowercase() {
    h1.style.textTransform = 'lowercase';
}

function serif() {
    h1.style.fontFamily = 'serif';
}

function sansrf() {
    h1.style.fontFamily = 'sans-serif';
}

function monospace() {
    h1.style.fontFamily = 'monospace';
}

function changecolor() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink' , 'yellow' , 'aqua'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    h1.style.color = randomColor;
}

function inc() {
    h1.style.fontSize = fontsize++
}