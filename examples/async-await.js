/*
an async function will return a promise
const processData = async () =>{
	return 12
}

processData().then((data) =>{
	console.log('Data:', data)
}).catch((error) =>{
	console.log("Error:", error)
})*/


const getDataPromise = (num) => new Promise((resolve, reject) =>{
	setTimeout(()=> {
	if(typeof num === "number")
		resolve(num * 2)
	else reject("A number must be provide") 
	}, 2000)
})

/*Work the same as promises*/
 const processData = async (times) =>{
	let data = await getDataPromise(2) 
	data = await getDataPromise(10)
	return data
}


processData().then((data) =>{
	console.log("Data", data)
}).catch((err)=>{
	console.log("Error", err)
})
