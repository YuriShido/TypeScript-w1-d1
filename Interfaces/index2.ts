interface Reportable {
  
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
      return `Name ${this.name}`
  }
}

const drink = {
  color: 'brown',
  carbonate: true,
  suger: 40,
  summary():string {
    return `My drink has ${this.suger} grams of suger`
  }
}

const printSummary = (item: Reportable): void => {
  
  console.log(item.summary());
  
  
}

printSummary(oldCivic)
printSummary(drink)