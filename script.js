const salary = 4000; // It's a number 
const loging ="apartment"; // It's a string
const size = "large"; //It's a string

// Only change the syntax below ( not values or key names)

const expense = {
  food: 51.7501,
  transport: 10.2, 
}

const tax ={
  734: '3%',
  234:'20%',
  913:'12%',
  415:'38%',
  502:'42%',
}

const rent ={
  none:0,
  smallroom:200,
  largeroom:300,
  smallapartment:400,
  largeapartment:800,
  smallhouse:1200,
  largehouse:2400, //
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913])/100
const startingAfterTax = salary * 1 - taxAsDecimal
const type = lodging + size
const balance = expense (transport) - expenses (food) - expense(rent.type)

console.log(balance)