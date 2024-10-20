function seriesResistance(arr) {
  console.log("Input array:", arr);
  const totalResistance = arr.reduce((a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
  });
  console.log("Total resistance:", totalResistance);
  return totalResistance;
}

console.log(seriesResistance([1, 2, 3, 4]));
