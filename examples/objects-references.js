let myAccount = {
	name: "Andrew Mead",
	expenses: 0,
	income: 0
};


let otherAccount= myAccount;
otherAccount.income = 1000; //binding the income to my account too
// otherAccount = {}; // doesnt change myAccount

let addExpense = function (account, amount) {
	// account = {}; in this case it will create a copy, only change by reference the attrbs
	account.expenses = account.expenses + amount;
	console.log(`Added ${amount} to the account of ${account.name} giving a total of ${account.expenses}`);
}

addExpense(myAccount, 2500);

console.log(myAccount.expenses); // it change the attributes of the passed account by reference
console.log(myAccount.income);
