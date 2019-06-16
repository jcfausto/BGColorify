let changeColor = document.getElementById('changeColor');

// https://stackoverflow.com/questions/1484506/random-color-generator
let color = Math.floor(Math.random() * 16777215).toString(16);

changeColor.style.backgroundColor = `#${color}`;
changeColor.setAttribute('value', `${color}`);
