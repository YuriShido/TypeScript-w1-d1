const carMakers = ['food', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

// const carsByMake: string[][] //must have initialization
const carsByMake: string[][] = []

//help with inference when extracting value
const cars = carMakers[0]
const myCar = carMakers.pop()

//Prevent incompatible value
carMakers.push(100)

//Help with map
carMakers.map ((car: string):string => {
  return car.toUpperCase()

}) 

console.log(carMakers);

const importantDates: (Date | string)[] = []
importantDates.push('2021-03-08')
importantDates.push(new Date())
//importantDates.push(true)