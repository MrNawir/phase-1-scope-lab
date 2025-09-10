// 1. Declare customerName in global scope using var
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
	bestCustomer = 'not bob'; // Implicit global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer(newCustomer) {
	bestCustomer = newCustomer;
}

// 5. Declare leastFavoriteCustomer as a global constant
const leastFavoriteCustomer = 'someone';

// 6. Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'someone else'; // Will throw error
}
