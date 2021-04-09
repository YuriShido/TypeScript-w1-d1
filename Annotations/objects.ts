const profile = {
  nickname: 'Ami',
  age: 20,
  coords: {
    lat:0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
}

interface Profile{age: number}
const {age, nickname}: {age: number; nickname: string;} = profile
const {coords: {lat, lng}} : { coords:{lat:number; lng:number;}}= profile

console.log(`My age ${nickname} and I'm ${age} years old`);
