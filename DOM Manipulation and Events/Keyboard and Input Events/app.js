const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// taskInput.value = '';

// form.addEventListener('submit', runEvent);

taskInput.addEventListener('keydown', runEvent);
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);

// When user clicks inside the input
taskInput..addEventListener('focus', runEvent);

// When user clicks outside the input
taskInput..addEventListener('blur', runEvent);

taskInput..addEventListener('cut', runEvent);
taskInput..addEventListener('paste', runEvent);

//  Fires off with any action with the input
taskInput..addEventListener('input', runEvent);

function runEvent(e) {
	// e.preventDefault();

	console.log(`EVENT TYPE: ${e.target.value}`);
}