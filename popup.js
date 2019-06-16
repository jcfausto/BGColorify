let changeColor = document.getElementById('changeColor');

// https://stackoverflow.com/questions/1484506/random-color-generator
let color = Math.floor(Math.random() * 16777215).toString(16);

changeColor.style.backgroundColor = `#${color}`;
changeColor.setAttribute('value', `#${color}`);

// Step 5 - Applying the color to the page
changeColor.addEventListener('click', (element) => {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: `document.body.style.backgroundColor = "${color}";`}
        );
    });
});