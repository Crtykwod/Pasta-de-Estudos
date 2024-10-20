function flipEndChars(str) {
  if (typeof str !== "string" || str.length < 2) {
    return "Incompatible.";
  }

  let first = str.slice(0, 1);
  let last = str.slice(-1);
  /*
    console.log(first);
    console.log(last);
    console.log(str.slice(1, -1));
  */
  
  if (first === last) {
    return "Two's a pair.";
  }

  return last + str.slice(1, -1) + first;
}

console.log(flipEndChars("hello world!"));
console.log(flipEndChars("AdA"));
console.log(flipEndChars("aA"));
console.log(flipEndChars("adA"));
console.log(flipEndChars("a"));
console.log(flipEndChars([ 1, 2, 3 ]));
console.log(flipEndChars("[]"));