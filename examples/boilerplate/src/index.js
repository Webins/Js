import defaultCanHasAnyName, {sayHello} from './utilities'
import scream from './scream.js'
import showServer, {server} from "./aux"
console.log('index.js')
console.log(scream(sayHello()))
console.log(defaultCanHasAnyName(8))
console.log(showServer(server)) 


const avg = (lenght,...numbs) =>{
	let sum =0;
	numbs.forEach((n) =>{
		sum += n
	})

	return sum /lenght
}
console.log(avg(8,14,14,36,88,74,14,32,66))


const printTeam = (team, coach, ...players) =>{
	let result = `Team: ${team}, Coach:${coach}, Players: `

	players.forEach((p,i) =>{
		if(i+1 === players.length) result += p
		else result += `${p},`
	})

	return result


}

console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherbert'))


const team = {
	name: 'Barcelona',
	coach: 'Quique Setien',
	players: ['Lionel messi', 'Luis Suarez', 'Antoine Griezzman']
}

console.log(printTeam(team.name, team.coach, ...team.players))

let cities = ['Barcelona', 'New York', 'London']
cities = [...cities, 'Santiago']
console.log(cities)


//destructuring

const todo = {
	id: 'ABBDDCX45425',
	text: 'pay the bills',
	completed: false,
	uk: true
}

const {text:todoText, completed, id, unexistProperty=id+todoText} = todo
console.log(id)
console.log(todoText)
console.log(completed)
console.log(unexistProperty)