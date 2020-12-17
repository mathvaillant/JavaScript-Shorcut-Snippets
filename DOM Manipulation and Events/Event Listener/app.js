// document.querySelector('.clear-tasks').addEventListener('click', (e) => {
// 	// e.preventDefault();
// 	// console.log('clicked');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
	let val;

	val = e;

	// Event target element
	val = e.target;
	val = e.target.id;
	val = e.target.className;

	e.target.innerText = 'CHANGED';

	// Event Type
	val = e.type;

	// Timestamp
	val = e.timeStamp;

	// Coordinates of the event relative to the window
	val = e.clientY;
	valr = e.clientX;

	// Coordinates of the event relative to the element
	val = e.offsetY;
	val = e.offsetX;

	e.preventDefault();
	console.log(val);
}

// <=============== MOUSE EVENTS ===============>
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// DoubleClick
clearBtn.addEventListener('dbclick', runEvent);
// MouseDown
clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
clearBtn.addEventListener('mouseup', runEvent);
// MouseEnter - SIMILAR TO WHAT CSS HOVER DOES
card.addEventListener('mouseenter', runEvent);
// MouseLeave
card.addEventListener('mouseleave', runEvent);
// MouseMove
card.addEventListener('mousemove', runEvent);


// Event Handler
function runEvent(e) {
	console.log(`EVENT TYPE: ${e.type}`);

	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

}

// <=============== KEYBOARD AND INPUT EVENTS ===============>

