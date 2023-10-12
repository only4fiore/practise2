fuelConsume = 7;
distance = 100;
fuelPrice = 55;
travelPrice = (fuelConsume / 100) * distance * fuelPrice;
console.log(`${travelPrice} - Цена поездки`);