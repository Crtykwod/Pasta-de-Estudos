function secondLargest(arr) {
  // Coloca a array em ordem crescente
  arr.sort((a, b) => a - b);
  console.log(arr);
  let max = arr[arr.length - 1];
  console.log(max);
  for (let i = arr.length - 2; i >= 0; i--) {
    console.log(arr[i]);
    if (arr[i] < max) {
      return "Second largest number is " + arr[i];
    }
  }
  return null;
}

console.log(secondLargest([5, 4, 3, 2, 1, 0]));
console.log(secondLargest([1, 1, 1, 0, 0, 0]));