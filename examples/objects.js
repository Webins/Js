let myBook ={
	title: "1984",
	author: "George Orwell",
	pageCount: 326
};

function getSummary(book){
	return {
		summary: `${book.title} by ${book.author}`,
		pageCountSummary: `${book.title} is ${book.pageCount} pages long`	
	}
}


function changeBook(){
	return {
		title: "A Peoples History",
		author: "Howard Zinn",
		pageCount: 723	
	}
}


function displayBook(book){
	console.log(`Book title: ${book.title}\nBook author: ${book.author}\nBook pages: ${book.pageCount}`);
}

displayBook(myBook);

let summary = getSummary(myBook);

console.log(summary.summary, summary.pageCountSummary);

myBook = changeBook();

displayBook(myBook);
