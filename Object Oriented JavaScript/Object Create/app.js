const personPrototypes = {
	greeting: function() {
		return `Hello there ${this.firstName} ${this.lastName}`
	},
	getsMarried: function(newLastName) {
		this.lastName = newLastName;
	}
}

const matt = Object.create(personPrototypes);

matt.firstName = 'Matt';
matt.lastName  = 'Vaillant';
matt.age 	   = 23;

matt.getsMarried('Rocha');

console.log(matt.greeting());

// Alternative way to create objects
const emily = Object.create(personPrototypes, {
	firstName: {value: 'Emily'},
	lastName: {value: 'Rocha'},
	age: {value: 22}
});

console.log(emily);
console.log(emily.greeting())