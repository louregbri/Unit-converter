const unit = document.getElementById('unit');
unit.textContent = prompt('Introduce la cantidad que deseas convertir');

const meters = document.getElementById('meters');
const metersFeets = document.getElementById('meters-feets');
const feets = document.getElementById('feets');
const feetsMeters = document.getElementById('feet-meters');
const liters = document.getElementById('liters');
const litersGallons = document.getElementById('liters-gallons');
const gallons = document.getElementById('gallons');
const gallonsLiters = document.getElementById('gallons-liters');
const kilos = document.getElementById('kilos');
const kilosPounds = document.getElementById('kilos-pounds');
const pounds = document.getElementById('pounds');
const poundsKilos = document.getElementById('pounds-kilos');

meters.textContent = unit.textContent;
metersFeets.textContent = (meters.textContent * 3.28084).toFixed(3)
feets.textContent = unit.textContent;
feetsMeters.textContent = (feets.textContent * 0.3048).toFixed(3)

liters.textContent = unit.textContent;
litersGallons.textContent = (liters.textContent * 0.264172).toFixed(3)
gallons.textContent = unit.textContent;
gallonsLiters.textContent = (gallons.textContent * 4.54609).toFixed(3)

kilos.textContent = unit.textContent;
kilosPounds.textContent = (kilos.textContent * 2.20462).toFixed(3)
pounds.textContent = unit.textContent;
poundsKilos.textContent = (pounds.textContent * 0.453592).toFixed(3)

