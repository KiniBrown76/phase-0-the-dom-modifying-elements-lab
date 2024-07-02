// Remove the <main> element with id 'main'
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the new <h1> element to include your name
newHeader.innerHTML = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body
document.body.appendChild(newHeader);