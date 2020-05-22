const Account = {
	name: "Josh Nick",
	expenses: [],
	income: [],
	addExpense: function(description, amount){
		this.expenses.push({
			amount: amount,
			description: description	
		})	
	},
	addIncome: function(description, amount){
		this.income.push({
			amount:amount,
			description: description	
		})	
	},
	getSummary: function(){
		let total_amount=0;
		this.expenses.forEach((item)=>{
			total_amount += item.amount;		
		});

		let total_income = 0;
		this.income.forEach((item)=>{
			total_income += item.amount;		
		});
		let balance = total_income - total_amount;
		console.log(`${this.name} has a Balance of: `);
		console.log(`Expenses: ${total_amount}$`);	
		console.log(`Income: ${total_income}$`);
		console.log(`Total: ${balance}$`);
	}
	
}


Account.addExpense("Rent", 2500);
Account.addExpense("Coffe", 500);
Account.addExpense("Groceries", 2000);
Account.addIncome("Salary", 10000);

Account.getSummary();

