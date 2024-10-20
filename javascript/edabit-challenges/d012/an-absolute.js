function absolute(str) {
  if (str[0] === "A") {
    return str = str.replace("A ", "An absolute ");
  }

  return str = str.replace(" a ", " an absolute ");
}

console.log(absolute("I am a champion!!!"))
console.log(absolute("Such an amazing bowler."))
console.log(absolute("A hero of the leaf"))
console.log(absolute("That place is such a beauty"))
console.log(absolute("A man with no haters."))