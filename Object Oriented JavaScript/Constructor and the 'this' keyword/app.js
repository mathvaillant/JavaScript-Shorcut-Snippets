// Person constructor
function Person(name, dob) {
	this.name = name;
	// this.age = age;
	this.birthday = new Date(dob);
	this.calculateAge = function() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}

// const matt = new Person('Matt', 23);
// const hannah = new Person('Hannah', 25);

const matt = new Person('Matt', '10-10-1997');
console.log(matt.calculateAge());