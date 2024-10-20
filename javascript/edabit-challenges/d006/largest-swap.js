function largestSwap(num) {
  let swap = num.toString().split("").reverse();
  return swap > num
}

console.log(largestSwap(123));