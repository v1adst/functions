function calcAverage(a, b, c) {
  average = (a + b + c) / 3;
  console.log(`Scorul Delfinilor: ${average} puncte.`);
  return average;
}

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Delfinii au cîștigat!\n| D - ${avgDolphins} puncte | K - ${avgKoalas} puncte |`);
  } 
  else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas au cîștigat!\n| K - ${avgKoalas}puncte | K - ${avgDolphins}puncte |`);
  } 
  else {
    console.warn('Nicio echipă nu a cîștigat.');
  }
}

console.log('Testul 1');
avgDolphins = calcAverage(44, 23, 71);
avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

console.log('Testul 2');

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
