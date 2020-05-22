"use strict"


const createTipper = (baseTip) =>{
	if(typeof baseTip === 'number')
		if(baseTip % 1 == 0 ){
			return (amount) => {
				return amount * (baseTip / 100)
			}
		}else{
			return (amount) => {
				return amount * baseTip
			}
		}
}


const baseTip = createTipper(.5)
const anotherTip = createTipper(30) //30 percent
const tip1 = baseTip(1200)
const tip2 = baseTip(50)
const tip3 = anotherTip(700)
const tip4 = anotherTip(278.477)
const tip5 = anotherTip(550.56)
const tip6 = baseTip(700)

console.log(tip1, tip2, tip3, tip4, tip5, tip6)