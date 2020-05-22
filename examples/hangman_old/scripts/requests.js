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
