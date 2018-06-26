function randomIntFromInterval(min,max){

    return Math.floor(Math.random() * (max-min+1) + min)
}

const carMakes = ['Honda','BMW','Skoda','Volvo','Fiat'];

const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

let cars = [];

function cargenerator(numberOfcars){

let numberOfcars = 10;

for( i = 0; i < 10; i++){

    let car = {};

    const carmakerindex = randomIntFromInterval(0,carMakes.length-1);

    const carcolorindex = randomIntFromInterval(0,carColors.length-1);

   car.make = carMakes[armakerindex];

car.color = carColors[carcolorindex];

car.speed = randomIntFromInterval(0,100);

cars.push(car);
}

return cars;

console.log(cars);


}