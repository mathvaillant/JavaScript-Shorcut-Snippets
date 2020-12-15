const list = document.querySelector('.list');

// Create element
const li = document.createElement('li');

// Add Class
li.className = 	'collection-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('I am a li'));

// Append li as child to ul
list.appendChild(li);

console.log(li);