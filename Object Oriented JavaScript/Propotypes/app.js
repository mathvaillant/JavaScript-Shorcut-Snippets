//Person constructor
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
}

// Calculate age
Person.prototype.calculateAge = function() {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}

// Gets Maried
Person.prototype.getsMaried = function(newLastName) {
	this.lastName = newLastName;
}

const matt = new Person('Matt', 'Vaillant', '10-10-1997');
const emily = new Person('Emily', 'Rocha Costa', 'March 14 1998');

matt.getsMaried('Rocha Costa');

console.log(matt.getFullName())

console.log(matt.hasOwnProperty('firstName')); 