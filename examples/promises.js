// callbacks
const getData = (num, callback) =>{
	if(typeof num === "number") {
		callback(undefined, num * 2)
	}else{
		callback("A number must be provided ")
	}
}

getData(2, (err, data) =>{
	if(err){
		console.log(err)
	}else{
		console.log(`callback data: ${data}`)
		getData(data, (err, data) =>{
			if(err){
				console.log(err)
			}else{
				console.log(`callback data: ${data}`)
			}
		})
	}
}) 


//Promises

const getDataPromise = (num) => new Promise((resolve, reject) =>{
	if(typeof num === "number")
		resolve(num * 2)
	else reject("A number must be provide") 
})

getDataPromise(10).then((data) =>{
	console.log(`promise data: ${data}`);
	return getDataPromise(data)
}).then((data) => {
	console.log(`promise data: ${data}`)
}).catch((err) =>{
	console.log(err)
}) 