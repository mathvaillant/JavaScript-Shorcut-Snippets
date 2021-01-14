class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// Prototype functions
	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}
}

// Subclass of Person
class Customer extends Person {
	constructor(firstName, lastName, phone, membership) {
		super(firstName, lastName);

		this.phone = phone;
		this.membership = membership;
	}


	static getMembershipCost() {
		return 500;
	}
}

const matt = new Customer('Matt', 'Vaillant', '999-999-999', 'Standard');

// Because we extended the Person class we can use any function of it inside of the Customer class

// We can't do the same the other way around
console.log(matt.greeting());

console.log(Customer.getMembershipCost());