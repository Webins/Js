"use strict"

 const getPuzzle = async (words) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${words}`)
	if(response.status === 200){
		const data = await response.json()
		return data.puzzle
	}
	else 
		throw new Error("Unable to fetch data")
	
}

const getCurrentCountry = async () =>{
	const location = await getLocation()
	const country = await getCountry(location.country)
	return country
}

const getLocation = async () => {
	const response =  await fetch("https://ipinfo.io/json?token=32715969bc8100")
	if(response.status === 200){
		return response.json()
	}
	else 
		throw new Error("Unable to fetch data")
}

const getCountry = async (countryCode) =>{
	const response = await fetch("https://restcountries.eu/rest/v2/all")
	if(response.status === 200){
		const data = await response.json()
		return (data.find((c) => c.alpha2Code === countryCode)).name
	}
	else 
		throw  new Error("Unable to fetch data")

	
}


/*
old
const getSentece = (words) => {
	return fetch(`http://puzzle.mead.io/puzzle?wordCount=${words}`).then((response)=>{
		if(response.status === 200){
			return response.json()
		}else{
			throw new Error("Unable to fetch data")
		}
	}).then((data) =>{
		return data.puzzle
	})
}


const getLocation = () => {
	return fetch("https://ipinfo.io/json?token=32715969bc8100").then((response) =>{
		if(response.status === 200)
			return response.json()
		else 
			throw new Error("Unable to fetch data")
	})
}
const getCountry = (countryCode) =>{
	return fetch("https://restcountries.eu/rest/v2/all").then((response) =>{
		if(response.status === 200)
			return response.json()
		else 
			throw new Error("Unable to fetch data")
		
	}).then((countryList) => {
		return (countryList.find((c) => c.alpha2Code === countryCode)).name
	})
}
*/

/* promises and XMLHTTPREQUEST
const getSentece = (words) => new Promise((resolve, reject) =>{
	const request = new XMLHttpRequest()
	request.addEventListener("readystatechange", (e)=>{
	  if(e.target.readyState === 4 && e.target.status === 200){
	    const data = JSON.parse(e.target.responseText).puzzle
	  	resolve(data)
	  }else if(e.target.readyState === 4)
	   reject("An error has taken place")
	})
	request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${words}`)
	request.send()
})

const getCountry = (countryCode) => new Promise((resolve, reject)=>{
	const requestCountries = new XMLHttpRequest()
	requestCountries.addEventListener("readystatechange", (e) =>{
	  if(e.target.readyState === 4 && e.target.status === 200){
	      const countries = JSON.parse(e.target.responseText)
	      const country = countries.find((c) => c.alpha2Code === countryCode)
	      resolve(country.name)
	  }else if(e.target.readyState === 4) 
	  	reject("An error has taken place")
	})
	requestCountries.open("GET", "https://restcountries.eu/rest/v2/all")
	requestCountries.send()
})
*/


/* callback
const getSentence = (words,callback) => {
	const request = new XMLHttpRequest()
	request.addEventListener("readystatechange", (e)=>{
	  if(e.target.readyState === 4 && e.target.status === 200){
	    const data = JSON.parse(e.target.responseText).puzzle
	  	callback(undefined, data)
	  }else if(e.target.readyState === 4) callback("An error has taken place", undefined)
	})
	request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${words}`)
	request.send()
}*/

/*
const getWordSync = () => {
	const request = new XMLHttpRequest()
	request.open("GET", URL, false)
	request.send()
	  if(request.readyState === 4 && request.status === 200){
	    const data = JSON.parse(request.responseText).puzzle
	    return data
	  }else if(request.readyState === 4) throw new Error("Couldn't fetch the data")
	
}*/


/*
const getCountry = (countryCode, callback) => {	
	const requestCountries = new XMLHttpRequest()
	requestCountries.addEventListener("readystatechange", (e) =>{
	  if(e.target.readyState === 4 && e.target.status === 200){
	      const countries = JSON.parse(e.target.responseText)
	      const country = countries.find((c) => c.alpha2Code === countryCode)
	      callback(undefined, country.name)
	  }else if(e.target.readyState === 4) callback("An error has taken place", undefined) 
	})
	requestCountries.open("GET", "https://restcountries.eu/rest/v2/all")
	requestCountries.send()
}
*/
